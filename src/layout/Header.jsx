import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <h1 class="navbar-brand" to="#">Navbar</h1>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/Registration">Registration</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/signup">Signup</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/localform">Local</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/valid">valid</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/user">user</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/view">View</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header