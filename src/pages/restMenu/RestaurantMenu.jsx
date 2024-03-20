import React from 'react'
import { ARRAY_OF_MENU_OF_RESTAURANTS } from '../../asset/restData';
import {StarFilled} from "@ant-design/icons";
import "./Menu.css";
import { BASE_IMG_URL } from '../../utils/constant';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slice/cartSlice';

const RestaurantMenu = () => {
  const dispatch =useDispatch();
    const resMenuData = ARRAY_OF_MENU_OF_RESTAURANTS;


    const resData = resMenuData[0].data;

   
    const {name, labels, avgRating, menu} = resData;


  

  return (
   <>
    <div className="resmenu-container">
      <div className="res-menu-header">
        <div className="res-header-left">
        
          <h2>{name}</h2>
          <p>{labels.find(label => label.title === "Address")?.message}</p>
        </div>
        <div className="res-header-right">
          <div className="res-header-rating">
            <StarFilled />
            <span>{avgRating}</span>
         

          </div>
        </div>
        </div>


        <div className="res-menu-container">
        {menu &&
          Object.values(menu.items).map(item => (
            <div className="res-item-card" key={item.id}>
              <div className="res-item-card-left">
                <h3>{item.name}</h3>
                <p>₹{Math.trunc(item.price / 100)}</p>
              </div>
              <div className="food-img">
                <img
                  src={
                    BASE_IMG_URL +
                    (item.cloudinaryImageId || resData.cloudinaryImageId)
                  }
                  alt={item.name}
                />
              
                
                    <div
                      className="add-item-button"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      Add Item
                    </div>
                
                </div>
              </div>
          
          ))}
      </div>
        </div>
   
   
   </>
  )
}

export default RestaurantMenu
