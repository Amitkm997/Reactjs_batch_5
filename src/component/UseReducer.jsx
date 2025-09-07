import React, { useReducer } from 'react'
function reducer(state,action){
     switch(action.type){
        case 'increment':
            return {count:state.count+1};
        case 'decrement':
            return {count:state.count-1};
        default:
            return state;
     }
}

let initialState={count:0}
export default function UseReducer() {
       const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <>
      <h1>UseReducer</h1>
      <h2>Count:{state.count}</h2>
      <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
      <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
      <button>Reset</button>
    </>
  )
}
