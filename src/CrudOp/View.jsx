import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const View = () => {
    const [user, setUser] = useState([])
    const [search, setSearch] = useState("")
    const url = "https://jsonplaceholder.typicode.com/users"
    const [selectcity,setSelectcity] = useState("")
    async function show() {
        const res = await axios.get(url)
        console.log(res.data);
        setUser(res.data)
    }

    useEffect(() => {
        show()
    }, [])
    async function trash(id) {
        if (confirm("do you want do delete this item")) {
            await axios.delete(`${url}/${id}`)

            show()
        }
    }
    const cities = user.map((users)=>{
        return users.address.city
    })
    console.log(cities);
    

    const filterdata = user
    .filter((users) => {
        const searched = search.toUpperCase()
        const username = users.name.toUpperCase()
        return username.includes(searched)
    })

    .filter((users)=>{
        return users.address.city.includes(selectcity)
    })
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 my-3">
                        <input type="search" onChange={(e) => setSearch(e.target.value)} className='form-control' placeholder='enter user name' />
                        </div>
                        <div className="col-lg-4 my-3">
                            <select name="" id="" onChange={(e)=>{setSelectcity(e.target.value)}} className='form-select'>
                                <option value="" disabled>--select your city--</option>
                                {
                                    cities.map((city)=>{
                                        return(
                                        <option>{city}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                </div>
                <table className='table table-hover table-success table-bordered'>
                    <thead className='table-dark'>
                        <tr>
                            <th>S.no</th>
                            <th>username</th>
                            <th>Email</th>
                            <th>mobile</th>
                            <th>address</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterdata.length > 0 ?
                                filterdata.map((users, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{users?.name}</td>
                                            <td>{users?.email}</td>
                                            <td>{users?.phone}</td>
                                            <td>{users?.address?.city}</td>
                                            <td>
                                                <NavLink to={`/SingleUser/${users.id}`} className="btn btn-warning"><i class="fa-regular fa-eye"></i></NavLink>
                                                <NavLink to={`/Update/${users.id}`} className="btn btn-primary"><i class="fa-solid fa-pen"></i></NavLink>
                                                <button onClick={() => trash(users.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                <tr>
                                    <td colSpan={6} className='text-center fw-bold'>Data Not Found</td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default View