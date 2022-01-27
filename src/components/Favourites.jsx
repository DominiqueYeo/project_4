/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/*
 * ========================================================
 * ========================================================
 *
 *                      Imports
 *
 * ========================================================
 * ========================================================
 */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Restaurants from './Restaurants.jsx';

/*
 * ========================================================
 * ========================================================
 *
 *           Component for Favourited Foods
 *
 * ========================================================
 * ========================================================
 */
export default function Favourites({ obj }) {
  const [retrievedRestaurantData, setRetrievedRestaurantData] = useState();
  useEffect(() => {
    axios.post('/favourite/retrieve', obj).then((response) => {
      console.log('y work but no appear');
      setRetrievedRestaurantData(response.data);
      // restaurantData = response.data;
      console.log(response.data);
    });
  }, []);
  return (
    <div>
      <Restaurants restaurantData={retrievedRestaurantData} remove="removeFav" obj={obj} />
    </div>
  );
}
