import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import CheckOutForm from '../../components/checkoutForm/CheckOutForm'

const stripePromise=loadStripe("pk_test_51OwjwASAH2bcG2tPI9lnUzCveei2PhDUV4ykg9whkGTmR8MLLunIJHm8bQBzONQncQ6rsQ0384w1xhq7gE1pbijB00CojCGGBX") 

const Payment = () => {
    const options = {
        mode: "payment",
        currency: "usd",
        amount: 1099,
      };
  return (
    <>
    <Elements stripe={stripePromise}  options={options}>

        <CheckOutForm/>
    </Elements>
    
    </>
  )
}

export default Payment
