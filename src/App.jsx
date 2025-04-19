import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Router from "./router/routes";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showHint, setShowHint] = useState(false);

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
  const location = useLocation();
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="min-h-screen bg-gray-950  text-white p-4 flex flex-col justify-between">
      <div>
        <div className="text-[40px] lg:text-[100px] leading-none font-bold mb-4 text-center">
          🧠 CheatSheet
        </div>
        <div className="text-center text-lg mb-4 relative">
          <div className="relative w-full max-w-md mx-auto flex items-center justify-center">
            <input
              type="text"
              placeholder="Пошук..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mt-4 w-full px-4 py-2 pr-10 rounded-2xl bg-gray-800 text-white placeholder-gray-400 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
              onFocus={() => {
                setShowHint(true);
                setTimeout(() => {
                  setShowHint(false);
                }, 3000);
              }}
            />

            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-3/5 cursor-pointer transform -translate-y-1/2 text-gray-400 text-xl font-bold 
hover:rotate-180 hover:text-white 
active:scale-90 
transition-all duration-500 ease-in-out active:shadow-inner"
                title="Очистити пошук"
              >
                ✕
              </button>
            )}
          </div>

          {showHint && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-gray-700 border-gray-600 border-4 text-gray-300 text-sm rounded-3xl p-2 w-full max-w-md mx-auto z-10 shadow">
              Пошук здійснюється по всіх полях: назві, опису, коду, командах
              тощо (окрім попереднього перегляду).
            </div>
          )}
        </div>

        <div className="flex flex-col flex-wrap sm:flex-row gap-2 justify-center mb-6 bg-gray-800 p-4 rounded-2xl w-full max-w-6xl mx-auto">
          {sections.map((section) => {
            const isActive = location.pathname === section.path;

            return (
              <button
                key={section.name}
                onClick={() => navigate(section.path)}
                className={`px-4 py-2 cursor-pointer rounded-full transition-transform duration-300 ease-in-out 
        ${isActive ? "bg-yellow-500 text-black" : "bg-gray-700 text-white hover:bg-yellow-500 hover:text-black hover:-translate-y-[10px]"}`}
              >
                {section.name}
              </button>
            );
          })}
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
        <button
          className="fixed bottom-5 right-5 p-2 cursor-pointer text-3xl bg-amber-300 hover:bg-amber-400 text-black font-bold py-2 px-4 rounded-4xl"
          onClick={scrollToTop}
        >
          ⥣
        </button>
      </footer>
    </div>
  );
}
