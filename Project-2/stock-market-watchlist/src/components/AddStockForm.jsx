import { useState, useEffect, useMemo } from "react";
import { addStockToWatchlist, getStock, getWatchlist, getAllTickers } from "./stockService";
import AutocompleteDropdown from "./AutocompleteDropdown.";
import { TICKERS } from "./tickers";

// const STOCK_SUGGESTIONS = [
//   "AAPL", "AMZN", "GOOGL", "MSFT", "TSLA",
//   "META", "NVDA", "NFLX", "INTC", "AMD",
//   "BABA", "UBER", "DIS", "PYPL", "ORCL"
// ];

const STOCK_SUGGESTIONS = TICKERS.map(s => s.displaySymbol)

export default function AddStockForm({ addStock }) {
  const [formData, setFormData] = useState("");
  const [message, setMessage] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value.toUpperCase()
    setFormData(value);

    if (value.length > 0) {
      const matches = STOCK_SUGGESTIONS.filter(s => s.startsWith(value))

      setFiltered(matches)
      setShowDropdown(true)
    } else {
      setShowDropdown(false)
    }


  }

  const handleClick = (ticker) => {
    setFormData(ticker);
    setShowDropdown(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const stockdata = await getStock(formData);
    const watchlistdata = await getWatchlist();
    const tickerlist = watchlistdata.records.map(s => s.fields.Name);

    if (stockdata?.c === 0) {
      setMessage(`${formData} does not exist.`);
    } else if (tickerlist.includes(formData)) {
      setMessage(`${formData} is already in your watchlist.`);
    } else {
      await addStockToWatchlist(formData);
      addStock(formData);
      setMessage(`${formData} added successfully.`);
    }

    setFormData("");
  };

  return (
    <div className="max-w-lg bg-gray-900/70 backdrop-blur p-6 rounded-2xl border border-gray-800">
      <h3 className="text-xl font-semibold mb-4">
        Add Stock to Watchlist
      </h3>

      <form onSubmit={handleSubmit} className="flex gap-3">
        
        <div className="relative flex-1">

          <input
          value={formData}
          onChange={handleChange}
          placeholder="Enter ticker (e.g. NVDA)"
          className="flex-1 px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

          {showDropdown && filtered.length > 0 ? <AutocompleteDropdown filtered = {filtered} handleClick = {handleClick}/> : null}


        </div>
        

        <button className="px-5 py-2 bg-blue-600 rounded-xl hover:bg-blue-500 active:scale-95 transition">
          Add
        </button>
      </form>

      {message && (
        <div className="mt-4 p-3 rounded-xl bg-gray-800 text-sm text-gray-300 border border-gray-700">
          {message}
        </div>
      )}
    </div>
  );
}