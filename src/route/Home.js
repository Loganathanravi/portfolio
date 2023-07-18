import { Outlet } from "react-router-dom";
import React from 'react'
import NavBar from "../components/NavBar";
import Menu from "../components/Menu"
import "../components/Main.css"
function Home() {
  return (
    <div>
     <NavBar/>
     <div className="main">
     <Menu/>
     <Outlet/></div>
    </div>
  )
}

export default Home