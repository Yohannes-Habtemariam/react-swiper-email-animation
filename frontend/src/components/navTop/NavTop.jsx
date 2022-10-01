import React from 'react'
import { NavLink } from 'react-router-dom';
import "./NavTop.css";

const NavTop = () => {
  return (
    <header className='header-container'>
        <nav className='header-nav'>
            <ul className='header-nav-ul'>
                <li>
                    <NavLink to="/"> Home </NavLink>
                </li>

                <li>
                    <NavLink to="/contact"> Contact </NavLink>
                </li>
            </ul>
            <div>
                <li>
                    <NavLink>Login</NavLink>
                </li>
            </div>
        </nav>

    </header>
  )
}

export default NavTop