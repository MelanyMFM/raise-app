import './cosoMorado.css';
import rentabilidad from '../../assets/rentabilidad.svg';

function CosoMorado({props}){


    return(
    
    <div className='cosoMorado'>
        <div className='cosoMoradoPequeño'>
        <div className='izquierda'>
            <img src={props.img} alt="imagen-emprendimiento"/>
            <p>{props.usuario}</p>
        </div>
        <div className='derecha'>
            <p className='nombre'>{props.nombre}</p>
            <img src={rentabilidad} alt ="rentabilidad"/>
            <p className='value'>Value: ${props.value}</p>
            <div className='botones'>
                <button>Donate</button>
                <button>Invest</button>
            </div>
        </div>

        </div>

        <p className='descripcion'>{props.descripcion}</p>
    </div>)
}

export default CosoMorado;