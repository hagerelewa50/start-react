import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useState } from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import  styles from './Login.module.css';

export default function Login({saveUserData}) {

  const [loading,setloading]=useState(false)
  const [errMessage,seterrMessage]=useState("")

  const Navigate = useNavigate();
 
 async function handleLogin(values) {
    setloading(true)
    let {data} = await  axios.post("https://route-ecommerce.onrender.com/api/v1/auth/signin",values).catch((err)=>{
      setloading(false)
      seterrMessage(err.response.data.message);
    })
    if(data.message === "success"){
      localStorage.setItem("userToken",data.token);
      saveUserData()
      setloading(false)
      Navigate("/")
    }
   }

function validate(values){
  let errors={};
 


  if(!values.email){
    errors.email ="Email is Required"
  }  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  
  if(!values.password){
    errors.password ="password is invalid"
  } else if(!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.password)){
    errors.password ="password should contain atleast one number and one special character"
  };


 
  return errors;
}

let formik = useFormik({
  initialValues:{
    email:"",
    password:"",
  },
  validate,
  onSubmit:handleLogin
})

  
  return (
    <>
   <div className="container w-75 px-5">
   <h3 className='fw-bold mt-3'>Login Now:   </h3>
   {errMessage?   <div className="alert alert-danger mt-3 py-2">{errMessage}</div>:null}
   <form onSubmit={formik.handleSubmit} className="my-4">

      <label htmlFor="email">Email : </label>
      <input className='form-control my-2' value={formik.values.email} type="email" id='email' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.email && formik.touched.email ? <div className='alert alert-danger py-2'>{formik.errors.email}</div>:null}

      <label htmlFor="password">Password : </label>
      <input className='form-control my-2' value={formik.values.password} type="password" id='password' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.password && formik.touched.password ? <div className='alert alert-danger py-2'>{formik.errors.password}</div>:null}
       <Link  to={"/Forget-password"} className='text-main'> Forget Your Password...?</Link>
       <br />
       {loading?<button type='button' className={`${styles.btn} btn bg-main text-white fw-bold my-2`}><i className="fa-solid fa-spinner fa-spin"></i></button>:
        <button type='submit' disabled={!(formik.isValid && formik.dirty)} className={`${styles.btn} btn bg-main text-white fw-bold my-2`}>Register</button>
       }

    </form>
   </div>
    </>
  )
}
