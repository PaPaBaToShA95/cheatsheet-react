import React from "react";
import { cssCheatsData } from "../data/cssCheats";
import CheatSection from "../components/CheatSection";

export const CssCheats = ({ searchTerm }) => {
  const filtered = cssCheatsData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">CSS Стилі</h1>
        <p className="text-xl text-gray-400">
          Базові стилі CSS для веб-сторінок та їх пояснення
        </p>
      </header>

      <div className="space-y-6">
        {filtered.length > 0 ? (
          filtered.map((item, index) => <CheatSection key={index} {...item} />)
        ) : (
          <p className="text-center text-gray-400 text-4xl">
            Нічого не знайдено 🤷‍♂️ <br />
            Спробуйте інше слово або <br />
            напишіть мені у{" "}
            <a href="http://t.me/papabatosha" className="text-blue-400">
              Telegram
            </a>{" "}
            і я додам цей компонент
          </p>
        )}
      </div>
    </div>
  );
};
export default CssCheats;
