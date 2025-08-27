
import React, { useState } from 'react'
import '../css/Form.css'
import {useNavigate} from 'react-router-dom'
export default function Form() {
  let navigate=useNavigate() // initilized a useNavigate
   const[name,setName]=useState('')
   const[email,setEmail]=useState('')
   const[password,setPassword]=useState('')
   const[user,setUser]=useState([])
   const[editIndex,setEditIndex]=useState(null)

   console.log(user)
   function handleSubmit(e){
    e.preventDefault()// prevents reloading
    if(name=="" || email==""|| password=="") return
  //   if(name=="") alert("please provide name")
      // user.push({name,email,password})
  if(editIndex!=null){
    let updatedUser=[...user]
    updatedUser[editIndex]={name,email,password}
    setUser(updatedUser)
    setEditIndex(null)
  }else{
    setUser([...user,{name,email,password}])
  }
     
      // alert("form submitted successfully")
      setName('')
      setEmail("")
      setPassword("")
      navigate('/fetchData')
   }

   function deleteUser(index){
       let updateUser=user.filter((cur,i)=>index!=i);
       setUser(updateUser)
   }
   function editUser(index){
      let selectedUser=user[index]
       setName(selectedUser.name)
       setEmail(selectedUser.email)
       setPassword(selectedUser.password)
       setEditIndex(index)
   }
  return (
     <>
     <form onSubmit={handleSubmit}>
     <label>Name</label>
       <input 
       type="text" 
       placeholder='Enter your name'
       value={name}
       onChange={(e)=>setName(e.target.value)}
       /> <br /><br />
       <label>Email</label>
       <input 
       type="email" 
       placeholder='Enter your Email'
       value={email}
       onChange={(e)=>setEmail(e.target.value)}
       /> <br /><br />
       <label>Name</label>
       <input 
       type="password" 
       placeholder='Enter your password'
       value={password}
       onChange={(e)=>setPassword(e.target.value)}
       />
       <button type='submit'>{editIndex!=null?'Update':'Submit'}</button>
     </form>
       <h1>Live preview</h1>
       <h1>Name:{name}</h1>
       <h2>Email:{email}</h2>
       <h2>Password:{password}</h2>
       <h1>List of Users</h1>
       <ul>
        {user.map((cur,index)=><li key={index}>{cur.name} {" - "}{cur.email}</li>)}
       </ul>
       <h1>Table of All registered users</h1>
       <table>
           <thead>
            <tr>
            <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Delete</th>
              <th>Edit</th>
              
            </tr>
           </thead>
           <tbody>
            {
              user.map((cur,index)=>(
                <>
                   <tr key={index}>
                    <td>{index}</td>
                    <td>{cur.name}</td>
                    <td>{cur.email}</td>
                    <td>{cur.password}</td>
                    <td><button onClick={()=>deleteUser(index)}>Delete</button></td>
                    <td><button onClick={()=>editUser(index)}>Edit</button></td>
                   </tr>
                </>
              ))
            }
           </tbody>
       </table>
     </>
  )
}
