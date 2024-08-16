import "./donate.css"
import Nav from "../../components/Nav/Nav"
import Footer from "../../components/Footer/Footer"
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";

function Donate(){

    const location = useLocation();
    const { props } = location.state;

    const [valor, setValor] = useState(5);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    

    const handleInputChange = (event) => {
        const value = event.target.value;
        if (value === "" || /^\d+$/.test(value)) {
            setValor(Number(value));
        }
    };

    return  <div className="donate">
    
    <Nav /> 
    <div className="donate-page">

        
        <h1 className="amarillo">Donate to {props.nombre}</h1>

        <div className="donation-container">

            <div className="donation-head">
                <img src={props.img} alt="emprendimiento"/>

                <div className="donation-names">
                    <p style={{fontSize: "2.5rem"}}>You're supporting <span style={{fontWeight: "bold"}}>{props.nombre}</span></p>
                    <p style={{fontSize: "1.5rem", color: 'rgba(0, 0, 0, 0.5)'}}>Your donation will benefit <span style={{fontWeight: "bold"}}>{props.usuario}</span></p>
                </div>
            </div>

            <div className="donation-body">
                <p style={{fontSize:'1.5rem', fontWeight:'bold'}}>Enter your donation</p>

                <div className="donation">
                    <div style={{display:'flex'}}  className="donation-form">
                        <p className={valor==5?"selected":""} onClick={()=>setValor(5)}>$5</p>
                        <p className={valor==10?"selected":""} onClick={()=>setValor(10)}>$10</p>
                        <p className={valor === 25 ? "selected" : ""} onClick={() => setValor(25)}>$25</p>
                        <p className={valor === 50 ? "selected" : ""} onClick={() => setValor(50)}>$50</p>
                        <p className={valor === 100 ? "selected" : ""} onClick={() => setValor(100)}>$100</p>
                        <p className={valor === 200 ? "selected" : ""} onClick={() => setValor(200)}>$200</p>
                    </div>
                    <input
                        type="text"
                        placeholder="Enter your donation"
                        value={valor}
                        onChange={handleInputChange}
                        min="1"
                        inputMode="numeric"
                        pattern="\d*"
                    />

                </div>

                <div className="your-donation" style={{fontSize:'1.5rem'}}>

                    <p style={{fontWeight: "bold"}}>Your donation</p>
                    <div style={{display:'flex', justifyContent:'space-around', color:'rgba(0, 0, 0, 0.5)', fontWeight:'bold'}}>
                        <p>Your donation</p>
                        <p>${valor}</p>
                    </div>

                    <button>Donate</button>
                </div>

            </div>

        </div>


    </div>
    <Footer/>
    </div>
}


export default Donate;