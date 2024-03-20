import React from 'react'
import { NavLink } from 'react-router-dom'
import {LOGO_URL} from '../../utils/constant'
import {SearchOutlined ,
  UserOutlined ,
  ShoppingCartOutlined ,
  GlobalOutlined ,
  MoneyCollectOutlined 
} from '@ant-design/icons'
import styles from './Header.module.css'

import { useSelector } from 'react-redux'


const Header = () => {
  const item_in_cart =useSelector(state=>state?.cart?.cart);
  console.log(item_in_cart)
  // const qty_in_cart =item_in_cart.length()
  const qty_in_cart = item_in_cart ? item_in_cart.reduce((a, b) => a + b.qty, 0) : 0;

  return (
   <>
    <div className={styles.headerWrapper}>
      <div className="container">
        <div className={styles.header}>
          
          <div className={styles.logoContainer}>
            <NavLink 
            activeclassname="active"
            to="/"
            >
                <img  src={LOGO_URL} alt="no logo"/>
            </NavLink>
            </div>
            <ul className={styles.navList}>

            {/* <li className={styles.navItem}>
              <NavLink to='/search'
              activeclassname="active">
               
                <SearchOutlined />
                <span className={styles.navText}>Search</span>
               
              </NavLink>
              </li> */}

              <li className={styles.navItem}>
              <NavLink to='/help'
              activeclassname="active">
               
                < GlobalOutlined />
                <span className={styles.navText}>Help</span>
               
              </NavLink>
              </li>


              <li className={styles.navItem}>
              <NavLink to='/cart'
              activeclassname="active">
               
               <ShoppingCartOutlined />
                <span className={styles.navTextCart}>Cart 
                {
                qty_in_cart !== 0 &&
                 (
                    <span className={styles.cartItemBadge}>{qty_in_cart}</span>
                  )}
                
                </span>
               
              </NavLink>
              </li>


              <li className={styles.navItem}>
              <NavLink to='/offer'
              activeclassname="active">
               
               <MoneyCollectOutlined />
                <span className={styles.navText}>Offers</span>
               
              </NavLink>
              </li>
             
              <li className={styles.navItem}>
              <NavLink to='/signUp'
              activeclassname="active">
               
               <UserOutlined />
                <span className={styles.navText}>Sign Up</span>
               
              </NavLink>
              </li>
              
            </ul>
          </div>
        </div>      
    </div>
   </>
  )
}

export default Header
