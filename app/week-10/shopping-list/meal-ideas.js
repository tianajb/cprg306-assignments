
"use client";
import { useState, useEffect } from "react";



const fetchMealIdeas = async (ingredient) => {

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
};

export default function MealIDeas({ ingredient }) {

    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        const meals = await fetchMealIdeas(ingredient);
        setMeals(meals);
    };

    useEffect(() => {
        if (ingredient === "") return;
        loadMealIdeas();
    }, [ingredient]);

    return (
        <main>
            <div className="p-2 mb-3 w-80">
                <h1 className="text-2xl font-bold text-slate-300">Meal Ideas</h1>


                {ingredient === "" ? (
                    <p className="text-1xl text-slate-300">Select an ingredient to see meal ideas.</p>
                ) : (
                    meals !== null ? (
                        <p className="text-1xl text-slate-300">Here are some meal ideas using {ingredient}:</p>
                    ) : (
                        <p className="text-1xl text-slate-300">No meal ideas found for {ingredient}.</p>
                    )
                )}

            </div>
            <div>
                <ul>
                    {meals && meals.map((meal) => (
                        <li key={meal.idMeal}
                            className="border-y-gray-500 border-2 p-2 mb-3 w-80">
                            {meal.strMeal}
                        </li>
                    ))}
                </ul>
            </div>
        </main >
    );
}