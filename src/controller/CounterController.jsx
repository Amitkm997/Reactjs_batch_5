import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
export default function CounterController() {
    const{increament,decrement}=useContext(CounterContext)
    console.log(increament)
  return (
    <div>
         <button onClick={increament}>Increment</button>
         <button onClick={decrement}>Decrement</button>
    </div>
  )
}
