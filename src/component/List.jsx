import React from 'react'

export default function List() {
    let Student=["Nikhil","Viky","Sumit","Hement"]
  return (
    <>
    <ul>       {/* <li>{Student[0]}</li> */}
       {Student.map((cur,index)=><li key={index}>{cur}</li>)}
    </ul>
      
    </>
  )
}
