"use client";
import React, { useState } from 'react';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...items];

  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <main className="m-4 text-white bg-slate-950 flex flex-col items-start">
      <div className="px-4">
        <div className="mb-4">
          <label htmlFor="sort" className="text-xl mr-4">Sort by: </label>
          <button
            className="bg-orange-500 p-2 m-2 w-28 rounded-lg shadow-md"
            onClick={() => setSortBy("name")}
          >
            Name
          </button>
          <button
            className="bg-orange-700 p-2 m-2 w-28 rounded-lg shadow-md"
            onClick={() => setSortBy("category")}
          >
            Category
          </button>
        </div>
        <ul className="space-y-4">
          {sortedItems.map((item, index) => (
            <li
              key={index}
              className="p-4 bg-slate-500 shadow-md border rounded-lg max-w-md w-full flex justify-between items-start cursor-pointer"
              onClick={() => onItemSelect(item)}
            >
              <div className="text-lg font-semibold">{item.name}</div>
              <div className="text-sm font-serif">Quantity: {item.quantity}</div>
              <div className="text-sm font-serif">{item.category}</div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}