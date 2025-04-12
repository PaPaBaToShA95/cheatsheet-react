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
];

export default function App() {
  const [active, setActive] = useState("HTML");

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 flex flex-col justify-between">
      <div>
        <div className="text-[40px] lg:text-[100px] leading-none font-bold mb-4 text-center">
          🧠 CheatSheet
        </div>

        <div className="flex flex-col sm:flex-row gap-2 justify-center mb-6">
          {sections.map((section) => (
            <button
              key={section}
              className={`px-4 py-2 cursor-pointer rounded-full ${
                active === section ? "bg-yellow-500 text-black" : "bg-gray-700"
              }`}
              onClick={() => setActive(section)}
            >
              {section}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto ">
          {active === "HTML" && <HtmlCheats />}
          {active === "CSS" && <CssCheats />}
          {active === "JS" && <JsCheats />}
          {active === "React" && <ReactCheats />}
          {active === "Tailwind" && <TailwindCheats />}
          {active === "VSCode" && <VSCodeCheats />}
          {active === "Git" && <GitCheats />}
          {active === "Gulp" && <GulpCheats />}
          {active === "Webpack" && <WebpackCheats />}
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
        Powered by Oleksiy Ermantraut sudent of{" "}
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
