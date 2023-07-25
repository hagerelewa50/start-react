import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { cartContext } from '../../Context/cartContextProvider'
import $ from 'jquery'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import  styles from './Cart.module.css'
import { useEffect } from 'react'

export default function Cart() {
    const nav = useNavigate();

 const {numOfCartItems,totalCartPrice,productCart,removeCartProducts,updateCartProduct,getCartProducts}= useContext(cartContext)

 useEffect(()=>{
  checkCart()
  getCartProducts()
  },[]);
  useEffect(()=>{
    checkCart()
    },[numOfCartItems]);

    function checkCart(){
      console.log('hello');
  if (numOfCartItems===0){
    
  $('.errorcart').fadeIn(1000,function(){
    setTimeout(()=>{
      $('.errorcart').fadeOut(2000)
      nav('/')
    })
  })
  }

 }

  return <>

<div className="container py-3">
    <div className="price d-flex justify-content-between">
    <h5 className='text-main text-center me-5 mt-2'> Total Price: <span className='text-dark'>{totalCartPrice} EGP</span></h5>
    <Link to='/Payment'>
    <button className='btn bg-main text-white fw-bold me-auto'>Confirm</button>
    </Link>
    </div>
  <h5 className='text-main'>Number Of Products : <span className='text-dark'> {numOfCartItems}</span></h5>

    {productCart? <div className="row gy-3 pt-3">

      {productCart.map((pro,idx)=> <div  key={idx} className="col-md-3">
  <div className="item">
    <img src={pro.product.imageCover} alt={pro.product.title} className='w-100' />
    <h4 className='text-main mt-2'>{pro.product.title.split(" ").slice(0,2).join(" ")}</h4>
    <div className="count d-flex justify-content-between pe-5 ">
    <h6 className='text-main'>Count: <span className='text-dark'>{pro.count} </span></h6>
    <input  className='form-control w-25 py-1' min={1} type="number" value={pro.count} onChange={(e)=>{updateCartProduct(pro.product.id,e.target.value)}}/>


    </div>
    <h6 className='text-main'>Price: <span className='text-dark'>{pro.price} EGP</span></h6>
    <button onClick={()=>{removeCartProducts(pro.product.id)}} className='btn bg-danger text-white'>Remove from cart</button>
  </div>
</div>
)}

</div>:<LoadingScreen/> }
   
  </div>
  <div className='alert alert-danger errorcart mb-2 col-6 text-center mx-auto'style={{"display":"none"}} > No Cart Exist</div>

 
  </>
}
