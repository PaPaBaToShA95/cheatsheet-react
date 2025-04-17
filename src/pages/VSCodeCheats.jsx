import React from "react";
import { vscodeCheatsData } from "../data/vscodeCheats";
import CheatSection from "../components/CheatSectionTableVSCODE";

export const VSCodeCheats = ({ searchTerm }) => {
  const filtered = vscodeCheatsData.filter(
    (item) =>
      item.what.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.mac.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.windows.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">VS Code</h1>
        <p className="text-xl text-gray-400">
          VSCode - це редактор коду, який підтримує безліч мов програмування та
          технологій. Він має безліч функцій, які роблять його потужним
          інструментом для розробників. У цьому розділі ви знайдете корисні
          команди та скорочення, які допоможуть вам працювати з VSCode більш
          ефективно.
          <br />
          <br />
          <strong>Порада:</strong> Використовуйте комбінацію клавіш{" "}
          <strong>Ctrl + Shift + P</strong> (Windows) або{" "}
          <strong>Cmd + Shift + P</strong> (MacOS), щоб відкрити командну панель
          VSCode. Це дозволить вам швидко знаходити та виконувати команди без
          необхідності переходити в меню.
          <br /> Для того щоб відкрити або закрити термінал, натисніть{" "}
          <strong>Ctrl + `</strong> (Windows) або <strong>Control + `</strong>{" "}
          (MacOS). Це дозволить вам швидко переходити між редактором коду та
          терміналом, що робить процес розробки більш зручним.
        </p>
      </header>

      <table className="w-full border-collapse">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="text-xl px-6 py-2 border-b text-center">
              Що робить
            </th>
            <th className="text-xl px-6 py-2 border-b text-center">MacOS</th>
            <th className="text-xl px-6 py-2 border-b text-center">Windows</th>
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
                colSpan="3"
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

export default VSCodeCheats;
