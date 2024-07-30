"use client";


import './contactanos.css';
import mapa from '../../assets/mapa.png';

import {
    APIProvider,
    Map,
    AdvancedMarker, //estilo al mapa
    Pin,
    InfoWindow,
} from "@vis.gl/react-google-maps";

function Contactanos({props}){
    const lugar = { lat: props.lat, lng: props.lng };
    console.log(lugar);
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
                    <APIProvider apiKey='AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik'>
                        <div className='mapa'>
                            <Map zoom={15} center={lugar} mapId="36c61296590b4f4e">
                                <AdvancedMarker position={lugar}>
                                    <Pin background={"blue"} borderColor={"blue"} glyphColor={"yellow"}/>
                                </AdvancedMarker>
                            </Map>
                        </div>
                    </APIProvider>
            </div>
        </div>
    )
}
export default Contactanos;
