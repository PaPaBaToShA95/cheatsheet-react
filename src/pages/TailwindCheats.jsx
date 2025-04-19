import React from "react";
import { tailwindCheatsData } from "../data/tailwindCheats";
import CheatSection from "../components/CheatSectionTable";

export const TailwindCheats = ({ searchTerm }) => {
  const filtered = tailwindCheatsData.filter(
    (item) =>
      item.CSS.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.TailWind.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Tailwind</h1>
        <p className="text-xl text-gray-400">
          Tailwind CSS - це CSS-фреймворк, який дозволяє швидко створювати
          адаптивні та стильні інтерфейси.
        </p>
      </header>

      <table className="w-full border-collapse">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="text-xl px-6 py-2 border-b text-center">CSS</th>
            <th className="text-xl px-6 py-2 border-b text-center">
              TailWind 4.1
            </th>
          </tr>
        </thead>
        <tbody>
          {filtered.length > 0 ? (
            filtered.map((item, index) => (
              <CheatSection key={index} {...item} searchTerm={searchTerm} />
            ))
          ) : (
            <tr>
              <td
                colSpan="2"
                className="text-center text-gray-400 text-4xl py-4"
              >
                Нічого не знайдено 🤷‍♂️ <br />
                Спробуйте інше слово або <br />
                напишіть мені у{" "}
                <a href="http://t.me/papabatosha" className="text-blue-400">
                  Telegram
                </a>{" "}
                і я додам цей компонент
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TailwindCheats;
