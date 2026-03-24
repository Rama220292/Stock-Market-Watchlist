import { useEffect, useState } from "react";
import { getStock } from "./stockService";

export default function KeyIndex({ indexes, keyIndexName }) {

  if (!indexes.length) {
    return <p className="text-gray-400">Loading...</p>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {indexes.map((stock, i) => {
        const change = stock?.dp;
        const isPositive = change >= 0;

        return (
          <div
            key={i}
            className="bg-gray-900 p-5 rounded-2xl shadow-md"
          >
            <h2 className="text-lg font-semibold mb-2">
              {keyIndexName[i]}
            </h2>

            <p className="text-2xl font-bold">
              ${stock?.c}
            </p>

            <p className={`${isPositive ? "text-green-400" : "text-red-400"}`}>
              {Number(change.toFixed(2))}%
            </p>
          </div>
        )
      })}
    </div>
  )
}