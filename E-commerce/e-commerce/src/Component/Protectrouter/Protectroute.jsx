import React from 'react'
import { Navigate } from 'react-router-dom'
import  styles from './Protectroute.module.css'

export default function Protectroute(props) {

  if(localStorage.getItem("userToken") === null){ 
    return <Navigate to="/Login"/>
  }else{
    return props.children;
  }
}
