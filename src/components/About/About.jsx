import './about.css'
import { useState } from 'react';
import img from "../../assets/about-img.png"

function About(){

    const [verMas, setVerMas] = useState(false);
    const corto = "This website connects you with passionate local entrepreneurs and innovative projects. Back their dreams with next-generation tools like NFTs and experience the power of secure transactions.";
    const largo = "This website connects you with the beating heart of your city: passionate local entrepreneurs with innovative projects.  Imagine a vibrant farmers market bursting with fresh ideas. Here, you can directly support their dreams with next-generation tools like NFTs.  Experience the power of secure transactions, visualized as a network of glowing lines connecting you to local businesses, just like the lights twinkling across a bustling city skyline at night.  Join the movement. Build a stronger tomorrow. Together.";


    function clickBoton(){
        setVerMas(!verMas);
    }

    return(
    <div className='about'>
        <div className='about-izq'>
            <p className='amarillo about-title'>About Us</p>
            <p className='about-title-grande'>Local <span className='amarillo'>Dreams</span>, <br/> Global Impact</p>
            <hr/>
            <p className='amarillo about-subtitulo'>We love RaiseApp</p>
            <p className='about-texto'>{verMas ? largo : corto}</p>
            <p className='about-boton' onClick={clickBoton}>{verMas ? "SEE LESS" : "READ MORE"}</p>
        </div>
        
        <img className="about-img" src={img} alt="conexiones"/>
        
    
    </div>
    )
}

export default About;