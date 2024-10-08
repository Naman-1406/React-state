import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()


    const redirect = useNavigate()
    const { id } = useParams()
    async function show() {
        const res = await axios.get(`https://66fbdb728583ac93b40d8208.mockapi.io/BNW/user/${id}`)

        reset(res.data)

    }
    useEffect(() => {
        show()
    }, [])


    async function edituser(data) {
        try {
            await axios.put(`https://66fbdb728583ac93b40d8208.mockapi.io/BNW/user/${id}`,data)
                .then((res) => {
                    console.log(res);
                    redirect('/view')
                })
                .catch((err) => {
                    console.log(err);
                    
                })
        }catch (err){
            console.log(err);
            
        }
       }
    return (
        <>
            <form action="" method="post" className="col-6 mx-auto shadow my-5 p-5 bg-primary" onSubmit={handleSubmit(edituser)}>
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
                    <button className='btn btn-warning'>Update</button>
                </div>

            </form>
        </>
    )
}

export default Update