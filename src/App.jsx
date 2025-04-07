import { useState } from "react";
import { HtmlCheats } from "./components/HtmlCheats";
import { CssCheats } from "./components/CssCheats";
import { JsCheats } from "./components/JsCheats";
import { ReactCheats } from "./components/ReactCheats";
import { TailwindCheats } from "./components/TailwindCheats";
import { VSCodeCheats } from "./components/VSCodeCheats";
import { GitCheats } from "./components/GitCheats";

const sections = ["HTML", "CSS", "JS", "React", "Tailwind", "VSCode", "Git"];

export default function App() {
  const [active, setActive] = useState("HTML");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-center">🧠 CheatSheet</h1>

        <div className="flex gap-2 justify-center mb-6">
          {sections.map((section) => (
            <button
              key={section}
              className={`px-4 py-2 rounded-full ${
                active === section ? "bg-yellow-500 text-black" : "bg-gray-700"
              }`}
              onClick={() => setActive(section)}
            >
              {section}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          {active === "HTML" && <HtmlCheats />}
          {active === "CSS" && <CssCheats />}
          {active === "JS" && <JsCheats />}
          {active === "React" && <ReactCheats />}
          {active === "Tailwind" && <TailwindCheats />}
          {active === "VSCode" && <VSCodeCheats />}
          {active === "Git" && <GitCheats />}
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-yellow-500 text-black p-4 rounded-full shadow-lg hover:bg-yellow-400 transition-colors"
        aria-label="Піднятись вгору"
      >
        ↑
      </button>

      <footer className="text-center text-gray-500 mt-8 py-2 border-t border-gray-800">
        Powered by Oleksiy Ermantraut
      </footer>
    </div>
  );
}
