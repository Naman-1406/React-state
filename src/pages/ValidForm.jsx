import React from 'react'
import { useForm } from 'react-hook-form'

const ValidForm = () => {
    const {register,handleSubmit,formState:{errors }} = useForm()

    function regist (data){
        console.log(data);
        
    }
  return (
    <>
     <form action="" method="post"  className="col-6 mx-auto shadow my-5 p-5 bg-primary" onSubmit={handleSubmit(regist)}>
        <div className="mt-4">
            <input type="text"  className="form-control" {...register('username',
                {
                    required:{
                        value:true,
                        message:"enter user name"
                    },
                    maxLength:{
                        value:10,
                        message:"max 10 character"
                    },
                    minLength:{
                        value:4,
                        message:"must be 4 character"
                    },
                    pattern:{
                        value:/[A-Za-z]/,
                        message:"only string"
                    }
                }
            )} 
            placeholder='enter your username'/>
            <p>{errors?.username?.message}</p>
        </div>
        
        <div className="mt-4">
            <input type="text"  className="form-control" {...register('email',
                {
                    required:{
                        value:true,
                        message:"enter email"
                    },
                    maxLength:{
                        value:10,
                        message:"max 10 character"
                    },
                    minLength:{
                        value:4,
                        message:"must be 4 character"
                    },
                }
            )} placeholder='enter your email'/>
            <p>{errors?.email?.message}</p>
        </div>
        <div className="mt-4">
            <input type="text" className="form-control" {...register('mobile',
                {
                    required:{
                        value:true,
                        message:"enter mobile"
                    },
                    maxLength:{
                        value:10,
                        message:"max 10 character"
                    },
                    minLength:{
                        value:4,
                        message:"must be 4 character"
                    },
                }
                )} placeholder='enter your mobile'/>
                 <p>{errors?.mobile?.message}</p>
        </div>
        <div className="mt-4">
            <input type="text" className="form-control" {...register('address',
                {
                    required:{
                        value:true,
                        message:"enter your address"
                    },
                    maxLength:{
                        value:10,
                        message:"max 20 character"
                    },
                    minLength:{
                        value:4,
                        message:"must be 4 character"
                    },
                }
            )} placeholder='enter your Address'/>
            <p>{errors?.address?.message}</p>
        </div>
        <div className="mt-4">
            <input type="text" className="form-control" {...register('course',
                {
                    required:{
                        value:true,
                        message:"enter your coursename"
                    },
                    maxLength:{
                        value:10,
                        message:"max 15 character"
                    },
                    minLength:{
                        value:4,
                        message:"must be 4 character"
                    },
                }
            )} placeholder='enter your Course Name'/>
            <p>{errors?.address?.message}</p>
        </div>
        <div className='mt-4'>
            <button className='btn btn-success'>Submit</button>
        </div>
    
        </form>
    </>
  )
}

export default ValidForm