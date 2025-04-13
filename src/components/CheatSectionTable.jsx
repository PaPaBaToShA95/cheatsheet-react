import React from "react";

const CheatSectionTable = ({ CSS, TailWind }) => (
  <tr>
    <td className="text-xl px-6 py-2 border-b text-center">{CSS}</td>
    <td className="text-xl px-6 py-2 border-b text-center">{TailWind}</td>
  </tr>
);

export default CheatSectionTable;
