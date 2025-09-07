

import React, { useMemo, useState } from 'react'

export default function UseMemo() {
     const [count,setCount]=useState(0)
     const[input,setInput]=useState(0)
    function expensiveTask(num){
        console.log("Inside expensive task");
        for(let i=0;i<=100000;i++){
            
        }
        return num+2
    }
    // let doubleValue=expensiveTask(input)
let doubleValue= useMemo(()=>expensiveTask(input),[input])

  return (
      <>
       <h1>Count:{count}</h1>
       <h1>Input:{doubleValue}</h1>

       <button onClick={()=>setCount(count+1)}>increment</button>
       <input type='number' value={input} onChange={(e)=>setInput(Number(e.target.value))}/>
      </>
  )
}
