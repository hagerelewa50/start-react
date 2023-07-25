import React from 'react'
import  styles from './LoadingScreen.module.css'

export default function LoadingScreen() {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center vh-100 bg-light'>
    <i className="fa-solid fa-spinner fa-spin text-main fa-5x"></i>
    </div>
    </>
  )
}
