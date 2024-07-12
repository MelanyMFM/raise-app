import './header.css'
import perosnas from '../../assets/personas.png'
import { Link } from 'react-router-dom';

function Header(){

    return(
        <>
        <div className='header'>
            <div className='titulos-header'>
            <p className='titulo-header'><span className='amarillo'>Unleash</span> Local Dreams. <br/>
            <span className='amarillo'>Empower</span> Your Community.</p>
            <p className='subtitulo-header'>Invest in the future of your city with secure, blockchain-powered funding.</p>
            </div>
            <Link to={"/Explore"}className='explore-boton'>Explore</Link>
        </div>
        <p className='texto-abajo'>Join the movement. Build a stronger tomorrow. Together.</p>
        </>
    );
}

export default Header;