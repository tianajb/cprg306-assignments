
"use client";
import { useState, useEffect } from "react";



const fetchMealIdeas = async (ingredient) => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}");
    console.log(response);
    const data = await response.json();


    console.log(data);
    if (data) {
        return Object.keys(data.message); // Object.keys returns an array of the object's keys        
    }
    else {
        return [];
    }


};


export default function MealIDeas({ ingredient }) {

    const [meals, setMeals] = useState([]);


    const loadMealsIdeas = async () => {
        const meals = await fetchMealIdeas(ingredient);
        setMeals(meals);
    };

    useEffect(() => {
        loadMealsIdeas();
    }, [ingredient]);



    return (
        <main>
            <div>
                <h1>Meal Ideas</h1>
                {ingredient == null ?
                    <p>Select an item to see meal ideas</p> :
                    <p>Here are some meal ideas using {ingredient}:</p>
                }


            </div>

            <div>
                <ul>
                    {meals.map((item) => (
                        <li key={item.idMeal} >
                            {item.strMeal}
                        </li>
                    ))}
                </ul>
            </div>

        </main >
    );
}