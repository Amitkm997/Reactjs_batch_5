import React, { useContext } from 'react'
import {CounterContext} from '../context/CounterContext'


export default function CounterDisplay() {
      const{count}= useContext(CounterContext)
      
  return (
    <div>
       <h1>Current Count:{count}</h1>
    </div>
  )
}
