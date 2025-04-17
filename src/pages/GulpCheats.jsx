import React from "react";
import { gulpCheatsData } from "../data/gulpCheats";
import CheatSection from "../components/CheatSectionTableGIT";

export const GulpCheats = ({ searchTerm }) => {
  const filtered = gulpCheatsData.filter(
    (item) =>
      item.operation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.comand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">GULP</h1>
        <p className="text-xl text-gray-400">
          GULP - це інструмент автоматизації задач, який дозволяє спростити
          процес розробки веб-додатків. Він дозволяє створювати складні
          автоматизовані робочі процеси, які можуть включати в себе компіляцію
          Sass у CSS, обробку зображень, мініфікацію файлів, перевірку коду на
          помилки та багато іншого. GULP використовує JavaScript для опису
          задач, що робить його дуже гнучким і потужним інструментом для
          розробників. Завдяки GULP можна значно зекономити час на рутинних
          задачах, зосередившись на творчій частині розробки.
        </p>
      </header>

      <table className="w-full border-collapse">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="text-xl px-6 py-2 border-b text-center">Операція</th>
            <th className="text-xl px-6 py-2 border-b text-center">
              Команда/код
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

export default GulpCheats;
