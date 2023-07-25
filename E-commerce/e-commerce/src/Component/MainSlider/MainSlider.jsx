import React from 'react'
import Slider from 'react-slick'
import  styles from './MainSlider.module.css'


export default function MainSlider() {


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

  };


  return (
    <div className='overflow-hidden' >  
        <Slider {...settings} >
    <div>
      <img src={require('../../assets/images/grocery-banner-2.jpeg')} className="w-100" style={{"height":"350px"}} alt="ImageSlider"/>
    </div>
    <div>
    <img src={require("../../assets/images/grocery-banner.png")} className="w-100" style={{"height":"350px"}} alt="ImageSlider"/>

    </div>
    <div>
    <img src={require("../../assets/images/slider-2.jpeg")} className="w-100" style={{"height":"350px"}} alt="ImageSlider"/>

    </div>
    <div>
    <img src={require("../../assets/images/slider-image-1.jpeg")} className="w-100" style={{"height":"350px"}} alt="ImageSlider"/>

    </div>
    <div>
    <img src={require("../../assets/images/slider-image-2.jpeg")} className="w-100" style={{"height":"350px"}} alt="ImageSlider"/>

    </div>
    <div>
    <img src={require("../../assets/images/slider-image-3.jpeg")} className="w-100" style={{"height":"350px"}} alt="ImageSlider"/>

    </div>
  </Slider>
  </div>
  )
}
