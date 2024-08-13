import './nav.css'
import Logo from '../../assets/logo.png'
import { Link} from 'react-router-dom';
import { useEffect, useState } from 'react';



const Nav = () => {
    const [logged, setLogged] = useState(false);
    useEffect(() => {

        const user = JSON.parse(localStorage.getItem('user'));

        if (user != null){

            setLogged(true)
        }

    },[]);
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
        <div className="right" >
            <Link to={"/Login"} className={logged ? "logged" : "not-logged"}>Login</Link>
            <Link className="button " to={"/Register"}>Register</Link>
        </div>
    </nav>
    </>
  )
}

export default Nav