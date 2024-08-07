import {Link} from 'react-router-dom'
import './register.css'
import personas from "../../assets/personas.png";
import EyeIcon from "../../assets/eye.svg"
import React, { useState } from 'react';
import logo from "../../assets/logo.png"


function Register(){

    const [showPassword, setShowPassword] = useState(false);

  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
        <>
        
            
            <div className="login-container">
                <div className="izq">
                    
                    <div className="form-container">

                        
                    <form className="form">
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', height:'3rem'}}>
                            <Link to = {'/'}>  &lt;-- Back to Home</Link>
                            <img src={logo} style={{width: '7rem'}}/>
                        </div>
                        <p className="titulo-login">Sign Up</p>
                        <div className= 'inputs'>

                            <input className='input' id='name' type="text" placeholder='Name' required/>
                            <input className="input" id='email' type="email" placeholder='Email' required/>
                        
                            <div className="password-container">
                        <input
                        type={showPassword ? 'text' : 'password'}
                            placeholder='Enter your password'
                    required
                        />
                        <img
                        src={EyeIcon}
                        onClick={togglePasswordVisibility}
                        alt="Toggle Password Visibility"
                        />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    ¿Qué quieres ser?
                    <div style={{display:'flex', justifyContent: 'space-between'}}>
                        
                     <div style={{display:'flex', gap: '.5rem'}}>
                        <input type="radio"  id="emprendedor" name="userType"/>
                        <label htmlFor="emprendedor" >Emprendedor</label>
                        </div>
                        <div style={{display:'flex', gap: '.5rem'}}>
                         <input type="radio"  id="investor" name="userType" checked/>
                        <label htmlFor="investor" >Investor</label>
                        </div>
                    </div>
                    </div>
                        </div>

                        <button>Sign Up</button>
                        <div className= 'sign-up'>
                            <p>Dont have an account?</p>
                            <Link className="amarillo" to = {'/Login'}>Sign in now</Link>
                        </div>
                    </form>
                    </div>
                    


                </div>
                <div className="right">
                <img className="foto-login" src={personas}/>
                </div>

                
            </div>
        </>
    
        );
}

export default Register;