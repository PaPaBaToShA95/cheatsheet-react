
import React from "react";

const CheatSection = ({ title, description, code, preview }) => (
  <div className="bg-gray-800 p-4 rounded-xl mb-6 ">
    <p className="font-bold mb-2 text-center text-4xl">{title}</p>
    <p className="mb-2 text-center ">{description}</p>
    <div className="bg-gray-900 p-3 rounded font-mono text-xl overflow-x-auto max-w-full whitespace-pre-wrap word-wrap break-word">
      {code}
    </div>

    {preview && <div className="mt-4 text-center text-2xl">{preview}</div>}
  </div>
);

export default CheatSection;
