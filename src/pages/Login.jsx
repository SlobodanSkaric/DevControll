import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthProvider';

function Login() {
  const {auth,setAuth} =  useContext(AuthContext);
  const [emailClient, setEmail] = useState("");
  const [passwordClient, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");

  const handleChangeEmail  = (e) =>{
    e.preventDefault();
    setEmail(e.target.value)
  }

  const handleChangePassword  = (e) =>{
    e.preventDefault();
    setPassword(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/user/login",{
      email: emailClient,
      password: passwordClient
    },{
      headers:{
        "Content-Type" : "application/json"
      }
    }).then(res => {

      setUsername(res.data.username);
      setUserId(res.data.userId);
      setToken(res.data.token);

      localStorage.setItem("user_token", res.data.username);
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("userId", res.data.userId);

      window.location.replace("/")
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <>
      <div className='mx-auto py-10  text-cyan-950 font-bold  bg-slate-200'>
          <div className='text-3xl text-center'>
            Login Page
          </div>
      </div>
      <div className='mx-auto text-center mt-6 bg-slate-200  w-80 h-80 rounded-lg'>
        <div>
          <form onSubmit={submitForm}>
            <div  className='flex flex-col items-center mx-auto justify-around py-6 w-80 h-80 '>
              <input type="text" placeholder='Enter your email' className='w-full px-3 py-3' onChange={handleChangeEmail}/>
              <input type="password" placeholder='Enter your password' className='w-full px-3 py-3' onChange={handleChangePassword}/>
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