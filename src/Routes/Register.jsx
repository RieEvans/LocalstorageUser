import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export const Register = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    name: "",
    email:"",
    password:"",
  });

  //Store Value in Local Storage
  const handleSubmit = (e) => {
     e.preventDefault();
     localStorage.setItem("user", JSON.stringify(inputValue));
      navigate("/login")
  }

  return (
    <section className="m-auto w-[80%] h-[80vh] flex items-center justify-center">
      <main className="xl:flex items-center justify between gap-20">
        <form onSubmit={handleSubmit} className="left-data flex flex-col gap-5 xl:w-full xxl:w-[50%] ">
          <h1 className="text-3xl text-center font-semibold">Sign Up</h1>
          <input name="name" value={inputValue.name} onChange={(e) => setInputValue({...inputValue, [e.target.name] : e.target.value,})} type="text" placeholder="Your Name" className="" />
          <input name="email" value={inputValue.email} onChange={(e) => setInputValue({...inputValue, [e.target.name] : e.target.value,})} type="email" placeholder="Your Email" />
          <input name="password" value={inputValue.password} onChange={(e) => setInputValue({...inputValue, [e.target.name] : e.target.value,})} type="password" placeholder="Your Password"  />

          <div className="flex items-center gap-3">
            <input className="rounded-sm cursor-pointer" type="checkbox" />
            <p>Remember me</p>
          </div>
          <button
            type="submit"
            className="bg-slate-900 text-white font-semibold rounded-md py-2 w-[100%]"
          >
            Submit
          </button>
          <div>
          
            <p>
              Already have an account ?{" "}
              <Link to = '/Login' className="text-blue-400">SignIn</Link>
            </p>
          </div>
        </form>

        <div className="right-data xl:block sm:hidden ">
          <img className="w-full h-full object-cover" src="./sign.svg" alt="" />
        </div>
      </main>
    </section>
  );
};
