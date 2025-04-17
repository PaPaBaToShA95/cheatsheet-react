import React from "react";
import { reactCheatsData } from "../data/reactCheats";
import CheatSection from "../components/CheatSection";

export const ReactCheats = ({ searchTerm }) => {
  const filtered = reactCheatsData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">REACT</h1>
        <p className="text-xl text-gray-400">
          React, його можливості та команди
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

export default ReactCheats;
