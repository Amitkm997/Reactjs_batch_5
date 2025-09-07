import React from 'react'
import { useState } from 'react'
const UseCounter = (initialValue=0) => {
    
const[count , setCount]= useState(initialValue);
 const increment=()=>setCount((n)=>n+1) 
 const decrement=()=>setCount((n)=>n-1)  
 const reset=()=>setCount(initialValue)

  return (
    [count,increment,decrement,reset]
  )
}

export default UseCounter;
