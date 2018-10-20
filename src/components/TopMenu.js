import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../book.png'

const TopMenu = () => {
    return(
        <nav className="nav-wrapper blue darken-5">
            <div className="topmenu">
                <Link className="brand-logo" to="/">Books</Link>
                <img src={Logo} alt="logo"/>
                <ul className="right">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/Help">Help</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default TopMenu