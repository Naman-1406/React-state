import React from 'react'

const Home = () => {
    function inc (id){
        alert(id)
    }
  return (
    <div className='mx-auto text-center pt-5 pb-5'>
    <h1>Home Page</h1 >
    <button className="btn btn-success btn-hover "onClick={()=>inc(4+5)}>Click</button>

    </div>
  )
} 
const About =()=>{
    return(
        <>
        <h1>About us</h1>
        </>
    )
}

export {Home , About}