import { highlightMatch } from "../hooks/highlightMatch";
import React from "react";

const CheatSection = ({ title, description, code, preview,  searchTerm }) => (
  <div className="bg-gray-800 p-4 rounded-xl mb-6">
    <p className="font-bold mb-2 text-center text-4xl">
      {highlightMatch(title, searchTerm)}
    </p>
    <p className="mb-2 text-center">
      {highlightMatch(description, searchTerm)}
    </p>
    <div className="bg-gray-900 p-3 rounded font-mono text-xl overflow-x-auto max-w-full whitespace-pre-wrap word-wrap break-word">
      {highlightMatch(code, searchTerm)}
    </div>

    {preview && <div className="mt-4 text-center text-2xl">{preview}</div>}
  </div>
);

export default CheatSection;
