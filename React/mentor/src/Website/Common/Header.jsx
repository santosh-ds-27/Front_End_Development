import React from 'react'
import { NavLink } from 'react-router'

function Header() {
    return (
        <div>
            <header id="header" className="header d-flex align-items-center sticky-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center">
                    <NavLink to="/" className="logo d-flex align-items-center me-auto">
                        {/* Uncomment the line below if you also wish to use an image logo */}
                        {/* <img src="assets/img/logo.png" alt=""> */}
                        <h1 className="sitename">Mentor</h1>
                    </NavLink>
                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><NavLink to="/" href="index.html" className="active">Home<br /></NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/courses" >Courses</NavLink></li>
                            <li><NavLink to="/trainers" >Trainers</NavLink></li>
                            <li><NavLink to="/events" >Events</NavLink></li>
                            <li><NavLink to="/pricing">Pricing</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list" />
                    </nav>
                    <NavLink className="btn-getstarted" to="/courses" >Get Started</NavLink>
                </div>
            </header>

        </div>
    )
}

export default Header
