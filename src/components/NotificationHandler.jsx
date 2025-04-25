
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext"; // Перевірте шлях
import { useLocation } from "react-router-dom";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase"; // Перевірте шлях


const notificationSound = new Audio("/cheatsheet-react/sounds/notification.mp3"); 

const NotificationHandler = () => {
  const { currentUser } = useAuth(); // Отримуємо поточного користувача
  const location = useLocation(); // Отримуємо об'єкт локації для перевірки поточного маршруту

  useEffect(() => {
    // Не слухаємо оновлення чатів, якщо користувач не авторизований
    if (!currentUser) {
      console.log(
        "NotificationHandler: Користувач не авторизований, слухач не активний."
      );
      return;
    }

    console.log(
      `NotificationHandler: Слухач чатів активний для користувача ${currentUser.uid}`
    );

    // Створюємо запит до колекції 'chats'
    // Фільтруємо чати, де поточний користувач є учасником
    // Сортуємо за часом останнього оновлення (це допоможе відстежувати зміни)
    const q = query(
      collection(db, "chats"),
      where("participants", "array-contains", currentUser.uid),
      orderBy("updatedAt", "desc") // Важливо мати це поле і оновлювати його при відправці!
    );

    // Підписуємося на оновлення колекції чатів у реальному часі
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        // Проходимося по всіх ЗМІНАХ у знімку (додано, змінено, видалено)
        snapshot.docChanges().forEach((change) => {

          if (change.type === "modified") {
            const chat = change.doc.data(); // Отримуємо дані зміненого документа чату
            const chatId = change.doc.id; // Отримуємо ID чату
            if (
              chat.lastMessageSenderId &&
              chat.lastMessageSenderId !== currentUser.uid
            ) {
              const otherParticipantId = chat.participants.find(
                (id) => id !== currentUser.uid
              );
              const expectedChatPath = `/chat/${otherParticipantId}`;
              const isOnThisChatPage =
                location.pathname === expectedChatPath ||
                location.hash === `#${expectedChatPath}`;
              if (!isOnThisChatPage) {
                console.log(
                  `NotificationHandler: Нове повідомлення в чаті ${chatId}! Відтворюю звук.`
                );
                notificationSound
                  .play()
                  .catch((error) =>
                    console.error("Помилка відтворення звуку:", error)
                  );
              } else {
                console.log(
                  `NotificationHandler: Нове повідомлення в чаті ${chatId}, але користувач перебуває на сторінці цього чату. Звук не відтворюється.`
                );
              }
            }
          }
        });
      },
      (error) => {
        console.error(
          "NotificationHandler: Помилка прослуховування чатів:",
          error
        );

      }
    );
    return () => {
      console.log("NotificationHandler: Відписка від слухача чатів.");
      unsubscribe();
    };
  }, [currentUser, location.pathname, location.hash]); 
  return null;
};

export default NotificationHandler;
