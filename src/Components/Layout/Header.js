import React from 'react'
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <NavLink className="navbar-brand" to={'/login'}>
      Expense Tracker
      </NavLink>

      <div className="d-flex align-items-center" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to={'/'}>
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={'/signup'}>
              Sign up
            </NavLink>
          </li>
    
        </ul>
      </div>

    </div>
  </nav>
  )
}

export default Header