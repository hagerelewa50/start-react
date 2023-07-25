import React from 'react'
import  styles from './NotFound.module.css'
import  errimage  from '../../assets/error.svg'

export default function NotFound() {
  return <>
<div className="container text-center py-5">
  <img src={errimage} alt='ErrorImage' />
</div>

  </>

}
