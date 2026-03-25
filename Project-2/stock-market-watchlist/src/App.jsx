// src/App.jsx
// src/App.jsx
import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom";
import AddStockFormPage from './pages/AddStockFormPage';
import WatchlistPage from './pages/WatchlistPage';
import KeyIndexPage from './pages/KeyIndexPage';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <NavBar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">
            📈 Stock Watchlist
          </h1>
          <p className="text-gray-400 mt-2">
            Track your favourite stocks and monitor performance in real time.
          </p>
        </header>

        <Routes>
          <Route path="/" element={<h2 className="text-gray-400">Home Page</h2>} />
          <Route path="/watchlist/add" element={<AddStockFormPage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
          <Route path="/keyindex" element={<KeyIndexPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;