import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {

    const navigate = useNavigate()
    const [input,setInput] = useState({
        email: "",
        password:"",
    })

    const handleLogin = (e) => {
        e.preventDefault();
        const loggedUser =  JSON.parse(localStorage.getItem("user"));
        if( input.email === loggedUser.email  && input.password === loggedUser.password)
        {   
            localStorage.setItem("loggedIn", true)
            navigate("/")
        }else {
            alert("Wrong Email or Password")
        }
    }
  return (
    <section className="m-auto w-[80%] h-[80vh] flex items-center justify-center">
      <main className="xl:flex items-center justify between gap-20">
        <form onSubmit={handleLogin} className="left-data flex flex-col gap-5 xl:w-full xxl:w-[50%] ">
          <h1 className="text-3xl text-center font-semibold">Log In</h1>
          <input name='email' value={input.email} onChange={(e) => setInput({...input, [e.target.name] : e.target.value})}  type="email" placeholder="Your Email" />
          <input  name='password' value={input.password} onChange={(e) => setInput({...input, [e.target.name] : e.target.value})} type="password" placeholder="Your Password" required />

          <div className="flex items-center gap-3">
            <input className="rounded-sm cursor-pointer" type="checkbox" />
            <p>Remember me</p>
          </div>
          <button
            type=""
            className="bg-slate-900 text-white font-semibold rounded-md py-2 w-[100%]"
          >
            Login
          </button>
          <div>
            <p>
              Dont have an account ? {" "}
              <Link to ='/register' className="text-blue-400">Sign up</Link>
            </p>
          </div>
        </form>

        <div className="right-data xl:block sm:hidden ">
          <img className="w-full h-full object-cover" src="./sign.svg" alt="" />
        </div>
      </main>
    </section>
  )
}
