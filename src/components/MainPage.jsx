import React from "react";
import QRMono from "../assets/QRMono.png";

export const MainPage = () => {
  return (
    <div className="p-6 max-w-7xl text-center mx-auto">
      <p className="text-xl text-gray-400 space-y-4">
        <span className="block text-4xl text-center font-bold">
          🚀 CheatSheet для веб-розробника 🚀
        </span>

        <span className="block">
          Цей проєкт є інтерактивною шпаргалкою (CheatSheet) для
          веб-розробників, що охоплює ключові технології та інструменти, які
          використовуються у FrontEnd розробці.
        </span>

        <span className="block text-3xl font-semibold">Тут ви знайдете:</span>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>HTML</strong>: Основи структури веб-сторінок
          </li>
          <li>
            <strong>CSS</strong>: Стилізація та оформлення веб-контенту
          </li>
          <li>
            <strong>JavaScript</strong>: Програмування інтерактивності та логіки
            на клієнтській стороні
          </li>
          <li>
            <strong>React</strong>: Популярна JavaScript-бібліотека для
            створення користувацьких інтерфейсів
          </li>
          <li>
            <strong>Tailwind CSS</strong>: Фреймворк CSS, що базується на
            утилітних класах для швидкої стилізації
          </li>
          <li>
            <strong>Gulp</strong>: Інструмент для автоматизації рутинних завдань
            у веб-розробці
          </li>
          <li>
            <strong>VS Code</strong>: Популярний редактор коду з корисними
            розширеннями
          </li>
          <li>
            <strong>Webpack</strong>: Збиральник модулів для JavaScript та інших
            веб-активів
          </li>
          <li>
            <strong>Git</strong>: Розподілена система контролю версій
          </li>
        </ul>

        <span className="block text-3xl font-semibold">✨ Особливості</span>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Зручна навігація</strong>: Легко перемикайтеся між різними
            технологіями
          </li>
          <li>
            <strong>Короткі описи</strong>: Швидко знаходьте потрібну інформацію
          </li>
          <li>
            <strong>Приклади коду</strong>: Наочні приклади використання
            ключових концепцій
          </li>
          <li>
            <strong>Інтерактивність (у планах)</strong>: Можливість
            експериментувати з кодом прямо в браузері
          </li>
          <li>
            <strong>Українська мова</strong>: Вся інформація подана українською
            мовою
          </li>
        </ul>

        <span className="block text-3xl font-semibold">
          🛠️ Технології проєкту
        </span>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>React</strong>: Для створення інтерактивного інтерфейсу
          </li>
          <li>
            <strong>Tailwind CSS</strong>: Для швидкої та стильної верстки
          </li>
          <li>
            <strong>Vite</strong>: Сучасний інструмент для збірки та розробки
          </li>
        </ul>

        <span className="block text-3xl font-semibold">
          🚀 Запуск проєкту локально
        </span>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Клонуйте репозиторій:</strong>
            <pre className="bg-gray-900 p-3 rounded mt-2 overflow-x-auto">
              <code className="font-mono">
                git clone https://github.com/PaPaBaToShA95/cheatsheet-react.git
                <br />
                cd CheatSheet
              </code>
            </pre>
          </li>
          <li>
            <strong>Встановіть залежності:</strong>
            <pre className="bg-gray-900 p-3 rounded mt-2 overflow-x-auto">
              <code className="font-mono">
                npm install # або yarn install / pnpm install
              </code>
            </pre>
          </li>
          <li>
            <strong>Запустіть сервер розробки:</strong>
            <pre className="bg-gray-900 p-3 rounded mt-2 overflow-x-auto">
              <code className="font-mono">
                npm run dev # або yarn dev / pnpm dev
              </code>
            </pre>
          </li>
        </ol>

        <span className="block text-3xl font-semibold">🤝 Внесок</span>
        <span className="block">Якщо ви хочете зробити свій внесок:</span>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Створіть форк репозиторію</li>
          <li>
            Створіть нову гілку для своїх змін: <br />
            <pre className="bg-gray-900 p-3 rounded mt-2 overflow-x-auto">
              <code className="font-mono">
                git checkout -b feature/ваша_фіча
              </code>
            </pre>
          </li>
          <li>
            Закомітьте зміни
            <pre className="bg-gray-900 p-3 rounded mt-2 overflow-x-auto">
              <code className="font-mono">
                git commit -am 'Додано нову фічу'
              </code>
            </pre>
          </li>
          <li>
            Зробіть пуш у свою гілку
            <pre className="bg-gray-900 p-3 rounded mt-2 overflow-x-auto">
              <code className="font-mono">
                git push origin feature/ваша_фіча
              </code>
            </pre>
          </li>
          <li>Створіть Pull Request</li>
        </ol>

        <span className="block text-3xl">
          <strong>📝 Ліцензія:</strong> MIT License
        </span>
        <span className="block text-3xl text-center font-semibold">
          <strong>🙏 Подяка всім, хто підтримує цей проєкт!</strong>
        </span>
        <span className="block text-3xl text-center font-semibold">
          <strong>
            {" "}
            <img id="qrcode" className="mx-auto" src={QRMono} />
            <a
              className="hover:text-blue-400"
              href="https://send.monobank.ua/jar/6WW52zGGdP"
            >
              🔗Посилання на MONO-банку
            </a>
          </strong>
        </span>

        <span className="block text-center text-3xl mt-6 font-bold">
          Бажаю вам успіхів у вашій веб-розробці! 🚀🇺🇦
        </span>
      </p>
    </div>
  );
};

export default MainPage;
