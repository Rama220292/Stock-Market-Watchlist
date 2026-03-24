import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex gap-6 text-sm font-medium">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400"
              : "text-gray-400 hover:text-white transition"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/watchlist/add"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400"
              : "text-gray-400 hover:text-white transition"
          }
        >
          Add Stock
        </NavLink>

        <NavLink
          to="/watchlist"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400"
              : "text-gray-400 hover:text-white transition"
          }
        >
          Watchlist
        </NavLink>

        <NavLink
          to="/keyindex"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400"
              : "text-gray-400 hover:text-white transition"
          }
        >
          Key Indexes
        </NavLink>

      </div>
    </nav>
  )
}