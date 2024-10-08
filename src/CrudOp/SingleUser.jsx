import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const SingleUser = () => {
    const [user,setUser] = useState ({})
    const url = 'https://jsonplaceholder.typicode.com/users'
        const {id} = useParams()

        async function show() {
            const res = await axios.get(`${url}/${id}`)
            
            setUser (res.data)
            
        }
        useEffect (()=>{
            show()
        },[])
    
  return (
    <>
  <div className="col-6 mx-auto my-5 p-5 shadow">
            <ul>
                <li>Name: {user?.name}</li>
                <li>Email: {user?.email}</li>
                <li>Mobile: {user?.phone}</li>
                <li>Address: {user?.address?.city}</li>
            </ul>
        </div>
    </>
  )
}
export default SingleUser