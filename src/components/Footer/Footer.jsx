import './footer.css'
import Location from '../../assets/location-footer.svg'
import Email from '../../assets/email-footer.svg'
import Phone from '../../assets/call-calling.svg'
import logo from '../../assets/logo-footer.png'

const Footer = () => {
  return (
    <div className="footer-container">
        <div className ='up'>
        <div className='left'>
            <div className='logo-container'>
                <img src={logo} alt="logo"/>
            </div>
            <div className='contact-links'>
                <ul>
                    <li>
                        <img src={Location} alt = ""/>
                        <span>Medellín, Colombia</span>
                    </li>
                    <li>
                        <img src={Email} alt = ""/>
                        <span>softwareashen@gmail.com</span>
                    </li>
                    <li>
                        <img src={Phone} alt = ""/>
                        <span>+57 380652059</span>
                    </li>
                </ul>
            </div>
            </div>
            <div className="center">
                <h3>Raise App</h3>
                
                <ul className="links">
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                    <li>
                        Explore
                    </li>
                </ul>

                <ul className="icons">
                    <li>
                        Tk
                    </li>
                    <li>
                        Gh
                    </li>
                    <li>
                        Ig
                    </li>
                    <li>
                        Tw
                    </li>
                </ul>
            
            </div>
            <div className="right">
                <span>Passionate projects take flight, back them with blockchain's light. 
                    Secure your future, invest right, build your city strong and tight.</span>
            </div>
        </div>
        
        <div className='copy'>
            <p>&#169; 2024 Ashen. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer