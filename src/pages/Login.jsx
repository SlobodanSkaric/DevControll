import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
      <div className='mx-auto py-10  text-cyan-950 font-bold  bg-slate-200'>
          <div className='text-3xl text-center'>
            Login Page
          </div>
      </div>
      <div className='mx-auto text-center mt-6 bg-slate-200  w-80 h-80 rounded-lg'>
        <div>
          <form>
            <div  className='flex flex-col items-center mx-auto justify-around py-6 w-80 h-80 '>
              <input type="text" placeholder='Enter your username' className='w-full px-3 py-3'/>
              <input type="password" placeholder='Enter your password' className='w-full px-3 py-3'/>
              <button type='submit' className=' bg-slate-300 hover:bg-slate-600 hover:text-cyan-50 px-10 py-2'>LogIn</button>
              </div>
          </form>
        </div>
        <div className='py-3 px-3 text-sm'>
          If you not have account please register here <Link to="/registration" className='hover:text-cyan-800 text-cyan-600'>Register</Link>
        </div>
      </div>
    </>
  )
}

export default Login