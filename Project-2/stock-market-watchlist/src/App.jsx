// src/App.jsx
import { getStock } from './components/stockService';
import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import KeyIndexPage from './pages/KeyIndexPage';
import { Routes, Route } from "react-router-dom";
import AddStockFormPage from './pages/AddStockFormPage';
import WatchlistPage from './pages/WatchlistPage';
const App = () => {
  
  return (
  <div className="min-h-screen bg-gray-950 text-white">
    <NavBar />

    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-2">
        📈 Stock Watchlist
      </h1>
      <p className="text-gray-400 mb-8">
        Track your favourite stocks and monitor performance.
      </p>

      <Routes>
        <Route path="/" element={<h2 className="text-xl text-gray-300">Home Page</h2>} />
        <Route path="/watchlist/add" element={<AddStockFormPage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
        <Route path="/keyindex" element={<KeyIndexPage />} />
      </Routes>
    </div>
  </div>
)
};

export default App;