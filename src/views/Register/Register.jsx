import './register.css';
import React, { useState } from 'react';
import EyeIcon from "../../assets/eye.svg"

function Register(){


    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (<>

    <div className="site-wrap d-md-flex align-items-stretch">
        <div className="bg-img" ></div>
       
        <div className="form-wrap">
        <p clasName="back">  &lt;-- Back to Home</p>
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
                   <div className="d-flex justify-content-between">
                    <div className="form-check">
                        ¿Qué quieres ser?
                     <div>
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
                        <button type="submit" className="btn btn-primary">Create an account</button>
                    </div>

                    <div className="mb-2">Already a member? <a href="index.html">Log in</a></div>


                </form>
            </div>
        </div>
    </div>



    </>);
}


export default Register;