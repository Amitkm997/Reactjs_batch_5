import React, { useEffect, useState } from 'react'
import Adhaar from './Adhaar'

export default function FetchData() {
  const [user, setUser] = useState([])
  console.log(user)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').
      then((res) => res.json()).
      then((data) => setUser(data))
      .catch((err) => console.log(err))
  }, []) // [] -> dependency array(opation)
  return (
    <>
      {/* <Adhaar name={user[0].name}/>
      <Adhaar name={user[1].name}/> */}
      {user.map((cur) => <Adhaar name={cur.name}
        address={cur.address.city} />)}
    </>
  )
}
