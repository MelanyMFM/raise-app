import './emprendimiento.css';
import Calificacion from '../Calificacion/Calificacion';
import { useNavigate } from 'react-router-dom';

function Emprendimiento({props}){
    const navigate = useNavigate();

    const viewWindow = () => {
        navigate(`/Emprendimientos/${props.id}`, { state: { props: props } });
    }

    return(
        <div className='emprendimiento-container'>
            <p className='nombre-emprendimiento' onClick={viewWindow}>{props.nombre}</p>
            <div className='usuario-y-ciudad'>
                <p className='usuario-emprendimiento'>{props.usuario}</p>
                <p className='ciudad-emprendimiento'>{props.ciudad}</p>
            </div>
            <img src={props.img} onClick={viewWindow} alt="imagen del emprendimiento"/>
            <div className='descripcion-y-rating'>
                <p className='descripcion-emprendimiento'>{props.descripcion}</p>
                <div className='calificacion-y-mas'>
                    <Calificacion rating={props.calificacion}/>
                    <p className='more-vista' onClick={viewWindow}>MORE</p>
                </div>
            </div>
        </div>
    )
}

export default Emprendimiento;