import React from 'react';

const ItemList = ({  }) => {
    const items = [
        { name: "milk, 4 L 🥛", quantity: 1, category: "dairy" },
        { name: "bread 🍞", quantity: 2, category: "bakery" },
        { name: "eggs, dozen 🥚", quantity: 2, category: "dairy" },
        { name: "bananas 🍌", quantity: 6, category: "produce" },
        { name: "broccoli 🥦", quantity: 3, category: "produce" },
        { name: "chicken breasts, 1 kg 🍗", quantity: 1, category: "meat" },
        { name: "pasta sauce 🍝", quantity: 3, category: "canned goods" },
        { name: "spaghetti, 454 g 🍝", quantity: 2, category: "dry goods" },
        { name: "toilet paper, 12 pack 🧻", quantity: 1, category: "household" },
        { name: "paper towels, 6 pack", quantity: 1, category: "household" },
        { name: "dish soap 🍽️", quantity: 1, category: "household" },
        { name: "hand soap 🧼", quantity: 4, category: "household" }
    ];

    return (
        <ul className="space-y-4">
            {items.map((item, index) => (
                <li
                    key={index}
                    className="p-4 bg-slate-500 shadow-md border rounded-lg max-w-md w-full mx-left flex justify-between items-left"
                >
                    <div className="text-lg font-semibold">{item.name}</div>
                    <div className="text-sm text-600 font-serif">Quantity: {item.quantity}</div>
                    <div className="text-sm text-500 font-serif">{item.category}</div>
                </li>
            ))}
        </ul>
    );
    
};

export default ItemList;
