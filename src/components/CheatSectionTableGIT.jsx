import React from "react";
import { highlightMatch } from "../hooks/highlightMatch";

const CheatSectionTable = ({ operation, comand, searchTerm }) => (
  <tr>
    <td className="text-xl px-6 py-2 border-b text-center">{highlightMatch(operation, searchTerm)}</td>
    <td className="text-xl px-6 py-2 border-b text-center">{highlightMatch(comand, searchTerm)}</td>
  </tr>
);

export default CheatSectionTable;
