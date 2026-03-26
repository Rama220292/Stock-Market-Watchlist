export default function AutocompleteDropdown({ filtered, handleClick }) {

  if (!filtered.length) return null;

  return (
    <ul className="absolute left-0 top-full mt-2 w-full bg-gray-800 border border-gray-700 rounded-xl shadow-xl backdrop-blur">
      {filtered.map((ticker, i) => (
        <li
          key={i}
          onClick={() => handleClick(ticker)}
          className="px-4 py-2 cursor-pointer hover:bg-gray-700 transition z-50"

        >
          {ticker}
        </li>
      ))}
    </ul>
  );
}