import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Router from "./router/routes";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const sections = [
    { name: "HTML", path: "/html" },
    { name: "CSS", path: "/css" },
    { name: "JS", path: "/js" },
    { name: "React", path: "/react" },
    { name: "Tailwind", path: "/tailwind" },
    { name: "VSCode", path: "/vscode" },
    { name: "Git", path: "/git" },
    { name: "Gulp", path: "/gulp" },
    { name: "Webpack", path: "/webpack" },
    { name: "Про Мене", path: "/about" },
    { name: "Контакти", path: "/contact" },
    { name: "Про проект", path: "/project" },
   
  ];

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 flex flex-col justify-between">
      <div>
        <div className="text-[40px] lg:text-[100px] leading-none font-bold mb-4 text-center">
          🧠 CheatSheet
        </div>
        <div className="text-center text-lg mb-4">
          <input
            type="text"
            placeholder="Пошук..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-4 w-full max-w-md mx-auto px-4 py-2 rounded-2xl bg-gray-800 text-white placeholder-gray-400"
          />
        </div>
        <div className="flex flex-col flex-wrap sm:flex-row gap-2 justify-center mb-6 bg-gray-800 p-4 rounded-2xl w-full max-w-6xl mx-auto">
          {sections.map((section) => (
            <button
              key={section.name}
              onClick={() => navigate(section.path)}
              className="px-4 py-2 cursor-pointer rounded-full hover:bg-yellow-500 text-white hover:text-black hover:-translate-y-[10px] transition-transform duration-300 ease-in-out bg-gray-700"
            >
              {section.name}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Router searchTerm={searchTerm} />
        </div>
      </div>

      <footer className="text-center text-gray-500 mt-8 py-2 border-t border-gray-800">
        Powered by Oleksiy Ermantraut student of{" "}
        <a
          href="https://ithillel.ua/"
          target="_blank"
          rel="noreferrer"
          title="Hillel IT School"
          className="text-blue-400 hover:underline"
        >
          Hillel IT School
        </a>
      </footer>
    </div>
  );
}
