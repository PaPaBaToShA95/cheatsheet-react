const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.sendChatMessageNotification = functions.firestore
    .document('chats/{chatId}/messages/{messageId}')
    .onCreate(async (snapshot, context) => {
        const message = snapshot.data();
        const chatId = context.params.chatId;
        const senderId = message.senderId;
        const messageText = message.text;

        if (!senderId) {
            return null;
        }

        try {
            const chatRef = admin.firestore().collection('chats').doc(chatId);
            const chatDoc = await chatRef.get();

            if (!chatDoc.exists) {
                console.log(`Chat ${chatId} not found.`);
                return null;
            }

            const chatData = chatDoc.data();
            const participants = chatData.participants;

            const recipientId = participants.find(uid => uid !== senderId);

            if (!recipientId) {
                console.log(`Recipient in chat ${chatId} not found.`);
                return null;
            }

            const senderDoc = await admin.firestore().collection('users').doc(senderId).get();
            const senderName = senderDoc.exists ? senderDoc.data().name || 'Unknown User' : 'Unknown User';

            const tokensSnapshot = await admin.firestore().collection('fcmTokens').doc(recipientId).get();

            if (!tokensSnapshot.exists || !tokensSnapshot.data().tokens || tokensSnapshot.data().tokens.length === 0) {
                console.log(`FCM tokens for user ${recipientId} not found.`);
                return null;
            }

            const recipientTokens = tokensSnapshot.data().tokens;

            const payload = {
                notification: {
                    title: `Нове повідомлення від ${senderName}`,
                    body: messageText,
                },
                data: {
                    chatId: recipientId,
                    senderId: senderId,
                },
            };

            const response = await admin.messaging().sendToDevice(recipientTokens, payload);
            console.log('Notification successfully sent:', response);

            if (response.results) {
                const tokensToRemove = [];
                response.results.forEach((result, index) => {
                    const error = result.error;
                    if (error) {
                        console.error('Failure sending notification to token:', recipientTokens[index], error);
                        if (error.code === 'messaging/invalid-registration-token' ||
                            error.code === 'messaging/registration-token-not-registered') {
                            tokensToRemove.push(recipientTokens[index]);
                        }
                    }
                });

                if (tokensToRemove.length > 0) {
                    console.log(`Removing invalid tokens for user ${recipientId}:`, tokensToRemove);
                    const tokenDocRef = admin.firestore().collection('fcmTokens').doc(recipientId);
                    await tokenDocRef.update({
                        tokens: admin.firestore.FieldValue.arrayRemove(...tokensToRemove)
                    });
                }
            }

            return null;
        } catch (error) {
            console.error('Error in Cloud Function sendChatMessageNotification:', error);
            return null;
        }
    });