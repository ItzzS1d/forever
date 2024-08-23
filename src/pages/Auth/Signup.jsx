import React from 'react'
import {Link} from "react-router-dom"

const Signup = () => {

    const handleSignup = (e) => {
        e.preventDefault()
        const formdata = e.target
        const name = formdata.name.value
        const email = formdata.email.value
        const password = formdata.password.value
        console.log(email , password , name)
        // Implement login logic here
    
    }
  return (
    <form onSubmit={handleSignup} className='mt-16   flex justify-center flex-col items-center gap-5'>
      <h1 className='text-3xl'>Signup_____</h1>
      <div className='w-[80%] md:w-[30%]'>
        <input type="text" className='outline-none px-2 py-2 md:py-1   border-2 w-full border-black' placeholder='Name' name='name'/>
      </div>
      <div className='w-[80%] md:w-[30%]'>
        <input type="text" className='outline-none px-2 py-2 md:py-1   border-2 w-full border-black' placeholder='Email' name='email'/>
      </div>
      <div className='w-[80%] md:w-[30%]'>
        <input type="text" className='outline-none border-2 px-2 py-2 md:py-1  w-full border-black' placeholder='Password' name='password'/>
        <div className='text-sm flex justify-between mt-1'>
          <Link>Forgot your password?</Link>
          <Link to={"/login"}>Login here</Link>
        </div>
      </div>
      <button className='bg-black text-white px-6 py-1.5'>Sign Up</button>
    </form>
  )
}

export default Signup