import React, {Component} from "react";

import {NavLink} from 'react-router-dom'

export default class Navlink extends Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    
                    {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                  <NavLink to='/' className="nav-link">Home</NavLink>
                  
                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link" href="#">Link</a> */}
                    <NavLink to='/about' className="nav-link">About</NavLink>
                  </li>
                  {/* <li class="nav-item dropdown"> */}
                    {/* <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a> */}
                    {/* <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><hr class="dropdown-divider"/></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li> */}
                  <li class="nav-item">
                    {/* <a class="nav-link disabled">Disabled</a> */}
                    <NavLink to='./contact' className="nav-link">Contact</NavLink>
                  </li>

                  <li class="nav-item">
                    {/* <a class="nav-link disabled">Disabled</a> */}
                    <NavLink to='./blog' className="nav-link">Blog</NavLink>
                  </li>

                  <li class="nav-item">
                    {/* <a class="nav-link disabled">Disabled</a> */}
                    <NavLink to='./form' className="nav-link">Login</NavLink>
                  </li>


                </ul>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        )
    }
}