import React from 'react'
import useCounter from './UseCounter'

export default function CounterCH() {
   let [count,increment,decrement,reset]=useCounter(3)
  return (
    <div>
       <h1>{count}</h1>
       <button onClick={increment}>Increment</button>
       <button onClick={decrement}>decrement</button>
       <button onClick={reset}>Reset</button>
    </div>
  )
}
