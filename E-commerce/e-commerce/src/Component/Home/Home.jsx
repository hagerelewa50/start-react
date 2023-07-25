import React from 'react'
import Categories from '../Categories/Categories'
import FeatureProducts from '../FeatureProducts/FeatureProducts'

import MainSlider from '../MainSlider/MainSlider'
import  styles from './Home.module.css'

export default function Home() {

  return (
    <div>
      
      <MainSlider/>
      <Categories/>
  <FeatureProducts/>

    </div>
  )
}
