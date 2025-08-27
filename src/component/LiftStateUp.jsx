import React, { useState } from 'react'

export default function LiftStateUp() {
    const[count,setCount]=useState(0);
    function handleClick(value){
        console.log("This is received from child component"+value)
    }
  return (
    <div>
         <Child callBackProps={handleClick}/> 
         <ChildA count={count} />
         <ChildB setCount={setCount}/>
    </div>
  )
}

//Callback props
function Child(props){
    return <button onClick={()=>props.callBackProps("send from child")}>Click me!</button>
}

// lifting state Up
function ChildA(props){
    return <h1>{props.count}</h1>
}

function ChildB(props){
    return <button onClick={()=>props.setCount((e)=>e+1)}>Increment</button>
}