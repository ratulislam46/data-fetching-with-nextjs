"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const MealsPage = () => {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');

    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const data = await res.json();
            setMeals(data.meals || []);
            return data?.meals;
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchMeals()
    }, [search])

    return (
        <div>
            <h2 className='text-3xl lg:text-5xl font-bold mb-8 border-b pb-2 text-center'>All Meals</h2>

            <div className='mb-10 w-[50%] text-black'>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='bg-white px-8 py-2 rounded-xs'
                />
            </div>

            {/* meals  */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {/* <p>{JSON.stringify(meals)}</p> */}
                {
                    meals?.map(signleMeal => {
                        return (
                            <div key={signleMeal.idMeal} className='border rounded-xl p-4 space-y-4'>
                                <img src={signleMeal.strMealThumb} alt="" />
                                <h3 className='text-2xl font-bold'>{signleMeal.strMeal}</h3>
                                <p>{signleMeal.strInstructions.slice(0, 150) + '....'}</p>

                                <Link href={`meals/${signleMeal.idMeal}`}>
                                    <button className='px-4 py-1 border rounded-xl bg-blue-500 hover:border-white hover:text-white'>Details</button>
                                </Link>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MealsPage;