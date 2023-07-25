import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { cartContext } from '../../Context/cartContextProvider'
import  styles from './Payment.module.css'

export default function Payment({userData}) {
  const nav =useNavigate()

 const{IdCart}= useContext(cartContext)

 async function confirmCashOrder(IdCart){

  const{data}= await axios.post(`https://route-ecommerce.onrender.com/api/v1/orders/${IdCart}`,{
    "shippingAddress":{
        "details": document.querySelector("#Address").value,
        "phone":  document.querySelector("#Phone").value,
        "city":  document.querySelector("#City").value
        }
},{
  headers:{'token':localStorage.getItem("userToken")}
})
if(data.status==="success"){
  nav("/allOrders")
}
  }

   async function confirmCreditOrder(IdCart){

    try {
      const {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${IdCart}`,{
        "shippingAddress":{
            "details": document.querySelector("#Address").value,
            "phone":  document.querySelector("#Phone").value,
            "city":  document.querySelector("#City").value
            }
    }, {
      headers: {'token':localStorage.getItem("userToken")},
      params:  {'url':"http://localhost:3000"}
     })
  console.log(data);
    if(data.status="success"){

      window.open(data.session.url)

    }
      
    } catch (error) {
      console.log('err',error);
    }
    
   }

  return <>
  <div className="container py-3">
    <h3  className='text-center '>Welcome {userData.name}</h3>


    <form className='col-6 py-3'>
    <label htmlFor='Address' className='mt-3'>Address Details: </label>
    <input type='text' placeholder='Address Details' id='Address' name='Address' className='form-control mt-2' />

    <label htmlFor='Phone' className='mt-3'>Phone: </label>
    <input type='tel' placeholder='Phone' id='Phone' name='Phone' className='form-control mt-2' />
    <label htmlFor='City' className='mt-3'>City: </label>
    <input type='text' placeholder='City' id='City' name='City' className='form-control mt-2' />

    <button onClick={()=>{confirmCashOrder(IdCart)}} type='button' className='btn bg-main text-white mt-4 me-3'>ConfirmCash</button>
    <button onClick={()=>{confirmCreditOrder(IdCart)}} type='button' className='btn bg-main text-white mt-4'>ConfirmCredit</button>

    </form>
  </div>
  </>
}
