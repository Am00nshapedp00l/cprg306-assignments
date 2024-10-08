import React from 'react';
import ItemList from './item-list';

const Page = () => {
    return (
        <main className="p-4 bg-stone-400-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
            <ItemList />
        </main>
    );
};

export default Page;