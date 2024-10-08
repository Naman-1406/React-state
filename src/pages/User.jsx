import axios from 'axios';
import React, { useEffect, useState  } from 'react'
import { useForm } from 'react-hook-form';

const User = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [user,setUser] = useState ([])


    async function show() {
        const res = await axios.get('https://66fbdb728583ac93b40d8208.mockapi.io/BNW/user')
        console.log(res.data);
        setUser (res.data)
    }

    useEffect(()=>{
        show()
    },[])

   async function regist(data) {
        const res = await axios.post('https://66fbdb728583ac93b40d8208.mockapi.io/BNW/user',data)

        if (res){
            alert ("data has been inserted")
            reset()
        }
        else{
            alert("not submiterd")
        }

    }
    return (
        <>
            <form action="" method="post" className="col-6 mx-auto shadow my-5 p-5 bg-primary" onSubmit={handleSubmit(regist)}>
                <div className="mt-4">
                    <input type="text" className="form-control" {...register('name',
                        {
                            required: {
                                value: true,
                                message: "enter user name"
                            },
                            maxLength: {
                                value: 60,
                                message: "max 10 character"
                            },
                            minLength: {
                                value: 4,
                                message: "must be 4 character"
                            },
                        }
                    )}
                        placeholder='enter your name' />
                    <p>{errors?.name?.message}</p>
                </div>

                <div className="mt-4">
                    <input type="text" className="form-control" {...register('email',
                        {
                            required: {
                                value: true,
                                message: "enter email"
                            },
                            maxLength: {
                                value: 25,
                                message: "max 25 character"
                            },
                            minLength: {
                                value: 4,
                                message: "must be 4 character"
                            },
                        }
                    )} placeholder='enter your email' />
                    <p>{errors?.email?.message}</p>
                </div>
                <div className="mt-4">
                    <input type="text" className="form-control" {...register('mobile',
                        {
                            required: {
                                value: true,
                                message: "enter mobile"
                            },
                            maxLength: {
                                value: 10,
                                message: "max 10 character"
                            },
                            minLength: {
                                value: 4,
                                message: "must be 4 character"
                            },
                        }
                    )} placeholder='enter your mobile' />
                    <p>{errors?.mobile?.message}</p>
                </div>
                <div className="mt-4">
                    <input type="text" className="form-control" {...register('address',
                        {
                            required: {
                                value: true,
                                message: "enter your address"
                            },
                            maxLength: {
                                value: 15,
                                message: "max 20 character"
                            },
                            minLength: {
                                value: 4,
                                message: "must be 4 character"
                            },
                        }
                    )} placeholder='enter your Address' />
                    <p>{errors?.address?.message}</p>
                </div>
                <div className='mt-4'>
                    <button className='btn btn-success'>Submit</button>
                </div>

            </form>

            <div className="container">
                <table className='table table-hover table-success'>
                    <thead className='table-dark'>
                        <tr>
                            <th>S.no</th>
                            <th>username</th>
                            <th>Email</th>
                            <th>mobile</th>
                            <th>address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((users, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{users.name}</td>
                                        <td>{users.email}</td>
                                        <td>{users.mobile}</td>
                                        <td>{users.address}</td>
                                        {/* <td>
                                        <button className='btn btn-danger' onClick={()=>trash(index)}>-</button>
                                        <button className='btn btn-success'onClick={()=>update(index)}>+</button>                
                                        </td> */}

                                    </tr>
                                )

                            })
                        }
                    </tbody>
                </table>
</div>

        </>
    )
}

export default User