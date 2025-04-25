
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../firebase"; 
import { useAuth } from "../context/AuthContext"; 
import { useNavigate } from "react-router-dom"; 
import ChatPage from "./ChatPage"; 

const Users = () => {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const { currentUser } = useAuth(); 
  const navigate = useNavigate();

  useEffect(() => {
   
    const fetchUsers = async () => {
      try {
        setLoading(true); 
        const usersCollectionRef = collection(db, "users");
        const querySnapshot = await getDocs(usersCollectionRef); 

      
        const usersList = querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() })) 
          .filter((user) => user.id !== currentUser?.uid);

        setUsers(usersList);
      } catch (err) {
        console.error("Помилка при завантаженні користувачів:", err);
        setError("Не вдалося завантажити список користувачів.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();


  }, [currentUser?.uid]);


  const handleMessage = (userId, userName) => {
    console.log(
      "Дія: Написати повідомлення користувачу:",
      userName,
      "(ID:",
      userId,
      ")"
    );
    navigate(`/chat/${userId}`);
  };


  const handleAddFriend = (userId, userName) => {
    if (currentUser && currentUser.uid === userId) {
      console.log("Ви не можете додати себе в друзі.");
      return;
    }
    console.log("Дія: Додати в друзі:", userName, "(ID:", userId, ")");
  };

 
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl text-white">
        Завантаження користувачів...
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

 
  if (users.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl text-gray-400">
        Не знайдено інших користувачів.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 bg-gray-950 text-white min-h-screen">
      {" "}
    
      <h1 className="text-3xl font-bold mb-6 text-center">
        Список Користувачів
      </h1>
 
      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-gray-800 p-4 rounded-lg shadow flex flex-col sm:flex-row items-center gap-4 hover:bg-gray-700 transition-colors duration-200" 
          >
         
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={`Фото ${user.name || "користувача"}`} 
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
            ) : (
  
              <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center text-2xl font-bold text-gray-300 flex-shrink-0">
                {user.name ? user.name.charAt(0).toUpperCase() : "?"}{" "}
              </div>
            )}

 
            <div className="flex-1 text-center sm:text-left">
              {" "}
           
              <h2 className="text-xl font-semibold">
                {user.name || "Без імені"}
              </h2>{" "}
              {user.bio && (
                <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                  {user.bio}
                </p>
              )}
              {user.specialization && <p className="text-gray-500 text-sm mt-1">Спеціалізація: {user.specialization}</p>}
              {user.experience && <p className="text-gray-500 text-sm">Досвід: {user.experience}</p>}
            </div>
            {currentUser && (
              <div className="flex flex-row sm:flex-col gap-2 items-center justify-center">
                {" "}
                <button
                  className="px-4 py-2 rounded cursor-pointer text-sm bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 w-full sm:w-auto"
                  onClick={() => handleMessage(user.id, user.name)}
                  title={`Написати повідомлення ${user.name || "цьому користувачу"}`}
                >
                  Повідомлення
                </button>
                {currentUser.uid !== user.id && (
                  <button
                    className="px-4 py-2 text-nowrap rounded cursor-pointer text-sm bg-green-600 hover:bg-green-700 text-white transition-colors duration-200 w-full sm:w-auto" 
                    onClick={() => handleAddFriend(user.id, user.name)}
                    title={`Додати ${user.name || "цього користувача"} в друзі`} 
                  >
                    Додати в друзі(В процесі)
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
