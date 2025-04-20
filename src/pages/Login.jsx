import React from "react";
import { signInWithGoogle } from "../hooks/useAuthActions"; 
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();


  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate("/"); 
    } catch (e) {
      console.error("Помилка входу через Google:", e);

    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-gray-800 p-8 rounded-xl gap-5 text-white flex flex-col items-center">
      {" "}
 
      <h2 className="text-2xl text-center font-bold mb-6">
        Авторизуйтесь на сайті для отримання доступу до проходження тестів
      </h2>{" "}
   
      <button
        onClick={handleGoogleSignIn}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
      >
        Увійти через Google
      </button>
    </div>
  );
}
