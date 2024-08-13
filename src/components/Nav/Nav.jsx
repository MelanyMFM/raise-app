import './nav.css'
import Logo from '../../assets/logo.png'
import { Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProfileNav from '../ProfileNav/ProfileNav';

const Nav = () => {
    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState(null);
    useEffect(() => {

        const user1 = JSON.parse(localStorage.getItem('user'));

        if (user1 != null){
            setUser(user1)
            setLogged(true)

            console.log(user);
        }
        else{
            setUser({})
            setLogged(false)
        }


    },[]);

return (
    <nav className="nav-bar" >  
        <div className="left">
            <img src={Logo} alt="Raise App Logo"/>
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
            {logged ? (
                <>
                    
                    <ProfileNav user={user} />
                </>
            ) : (
                <>
                    <Link to={"/Login"} className="not-logged">Login</Link>
                    <Link className="button not-logged" to={"/Register"}>Register</Link>
                </>
            )}
        </div>
    </nav>
)
}

export default Nav