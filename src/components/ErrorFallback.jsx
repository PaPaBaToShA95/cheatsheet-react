import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import astroerrors from "/astroerrors.png";

export default function ErrorFallback() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center p-4">
      <motion.div
        className="text-6xl sm:text-8xl font-extrabold text-red-500 mb-4"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        💥 ERROR 💥
      </motion.div>

      <motion.p
        className="text-lg sm:text-2xl text-gray-300 mb-8 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Ой-йой! Щось пішло не так у системі... Наш космонавт упустив клавіатуру!
        😅
      </motion.p>

      <img
        src={astroerrors}
        alt="Astronaut in distress"
        className="w-64 h-auto mb-10 rounded-lg shadow-lg floating"
      />
     
      <Link
        to="/"
        className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-full text-lg font-semibold transition-transform hover:scale-105"
      >
        Повернутися на орбіту
      </Link>
    </div>
  );
}
