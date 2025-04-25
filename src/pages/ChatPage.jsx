import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import * as firestore from "firebase/firestore";
import getUserData from "../utils/firestoreActions";

const ChatPage = () => {
  const { userId } = useParams();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [newMessageText, setNewMessageText] = useState("");
  const [chatPartner, setChatPartner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    } else if (currentUser.uid === userId) {
      console.log("Не можна відкрити чат з собою.");
      navigate("/users");
    }
  }, [currentUser, userId, navigate]);

  const chatId = currentUser
    ? [currentUser.uid, userId].sort().join("_")
    : null;

  useEffect(() => {
    const fetchPartnerData = async () => {
      if (!userId) return;
      try {
        const partnerData = await getUserData(userId);
        setChatPartner(partnerData);
      } catch (err) {
        console.error("Помилка при завантаженні даних співрозмовника:", err);
      }
    };

    if (currentUser && userId && currentUser.uid !== userId) {
      fetchPartnerData();
    }
  }, [userId, currentUser]);

  useEffect(() => {
    if (!currentUser || !chatId) return;

    const chatDocRef = firestore.doc(db, "chats", chatId);

    firestore
      .setDoc(
        chatDocRef,
        {
          unreadCount: {
            [currentUser.uid]: 0,
          },
        },
        { merge: true }
      )
      .then(() => {
        console.log(
          `Лічильник непрочитаних повідомлень для чату ${chatId} скинуто для користувача ${currentUser.uid}.`
        );
      })
      .catch((err) => {
        console.error(
          "Помилка при скиданні лічильника непрочитаних повідомлень:",
          err
        );
      });
  }, [chatId, currentUser]);

  useEffect(() => {
    if (!chatId) return;

    setLoading(true);
    setError(null);

    const messagesCollectionRef = firestore.collection(
      db,
      "chats",
      chatId,
      "messages"
    );
    const q = firestore.query(
      messagesCollectionRef,
      firestore.orderBy("createdAt")
    );

    const unsubscribe = firestore.onSnapshot(
      q,
      (querySnapshot) => {
        const messagesList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          createdAt:
            doc.data().createdAt instanceof firestore.Timestamp
              ? doc.data().createdAt.toDate()
              : null,
        }));
        setMessages(messagesList);
        setLoading(false);
      },
      (err) => {
        console.error("Помилка прослуховування повідомлень:", err);
        setError("Не вдалося завантажити повідомлення.");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [chatId]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    console.log("Спроба відправки повідомлення...");
    console.log("Значення firestore.FieldValue:", firestore.FieldValue);
    console.log(
      "Значення firestore.FieldValue.increment:",
      firestore.FieldValue.increment
    );
    console.log(
      "Значення firestore.serverTimestamp:",
      firestore.serverTimestamp
    );
    console.log("Значення firestore.increment:", firestore.increment);

    console.log("currentUser:", currentUser);
    console.log("chatId:", chatId);
    console.log("newMessageText:", newMessageText);

    if (newMessageText.trim() === "" || !currentUser || !chatId) {
      console.log(
        "Відправка скасована: порожнє повідомлення або користувач/чат не готовий."
      );
      return;
    }

    try {
      const chatDocRef = firestore.doc(db, "chats", chatId);
      const chatDocSnap = await firestore.getDoc(chatDocRef);

      const recipientId = chatDocSnap.exists()
        ? chatDocSnap.data().participants.find((id) => id !== currentUser.uid)
        : userId;

      const chatUpdateData = {
        updatedAt: firestore.serverTimestamp(),
        lastMessageText: newMessageText,
        lastMessageSenderId: currentUser.uid,
        unreadCount: {
          [recipientId]: firestore.increment(1), 
          [currentUser.uid]: 0,
        },
      };

      if (!chatDocSnap.exists()) {
        console.log("Чат не існує, створюємо новий документ чату.");
        await firestore.setDoc(chatDocRef, {
          participants: [currentUser.uid, userId],
          createdAt: firestore.serverTimestamp(),
          ...chatUpdateData,
          participantsData: {
            [currentUser.uid]: {
              name: currentUser.displayName,
              photoURL: currentUser.photoURL,
            },
            [userId]: {
              name: chatPartner?.name,
              photoURL: chatPartner?.photoURL,
            },
          },
        });
        console.log("Документ чату створено.");
      } else {
        console.log("Чат існує, оновлюємо документ чату.");
        await firestore.setDoc(chatDocRef, chatUpdateData, { merge: true });
        console.log("Документ чату оновлено.");
      }

      console.log(`Додаємо повідомлення до колекції: chats/${chatId}/messages`);
      await firestore.addDoc(
        firestore.collection(db, "chats", chatId, "messages"),
        {
          senderId: currentUser.uid,
          text: newMessageText,
          createdAt: firestore.serverTimestamp(),
        }
      );
      console.log("Повідомлення додано.");

      setNewMessageText("");
    } catch (err) {
      console.error("Помилка при відправці повідомлення:", err);
    }
  };

  const messagesEndRef = useRef(null);

 

  const scrollToBottomCorrected = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottomCorrected(); 
  }, [messages]);

  if (loading && messages.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl text-white">
        Завантаження повідомлень...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl text-red-500">
        Помилка: {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[calc(100vh-header-footer-padding)] bg-gray-950 text-white p-4">
      <div className="bg-gray-800 p-4 rounded-lg shadow mb-4 flex items-center gap-3">
        <button
          onClick={() => navigate("/users")}
          className="text-gray-400 hover:text-white text-2xl mr-2"
          aria-label="Назад до користувачів"
        >
          &larr;
        </button>
        {chatPartner?.photoURL ? (
          <img
            src={chatPartner.photoURL}
            alt={chatPartner.name || "Співрозмовник"}
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-xl font-bold text-gray-300 flex-shrink-0">
            {chatPartner?.name ? chatPartner.name.charAt(0).toUpperCase() : "?"}
          </div>
        )}
        <h1 className="text-xl font-semibold">
          {chatPartner?.name || "Завантаження..."}
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-800 rounded-lg shadow mb-4">
        {messages.length === 0 && !loading ? (
          <div className="text-center text-gray-400">
            Повідомлень ще немає. Почніть розмову!
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.senderId === currentUser?.uid ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`p-3 rounded-lg max-w-[80%] ${
                  message.senderId === currentUser?.uid
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-700 text-white rounded-bl-none"
                }`}
              >
                <p>{message.text}</p>

                <span className="block text-right text-xs mt-1 text-gray-300">
                  {message.createdAt instanceof firestore.Timestamp
                    ? message.createdAt.toDate().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : ""}
                </span>
              </div>
            </div>
          ))
        )}

        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSendMessage}
        className="flex gap-2 p-4 bg-gray-800 flex-wrap justify-center rounded-lg shadow"
      >
        <input
          type="text"
          value={newMessageText}
          onChange={(e) => setNewMessageText(e.target.value)}
          placeholder="Введіть повідомлення..."
          className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          disabled={!currentUser || !chatId || loading}
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200"
          disabled={
            !newMessageText.trim() || !currentUser || !chatId || loading
          }
        >
          Надіслати
        </button>
      </form>
    </div>
  );
};

export default ChatPage;
