import React from "react";

export const GitCheats = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">⚙️ Шорткати та команди для Git</h1>
        <p className="text-xl text-gray-400">Основні та менш відомі команди для роботи з Git</p>
      </header>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-left border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="text-xl px-6 py-2 border-b">Операція</th>
              <th className="text-xl px-6 py-2 border-b">Команда</th>
            </tr>
          </thead>
          <tbody className="text-gray-200">

            <tr>
              <td className="text-xl px-6 py-2 border-b">Клонування репозиторію</td>
              <td className="text-xl px-6 py-2 border-b">git clone <span className="text-yellow-300">repo-url</span></td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Перевірити статус репозиторію</td>
              <td className="text-xl px-6 py-2 border-b">git status</td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Ініціалізація нового репозиторію</td>
              <td className="text-xl px-6 py-2 border-b">git init</td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Додати зміни до індексу</td>
              <td className="text-xl px-6 py-2 border-b">git add <span className="text-yellow-300">.</span> (для всіх файлів)</td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Фіксація змін</td>
              <td className="text-xl px-6 py-2 border-b">git commit -m "Повідомлення про зміну"</td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Перегляд історії комітів</td>
              <td className="text-xl px-6 py-2 border-b">git log</td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Перегляд історії з графом</td>
              <td className="text-xl px-6 py-2 border-b">git log --oneline --graph</td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Перемикання на іншу гілку</td>
              <td className="text-xl px-6 py-2 border-b">git checkout <span className="text-yellow-300">branch-name</span></td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Створення нової гілки та перехід на неї</td>
              <td className="text-xl px-6 py-2 border-b">git checkout -b <span className="text-yellow-300">new-branch-name</span></td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Злиття змін з іншої гілки</td>
              <td className="text-xl px-6 py-2 border-b">git merge <span className="text-yellow-300">branch-name</span></td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Видалення гілки</td>
              <td className="text-xl px-6 py-2 border-b">git branch -d <span className="text-yellow-300">branch-name</span></td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Перевірка змін між комітами</td>
              <td className="text-xl px-6 py-2 border-b">git diff</td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Пуш змін на віддалений репозиторій</td>
              <td className="text-xl px-6 py-2 border-b">git push</td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Пулл змін з віддаленого репозиторію</td>
              <td className="text-xl px-6 py-2 border-b">git pull</td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Створити тег</td>
              <td className="text-xl px-6 py-2 border-b">git tag <span className="text-yellow-300">v1.0</span></td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Перегляд тегів</td>
              <td className="text-xl px-6 py-2 border-b">git tag</td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Перейти до тегу</td>
              <td className="text-xl px-6 py-2 border-b">git checkout <span className="text-yellow-300">v1.0</span></td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Ігнорувати файли за допомогою .gitignore</td>
              <td className="text-xl px-6 py-2 border-b">git status --ignored</td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Додавання всіх змін, включаючи нові файли</td>
              <td className="text-xl px-6 py-2 border-b">git add -A</td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Скасувати зміни в певному файлі</td>
              <td className="text-xl px-6 py-2 border-b">git checkout -- <span className="text-yellow-300">file-name</span></td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Перезаписати коміт</td>
              <td className="text-xl px-6 py-2 border-b">git commit --amend</td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Перегляд детальної історії комітів (включаючи зміни)</td>
              <td className="text-xl px-6 py-2 border-b">git log -p</td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Скидання до певного коміту</td>
              <td className="text-xl px-6 py-2 border-b">git reset --hard <span className="text-yellow-300">commit-id</span></td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Перегляд і відновлення історії</td>
              <td className="text-xl px-6 py-2 border-b">git reflog</td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Робота з віддаленими репозиторіями (додавання нового репозиторію)</td>
              <td className="text-xl px-6 py-2 border-b">git remote add origin <span className="text-yellow-300">repo-url</span></td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Перевірка віддалених репозиторіїв</td>
              <td className="text-xl px-6 py-2 border-b">git remote -v</td>
            </tr>
            <tr>
              <td className="text-xl px-6 py-2 border-b">Зміна URL віддаленого репозиторію</td>
              <td className="text-xl px-6 py-2 border-b">git remote set-url origin <span className="text-yellow-300">new-url</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
