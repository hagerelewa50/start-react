import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useState } from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import  styles from './Forgetpassword.module.css';

export default function Forgetpassword() {

  const [loading,setloading]=useState(false)
  const [flag,setflag]=useState(false)
  const [errMsg,seterrMsg]=useState('')



  const Navigate = useNavigate();
 
 async function forgetPassword(values) {
    setloading(true)
    let {data} = await  axios.post("https://route-ecommerce.onrender.com/api/v1/auth/forgotPasswords",values)
    console.log(data);
    if(data.statusMsg === "success"){
      setflag(true)
    }
    setloading(false)

   }

function validate(values){
  let errors={};
 
  if(!values.email){
    errors.email ="Email is Required"
  }  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  
  return errors;
}

let formik = useFormik({
  initialValues:{
    email:"",
  },
  validate,
  onSubmit:forgetPassword
})

async function resetcode(values) {
  setloading(true)
  let {data} = await  axios.post("https://route-ecommerce.onrender.com/api/v1/auth/verifyResetCode",values).catch((err)=>{
    seterrMsg(err.response.data.message)
    setloading(false)
  })
  if(data.status==="Success"){
    Navigate("/Reset-password")
  }
  setloading(false)
 }

let formik1 = useFormik({
  initialValues:{
    resetCode:"",
  },

  onSubmit:resetcode
})
  
  return (
    <>
   <div className="container w-75 px-5">
    {flag?  <form onSubmit={formik1.handleSubmit} className="my-4">

<label htmlFor="resetCode">Resetcode : </label>
<input className='form-control my-2' value={formik1.values.resetCode} type="text" id='resetCode' onChange={formik1.handleChange} onBlur={formik1.handleBlur}/>
{errMsg!==""?<div className='alert alert-danger py-2'>{errMsg}</div>:null}
{formik1.errors.resetCode && formik1.touched.resetCode ? <div className='alert alert-danger py-2'>{formik1.errors.resetCode}</div>:null}

 {loading?<button type='button' className={`${styles.btn} btn bg-main text-white fw-bold my-2`}><i className="fa-solid fa-spinner fa-spin"></i></button>:
  <button type='submit' className={`${styles.btn} btn bg-main text-white fw-bold my-2`}>Verify Code</button>
 }

</form>: <form onSubmit={formik.handleSubmit} className="my-4">

<label htmlFor="email">Email : </label>
<input className='form-control my-2' value={formik.values.email} type="email" id='email' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
{formik.errors.email && formik.touched.email ? <div className='alert alert-danger py-2'>{formik.errors.email}</div>:null}

 {loading?<button type='button' className={`${styles.btn} btn bg-main text-white fw-bold my-2`}><i className="fa-solid fa-spinner fa-spin"></i></button>:
  <button type='submit' className={`${styles.btn} btn bg-main text-white fw-bold my-2`}>Send</button>
 }
</form>}
  
   </div>
    </>
  )
}
