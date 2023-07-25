
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  styles from './Resetpassword.module.css';

export default function Resetpassword() {

  const [loading,setloading]=useState(false)
  const [errMessage,seterrMessage]=useState("")

  const Navigate = useNavigate();
 
 async function handleReset(values) {
    setloading(true)
    let {data} = await  axios.put("https://route-ecommerce.onrender.com/api/v1/auth/resetPassword",values).catch((err)=>{
      setloading(false)
      seterrMessage(err.response.data.message);
    })
    console.log(data);
    if(data.token){
      setloading(false)
      Navigate("/login")
    }
   }

function validate(values){
  let errors={};
  if(!values.email){
    errors.email ="Email is Required"
  }  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  
  if(!values.newPassword){
    errors.newPassword ="password is invalid"
  } else if(!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.newPassword)){
    errors.newPassword ="password should contain atleast one number and one special character"
  };
  return errors;
}

let formik = useFormik({
  initialValues:{
    email:"",
    newPassword:"",
  },
  validate,
  onSubmit:handleReset
})

  
  return (
    <>
   <div className="container w-75 px-5">
   <h3 className='fw-bold mt-3'>Reset New Password:   </h3>
   {errMessage?   <div className="alert alert-danger mt-3 py-2">{errMessage}</div>:null}
   <form onSubmit={formik.handleSubmit} className="my-4">

      <label htmlFor="email">Email : </label>
      <input className='form-control my-2' value={formik.values.email} type="email" id='email' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.email && formik.touched.email ? <div className='alert alert-danger py-2'>{formik.errors.email}</div>:null}

      <label htmlFor="newPassword">New Password : </label>
      <input className='form-control my-2' value={formik.values.newPassword} type="password" id='newPassword' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.newPassword && formik.touched.newPassword ? <div className='alert alert-danger py-2'>{formik.errors.newPassword}</div>:null}
       {loading?<button type='button' className={`${styles.btn} btn bg-main text-white fw-bold my-2`}><i className="fa-solid fa-spinner fa-spin"></i></button>:
        <button type='submit' disabled={!(formik.isValid && formik.dirty)} className={`${styles.btn} btn bg-main text-white fw-bold my-2`}>send</button>
       }

    </form>
   </div>
    </>
  )
}
