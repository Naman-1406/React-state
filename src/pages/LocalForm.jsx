import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const LocalForm = () => {
    const { register, handleSubmit, formState: { errors }, reset} = useForm()
    const [user, setuser] = useState([])
    const [editIndex , setIndex]=useState(null)


    useEffect(() => {
        const get = localStorage.getItem('userData')
        console.log(get);
        if (get) {
            setuser(JSON.parse(get))
        }

    }, [])


    useEffect(() => {
        if (user.length > 0) {
            localStorage.setItem('userData', JSON.stringify(user))
        }
    }, [user])


    function savedata(data) {
        console.log(data);
        if (editIndex != null){
            const updateUser =[...user]
            updateUser [editIndex]=data;
            setuser (updateUser)
            setIndex (null)
        }
        else{

        setuser([...user, data])
        }
        reset()

        
    }
    
    console.log(user);

    function update (index){
        console.log(user[index]);
        reset (user[index])
        setIndex(index)
        
    }

    function trash (user_id){
        if ( confirm ("do you want to delete this item ?")){
            const filterdata = user.filter((_,index)=>{
                return user_id !== index                 
            })

            setuser(filterdata)
            if (user_id == 0){
                localStorage.removeItem('userData')
            }

        }
    }

    // console.log(user);

    return (
        <>
            <form action="" method="post" className="col-6 mx-auto shadow my-5 p-5 bg-primary" onSubmit={handleSubmit(savedata)}>
                <div className="mt-4">
                    <input type="text" className="form-control" {...register('username',
                        {
                            required: {
                                value: true,
                                message: "enter user name"
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
                    )}
                        placeholder='enter your username' />
                    <p>{errors?.username?.message}</p>
                </div>
                <div className="mt-4">
                    <input type="text" className="form-control" {...register('email',
                        {
                            required: {
                                value: true,
                                message: "enter email"
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
                    )}
                        placeholder='enter your email' />
                    <p>{errors?.email?.message}</p>
                </div>
                <div className='mt-4'>
                    {
                        editIndex == null 
                        ?
                    <button className='btn btn-success'>Submit</button>
                    :
                    <button className='btn btn-warning'>update</button>
}
                </div>
            </form>
            <div className="container">
                <table className='table table-hover table-success'>
                    <thead className='table-dark'>
                        <tr>
                            <th>S.no</th>
                            <th>username</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((users, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{users.username}</td>
                                        <td>{users.email}</td>
                                        <td>
                                        <button className='btn btn-danger' onClick={()=>trash(index)}>-</button>
                                        <button className='btn btn-success'onClick={()=>update(index)}>+</button>                
                                        </td>

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
export default LocalForm