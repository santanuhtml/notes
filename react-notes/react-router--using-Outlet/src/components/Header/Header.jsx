import React from 'react'
import {Link, NavLink} from 'react-router-dom'
function Header(){
  return(
    <header>
        <nav>
          <div>
            <Link to="/" className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                alt="Logo"
                style={{width:'100px'}}
              />
            </Link>
          </div>
          <div id="mobile-menu-2">
            <ul>
              <li>
                <NavLink 
                  to="/"
                  className={({isActive}) =>
                    `nav__a ${isActive ? "text-red" : "text-black"}`
                  }>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({isActive}) =>
                    `nav__a ${isActive ? "text-red" : "text-black"}`
                  }>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({isActive}) =>
                    `nav__a ${isActive ? "text-red" : "text-black"}`
                  }>
                    Contact
                </NavLink>
              </li>
              
              <li>
                <NavLink
                  to="/github"
                  className={({isActive}) =>
                    `nav__a ${isActive ? "text-red" : "text-black"}`
                  }>
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <Link to="#">Log in</Link>
            <Link to="#">Get started</Link>
          </div>
        </nav>
    </header>
  )
}
export default Header;