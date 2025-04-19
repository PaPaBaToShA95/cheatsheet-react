import React from "react";
import { highlightMatch } from "../hooks/highlightMatch";

const CheatSectionTable = ({ what, mac, windows, searchTerm }) => (
  <tr>
    <td className="text-xl px-6 py-2 border-b text-center"> {highlightMatch(what, searchTerm)}</td>
    <td className="text-xl px-6 py-2 border-b text-center"> {highlightMatch(mac, searchTerm)}</td>
    <td className="text-xl px-6 py-2 border-b text-center"> {highlightMatch(windows, searchTerm)}</td>
  </tr>
);

export default CheatSectionTable;
