import React from "react";
import { gitCheatsData } from "../data/gitCheats";
import CheatSection from "../components/CheatSectionTableGIT";

export const GitCheats = ({ searchTerm }) => {
  const filtered = gitCheatsData.filter(
    (item) =>
      item.operation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.comand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">GIT</h1>
        <p className="text-xl text-gray-400">
          GIT - це система контролю версій, яка дозволяє відстежувати зміни в
          коді, співпрацювати з іншими розробниками та зберігати історію
          проекту. Вона дозволяє легко повертатися до попередніх версій коду,
          створювати гілки для нових функцій або виправлень, а також зливати ці
          гілки назад в основну версію проекту. GIT є потужним інструментом для
          управління проектами, що дозволяє розробникам працювати ефективніше та
          організованіше.
        </p>
      </header>

      <table className="w-full border-collapse">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="text-xl px-6 py-2 border-b text-center">Операція</th>
            <th className="text-xl px-6 py-2 border-b text-center">Команда</th>
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

export default GitCheats;
