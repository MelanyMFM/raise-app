import Nav from "../../components/Nav/Nav";
import './login.css'
import personas from "../../assets/personas.png";
import EyeIcon from "../../assets/eye.svg"
import React, { useEffect, useState } from 'react';


function Login(){

    const [showPassword, setShowPassword] = useState(false);

  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
        <>
        
            
            <div className="login-container">
                <div className="izq">
                    <Nav/>
                    <div className="form-container">
                    <form className="form">
                        <p className="titulo-login">Sign In</p>
                        <div className= 'inputs'>
                            <input className="input" id='email' type="email" placeholder='Email or phone number' required/>
                        
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
                        </div>

                        <button>Sign in</button>
                        <div className= 'sign-up'>
                            <p>Dont have an account?</p>
                            <span>Sign up now</span>
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

export default Login;