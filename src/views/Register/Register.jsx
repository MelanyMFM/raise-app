import './register.css';
import React, { useState } from 'react';
import EyeIcon from "../../assets/eye.svg";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";

function Register(){


    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (<>

    <div className="site-wrap d-md-flex align-items-stretch">
        <div className="bg-img" ></div>
       
        <div className="form-wrap">
        <div className='mini-header'>
        <Link to={"/"} clasName="back">  &lt;-- Back to Home</Link>
        <img src={logo} alt="Logo" className="logo" /></div>
            <div className="form-inner">
                <h1 className="title">Register</h1>
                
                <form action="#" className="pt-3">

                    <div className="form-floating">
                        <input type="text" className="form-control" id="name" placeholder="Full Name"/>
                        <label htmlFor="name">Full Name</label>
                    </div>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="info@example.com"/>
                        <label htmlFor="email">Email Address</label>
                    </div>

                    <div className="form-floating">

                        
                        <input type={showPassword ? 'text' : 'password'} className="form-control" id="password" placeholder="Password"/>
                        <img
                        src={EyeIcon}
                        onClick={togglePasswordVisibility}
                        alt="Toggle Password Visibility"
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                   <div >
                    ¿Qué quieres ser?
                    <div className="form-check">
                        
                     <div >
                        <input type="radio" className="form-check-input" id="emprendedor" name="userType"/>
                        <label htmlFor="emprendedor" className="form-check-label">Emprendedor</label>
                        </div>
                        <div>
                         <input type="radio" className="form-check-input" id="investor" name="userType"/>
                        <label htmlFor="investor" className="form-check-label">Investor</label>
                        </div>
                    </div>
                    </div>


                    <div className="d-grid mb-4">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>

                    <div className="mb-2">Already a member? <Link to = {"/Login"}>Log in</Link></div>


                </form>
            </div>
        </div>
    </div>



    </>);
}


export default Register;