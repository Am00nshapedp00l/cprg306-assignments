"use client";
import { useState } from 'react';

const NewItem = () => {
    // State for quantity
    const [quantity, setQuantity] = useState(1);

    // State for name and category
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    // Handlers for quantity
    const increment = () => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
    };

    const decrement = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    };

    // Form submit handler
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission default

        // Create item object
        const item = {
            name: name,
            quantity: quantity,
            category: category
        };

        // Log the item object to the console
        console.log(item);

        // Alert the current state
        alert(`Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        // Reset form fields
        setName("");
        setCategory("Produce");
        setQuantity(1);
    };

    return (
        <div className="p-6 bg-gray-800 max-w-md mx-auto mt-10 rounded-lg shadow-lg text-white">
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name field */}
                <div>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        placeholder="Item Name"
                        onChange={(e) => setName(e.target.value)} 
                        required 
                        className="w-full px-4 py-2 rounded-lg text-gray-800 placeholder-gray-500 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Quantity and Category Fields Side by Side */}
                <div className="flex space-x-11">
                    {/* Quantity field */}
                    <div className="flex items-center bg-slate-500 text-black rounded-lg px-3 py-2">
                        <span className="text-lg font-serif">{quantity}</span>
                        <button 
                            type="button" 
                            onClick={decrement} 
                            disabled={quantity === 1} 
                            className={`px-3  rounded-full ${quantity === 1 ? 'bg-black-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
                        >
                            -
                        </button>
                        <button 
                            type="button" 
                            onClick={increment} 
                            disabled={quantity === 20} 
                            className={`px-3 rounded-full ${quantity === 20 ? 'bg-gray-300 cursor-not-allowed' : 'bg-slate-800 hover:bg-slate-800 text-white'}`}
                        >
                            +
                        </button>
                    </div>

                    {/* Category field */}
                    <div className="flex-auto bg-slate-500 p-2 rounded-lg">
                        <select 
                            id="category" 
                            value={category} 
                            onChange={(e) => setCategory(e.target.value)} 
                            className="w-full px-3 py-2 bg-gray-100 text-gray-800 rounded-lg focus:outline-none"
                        >
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                {/* Submit button */}
                <div className="flex justify-center">
                    <button 
                        type="submit" 
                        className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewItem;


