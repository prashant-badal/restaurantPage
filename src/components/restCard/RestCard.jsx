import React from 'react'
import styles from './RestCard.module.css'
import {StarFilled} from "@ant-design/icons";
import { Card } from 'antd';
import { BASE_IMG_URL } from '../../utils/constant';
import { Link, useParams } from 'react-router-dom';




const RestCard = ({ avgRating,
    cloudinaryImageId,
    slaString,
    name,
    id,
    cuisines,
    costForTwo}) => {

       
  return (
   <>
   <Link className={styles.linkRest} to={`restaurant/${id}`}>
   
  
     <Card
    hoverable
    style={{ width: 300 }}
    cover={<img    
         className={styles.resImg} 
          alt="resturants" src={BASE_IMG_URL +cloudinaryImageId}/>}
  >
   <h2 className={styles.name} >
          {name}
        </h2>
        <p 
        className={styles.resItemName}
        >{cuisines.join(", ")}</p>
        <div
         className={styles.resDetail}
         >
          <div 
          className={styles.resRating}
          >
         <StarFilled />
            <span>{avgRating}</span>
          </div>
          <p 
          className={styles.deliveryTime}
          >{slaString}</p>
          <p 
          className="deliveryTime"
          >₹ {Math.floor(costForTwo / 100)}</p>
          </div>
  </Card>
  </Link>
   </>
  )
}

export default RestCard
