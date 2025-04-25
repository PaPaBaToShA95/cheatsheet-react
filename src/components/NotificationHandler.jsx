
import { useEffect, useState, useRef } from "react"; 
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

const notificationSound = new Audio(
  "/cheatsheet-react/sounds/notification.mp3"
);

const NotificationHandler = ({ setTotalUnreadCount }) => {
  const { currentUser } = useAuth();
  const location = useLocation();

  const [unreadCountsByChat, setUnreadCountsByChat] = useState({});

  const isInitialSoundLoad = useRef(true);


  useEffect(() => {
    if (!currentUser) {
      console.log(
        "NotificationHandler: Користувач не авторизований, слухач чатів для лічильника не активний."
      );
      setUnreadCountsByChat({});
      return;
    }

    console.log(
      `NotificationHandler: Слухач чатів для лічильника активний для користувача ${currentUser.uid}`
    );
    const q = query(
      collection(db, "chats"),
      where("participants", "array-contains", currentUser.uid)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        console.log(
          "NotificationHandler: Отримано оновлення знімка чатів для лічильника."
        );
        const newUnreadCounts = {};

        snapshot.docs.forEach((doc) => {
          const chat = doc.data();
          const count = chat.unreadCount?.[currentUser.uid] || 0;

          if (count > 0) {
            newUnreadCounts[doc.id] = count;
          }
        });
        setUnreadCountsByChat(newUnreadCounts);
        console.log(
          "NotificationHandler: Оновлені лічильники по чатах:",
          newUnreadCounts
        );
      },
      (error) => {
        console.error(
          "NotificationHandler: Помилка прослуховування чатів для лічильника:",
          error
        );
      }
    );

    return () => {
      console.log(
        "NotificationHandler: Відписка від слухача чатів для лічильника."
      );
      unsubscribe();
    };
  }, [currentUser]);

  useEffect(() => {
    const total = Object.values(unreadCountsByChat).reduce(
      (sum, count) => sum + count,
      0
    );
    console.log("NotificationHandler: Загальний лічильник оновлено:", total);
    setTotalUnreadCount(total);
  }, [unreadCountsByChat, setTotalUnreadCount]);


  useEffect(() => {
    if (!currentUser) {
      isInitialSoundLoad.current = true;
      return;
    }

    console.log(
      `NotificationHandler: Слухач чатів для звуку активний для користувача ${currentUser.uid}`
    );
    const qSound = query(
      collection(db, "chats"),
      where("participants", "array-contains", currentUser.uid),
      orderBy("updatedAt", "desc")
    );

    const unsubscribeSound = onSnapshot(
      qSound,
      (snapshot) => {

        if (isInitialSoundLoad.current) {
          isInitialSoundLoad.current = false; 
          console.log(
            "NotificationHandler (Sound): Початковий знімок оброблено. Звук не відтворюється."
          );

          return;
        }

        console.log(
          "NotificationHandler (Sound): Отримано подальше оновлення знімка."
        );

        snapshot.docChanges().forEach((change) => {

          if (change.type === "modified") {
            console.log(
              `  Обробка зміни типу 'modified' для звуку: ${change.doc.id}`
            );
            const chat = change.doc.data();


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
                  `NotificationHandler: Нове повідомлення в чаті ${change.doc.id}! Відтворюю звук.`
                );

                notificationSound
                  .play()
                  .catch((error) =>
                    console.error("Помилка відтворення звуку:", error)
                  );
              } else {
                console.log(
                  `NotificationHandler: Нове повідомлення в чаті ${change.doc.id}, але користувач перебуває на сторінці цього чату. Звук не відтворюється.`
                );
              }
            } else {
              console.log(
                "  Останнє повідомлення від поточного користувача або senderId відсутній."
              );
            }
          }

          else {
            console.log(
              `  Ігнорування зміни типу для звуку: ${change.type} для док ${change.doc.id}`
            );
          }
        });
      },
      (error) => {
        console.error(
          "NotificationHandler (Sound): Помилка прослуховування чатів:",
          error
        );
      }
    );


    return () => {
      console.log("NotificationHandler (Sound): Відписка.");
      unsubscribeSound();

      isInitialSoundLoad.current = true;
    };
  }, [currentUser, location.pathname, location.hash]); 
  return null;
};

export default NotificationHandler;
