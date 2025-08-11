


import { useState } from 'react'

export default function Message() {
    //  const[initial_state_value,setUpFunction]=useState(initial_value)
    const[message,setMessage]=useState("Hi there")
          console.log(message)
        //   function handleChange(){
        //     setMessage("hi nikhil")
        //   }
  return (
    <>
       <h1>{message}</h1>
       <button onClick={()=>setMessage("hi Nikhil")}>Change message</button>
    </>
  )
}
