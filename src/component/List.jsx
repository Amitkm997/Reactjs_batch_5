import React from 'react'

export default function List() {
    let students=["Nishu","vicky","paras","ambika"]
  return (
   <>
      <h1>This is my list</h1>
      <ul>
      {
        students.map((cur,index)=> <li key={index}>{cur}</li>)
      }
      </ul>
   </>
  )
}
