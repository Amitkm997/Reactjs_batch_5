import '../css/student.css'

function Welcome({name,email,profession,image}) {
    // console.log(props)
    // const{name,profession,image,email}=props
    // props={
    //     name:"Amit",
    //     profession:"Trainer"
    // }
    return (
        <>
        <div className="student-card">
          <img src={image} alt="photo-1" />
          <h1>Name:{name}</h1>
          <p>Email:{email}</p>
          <p>like:0</p>
          <h2>Profession:{profession}</h2>
        </div>         
        </>
    )
}

export default Welcome;