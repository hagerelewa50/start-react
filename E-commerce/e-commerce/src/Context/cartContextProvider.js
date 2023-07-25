import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import $ from 'jquery'
// import { useNavigate } from 'react-router-dom';

export const cartContext= createContext();

export default function CartContextProvider({children}) {
          
  const [numOfCartItems, setnumOfCartItems] = useState(0);
  const [totalCartPrice, settotalCartPrice] = useState(0);
  const [productCart, setproductCart] = useState(null);
  const [cartData, setcartData] = useState(null);

  const [IdCart, setIdCart] = useState(null);

  // const nav = useNavigate();
   
    async function addProductToCart(proId){
        try {
            const {data} = await axios.post("https://route-ecommerce.onrender.com/api/v1/cart",{
                "productId":proId
            }, {headers: {"token":localStorage.getItem("userToken") }})
          if(data.status === "success"){
            let result =[true,data]
            return result
         }else{
            return false
         }

        } catch (error) {
            console.log("erroe",error); 
        }
       
      }
    async function getCartProducts(){

      try {
        
        const {data}= await axios.get("https://route-ecommerce.onrender.com/api/v1/cart",{
          headers :{ "token":localStorage.getItem("userToken") }
        })
        if(data.status === "success"){
          setnumOfCartItems(data.numOfCartItems);
          settotalCartPrice(data.data.totalCartPrice);
          setproductCart(data.data.products)
          setIdCart(data.data._id);
          setcartData(data)
          console.log(numOfCartItems);
          return data

        }
        
      } catch (error) {
        console.log("error:", error);
     
      }
   }

  async function removeCartProducts(id){
    try {
      const {data}= await axios.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${id}`,{
        headers:{'token':localStorage.getItem("userToken")}
      })
      if(data.status === "success"){
        setnumOfCartItems(data.numOfCartItems);
        settotalCartPrice(data.data.totalCartPrice);
        setproductCart(data.data.products)
        return true
      }else{
        return false
      }
    } catch (error) {
      console.log("error:",error); 
    }
   }


   async function updateCartProduct(id,count){


    try {
      const {data}= await axios.put(`https://route-ecommerce.onrender.com/api/v1/cart/${id}`,{
        "count": count
    },{
      headers:{"token":localStorage.getItem("userToken")}
    })
    if(data.status === "success"){
      setnumOfCartItems(data.numOfCartItems);
      settotalCartPrice(data.data.totalCartPrice);
      setproductCart(data.data.products)
    }
    console.log(data);
    } catch (error) {
      console.log("erroe:",error);
    }

   }
   useEffect(function(){
    getCartProducts()
   },[])

  return (
    
   <cartContext.Provider  value={ {getCartProducts,cartData,setnumOfCartItems,addProductToCart,numOfCartItems,totalCartPrice,productCart,removeCartProducts,updateCartProduct,IdCart} }>
    {/* <div className='alert alert-danger errorcart position-fixed  col-6 text-center m-auto'style={{"display":"none"}} > No Cart Exist</div> */}
     {children}
   </cartContext.Provider>
  )
}
