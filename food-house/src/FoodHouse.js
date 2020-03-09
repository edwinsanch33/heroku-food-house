import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './components/SearchForm'

const FoodHouse = () => {

  const [data, setData] = useState({ hits: [] })
  const [search, setSearch] = useState('chicken')

  const fetchData = async () => {
    const result = await axios(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken`
    );
    setData({ hits: result.data.meals });
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  console.log(data);
 

  return (
    <div>
      <h1>What's For Dinner?</h1>
      <SearchForm setSearch={setSearch} />
      {data.hits.map(meal => {
        return (
          <p>{meal.strMeal}</p>
        )
      })}
    </div>
  )
}



export default FoodHouse;