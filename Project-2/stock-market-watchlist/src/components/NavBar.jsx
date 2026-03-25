import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-gray-900/80 backdrop-blur border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="font-bold text-lg tracking-wide">
          📊 StockApp
        </h1>

        <div className="flex gap-6 text-sm font-medium">
          {[
            { to: "/", label: "Home" },
            { to: "/watchlist/add", label: "Add Stock" },
            { to: "/watchlist", label: "Watchlist" },
            { to: "/keyindex", label: "Indexes" },
          ].map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400"
                  : "text-gray-400 hover:text-white transition"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}