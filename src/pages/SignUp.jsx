import React, { useState } from 'react'

const SignUp = () => {

    const [user,setUser] = useState({})

    function input (e) {
        const name = e.target.name
        const value = e.target.value
        // console.log(name);
        // console.log(value);
    
        const newuser = {[name]:value}
        // console.log(newuser);

        setUser({...user , ...newuser})

        
        
    }
    function register (e){
        e.preventDefault()

        console.log(user);

    }

    const styleInput = {color: 'red' , backgroundColor:'aqua'}
    
  return (
   <>
   <form action="" method="post" onSubmit={(e)=>register(e)}  className="col-6 mx-auto shadow my-5 p-5">
        <div className="mt-4">
            <input type="text" style={{color:'red', background:'aqua'}} onChange={(e)=>input(e)} className="form-control" name='username' placeholder='enter your username'/>
        </div>
        
        <div className="mt-4">
            <input type="text" style={styleInput} onChange={(e)=>input(e)} className="form-control" name='email' placeholder='enter your email'/>
        </div>
        <div className="mt-4">
            <input type="text" onChange={(e)=>input(e)} className="form-control" name='mobie' placeholder='enter your mobile'/>
        </div>
        <div className='mt-4'>
            <button className='btn btn-success'>Submit</button>
        </div>
    
        </form>
   </>
  )
}

export default SignUp