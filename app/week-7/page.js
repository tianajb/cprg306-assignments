"use client";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";
import MealIDeas from "./meal-ideas";


export default function Page() {
   const [items, setItems] = useState(itemsData);
   const handleAddItem = (item) => {
      setItems([...items, item]);
   };

   const [selectedItemName, setSelectedItemName] = useState("");
   const handleItemSelect = (selectedItem) => {
      selectedItem.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
   };

   return (

      <main className="m-4">
         <h1 className="text-4xl font-bold text-slate-300 mb-3">Shopping List</h1>
         <div className="my-3">
            <div>
               <NewItem onAddItem={handleAddItem} />
               <MealIDeas onItemSelect={selectedItemName} />
            </div>
            <div>
               <ItemList items={items} />
            </div>

         </div>
      </main>
   )
}