import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import  styles from './AllOrders.module.css'


export default function AllOrders({userData}) {
  const [AllOrder, setAllOrder] = useState(null)

  async function getAllOrder(){

    try {
      const {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userData.id}`)
      setAllOrder(data)
      console.log(data);
      
    } catch (error) {
      console.log("error:",error);
    }
   
  }

   useEffect(()=>{
    getAllOrder()
    console.log(userData);
   },[])

  return <>
  <div className="container py-2">
    <h3 className='text-center'>Hello {userData.name}</h3>

    {(AllOrder && userData )? <div className="row py-4 gy-4">

{AllOrder.map((order,idx)=>{ return  <div  key={idx} className="col-md-10">

  <h3 className='py-1 my-3 bg-main text-white col-5 text-center rounded-2'>Order {idx+1}</h3>
  <div className="orders">


    <div className="container">
      <div className="row">

        {order.cartItems.map((orddetail,index)=>{ return  <div key={index} className="col-md-3">
          <div className="orderdetails">
            <img src={orddetail.product.imageCover} alt={orddetail.product.title} className="w-100"/>
            <h6 className='text-main'>{orddetail.product.title.split(" ").slice(0,2).join(" ")}</h6>
            <h5>count:{orddetail.count}</h5>
            <h5>price: {orddetail.price}</h5>
          </div>
        </div>
        })}
       
      </div>
    </div>
    <h5 className='text-main'>Total Price: <span className='text-dark'>{order.totalOrderPrice} EGP</span></h5>
    <h5 className='text-main'>OrderType: <span className='text-dark'>{order.paymentMethodType}</span></h5>
    <p>This Order was delivered to ({order.shippingAddress.details}) in({order.shippingAddress.city}) at this Number({order.shippingAddress.phone})</p>
  </div>
</div>

})}

</div>:<LoadingScreen/>}

   





  </div>
  </>
}
