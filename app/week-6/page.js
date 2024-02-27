"use client";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";


export default function Page() {
   const [items, setItems] = useState(itemsData);
   const handleAddItem = (item) => {
      setItems([...items, item]);
   };

   return (
      <main className="m-4">
         <h1 className="text-4xl font-bold text-slate-300 mb-3">Shopping List</h1>
         <div className="my-3">
            <div>
               <NewItem onAddItem={handleAddItem} />
            </div>
            <div>
               <ItemList items={items} />
            </div>

         </div>
      </main>
   )
}