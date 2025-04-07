import React from "react";

export const WebpackCheats = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">📦 Webpack Шпаргалка</h1>
        <p className="text-xl text-gray-400">Команди, плагіни, конфігурації</p>
      </header>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-left border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="text-xl px-6 py-2 border-b">Тип</th>
              <th className="text-xl px-6 py-2 border-b">Код / Пояснення</th>
            </tr>
          </thead>
          <tbody className="text-gray-200">

            <tr>
              <td className="text-xl px-6 py-2 border-b">Встановлення Webpack</td>
              <td className="text-xl px-6 py-2 border-b">
                <code>npm install --save-dev webpack webpack-cli</code><br />
                Це команда для встановлення Webpack та Webpack CLI як розробницькі залежності.
              </td>
            </tr>

            <tr>
              <td className="text-xl px-6 py-2 border-b">Dev server</td>
              <td className="text-xl px-6 py-2 border-b">
                <code>npm install --save-dev webpack-dev-server</code><br />
                Встановлення Webpack Dev Server для запуску локального сервера з підтримкою гарячої перезавантаження сторінки.
                <br />
                <code>npx webpack serve</code><br />
                Запуск сервера для автоматичного оновлення при зміні файлів.
              </td>
            </tr>

            <tr>
              <td className="text-xl px-6 py-2 border-b">Базова конфігурація</td>
              <td className="text-xl px-6 py-2 border-b">
                <pre className="whitespace-pre-wrap">
{`// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',  // Вхідний файл для Webpack
  output: {
    path: path.resolve(__dirname, 'dist'),  // Куди зберігати зібраний файл
    filename: 'bundle.js',  // Ім'я зібраного файлу
  },
  mode: 'development',  // Режим розробки (можна також 'production')
};`}
                </pre>
                Пояснення: Це основна конфігурація для запуску Webpack, яка вказує вхідний файл, куди зберігати зібраний файл та режим роботи Webpack.
              </td>
            </tr>

            <tr>
              <td className="text-xl px-6 py-2 border-b">Продакшн конфігурація</td>
              <td className="text-xl px-6 py-2 border-b">
                <pre className="whitespace-pre-wrap">
{`const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',  // Використання хешу для уникнення кешування
    clean: true,  // Очищення папки dist перед кожною збіркою
  },
  mode: 'production',  // Режим для продакшн-середовища
  module: {
    rules: [
      {
        test: /\.css$/i,  // Пошук всіх CSS файлів
        use: [MiniCssExtractPlugin.loader, 'css-loader'],  // Завантаження CSS
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],  // Плагін для виведення CSS в окремий файл
  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()],  // Мінімізація CSS
  },
};`}
                </pre>
                Пояснення: Це конфігурація для продакшн середовища, де оптимізується мінімізація JS та CSS, а також використовується хешування для уникнення проблем із кешуванням.
              </td>
            </tr>

            <tr>
              <td className="text-xl px-6 py-2 border-b">Команди</td>
              <td className="text-xl px-6 py-2 border-b">
                <ul className="list-disc list-inside">
                  <li><code>npx webpack --mode development</code><br />Запускає Webpack у режимі розробки.</li>
                  <li><code>npx webpack --mode production</code><br />Запускає Webpack у продакшн-режимі (оптимізація для зменшення розміру файлів).</li>
                  <li><code>npx webpack --watch</code><br />Запускає Webpack і слідкує за змінами у файлах для автоматичної пересборки.</li>
                  <li><code>npx webpack serve --open</code><br />Запускає сервер для перегляду результатів з автоматичним відкриттям браузера.</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className="text-xl px-6 py-2 border-b">Корисні плагіни</td>
              <td className="text-xl px-6 py-2 border-b">
                <ul className="list-disc list-inside">
                  <li><code>html-webpack-plugin</code><br />Плагін для автоматичного створення HTML файлів, який підключає зібрані файли JavaScript та CSS.</li>
                  <li><code>mini-css-extract-plugin</code><br />Витягує CSS з JavaScript і зберігає його в окремі файли.</li>
                  <li><code>css-minimizer-webpack-plugin</code><br />Мінімізує CSS файли для зменшення їх розміру.</li>
                  <li><code>clean-webpack-plugin</code><br />Очищає папку збірки перед кожною новою збіркою.</li>
                  <li><code>webpack-bundle-analyzer</code><br />Аналізує розмір збірки і допомагає знайти великі файли.</li>
                  <li><code>copy-webpack-plugin</code><br />Копіює файли з одного місця в інше під час збірки.</li>
                  <li><code>dotenv-webpack</code><br />Використовує змінні середовища з файлів `.env` у твоїй конфігурації Webpack.</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className="text-xl px-6 py-2 border-b">Loaders</td>
              <td className="text-xl px-6 py-2 border-b">
                <ul className="list-disc list-inside">
                  <li><code>style-loader, css-loader</code><br />Використовуються для завантаження CSS в JavaScript файли.</li>
                  <li><code>sass-loader + sass</code><br />Для компіляції SCSS в CSS.</li>
                  <li><code>babel-loader</code><br />Для перетворення сучасного JavaScript в сумісний з більшістю браузерів.</li>
                  <li><code>file-loader, url-loader (або asset modules)</code><br />Для обробки файлів, таких як зображення або шрифти.</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className="text-xl px-6 py-2 border-b">Структура проєкту</td>
              <td className="text-xl px-6 py-2 border-b">
                <pre className="whitespace-pre-wrap">
{`├── src/
│   ├── index.js
│   ├── styles/
│   └── assets/
├── dist/
├── webpack.config.js
├── package.json`}
                </pre>
              </td>
            </tr>

            <tr>
              <td className="text-xl px-6 py-2 border-b">package.json scripts</td>
              <td className="text-xl px-6 py-2 border-b">
                <pre className="whitespace-pre-wrap">
{`"scripts": {
  "dev": "webpack serve --mode development --open",
  "build": "webpack --mode production"
}`}
                </pre>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};
