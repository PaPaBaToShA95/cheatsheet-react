import React from "react";

const CheatSectionTable = ({ operation, comand }) => (
  <tr>
    <td className="text-xl px-6 py-2 border-b text-center">{operation}</td>
    <td className="text-xl px-6 py-2 border-b text-center">{comand}</td>
  </tr>
);

export default CheatSectionTable;
