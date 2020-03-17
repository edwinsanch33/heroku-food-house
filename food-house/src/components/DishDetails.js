import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DishDetails = (id) => {



    const [recipe, setRecipe] = useState({ meals: [] })

    const getRecipe = async () => {
        const { data } = await axios(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
        );
        setRecipe({ meals: data.meals[0] });
      };
 

      useEffect(() => {
        getRecipe();
      }, []);

      console.log(recipe);

    return (
        <div>
            <h1>About This Dish</h1>
            <p>{recipe.meals.strMeal}</p>
        </div>
    )
}

export default DishDetails;