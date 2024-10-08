"use client";
import { useState } from 'react';


const NewItem = () => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
    };

    const decrement = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    };

    return (
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-36 h-10 bg-slate-500 flex items-center justify-between text-black px-3 py-2">
            <p className="text-lg font-serif mb-4"> {quantity}</p>
            <div className>
                <button 
                    onClick={decrement} 
                    disabled={quantity === 1} 
                    className={`px-3 rounded ${quantity === 1 ? 'bg-black-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
                >
                    -
                </button>
                <button 
                    onClick={increment} 
                    disabled={quantity === 20} 
                    className={`px-3 rounded ${quantity === 20 ? 'bg-gray-300 cursor-not-allowed' : 'bg-slate-800 hover:bg-slate-800 text-white'}`}
                >
                    +
                </button>
            </div>
        </div>
    );
};


export default NewItem;