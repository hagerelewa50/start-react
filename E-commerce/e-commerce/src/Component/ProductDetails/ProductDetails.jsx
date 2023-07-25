import axios from 'axios'
import Slider from 'react-slick'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import  styles from './ProductDetails.module.css'
import { useContext } from 'react'
import { cartContext } from '../../Context/cartContextProvider'
import $ from 'jquery'

export default function ProductDetails() {

 const {addProductToCart,removeCartProducts}= useContext(cartContext)

 async function addMyProduct(id){
  let result= await addProductToCart(id);

  if(  await result[0] === true){
    
    $(".successMsg").fadeIn(1000).fadeOut(3000)
    $("#addBtn").fadeOut(500)
    $('#rmvBtn').fadeIn(500)

  }

 }
 async function removeMyProduct(id){
  if( await removeCartProducts(id)===true){
    $(".rmvMsg").fadeIn(1000).fadeOut(3000)
    $("#rmvBtn").fadeOut(3000)
    $("#addBtn").fadeIn(4000)
  }

 }
 const [productDetail,setproductDetail]=useState(null)
  const {id} =useParams()

   async function getDataDetails(){
    let {data}=await axios.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
     setproductDetail(data.data)
   }

   useEffect(()=>{
    getDataDetails()
   },[])

   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
     <>
    <div className="container ">
     
     {productDetail?  <div className="row align-items-center py-3">
        <div className="col-md-4">
    <Slider {...settings}>
      {productDetail?.images.map((img,index)=>
          <img src={img} alt=""  className="w-100" key={index} />
      )}
  </Slider>
        </div>
        <div className="col-md-8 ps-3">
          <h3 className='fw-bold'>{productDetail.title}</h3>
          <p>{productDetail.description}</p>
          <h6 className='fw-bold'>Brand : <span className='fw-light'>{productDetail.brand.name }</span></h6>
          <h6 className='fw-bold'>Quantity : <span className='fw-light'>{productDetail.quantity}</span> </h6>
          <h6 className='fw-bold'>Price :  <span className='fw-light'>{productDetail.price}</span></h6>

          <button id='addBtn' onClick={()=>{addMyProduct(productDetail.id)}} className='w-100 btn bg-main text-white fw-bold mt-2'>Add to Cart +</button>
          <button id='rmvBtn'  onClick={()=>{removeMyProduct(productDetail.id)}} style={ {"display":"none"} } className='w-100 btn bg-main text-danger fw-bold mt-2'>Remove from Cart - </button>
          <div  style={ {"display":"none"} } className='alert alert-danger text-center py-1 rmvMsg'> removed Successfully from Cart  </div>

          <div  style={ {"display":"none"} } className='alert alert-success text-center py-1 successMsg'> added Successfully To Cart  </div>
        </div>
      </div>: <LoadingScreen/>}

      
    </div>
    </>
  )
}
