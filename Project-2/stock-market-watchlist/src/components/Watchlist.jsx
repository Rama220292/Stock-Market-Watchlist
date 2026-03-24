export default function Watchlist({ watchlist, watchlistData, handleRemove }) {

  if (!watchlistData.length) {
    return <p className="text-gray-400">Loading...</p>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {watchlistData.map((stock, i) => {
        const change = stock?.dp;
        const isPositive = change >= 0;

        return (
          <div
            key={watchlist[i].id}
            className="bg-gray-900 p-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {watchlist[i].fields.Name}
            </h2>

            <p className="text-gray-400 text-sm">Price</p>
            <p className="text-2xl font-bold mb-2">
              ${stock?.c}
            </p>

            <p className={`text-sm font-medium ${isPositive ? "text-green-400" : "text-red-400"}`}>
              {isPositive ? "▲" : "▼"} {Number(change.toFixed(2))}%
            </p>

            <button
              onClick={() => handleRemove(watchlist[i].id)}
              className="mt-4 text-sm text-red-400 hover:text-red-300 transition"
            >
              Remove
            </button>
          </div>
        )
      })}
    </div>
  )
}