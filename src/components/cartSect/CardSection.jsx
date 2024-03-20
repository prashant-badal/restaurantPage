import React from 'react'
import image1 from "../../asset/image/download.jpeg"
import styles from "./Card.module.css"
import { HeartOutlined } from '@ant-design/icons'

import { useDispatch, useSelector } from 'react-redux';
import { BASE_IMG_URL } from '../../utils/constant';
import EmptyCart from '../emptyCart/EmptyCart';
import { addToCart, removeFromCart } from '../../redux/slice/cartSlice';


const CardSection = () => {
  const dispatch = useDispatch();
  const cart_item = useSelector(state => state.cart.cart);
  // const currentRestaurant = useSelector(
  //   state => state.cartslice.currentRestaurant
  // );

  // const { name, city} = currentRestaurant;

  return  cart_item.length <= 0 ? (
    <EmptyCart />
  ) : (
 <>
    <div className={styles.cardWrapper}>
        <div className={styles.container}>
            <div className={styles.resTop}>
                <div className={styles.imgDiv}>
                    <img  src={image1} alt='image Rest'/>
                   
                </div>
                <div className={styles.cartResDetail}>
                        <h2>ALOK Restaurant</h2>
                        <p>Rewa, Madhya Pradesh</p>
                    
                 </div>
                
            </div>
            <div className={styles.CartItemList}>

            {cart_item.map(item => {
              return (<>
            <div className={styles.cartFood}>

            

                <div className={styles.cardFoodDetail}>

                
                <div className={styles.foodName}>
                <HeartOutlined />{item?.name} 
                </div>
                <div className={styles.foodPrice}>
                ₹
                        {Math.trunc(
                          parseInt(
                            (item?.price ? item?.price : item?.defaultPrice) /
                              100
                          ) * item?.qty
                        )}
                </div>   
                </div>   
        
              
              
                            <div  className={styles.buttonContainer}>
                    <button onClick={() => dispatch(removeFromCart(item))} className={styles.increment}>-</button>
                    <span className={styles.buttonText}> Items :{item?.qty}</span>
                    <button   onClick={() => dispatch(addToCart(item))} className={styles.increment}>+</button>
                </div>
                </div>
           


                    
                
                </>
              )})}
                  
            </div>

           
               </div>

               </div>
        
   
 </>
  )
}

export default CardSection
