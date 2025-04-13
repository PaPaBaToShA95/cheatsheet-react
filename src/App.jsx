import { useState } from "react";
import { HtmlCheats } from "./components/HtmlCheats";
import { CssCheats } from "./components/CssCheats";
import { JsCheats } from "./components/JsCheats";
import { ReactCheats } from "./components/ReactCheats";
import { TailwindCheats } from "./components/TailwindCheats";
import { VSCodeCheats } from "./components/VSCodeCheats";
import { GitCheats } from "./components/GitCheats";
import { GulpCheats } from "./components/GulpCheats";
import { WebpackCheats } from "./components/WebpackCheats";
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import {Project} from "./components/Project";




const sections = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Tailwind",
  "VSCode",
  "Git",
  "Gulp",
  "Webpack",
  "Про Мене",
  "Контакти",
  "Про проект",
];

export default function App() {
  const [active, setActive] = useState("HTML");
  const [searchTerm, setSearchTerm] = useState("");

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


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
              key={section}
              className={`px-4 py-2 cursor-pointer rounded-full hover:bg-yellow-500 text-white hover:text-black hover:-translate-y-[10px] transition-transform duration-300 ease-in-out ${
                active === section ? "bg-yellow-500 text-black" : "bg-gray-700"
              }`}
              onClick={() => setActive(section)}
            >
              {section}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto ">
          {active === "HTML" && <HtmlCheats searchTerm={searchTerm} />}
          {active === "CSS" && <CssCheats searchTerm={searchTerm} />}
          {active === "JS" && <JsCheats searchTerm={searchTerm} />}
          {active === "React" && <ReactCheats searchTerm={searchTerm} />}
          {active === "Tailwind" && <TailwindCheats searchTerm={searchTerm} />}
          {active === "VSCode" && <VSCodeCheats searchTerm={searchTerm} />}
          {active === "Git" && <GitCheats searchTerm={searchTerm} />}
          {active === "Gulp" && <GulpCheats searchTerm={searchTerm} />}
          {active === "Webpack" && <WebpackCheats searchTerm={searchTerm} />}
          {active === "Про Мене" && <About />}
          {active === "Контакти" && <Contact />}
          {active === "Про проект" && <Project />}
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-22 cursor-pointer right-6 bg-yellow-500 text-black p-4  rounded-full shadow-lg hover:bg-yellow-400 transition-colors "
        aria-label="Піднятись вгору"
      >
        ⇑
      </button>

      <footer className="text-center text-gray-500 mt-8 py-2 border-t border-gray-800">
        Powered by Oleksiy Ermantraut student of{" "}
        <a
          href="https://ithillel.ua/"
          target="_blank"
          rel="noreferrer"
          title="Hillel IT School"
          aria-label="Hillel IT School"
          className="text-blue-400 hover:underline"
        >
          Hillel IT School
        </a>
      </footer>
    </div>
  );
}
