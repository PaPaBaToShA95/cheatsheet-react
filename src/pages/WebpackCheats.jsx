import React from "react";
import { webpackCheatsData } from "../data/webpackCheats";
import CheatSection from "../components/CheatSectionTableGIT";

export const WebpackCheats = ({ searchTerm }) => {
  const filtered = webpackCheatsData.filter(
    (item) =>
      item.operation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.comand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">WebPack</h1>
        <p className="text-xl text-gray-400">
          WebPack - це потужний інструмент для збору модулів JavaScript, який
          дозволяє вам об'єднувати, оптимізувати та управляти залежностями у
          ваших проектах. Він підтримує різні формати модулів, такі як CommonJS,
          AMD та ES6, і може бути налаштований для роботи з різними типами
          ресурсів, такими як CSS, зображення та шрифти. WebPack також має
          вбудовану підтримку плагінів, які дозволяють вам розширювати його
          функціональність та налаштовувати процес збору відповідно до ваших
          потреб.
        </p>
      </header>

      <table className="w-full border-collapse">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="text-xl px-6 py-2 border-b text-center">Тип</th>
            <th className="text-xl px-6 py-2 border-b text-center">
              Команда/пояснення/код
            </th>
          </tr>
        </thead>
        <tbody>
          {filtered.length > 0 ? (
            filtered.map((item, index) => (
              <CheatSection key={index} {...item} />
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

export default WebpackCheats;
