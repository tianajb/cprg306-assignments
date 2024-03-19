"use client";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";
import MealIDeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

import MPage from "./page";


export default function Page() {
   const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

   const [items, setItems] = useState(itemsData);
   const handleAddItem = (item) => {
      setItems([...items, item]);
   };

   const [selectedItemName, setSelectedItemName] = useState("");
   const handleItemSelect = (selectedItem) => {

      setSelectedItemName(selectedItem.split(",")[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD10-\uDDFF])|/g, ''));
   };

   return (
      <main className="m-4" >



         {user ? (
            <div>
               <h1 className="text-4xl font-bold text-slate-300 mb-3">Shopping List</h1>
               <div className="my-3 flex flex-row ">
                  <div className="size-96">
                     <NewItem onAddItem={handleAddItem} />
                     <ItemList items={items} onItemSelect={handleItemSelect} />
                  </div>
                  <div className="w-5/6 mx-9">

                     <MealIDeas ingredient={selectedItemName} />
                  </div>
               </div>
            </div>

         ) :
            (
               <div className="text-2xl">
                  <p>You are not signed in</p>
                  <p>Click <strong><Link href="./">here</Link></strong> to sign in</p>

               </div>

            )
         }


      </main >
   )
}