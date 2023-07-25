import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import  styles from './Register.module.css';
import * as Yup from 'yup';
export default function Register() {

  const [loading,setloading]=useState(false)
  const [errMessage,seterrMessage]=useState("")

  const Navigate = useNavigate();
  // let validation = Yup.object({
  //   name:Yup.string().required("Name is Required").min(3,"Name minlength is 3").max(10,"Name maxlength is 10"),
  //   email:Yup.string().required("Email is Required").email("Email is Invaild"),
  //   password:Yup.string().required("password is Required").matches(/^[A-Z][a-z0-9]{5,10}$/,"Password must be start with UpperCase...."),
  //   repassword:Yup.string().required("repassword is Required").oneOf([Yup.ref("password")], "Password and Repassword must be matched"),
  //   phone:Yup.string().required("Phone is Required").matches(/^01[0125][0-9]{8}$/),

  // })
 async function handleRegister(values) {
    setloading(true)
    let {data} = await  axios.post("https://route-ecommerce.onrender.com/api/v1/auth/signup",values).catch((err)=>{
      setloading(false)
      seterrMessage(err.response.data.message);
    })
    if(data.message === "success"){
      setloading(false)
      Navigate("/Login")
    }
   }

function validate(values){
  let errors={};
  if(!values.name){
    errors.name ="Name is Required"
  } else if(values.name.length<3){
    errors.name="Name minlength is 3 "
  } else if(values.name.length>10){
    errors.name="Name maxlength is 10 "
  };


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


  if(!values.rePassword){
    errors.rePassword ="rePassword is Required"
  } else if(values.rePassword !== values.password){
    errors.rePassword ="password and Repassword don't match"
  };


  if(!values.phone){
    errors.phone ="phone is Required"
  } else if(!/^01[0125][0-9]{8}$/.test(values.phone)){
    errors.phone ="phone must be egyptian number"
  };
  return errors;
}

let formik = useFormik({
  initialValues:{
    name:"",
    email:"",
    password:"",
    rePassword:"",
    phone:""
  },
  validate,
  onSubmit:handleRegister
})

  
  return (
    <>
   <div className="container w-75 px-5">
   <h3 className='fw-bold mt-3'>Register :   </h3>
   {errMessage?   <div className="alert alert-danger mt-3 py-2">{errMessage}</div>:null}
   <form onSubmit={formik.handleSubmit} className="my-4">
      <label htmlFor="name">Name : </label>
      <input className='form-control my-2' value={formik.values.name} type="text" id='name' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.name && formik.touched.name ? <div className='alert alert-danger py-2'>{formik.errors.name}</div>:null}

      <label htmlFor="email">Email : </label>
      <input className='form-control my-2' value={formik.values.email} type="email" id='email' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.email && formik.touched.email ? <div className='alert alert-danger py-2'>{formik.errors.email}</div>:null}

      <label htmlFor="password">Password : </label>
      <input className='form-control my-2' value={formik.values.password} type="password" id='password' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.password && formik.touched.password ? <div className='alert alert-danger py-2'>{formik.errors.password}</div>:null}


      <label htmlFor="rePassword">RePassword : </label>
      <input className='form-control my-2' value={formik.values.rePassword} type="password" id='rePassword' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.rePassword && formik.touched.rePassword ? <div className='alert alert-danger py-2'>{formik.errors.rePassword}</div>:null}


      <label htmlFor="phone">Phone : </label>
      <input className='form-control my-2' value={formik.values.phone} type="tel" id='phone' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.phone && formik.touched.phone ? <div className='alert alert-danger py-2'>{formik.errors.phone}</div>:null}
       {loading?<button type='button' className={`${styles.btn} btn bg-main text-white fw-bold my-2`}><i className="fa-solid fa-spinner fa-spin"></i></button>:
        <button type='submit' disabled={!(formik.isValid && formik.dirty)} className={`${styles.btn} btn bg-main text-white fw-bold my-2`}>Register</button>
       }

    </form>
   </div>
    </>
  )
}
