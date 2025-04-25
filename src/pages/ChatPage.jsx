import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase"; // Ваш екземпляр Firestore
import {
  collection,
  doc,
  query,
  orderBy,
  onSnapshot, // Для прослуховування змін у реальному часі
  addDoc, // Для додавання нових повідомлень
  serverTimestamp, // Для отримання мітки часу сервера
  getDoc, // Для отримання документа розмови
  setDoc, // Для створення документа розмови, якщо він не існує
} from "firebase/firestore";
import getUserData from "../utils/firestoreActions";

const ChatPage = () => {
  const { userId } = useParams(); // Отримуємо ID співрозмовника з URL
  const { currentUser } = useAuth(); // Отримуємо поточного користувача
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]); // Стан для зберігання повідомлень
  const [newMessageText, setNewMessageText] = useState(""); // Стан для тексту нового повідомлення
  const [chatPartner, setChatPartner] = useState(null); // Стан для даних співрозмовника
  const [loading, setLoading] = useState(true); // Стан завантаження
  const [error, setError] = useState(null); // Стан помилки

  // Перевірка, чи користувач авторизований та чи не намагається чатитись із собою
  useEffect(() => {
    if (!currentUser) {
      // Якщо користувач не авторизований, перенаправляємо на сторінку входу
      navigate("/login");
    } else if (currentUser.uid === userId) {
      console.log("Не можна відкрити чат з собою.");
      navigate("/users"); // Перенаправляємо до списку користувачів
    }
  }, [currentUser, userId, navigate]);

  // Обчислюємо ID розмови
  // Сортуємо UID поточного користувача та співрозмовника, щоб ID розмови був унікальним для пари
  const chatId = currentUser
    ? [currentUser.uid, userId].sort().join("_")
    : null;

  // Ефект для завантаження даних співрозмовника
  useEffect(() => {
    const fetchPartnerData = async () => {
      if (!userId) return;
      try {
        const partnerData = await getUserData(userId); // Припускаємо, що getUserData існує
        setChatPartner(partnerData);
      } catch (err) {
        console.error("Помилка при завантаженні даних співрозмовника:", err);
      }
    };

    if (currentUser && userId && currentUser.uid !== userId) {
      fetchPartnerData();
    }
  }, [userId, currentUser]); // Залежності: userId та currentUser

  // Ефект для завантаження повідомлень та підписки на оновлення в реальному часі
  useEffect(() => {
    if (!chatId) return;

    setLoading(true);
    setError(null);

    const messagesCollectionRef = collection(db, "chats", chatId, "messages");
    // Створюємо запит: отримуємо повідомлення, сортуємо за часом створення
    const q = query(messagesCollectionRef, orderBy("createdAt"));

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const messagesList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate(), // Перетворюємо Timestamp у Date
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

    return () => unsubscribe(); // Функція очищення слухача
  }, [chatId]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    console.log("Спроба відправки повідомлення...");
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
      const chatDocRef = doc(db, "chats", chatId);
      const chatDocSnap = await getDoc(chatDocRef);

      // === ДАНІ ДЛЯ ОНОВЛЕННЯ ДОКУМЕНТА ЧАТУ (на верхньому рівні) ===
      const chatUpdateData = {
        updatedAt: serverTimestamp(), // Оновлюємо час останнього повідомлення (Timestamp)
        lastMessageText: newMessageText, // <-- Текст останнього повідомлення (String)
        lastMessageSenderId: currentUser.uid, // <-- ID відправника останнього повідомлення (String)
        // Видалено вкладений об'єкт 'lastMessage: { ... }'
      };
      // === КІНЕЦЬ ДАНИХ ДЛЯ ОНОВЛЕННЯ ДОКУМЕНТА ЧАТУ ===

      if (!chatDocSnap.exists()) {
        console.log("Чат не існує, створюємо новий документ чату.");
        await setDoc(chatDocRef, {
          participants: [currentUser.uid, userId],
          createdAt: serverTimestamp(), // Час створення самого чату (Timestamp)
          ...chatUpdateData, // Додаємо сюди дані останнього повідомлення
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
        await setDoc(
          chatDocRef,
          chatUpdateData, // Передаємо сюди оновлені дані (lastMessageText, lastMessageSenderId, updatedAt)
          { merge: true } // Використовуємо merge, щоб не перезаписати інші поля документа чату
        );
        console.log("Документ чату оновлено.");
      }

      // Додаємо нове повідомлення до підколекції 'messages'
      console.log(`Додаємо повідомлення до колекції: chats/${chatId}/messages`);
      await addDoc(collection(db, "chats", chatId, "messages"), {
        senderId: currentUser.uid,
        text: newMessageText,
        createdAt: serverTimestamp(),
      });
      console.log("Повідомлення додано.");

      setNewMessageText(""); // Очищаємо поле введення
    } catch (err) {
      console.error("Помилка при відправці повідомлення:", err);
      // TODO: Показати користувачеві повідомлення про помилку
    }
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Показуємо стан завантаження тільки якщо це початкове завантаження і повідомлень ще немає
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
    // Відкоригуйте висоту h-[calc(...)] відповідно до висоти хедера та футера у вашому App.jsx
    <div className="flex flex-col h-[calc(100vh-header-footer-padding)] bg-gray-950 text-white p-4">
      {/* Хедер чату (наприклад, ім'я співрозмовника) */}
      <div className="bg-gray-800 p-4 rounded-lg shadow mb-4 flex items-center gap-3">
        {/* Кнопка "Назад" */}
        <button
          onClick={() => navigate("/users")}
          className="text-gray-400 hover:text-white text-2xl mr-2"
          aria-label="Назад до користувачів"
        >
          &larr;
        </button>
        {/* Фото співрозмовника */}
        {chatPartner?.photoURL ? (
          <img
            src={chatPartner.photoURL}
            alt={chatPartner.name || "Співрозмовник"}
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          // Заглушка, якщо фото немає
          <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-xl font-bold text-gray-300 flex-shrink-0">
            {chatPartner?.name ? chatPartner.name.charAt(0).toUpperCase() : "?"}
          </div>
        )}
        {/* Ім'я співрозмовника */}
        <h1 className="text-xl font-semibold">
          {chatPartner?.name || "Завантаження..."}
        </h1>
      </div>

      {/* Область повідомлень */}
      {/* flex-1 дозволяє цій області зайняти всю доступну висоту */}
      {/* overflow-y-auto робить її прокручуваною */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-800 rounded-lg shadow mb-4">
        {messages.length === 0 && !loading ? (
          // Повідомлення, якщо чат порожній
          <div className="text-center text-gray-400">
            Повідомлень ще немає. Почніть розмову!
          </div>
        ) : (
          // Відображення повідомлень
          messages.map((message) => (
            <div
              key={message.id}
              // Вирівнювання повідомлень: праворуч для поточного користувача, ліворуч для співрозмовника
              className={`flex ${message.senderId === currentUser?.uid ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`p-3 rounded-lg max-w-[80%] ${
                  message.senderId === currentUser?.uid
                    ? // Стилі для повідомлень поточного користувача
                      "bg-blue-600 text-white rounded-br-none"
                    : // Стилі для повідомлень співрозмовника
                      "bg-gray-700 text-white rounded-bl-none"
                }`}
              >
                {/* Текст повідомлення */}
                <p>{message.text}</p>

                {/* Час відправки повідомлення */}
                <span className="block text-right text-xs mt-1 text-gray-300">
                  {/* Форматуємо час */}
                  {
                    message.createdAt
                      ? message.createdAt.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : "..." /* Заглушка, якщо час ще не синхронізовано */
                  }
                </span>
              </div>
            </div>
          ))
        )}

        {/* Елемент для автоматичної прокрутки до останнього повідомлення */}
        <div ref={messagesEndRef} />
      </div>

      {/* Форма для введення та відправки повідомлення */}
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
          disabled={!currentUser || !chatId || loading} // Вимикаємо поле, якщо користувач не авторизований, чат не готовий або йде завантаження
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200"
          disabled={
            !newMessageText.trim() || !currentUser || !chatId || loading
          } // Вимикаємо кнопку, якщо поле порожнє, користувач не авторизований, чат не готовий або йде завантаження
        >
          Надіслати
        </button>
      </form>
    </div>
  );
};

export default ChatPage;
