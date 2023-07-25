import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import  styles from './FeatureProducts.module.css'
import $ from "jquery";
import { cartContext } from '../../Context/cartContextProvider'


export default function FeatureProducts(){
  const [products,setproducts]=useState(null)
  const {addProductToCart,removeCartProducts,setnumOfCartItems,numOfCartItems}= useContext(cartContext)

 async function getDataProduct(){

    let {data}= await axios.get("https://route-ecommerce.onrender.com/api/v1/products")
    setproducts(data.data);
  };
   useEffect(()=>{
  getDataProduct()
},[])

async function addMyProduct(id,idx){
  let result= await addProductToCart(id);
  if( await result[0] == true){
   await setnumOfCartItems (await result[1].numOfCartItems)
    console.log(await numOfCartItems);
    $(".successMsg").fadeIn(1000).fadeOut(5000)
    $(`#addBtn${idx}`).fadeOut(500)
    $(`#rmvBtn${idx}`).fadeIn(500)
 }
 }


 async function removeMyProduct(id,idx){
  if( await removeCartProducts(id)===true ){
    $(".rmvMsg").fadeIn(1000).fadeOut(5000)
    $(`#rmvBtn${idx}`).fadeOut(500)
    $(`#addBtn${idx}`).fadeIn(500)
  }
 }
                       
  return (
    <>

<div style={{"display":"none"}} className='  successMsg alert alert-success w-25 text-center position-fixed bottom-0 end-0'>product added Successfully</div>
<div style={{"display":"none"}} className='  rmvMsg alert alert-danger w-25 text-center position-fixed bottom-0 end-0'>product removed Successfully</div>

    {products?<div className="container py-3">

      <div className="row gy-4">
      {products.map((products,idx)=>   <div key={idx} className={`${styles.products} col-lg-3 col-md-4`}>
         
        <Link to={`/ProductDetails/${products._id}`}><div className= "cursor-pointer" >
          <img src={products.imageCover} alt="" className='w-100'/>
         <div className='px-3'>
         <h3 className='h6 fw-bolder my-1 '>{products.title.split(" ").slice(0,2).join(" ")}</h3>
          <span className='small fw-bold text-black'>{products.category.name}</span>
          <div className="d-flex justify-content-between">

          {products.priceAfterDiscount? <>
            <span className=' text-danger'>{products.priceAfterDiscount} EGP <span className=' ms-2 text-muted text-decoration-line-through'>{products.price} EGP </span> </span> 

          </> :  <span className='text-muted'>{products.price} EGP</span>
 }
          <span className='text-black'><i className="text-warning fa-solid fa-star"></i> {products.ratingsAverage}</span>
          </div>
          
         </div>
        </div>
        </Link>
        <button  onClick={()=>{ addMyProduct(products._id ,idx)}} id={`addBtn${idx}` }className={`${styles.btn} btn bg-main  text-white py-1 mt-1 col-12`}> +Add</button>

          <button  onClick={()=>{removeMyProduct(products._id ,idx)}} id={`rmvBtn${idx}`} style={ {"display":"none"} } className='w-100 btn bg-main text-danger fw-bold mt-2' >Remove from Cart - </button>
      </div>
      )}
      </div>
      
    </div>:  <LoadingScreen/>}
    
    </>
  )
}
