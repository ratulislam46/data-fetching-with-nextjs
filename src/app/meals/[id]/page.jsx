import React from 'react';

const getSingleMeal = async (meals_id) => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meals_id}`)
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.log('error', error);
        return [];
    }
}

const MealsDetails = async ({ params }) => {

    const mealId = await params;
    console.log(mealId);
    const signleMeal = await getSingleMeal(mealId.id)
    console.log(signleMeal);

    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>MealId : {mealId.id}</h1>
        </div>
    );
};

export default MealsDetails;