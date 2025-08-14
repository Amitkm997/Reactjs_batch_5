import React, { useState } from 'react'
import List from './List'
import '../css/Form.css'
export default function Form() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[user,setUser]=useState([])
    console.log(user)
        
    function submitHandler(e){
       e.preventDefault() // prevents reloading
      //  if(name=='' || email=="" || password=="") return
       if(name==""){
        alert("please provide name")
       }
       if(email==""){
        alert("please provide email")
       }
       if(password==""){
        alert("please provide Password")
       }
      let newUser={
        name:name,
        email:email,
        password:password
      }
      // user.push({name,email,password})
       setUser([...user,newUser])

       setName("")
       setEmail("")
       setPassword("")
      //  alert("form submitted successfully")
    }
    function deleteUser(index){
      let updatedUserTable=user.filter((cur,i)=>i!=index)
      setUser(updatedUserTable)
    }
  return (
    <>
      <form onSubmit={submitHandler}>
         <label>Name</label>
         <input type="text" 
         placeholder='Enter your name' 
         value={name}
         onChange={(e)=>setName(e.target.value)}
         />  <br /><br />
         <label>Email</label>
         <input type="email"
         placeholder='Enter your Email' 
         value={email}
         onChange={(e)=>setEmail(e.target.value)}/> <br /><br />
         <label>Password</label>
         <input type="password" 
         placeholder='Enter your Password'
         value={password}
         onChange={(e)=>setPassword(e.target.value)}/> <br /><br />
         <button type='submit'>Register</button>

      </form>     
      <h1>Live preview</h1>
      Name:{name} length:{name.length} <br /><br />
      Email:{email} <br /><br />
      Password:{password}

       <h1>List of all registered users</h1>
       {/* <ul>
        {
          user.map((cur)=><li>{cur.name}{"  "}{cur.email}</li>)
        }
       </ul> */}

       <table>
        {<>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
               {user.map((cur,index)=>(
                <tr key={index}>
                  <td>{cur.name}</td>
                  <td>{cur.email}</td>
                  <td>{cur.password}</td>
                  <td><button onClick={()=>deleteUser(index)}>Delete</button></td>
                </tr>
               ))}
          </tbody>
        </>
          
        }
       </table>
    </>
  )
}
