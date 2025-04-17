import { useState } from "react";

export default function BuggyComponent() {
  const [explode, setExplode] = useState(false);

  if (explode) {
   
    throw new Error("Boom! Це тестова помилка.");
  }

  return (
    <div className="text-center p-4">
      <button
        onClick={() => setExplode(true)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Натисни, щоб зламати 🧨
      </button>
    </div>
  );
}
