import "./donate.css"
import Nav from "../../components/Nav/Nav"
import { useLocation } from 'react-router-dom';


function Donate(){

    const location = useLocation();
    const { props } = location.state;
    

    return  <div className="donate">
    
    {/* <Nav logged={true}/> */}
    
    <div className="donate-page">

        
        <h1 className="amarillo">Donate to {props.nombre}</h1>

        <div className="donation-container">

            <div className="donation-head">
                <img src={props.img} alt="emprendimiento"/>

                <div className="donation-names">
                    <p  style={{fontSize: "2.5rem"}}>You're supporting <span style={{fontWeight: "bold"}}>{props.nombre}</span></p>
                    <p style={{fontSize: "1.5rem", color: 'rgba(0, 0, 0, 0.5)'}}>Your donation will benefit <span style={{fontWeight: "bold"}}>{props.usuario}</span></p>
                </div>
            </div>

            <div className="donation-body">
                <p>Enter your donation</p>

                <div className="donation">
                    {/*Poner lo de click y que se ponga la cantidad */}
                    <div style={{display:'flex'}}  className="donation-form">
                        <p>$5</p>
                        <p>$10</p>
                        <p>$25</p>
                        <p>$50</p>
                        <p>$100</p>
                        <p>$200</p>
                    </div>
                </div>



            </div>

        </div>


    </div>
    
    </div>
}


export default Donate;