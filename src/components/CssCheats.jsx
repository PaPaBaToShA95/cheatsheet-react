
import React from "react";
import { cssCheatsData } from "../data/cssCheats";
import CheatSection from "./CheatSection";

export const CssCheats = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">CSS Стилі</h1>
        <p className="text-xl text-gray-400">
          Базові стилі CSS для веб-сторінок та їх пояснення
        </p>
      </header>
      <div className="space-y-6">
        {cssCheatsData.map((item, index) => (
          <CheatSection key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
