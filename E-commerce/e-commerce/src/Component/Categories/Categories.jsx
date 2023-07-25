
import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import Slider from 'react-slick'
import  styles from './Categories.module.css'

export default function Categories() {
  const [AllCategory,setAllCategory]=useState(null)
   

 async function getDataCategory(){
    let {data}= await axios.get("https://route-ecommerce.onrender.com/api/v1/categories")
    setAllCategory(data.data);
  };
   useEffect(()=>{
    getDataCategory()
},[])

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2
};


  return (
    <>
    {AllCategory?<div className="container py-3 my-4">
    <Slider {...settings}>
      {AllCategory.map((Category,index)=> <div   key={index}>
        <img src={Category.image} alt=""  className="w-100 cursor-pointer" height={200} />
        <h6 className='text-center text-main fw-bold pt-2'>{Category.name}</h6>

      </div>
        
      )}
  </Slider>
    </div>:  <LoadingScreen/>}
    
    </>
  )
}

