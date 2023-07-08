import React from "react"
import { Header } from "./Components/Header"
import { Register } from "./Routes/Register"
import { Login } from "./Routes/Login"
import { Home } from "./Routes/Home"
import { ProtectedRoutes } from "./Serve/ProtectedRoutes"

import {Routes, Route} from "react-router-dom"

export default function App() {
  return (
    <div>
        <Header /> {/* Header navigation Bar */}
        <Routes>
        
            <Route path="/register" element = {<Register />} />
            <Route path="/login" element = {<Login />} />

            {/* Protected Routes*/}
            <Route path="/" element = {<ProtectedRoutes />}>
                <Route path="/" exact element = {<Home />} />
            </Route>
            
        </Routes>   
    </div>
  )
}