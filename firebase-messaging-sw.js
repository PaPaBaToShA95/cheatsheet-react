
importScripts('https://www.gstatic.com/firebasejs/10.5.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.5.0/firebase-messaging-compat.js');


const firebaseConfig = {
    apiKey: "AIzaSyBZeGiDmJwWYDMtIW7qMHSzQKtrZjHfH5s",
    authDomain: "front-end-cheatsheet.firebaseapp.com",
    projectId: "front-end-cheatsheet",
    storageBucket: "front-end-cheatsheet.firebasestorage.app",
    messagingSenderId: "206979670162",
    appId: "1:206979670162:web:33f57506a095c8627f064b",
    measurementId: "G-PMHHHTDB39",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();


messaging.onBackgroundMessage(function (payload) {
    console.log('[firebase-messaging-sw.js] Отримано фонове повідомлення ', payload);

    if (!payload.notification) {
        console.log('[firebase-messaging-sw.js] Фонове повідомлення без даних сповіщення.');
        return null;
    }


    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/cheatsheet-react/firebase-logo.png',
        data: payload.data
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', function (event) {
    console.log('[firebase-messaging-sw.js] Клік по сповіщенню');
    event.notification.close(); 
    const clickData = event.notification.data;
    console.log('Data payload при кліку:', clickData);

    const chatId = clickData?.chatId;

    const urlToOpen = `/cheatsheet-react/#/chat/${chatId}`;

    console.log('Спроба відкрити URL при кліку:', urlToOpen);


    event.waitUntil(clients.matchAll({
        type: 'window',
        includeUncontrolled: true 
    }).then(clientList => {
        for (const client of clientList) {
            if (client.url.includes(self.location.origin)) {
                if ('focus' in client) {
                    console.log('Знайдено існуюче вікно, фокусую та перенаправляю...');
                    return client.focus().then(() => client.navigate(urlToOpen));
                } else {
                    console.log('Знайдено існуюче вікно, але не фокусується. Спроба перенаправити...');
                    return client.navigate(urlToOpen);
                }
            }
        }
        console.log('Існуюче вікно не знайдено, відкриваю нову вкладку...');
        return clients.openWindow(urlToOpen);
    }).catch(error => {
        console.error('Помилка при обробці кліку по сповіщенню:', error);
    }));
});