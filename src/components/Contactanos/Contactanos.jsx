import './contactanos.css';
import mapa from '../../assets/mapa.png';

function Contactanos({props}){

    return(
        <div className='todo'>
            <p className='amarillo titulo-contactanos'>¡Contáctanos!</p>
            <p className='descripcion'>En {props.nombre}, estamos encantados de
                 atenderte y responder a cualquier pregunta que tengas sobre nuestros deliciosos sándwiches artesanales.</p>

            <div className='abajo'>
                <div className='izq'>
                    <p>Telefono: {props.telefono}</p>
                    <p>Email: {props.email}</p>
                    <p>Redes Sociales: </p>
                    <p>-&gt; Facebook: {props.facebook}</p>
                    <p>-&gt; Instagram: {props.instagram}</p>
                </div>
                    <img src={mapa}/>
            </div>
        </div>
    )
}
export default Contactanos;
