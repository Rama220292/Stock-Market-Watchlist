import { getCompanyName } from "../components/stockService";

export default function Watchlist({ watchlist, watchlistData, handleRemove }) {

  if (!watchlistData.length) {
    return <p className="text-gray-400 animate-pulse">Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {watchlistData.map((stock, i) => {
        const change = stock?.dp;
        const isPositive = change >= 0;

        return (
          <div
            key={watchlist[i].id}
            className="bg-gray-900/70 backdrop-blur p-5 rounded-2xl border border-gray-800 hover:border-gray-600 hover:shadow-xl hover:-translate-y-1 transition"
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold">
                {getCompanyName(ticker).result[0].description}
              </h2>

              <span className={`text-xs px-2 py-1 rounded-full ${isPositive ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
                {isPositive ? "UP" : "DOWN"}
              </span>
            </div>

            <p className="text-3xl font-bold mb-1">
              ${stock?.c}
            </p>

            <p className={`text-sm font-medium ${isPositive ? "text-green-400" : "text-red-400"}`}>
              {isPositive ? "▲" : "▼"} {Number(change.toFixed(2))}%
            </p>

            <button
              onClick={() => handleRemove(watchlist[i].id)}
              className="mt-5 w-full py-2 text-sm rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition"
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}