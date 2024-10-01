import React from 'react';

const Item = ({ name, quantity, category }) => {
    return (
        <li className="p-8 border-b border-gray-500">
            <div className="font-bold text-lg">{name}</div>
            <div className="text-orange-600">Quantity: {quantity}</div>
            <div className="text-orange-600">Category: {category}</div>
        </li>
    );
};

export default Item;