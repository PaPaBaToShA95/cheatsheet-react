import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import astro from "/astro.png";

export default function NotFound() {
  return (
    <div className=" flex flex-col items-center justify-start text-white text-center p-4">
      <motion.div
        className="text-4xl font-extrabold text-yellow-400 mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
      >
        Error 404
      </motion.div>

      <motion.p
        className="text-xl md:text-xl text-gray-300 mb-5 max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        "Ой-йой... Схоже, наш космонавт заблукав!" <br /> 🚀 Не хвилюйтесь — натисніть «На головну», і ми допоможемо йому повернутися на орбіту!
      </motion.p>

      <motion.img
        src={astro}
        alt="Astronaut lost in space"
        className="w-64 mb-8 floating"
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
      />

      <Link
        to="/"
        className="text-black bg-yellow-400 hover:bg-yellow-300 px-6 py-3 rounded-full text-lg font-semibold transition-transform hover:scale-105"
      >
        На головну
      </Link>
    </div>
  );
}
