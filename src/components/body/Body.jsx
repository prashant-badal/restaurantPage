import React, { useEffect, useState } from 'react'
import styles from './Body.module.css'

import { ALL_RESTAURANTS_DATA } from '../../asset/restData';
import RestCard from '../restCard/RestCard';


const Body = () => {
  const resList=ALL_RESTAURANTS_DATA?.data?.cards[2]?.data?.data?.cards;
  // console.log(resList);
// const [restaurantList,setRestuarantList]=useState([])

// useEffect(()=>{
// getData();
// })

// const getData=()=>{
//   fetch
// }

 
     console.log("reslist", resList);

     return resList?.length === 0 ? (
    <h1>no image is loading UI</h1>
    // <RescardSkelton />
  ) : (
    <div className={styles.bodyWrapper}>

       
          {resList?.map(restaurant => {
            return <RestCard {...restaurant.data} key={restaurant.data.id} />;
          })}
        
      
    </div>
    
    
  )
}

export default Body
