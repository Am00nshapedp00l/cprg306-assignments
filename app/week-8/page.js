"use client";
import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    // Extract and clean up the item name
    const cleanedItemName = item.name
      .split(',')[0]                // Take only the first part before any comma
      .replace(/[^a-zA-Z\s]/g, '')   // Remove emojis and non-alphabetic characters
      .trim();                       // Remove whitespace

    setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="m-4 text-white bg-slate-950 p-4 flex flex-col items-start">
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <div className="flex">
        <div className="flex flex-col items-start">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}

