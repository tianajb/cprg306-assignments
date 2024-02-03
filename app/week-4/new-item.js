"use client";

import { useState } from "react"

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    function handleSubmit(event) {
        event.preventDefault();
        const item = { name, quantity, category };

        alert("Item: " + item.name + " Quantity: " + item.quantity + " Category: " + item.category)

        setName("");
        setQuantity(1);
        setCategory("produce");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className=" bg-slate-200 text-slate-950 size-96 align-middle h-40">
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="name" value={name}
                            onChange={(event) => setName(event.target.value)}
                            className="p-2 m-1 rounded-md w-80" required />
                    </div>
                    <div>
                        <label htmlFor="quantity">Qty:</label>
                        <input type="number" id="quantity"
                            min="1" max="99" value={quantity}
                            onChange={(event) => setQuantity(event.target.value)}
                            className="p-2 m-1 rounded-md w-24" />

                        <label htmlFor="category">Category:</label>
                        <select id="category" value={category}
                            onChange={(event) => setCategory(event.target.value)}
                            className="p-2 m-1 rounded-md" >
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
                    <div className="flex items-center justify-center">
                        <button type="submit"
                            className="bg-sky-200 active:bg-green-200
                            hover:bg-sky-400 hover: font-bold  
                            size-10 m-1 rounded-md w-11/12">+
                        </button>
                    </div>
                </div>
            </form >

        </div >
    );
}
