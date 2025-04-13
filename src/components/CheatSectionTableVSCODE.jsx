import React from "react";

const CheatSectionTable = ({ what, mac, windows }) => (
  <tr>
    <td className="text-xl px-6 py-2 border-b text-center">{what}</td>
    <td className="text-xl px-6 py-2 border-b text-center">{mac}</td>
    <td className="text-xl px-6 py-2 border-b text-center">{windows}</td>
  </tr>
);

export default CheatSectionTable;
