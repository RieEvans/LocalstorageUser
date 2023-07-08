import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("user"))
    const userName = user ? user.name : null

    const handleLogout =() => {
        localStorage.removeItem("loggedIn")
        navigate("/login")
    }
  return (
    <div className='flex flex-col gap-10 items-center justify-center h-[80vh]'>
        <h1 className='text-5xl'>Homepage</h1>
        <h2 className='text-xl'>Welcome - {userName}</h2>
        <div>
            <button onClick={handleLogout} className='bg-slate-900 px-5 py-1 text-white rounded'>Logout</button>
        </div>
    </div>  
  )
}
