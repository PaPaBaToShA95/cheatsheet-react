import React from "react";
import { htmlCheatsData } from "../data/htmlCheats";
import CheatSection from "./CheatSection";



const extractTextFromJSX = (node) => {
  if (typeof node === "string" || typeof node === "number") {
    return node.toString();
  }

  if (Array.isArray(node)) {
    return node.map(extractTextFromJSX).join(" ");
  }

  if (node && typeof node === "object" && node.props) {
    return extractTextFromJSX(node.props.children);
  }

  return "";
};

export const HtmlCheats = ({ searchTerm }) => {
  const filtered = htmlCheatsData.filter((item) => {
    const search = searchTerm.toLowerCase();
    const previewText = extractTextFromJSX(item.preview).toLowerCase();

    return (
      item.title.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search) ||
      item.code.toLowerCase().includes(search) ||
      previewText.includes(search)
    );
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">HTML Теги</h1>
        <p className="text-xl text-gray-400">
          Базові HTML-елементи, їх властивості та приклади використання
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

export default HtmlCheats;
