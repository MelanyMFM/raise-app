import { Link } from 'react-router-dom';
import './register.css';
import personas from "../../assets/personas.png";
import EyeIcon from "../../assets/eye.svg";
import { useState } from 'react';
import logo from "../../assets/logo.png";
import apiService from '../../api/apiService';

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('INVESTOR');
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: ''
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const validateName = (value) => {
        if (!value.trim()) {
            return 'Name is required';
        }
        return '';
    };

    const validateEmail = (value) => {
        if (!value.trim()) {
            return 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
            return 'Email is invalid';
        }
        return '';
    };

    const validatePassword = (value) => {
        if (!value.trim()) {
            return 'Password is required';
        } else if (value.length < 6) {
            return 'Password must be at least 6 characters long';
        }
        return '';
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        switch (id) {
            case 'name':
                setName(value);
                setErrors(prevErrors => ({ ...prevErrors, name: validateName(value) }));
                break;
            case 'email':
                setEmail(value);
                setErrors(prevErrors => ({ ...prevErrors, email: validateEmail(value) }));
                break;
            case 'password':
                setPassword(value);
                setErrors(prevErrors => ({ ...prevErrors, password: validatePassword(value) }));
                break;
            default:
                break;
        }
    };

    const handleRegister = async (event) => {
        event.preventDefault();

        // Final validation before submitting
        const nameError = validateName(name);
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);

        if (nameError || emailError || passwordError) {
            setErrors({
                name: nameError,
                email: emailError,
                password: passwordError
            });
            return;
        }

        const userData = {
            name,
            email,
            password,
            type: userType,
            image: '',
            publicKey: null,
        };

        try {
            const response = await apiService.registerUser(userData); // Utiliza el apiService para registrar al usuario
            console.log('User registered successfully:', response.data);
            // Maneja el registro exitoso, como redirigir a la página de inicio de sesión o mostrar un mensaje
            alert("Usuario creado con exito")
            location.reload()
        } catch (error) {
            console.error('Error registering user:', error);
            alert('Error al crear el usuario')
            // Maneja el error de registro, como mostrar un mensaje de error
        }
    };

    return (
        <>
            <div className="register-container">
                <div className="izq">
                    <div className="form-container">
                        <form className="form" onSubmit={handleRegister}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '3rem' }}>
                                <Link to={'/'}> &lt;-- Back to Home</Link>
                                <img src={logo} style={{ width: '7rem' }} alt="Logo"/>
                            </div>
                            <p className="titulo-login">Sign Up</p>
                            <div className='inputs'>
                                <div className="name">
                                <input 
                                    className='input' 
                                    id='name' 
                                    type="text" 
                                    placeholder='Name' 
                                    value={name}
                                    onChange={handleInputChange}
                                    required 
                                />
                                {errors.name && <p className="error-message">{errors.name}</p>}
                                </div>
                                
                                <div className="email">
                                <input 
                                    className="input" 
                                    id='email' 
                                    type="email" 
                                    placeholder='Email' 
                                    value={email}
                                    onChange={handleInputChange}
                                    required 
                                />
                                {errors.email && <p className="error-message">{errors.email}</p>}
                                </div>
                                <div className="password">
                                <div className="password-container">
                                    <input
                                        id='password'
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='Enter your password'
                                        value={password}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <img
                                        src={EyeIcon}
                                        onClick={togglePasswordVisibility}
                                        alt="Toggle Password Visibility"
                                    />
                                </div>
                                {errors.password && <p className="error-message">{errors.password}</p>}
                                </div>
                                

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    ¿Qué quieres ser?
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'flex', gap: '.5rem' }}>
                                            <input 
                                                type="radio"  
                                                id="investor" 
                                                name="userType" 
                                                value="INVESTOR" 
                                                checked={userType === 'INVESTOR'}
                                                onChange={(e) => setUserType(e.target.value)}
                                            />
                                            <label htmlFor="investor">Investor</label>
                                        </div>
                                        <div style={{ display: 'flex', gap: '.5rem' }}>
                                            <input 
                                                type="radio"  
                                                id="emprendedor" 
                                                name="userType" 
                                                value="ENTREPRENEUR"
                                                onChange={(e) => setUserType(e.target.value)}
                                            />
                                            <label htmlFor="emprendedor">Emprendedor</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit">Sign Up</button>
                            <div className='sign-up'>
                                <p>Already a member?</p>
                                <Link className="amarillo" to={'/Login'}>Sign in now</Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="right">
                    <img className="foto-register" src={personas} alt="Personas"/>
                </div>
            </div>
        </>
    );
}

export default Register;
