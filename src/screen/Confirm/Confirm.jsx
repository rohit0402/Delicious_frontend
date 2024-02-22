import React, { useEffect, useState } from 'react'
import {PropagateLoader} from "react-spinners";
function Confirm() {
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);

    },3000);
  },[]);
  return (
    
    <div className='flex flex-col  h-screen justify-center items-center '>
      {
        loading? (<PropagateLoader color="#36d7b7" />):<h3 className=' font-semibold text-xl text-center'>Order Successfull !</h3>

      }

      
    </div>
  )
}

export default Confirm
