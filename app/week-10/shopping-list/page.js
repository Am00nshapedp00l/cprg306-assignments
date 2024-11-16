"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context"; // Adjust path as needed
import { useRouter } from "next/navigation"; // Use router for navigation
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "./shopping-list-service";

export default function ShoppingListPage() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth(); // Get user from auth context
  const router = useRouter(); // Initialize router for navigation

  useEffect(() => {
    // If the user is not logged in, redirect to the landing page (/week-9)
    if (!user) {
      router.push("/week-9"); // Redirect to /week-9 if the user is not logged in
    }
  }, [user, router]); // Run this effect when `user` changes

  useEffect(() => {
    const loadItems = async () => {
      if (user) {
        const items = await getItems(user.uid);
        setItems(items);
      }
    };

    loadItems();
  }, [user]);

  // If `user` is undefined (checking for initial loading), render a loading state
  if (user === undefined) {
    return <p>Loading...</p>;
  }

  // If the user is not logged in, prevent the page from rendering
  if (!user) {
    return null;
  }

  // Handle adding a new item to the list
  const handleAddItem = async (newItem) => {
    const itemId = await addItem(user.uid, newItem);
    newItem.id = itemId;
    setItems([...items, newItem]);
  };

  // Handle selecting an item
  const handleItemSelect = (item) => {
    const cleanedItemName = item.name
      .split(",")[0] // Take only the first part before any comma
      .replace(/[^a-zA-Z\s]/g, "") // Remove emojis and non-alphabetic characters
      .trim(); // Remove whitespace

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
