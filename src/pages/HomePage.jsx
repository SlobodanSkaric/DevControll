import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from "../App"
import Header from '../components/Header';

function HomePage() {
    const userCon = useContext(UserContext);

    const [user, setUser] = useState("");

    useEffect(() => {
        if(userCon === ""){
            setUser("");
        }else{
            setUser(userCon)
        }

        return () => {
            setUser("")
        }
    },[userCon]);
    
  return (
    <div className=' mx-auto bg-slate-100'>
      <Header userName={{username: user}}/>
      <main className=' w-3/5 mx-auto mt-10'>
        <div className='flex justify-between'>

          <div className='bg-slate-200  text-cyan-50 w-1/3 mx-6 text-center h-96'>
            <Link to="/onhold"><div className='title font-bold  bg-slate-700 py-3 hover:bg-slate-800'>On Hold</div></Link>
            <div className='py-10'>
              <ul className='home-list list-none text-cyan-950'>
                <li>OnHold</li>
                <li>OnHold</li>
                <li>OnHold</li>
                <li>OnHold</li>
                <li>OnHold</li>
                <li>OnHold</li>
              </ul>
            </div>
          </div>

          <div className='bg-slate-200  text-cyan-50 w-1/3 mx-6 text-center h-96'>
            <Link to="/inprogress"><div className='title font-bold  bg-slate-700 py-3 hover:bg-slate-800'>In Progress</div></Link>
            <div className='py-10'>
              <ul className='home-list list-none text-cyan-950'>
                  <li>InProgress</li>
                  <li>InProgress</li>
                  <li>InProgress</li>
                  <li>InProgress</li>
                  <li>InProgress</li>
                  <li>InProgress</li>
                </ul>
            </div>
          </div>

          <div className='bg-slate-200  text-cyan-50 w-1/3 mx-6 text-center h-96'>
            <Link to="/finished"><div className='title font-bold  bg-slate-700 py-3 hover:bg-slate-800'>Finished</div></Link>
            <div className='py-10'>
              <ul className='home-list list-none text-cyan-950'>
                  <li>Finished</li>
                  <li>Finished</li>
                  <li>Finished</li>
                  <li>Finished</li>
                  <li>Finished</li>
                  <li>Finished</li>
                </ul>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default HomePage