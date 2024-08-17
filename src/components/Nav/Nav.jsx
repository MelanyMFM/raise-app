import './nav.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileNav from '../ProfileNav/ProfileNav';
import { Link as ScrollLink, scroller } from 'react-scroll';


const Nav = () => {
    const navigate = useNavigate();
    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState(null);

    const handleNavigation = ( target ) => {
        if (window.location.pathname !== "/") {
            navigate("/", { replace: true });
            setTimeout(() => {
                scroller.scrollTo(target, {
                    duration: 800,
                    delay: 0,
                    smooth: 'easeInOutQuart',

                });
            }, 100);  // Espera un poco para asegurarte de que la navegación se complete
        } else {
            scroller.scrollTo(target, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }
    };

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
            <img src={Logo} alt="Raise App Logo"  onClick={() =>{navigate("/")
            }
            } />
        </div>
        <div className="center">
            <ul>
                <li onClick={() => handleNavigation('home')}>Home</li>
                <li onClick={() => handleNavigation('about')}>About</li>
                <li onClick={() => handleNavigation('contact')}>Contact</li>
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