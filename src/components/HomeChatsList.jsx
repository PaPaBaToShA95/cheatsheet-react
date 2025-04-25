import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function HomeChatsList() {
  const { currentUser } = useAuth();
  const [chats, setChats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      setChats([]);
      return;
    }

    const q = query(
      collection(db, "chats"),
      where("participants", "array-contains", currentUser.uid),
      orderBy("updatedAt", "desc")
    );

    const unsubscribe = onSnapshot(
      q,
      async (snapshot) => {
        const chatsWithUsernames = await Promise.all(
          snapshot.docs.map(async (docSnap) => {
            const chatData = docSnap.data();
            const otherUserId = chatData.participants.find(
              (uid) => uid !== currentUser.uid
            );

            let otherUserName = "Невідомий";

            if (otherUserId) {
              const userDoc = await getDoc(doc(db, "users", otherUserId));
              if (userDoc.exists()) {
                const userData = userDoc.data();
                otherUserName = userData.name || "Користувач";
              }
            }

            return {
              id: docSnap.id,
              otherUserId,
              otherUserName,
              ...chatData,
            };
          })
        );

        setChats(chatsWithUsernames);
      },
      (error) => {
        console.error("Помилка прослуховування чатів:", error);
      }
    );

    return () => unsubscribe();
  }, [currentUser]);

  return (
    <div className="space-y-2">
      {chats.length === 0 && !currentUser && (
        <div className="text-center text-gray-500">
          Увійдіть, щоб побачити ваші чати.
        </div>
      )}
      {chats.length === 0 && currentUser && (
        <div className="text-center text-gray-500">
          У вас ще немає активних чатів.
        </div>
      )}
      {chats.length > 0 &&
        chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => navigate(`/chat/${chat.otherUserId}`)}
            className="p-3 bg-gray-800 text-white rounded-xl shadow hover:bg-gray-700 transition-colors cursor-pointer"
          >
            <div className="font-semibold flex justify-between items-center">
              <span>Чат з користувачем {chat.otherUserName}</span>
              {chat.lastMessage?.senderId !== currentUser.uid && (
                <span className="text-xs text-green-400 bg-green-900 rounded-full px-2 py-0.5">
                  Нове
                </span>
              )}
            </div>
            {chat.lastMessageText && ( // Перевіряємо, чи існує поле lastMessageText
              <div className="text-sm text-gray-400 truncate">
                {" "}
                {/* Можливо, колір вже змінений, використовуйте ваш поточний клас */}
                {chat.lastMessageText}{" "}
                {/* Читаємо текст з поля lastMessageText */}
              </div>
            )}
            {chat.updatedAt?.toDate && (
              <div className="text-xs text-gray-500 mt-1">
                Оновлено: {chat.updatedAt.toDate().toLocaleString()}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
