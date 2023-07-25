import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import  styles from './Brand.module.css'

export default function Brand() {
  const [AllBrands,setAllBrands]=useState(null)
   

 async function getDataBrands(){
    let {data}= await axios.get("https://route-ecommerce.onrender.com/api/v1/Brands")
    setAllBrands(data.data);
  };
   useEffect(()=>{
    getDataBrands()
},[])


  return (
    <>
    {AllBrands?<div className="container py-3">
      <div className="row gy-4 align-items-center">
        <div className='col-lg-3 col-md-4 text-center pt-5'>
           <h3 className='fw-bolder'>Our Brands</h3>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, magnam?</p>
        </div>
      {AllBrands.map((Brand)=>     <div key={Brand._id} className="col-lg-3 col-md-4">

        <Link to={`/brandproducts/${Brand._id}`}>
        <div className= "cursor-pointer item" >
          <img src={Brand.image} alt={Brand.image} className='w-100'/>
         <div className='px-3'>
         <h3 className='text-center '>{Brand.name}</h3>

         </div>
        </div>

        </Link>
        
      </div>

      )}
      </div>
    </div>:  <LoadingScreen/>}
    
    </>
  )
}
