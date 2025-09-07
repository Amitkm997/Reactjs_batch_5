

import React, {  useReducer } from 'react'
let initialState={
    name:"",
    email:"",
    password:""
}

// {name:"amit",email:"amitkm",password:""}
// {name:"amit",emai:"amit"}
function formReducer(state,action){
    switch(action.type){
        case "update":
            return {...state,[action.field]:action.value}
        case "reset":
            return  initialState
        default:
            return state
    }
}
export default function FormUR() {
    const[state,dispatch]=useReducer(formReducer,initialState)
       function handleClick(e){
             e.preventDefault();
             console.log(state);
            //  dispatch({type:"reset"})      
       }
  return (
    <>
       <form onSubmit={handleClick}>
          <label>Name</label>
          <input type="text" placeholder='Enter your name' value={state.name} 
          onChange={(e)=>dispatch({type:"update",field:"name",value:e.target.value})} /><br /><br />
          <label>Email</label>
          <input type="email" placeholder='Enter your email' value={state.email} 
          onChange={((e)=>dispatch({type:"update",field:"email",value:e.target.value}))} /><br /><br />
          <label>Password</label>
          <input type="password" placeholder='Enter your password' value={state.password} 
          onChange={(e)=>dispatch({type:"update",field:"password",value:e.target.value})} /><br /><br />
          <button type='submit'>Submit</button>
          <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </form>    
    </>
  )
}
