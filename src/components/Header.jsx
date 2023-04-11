import React from 'react'
import { Link } from 'react-router-dom'

function Header(user) {
  return (
    <header>
        <div className='flex text-center py-3 text-cyan-950 font-bold  bg-slate-200 justify-around px-6'>
            <div className='text-left flex-1'>My Control Panel</div>
            <div className='text-right flex-1'>{
                    (user.userName.username  ?  user.userName.username : <Link to="/login" className='py-1 px-6 bg-slate-300 hover:bg-slate-600 hover:text-cyan-50 '>Login</Link>)
                }</div>
           
        </div> 
      </header>
  )
}

export default Header