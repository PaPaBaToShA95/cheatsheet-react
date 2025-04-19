import React from "react";
import { highlightMatch } from "../hooks/highlightMatch";

const CheatSectionTable = ({ CSS, TailWind, searchTerm }) => (
  <tr>
    <td className="text-xl px-6 py-2 border-b text-center">
      {" "}
      {highlightMatch(CSS, searchTerm)}
    </td>
    <td className="text-xl px-6 py-2 border-b text-center">
      {" "}
      {highlightMatch(TailWind, searchTerm)}
    </td>
  </tr>
);

export default CheatSectionTable;
