import './login.css';
import personas from "../../assets/personas.png";
import EyeIcon from "../../assets/eye.svg";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import apiService from '../../api/apiService';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await apiService.login({ email, password });
            console.log('Login successful:', response.data);
            alert('Login success')
            localStorage.setItem('user', JSON.stringify(response.data));
            navigate("/");
            // Maneja el inicio de sesión exitoso (e.g., redirigir al usuario a la página principal)
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
            setErrorMessage('Invalid email or password.');
        }
    };

    return (
        <>
            <div className="login-container">
                <div className="izq">
                    <div className="form-container">
                        <form className="form" onSubmit={handleLogin}>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '3rem'}}>
                                <Link to={'/'}> &lt;-- Back to Home</Link>
                                <img src={logo} style={{width: '7rem'}} alt="Logo"/>
                            </div>
                            <p className="titulo-login">Sign In</p>
                            <div className='inputs'>
                                <input 
                                    className="input" 
                                    id='email' 
                                    type="email" 
                                    placeholder='Email or phone number' 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <div className="password-container">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='Enter your password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <img
                                        src={EyeIcon}
                                        onClick={togglePasswordVisibility}
                                        alt="Toggle Password Visibility"
                                    />
                                </div>
                                {errorMessage && <p className="error-message">{errorMessage}</p>}
                            </div>
                            <button type="submit">Sign in</button>
                            <div className='sign-up'>
                                <p>Don&apos;t have an account?</p>
                                <Link to={'/Register'} className='amarillo'>Sign up now</Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="right">
                    <img className="foto-login" src={personas} alt="Personas"/>
                </div>
            </div>
        </>
    );
}

export default Login;
