import './App.css';
import {  createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import Cart from './Component/Cart/Cart'
import Brand from './Component/Brand/Brand'
import Categories from './Component/Categories/Categories'
import Products from './Component/Products/Products'
import Login from './Component/Login/Login'
import Register from './Component/Register/Register'
import NotFound from './Component/NotFound/NotFound'
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import Protectroute from './Component/Protectrouter/Protectroute';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import BrandProducts from './Component/BrandProducts/BrandProducts';
import Forgetpassword from './Component/Forgetpassword/Forgetpassword';
import Resetpassword from './Component/Resetpassword/Resetpassword';
import CartContextProvider from './Context/cartContextProvider';
import Payment from './Component/Payment/Payment';
import AllOrders from './Component/allOrders/AllOrders';



function App() {
  const [userData,setuserData]= useState(null);

  function saveUserData(){
    let encodedToken = localStorage.getItem("userToken")
    let decodedToken = jwtDecode(encodedToken)
    setuserData(decodedToken)
  }
  useEffect(()=>{
    if(localStorage.getItem("userToken")!==null && userData == null){
      saveUserData()
    }
  },[])
  
let router = createHashRouter([{
    path:'', element:   <Layout  userData={userData}  setuserData={setuserData}/>   ,children:[
    {index:true, element:  <Home/>  },
    {path:'cart',element:  <Protectroute>  <Cart/> </Protectroute> },
    {path:'Brands',element:   <Protectroute>  <Brand/> </Protectroute>},
    {path:'brandproducts/:id',element: <Protectroute><BrandProducts/></Protectroute> },
    {path:'allOrders',element:   <Protectroute> <AllOrders    userData={userData} /> </Protectroute>},
    {path:'Payment',element:<Protectroute><Payment   userData={userData}/> </Protectroute>},
    {path:'Products',element:<Protectroute><Products/></Protectroute>},
    {path:'ProductDetails/:id',element:<Protectroute>  <ProductDetails/>  </Protectroute>},
    {path:'Categories',element:<Protectroute><Categories/></Protectroute> },
    {path:'Login',element:<Login  saveUserData={saveUserData}/>},
    {path:'Forget-password',element:<Forgetpassword/>},
    {path:' ',element:<Resetpassword/>},
    {path:'Register',element:<Register/>},
    {path:'*',element:<NotFound/>},

  ]}
])
  return <> 
  <CartContextProvider>
  <RouterProvider router={router}> </RouterProvider>

  </CartContextProvider>

 </>
}

export default App;
