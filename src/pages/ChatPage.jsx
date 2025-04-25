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

  // Перевірка, чи користувач авторизований
  useEffect(() => {
    if (!currentUser) {
      // Якщо користувач не авторизований, перенаправляємо на сторінку входу
      navigate("/login");
    } else if (currentUser.uid === userId) {
      // Якщо користувач намагається відкрити чат з собою, можна перенаправити
      console.log("Не можна відкрити чат з собою.");
      // Або на сторінку профілю, або назад до списку користувачів
      navigate("/users"); // Приклад: перенаправити до списку користувачів
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
        // Припускаємо, що у вас є функція getUserData, яка отримує дані користувача за ID
        // Якщо ні, вам потрібно її створити або отримати дані вручну з колекції 'users'
        const partnerData = await getUserData(userId); // Потрібно реалізувати цю функцію, якщо її немає
        setChatPartner(partnerData);
      } catch (err) {
        console.error("Помилка при завантаженні даних співрозмовника:", err);
        // Обробка помилки
      }
    };

    if (currentUser && userId && currentUser.uid !== userId) {
      fetchPartnerData();
    }
  }, [userId, currentUser]); // Залежності: userId та currentUser

  // TODO: Ефект для завантаження повідомлень та підписки на оновлення в реальному часі
  useEffect(() => {
    if (!chatId) return; // Не запускаємо, якщо chatId ще не визначений

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
          createdAt: doc.data().createdAt?.toDate(),
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
    console.log("currentUser:", currentUser);
    console.log("chatId:", chatId);
    console.log("newMessageText:", newMessageText);
    e.preventDefault();

    if (newMessageText.trim() === "" || !currentUser || !chatId) {
      return;
    }

    try {
      const chatDocRef = doc(db, "chats", chatId);
      const chatDocSnap = await getDoc(chatDocRef);

      if (!chatDocSnap.exists()) {
        await setDoc(chatDocRef, {
          participants: [currentUser.uid, userId],
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
          lastMessage: {
            text: newMessageText,
            senderId: currentUser.uid,
            createdAt: serverTimestamp(),
          },
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
      } else {
        await setDoc(
          chatDocRef,
          {
            updatedAt: serverTimestamp(),
            lastMessage: {
              text: newMessageText,
              senderId: currentUser.uid,
              createdAt: serverTimestamp(),
            },
          },
          { merge: true }
        );
      }

      await addDoc(collection(db, "chats", chatId, "messages"), {
        senderId: currentUser.uid,
        text: newMessageText,
        createdAt: serverTimestamp(),
      });

      setNewMessageText("");
    } catch (err) {
      console.error("Помилка при відправці повідомлення:", err);
    }
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
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
      {" "}
      <div className="bg-gray-800 p-4 rounded-lg shadow mb-4 flex items-center gap-3">
        <button
          onClick={() => navigate("/users")}
          className="text-gray-400 hover:text-white text-2xl mr-2"
        >
          &larr;
        </button>{" "}
        {chatPartner?.photoURL ? (
          <img
            src={chatPartner.photoURL}
            alt={chatPartner.name || "Співрозмовник"}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-xl font-bold text-gray-300">
            {chatPartner?.name ? chatPartner.name.charAt(0).toUpperCase() : "?"}
          </div>
        )}
        <h1 className="text-xl font-semibold">
          {chatPartner?.name || "Завантаження..."}
        </h1>{" "}
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
                  {message.createdAt
                    ? message.createdAt.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : "..."}
                </span>
              </div>
            </div>
          ))
        )}

        <div ref={messagesEndRef} />
      </div>
      <form
        onSubmit={handleSendMessage}
        className="flex gap-2 p-4 bg-gray-800 rounded-lg shadow"
      >
        <input
          type="text"
          value={newMessageText}
          onChange={(e) => setNewMessageText(e.target.value)}
          placeholder="Введіть повідомлення..."
          className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200"
          disabled={!newMessageText.trim() || !currentUser}
        >
          Надіслати
        </button>
      </form>
    </div>
  );
};

export default ChatPage;
