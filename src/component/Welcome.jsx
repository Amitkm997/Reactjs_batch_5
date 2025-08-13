import { useState } from 'react';
import '../css/student.css'

function Welcome({name,email,profession,image}) {
    // console.log(props)
    // const{name,profession,image,email}=props
    // props={
    //     name:"Amit",
    //     profession:"Trainer"
    // }
    const[likes,setLikes]=useState(0)
    return (
        <>
        <div className="student-card">
          <img src={image} alt="photo-1" />
          <h1>Name:{name}</h1>
          <p>Email:{email}</p>
          <button onClick={()=>setLikes(likes+1)}>like:{likes}</button>
          <h2>Profession:{profession}</h2>
        </div>         
        </>
    )
}

export default Welcome;