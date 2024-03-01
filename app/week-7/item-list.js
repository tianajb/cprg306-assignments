"use client"
import Item from "./item";
import { useState } from "react";


export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");

    //===========ADDED===========
    const [selectedItem, setSelectedItem] = useState(null);
    // Example function that sets selectedItem

    function onItemSelect(item) {
        setSelectedItem(item);
    }
    //===========END OF ADDED CODE===========
    if (sortBy === "name") {
        items.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (sortBy === "category") {
        items.sort((a, b) => a.category.localeCompare(b.category));
    };


    return (
        <main className="m-4">
            {
                <div className="size-96">
                    <div className="my-3">
                        <strong>Sort by:</strong>
                        <button id="name"
                            onClick={() => setSortBy("name")}
                            className="bg-green-600 active:bg-green-300
                            size-10 w-32 m-1 rounded-md">Name</button>
                        <button id="category"
                            onClick={() => setSortBy("category")}
                            className="bg-green-600 active:bg-green-300
                            size-10 w-32 m-1 rounded-md">Category</button>
                    </div >

                    <div>
                        <ul>
                            {items.map((item) => (
                                <li key={item.id} onClick={() => onItemSelect(item.name)}
                                    style={{ backgroundColor: selectedItem === item ? 'blue' : 'transparent' }}>
                                    <Item name={item.name} quantity={item.quantity} category={item.category} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


            }
        </main>

    );

}


