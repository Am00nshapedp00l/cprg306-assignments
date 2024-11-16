"use client";
import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
};

const fetchMealDetails = async (mealId) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
};

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null); // State for selected meal

    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
        setSelectedMeal(null); // Reset selected meal when ingredient changes
    };

    const handleMealClick = async (mealId) => {
        const mealDetails = await fetchMealDetails(mealId);
        setSelectedMeal(mealDetails);
    };

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div className="max-w-lg text-white">
            <h2 className="text-2xl font-bold mb-4">Meal Ideas for {ingredient}</h2>
            
            <ul className="grid grid-cols-2 gap-4">
                {meals.map((meal) => (
                    <li
                        key={meal.idMeal}
                        onClick={() => handleMealClick(meal.idMeal)}
                        className="cursor-pointer p-2 bg-gray-800 rounded-lg hover:bg-gray-700 flex flex-col items-center text-center"
                    >
                        <img
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            className="w-16 h-16 rounded mb-2"
                        />
                        <h3 className="text-sm font-semibold">{meal.strMeal}</h3>
                    </li>
                ))}
            </ul>

            {selectedMeal && (
                <div className="mt-6 p-4 bg-gray-900 rounded-lg text-center">
                    <h3 className="text-xl font-bold mb-2">{selectedMeal.strMeal}</h3>
                    <img
                        src={selectedMeal.strMealThumb}
                        alt={selectedMeal.strMeal}
                        className="w-32 h-32 rounded mx-auto mb-4"
                    />
                    <h4 className="text-lg font-semibold mt-4">Ingredients needed:</h4>
                    <ul className="list-disc list-inside mt-2">
                        {Array.from({ length: 20 }).map((_, i) => {
                            const ingredient = selectedMeal[`strIngredient${i + 1}`];
                            const measure = selectedMeal[`strMeasure${i + 1}`];
                            return (
                                ingredient && (
                                    <li key={i} className="text-sm">
                                        {ingredient} {measure && `(${measure.trim()})`}
                                    </li>
                                )
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MealIdeas;

