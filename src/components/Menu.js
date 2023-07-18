import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
function Menu() {
  return (
  <div className="List">
        <p><Link to={"/"}>Intro</Link></p>
        <p><Link to={"/skills"}>Skills</Link></p>
        <p><Link to={"/projects"}>Projects</Link></p>
        <p> <Link to={"/contact"}>Contact</Link></p>
         
        
         </div>
  );
}

export default Menu;








