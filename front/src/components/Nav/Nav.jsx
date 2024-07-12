import React from 'react'
import './nav.css'
import Logo from '../../assets/logo.png'
import { Link} from 'react-router-dom';



const Nav = () => {
  return (
    <>
    <nav className="nav-bar">
        <div className="left">
            <img src = {Logo} alt="Raise App Logo"/>
        </div>
        <div className="center">
            <ul>
                <Link to={"/"}>Home</Link>
                <li>About</li>
                <li>Contact</li>
                <Link to={"/Explore"}>Explore</Link>
            </ul>
        </div>
        <div className="right">
            <Link to={"/Login"} >Login</Link>
            <button>Register</button>
        </div>
    </nav>
    </>
  )
}

export default Nav