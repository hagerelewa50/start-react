import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import  styles from './BrandProducts.module.css'

export default function BrandProducts() {
  const [brandpro, setbrandpro] = useState(null)
  const {id} =useParams()

   async function getDataBrandProduct(){

    let {data} = await axios.get("https://route-ecommerce.onrender.com/api/v1/products",{
      params:{"brand":id}
    })
    setbrandpro(data.data);
   }
   useEffect(()=>{
    getDataBrandProduct()
   },[])

  return (
    <>
    {brandpro? <div className="container">
      <div className="row">
    {brandpro.length == 0 ? <h2 className='text-center py-3 bg-main text-white my-2 rounded-3'>No Products Brand Avaliable Right Now..... </h2>:brandpro.map((products)=> <div key={products._id} className="col-md-4">
    <Link to={`/ProductDetails/${products._id}`}><div className={`${styles.products} cursor-pointer`} >
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

          <button className={`${styles.btn} btn bg-main  text-white py-1 mt-1 col-12`}> +Add</button>
         </div>


        </div></Link>



        </div>)}
       


      </div>
    </div>: <LoadingScreen/> }
 
    
    
    </>



    
  )
}
