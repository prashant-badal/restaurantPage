
import React from 'react'
import Footer from './components/footer/Footer';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';

import Header from './components/header/Header';
import Search from './pages/search/Search';
import Cart from './pages/cart/Cart';
import Help from './pages/help/Help';
import Offer from './pages/offer/Offer';
import SignUp from './pages/signUp/SignUp';
import RestaurantMenu from './pages/restMenu/RestaurantMenu';
import ErrorComponent from './pages/errPage/ErrorComponent';
// import store from './redux/store';
import { Provider } from 'react-redux'
import store  from './redux/store';
import Payment from './pages/payment/Payment';


const App=()=>{
  return  (
    <>
    <Provider store={store}>

   
    <RouterProvider router={router} />
    </Provider>
    </>
  )
}

const AppLayout = () => {
  return (
   <>
   <Header/>
    <Outlet/>
   <Footer/>
   </>
  )
}

const router=createBrowserRouter([
  {path:"/",
  // errorElement:<ErrorComponent/>,
  element:<AppLayout/>,
  children:[{
    path:"/",
  element:<Home/>,
  }
,{
  path:"/restaurant/:id",
  element:<RestaurantMenu/>,
},
{ path:'/cart',
element:<Cart/>
},
{
  path:"/search",
  element:<Search/>
},

{
  path:"/help",
  element:<Help/>
},
{
  path:"/offer",
  element:<Offer/>
},
{
  path:"/signUp",
  element:<SignUp/>
},
]},




{
  path:"/payment",
  element:<Payment/>
},

  





])




export default App;
