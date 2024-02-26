import ItemList from "./item-list";

export default function Page() {

   return (
      <main className="m-4">
         <h1 className="text-4xl font-bold text-slate-300 mb-3">Shopping List</h1>
         <ItemList />
      </main>
   )
}