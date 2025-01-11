import React from "react";
import { Link, NavLink } from "react-router-dom";
function Header(){
  return(
    <div>
      <ul>
        <li>
          <NavLink 
            to="/" 
            className={({isActive})=> `nav__a ${isActive ? 'text-red':'black'}`}
          >Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : 'text-black'}`}>
            About
          </NavLink>
          <ul>
            <li>
              <NavLink to="/mission" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : 'text-black'}`}>
                Mission
              </NavLink>
            </li>
            <li>
              <NavLink to="/vision" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : 'text-black'}`}>
                Vision
              </NavLink>
            </li>
            <li>
              <NavLink to="/about/career" className={({ isActive }) => `nav__a ${isActive ? 'text-red' : 'text-black'}`}>
                Career
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink  
          to="/contact"
          className={({isActive})=> `nav__a ${isActive ? 'text-red':'black'}`}
          >Contact</NavLink></li>
      </ul>
    </div>
  )
}
export default Header;