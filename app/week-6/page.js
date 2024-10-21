
import ItemList from './item-list';

export default function Page() {
  return (
    <main className="m-4 text-white bg-slate-950 p-4 flex flex-col items-start">
      {/* Heading here */}
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      {/* Render ItemList */}
      <ItemList />
    </main>
  );
}
