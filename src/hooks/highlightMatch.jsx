export function highlightMatch(text, searchTerm) {
  if (!searchTerm) return text;

  const regex = new RegExp(`(${searchTerm})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, i) =>
    part.toLowerCase() === searchTerm.toLowerCase() ? (
      <span key={i} className="bg-blue-300 rounded-2xl text-black font-bold px-1">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default highlightMatch;