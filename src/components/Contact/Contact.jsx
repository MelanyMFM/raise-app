import './contact.css'
import location from '../../assets/location.svg'
import email from '../../assets/email-icon.svg'
import github from '../../assets/github-icon.svg'

function Contact(){
    return(<div className='contact contacto'>

        <img className='img-contact' src="https://syntrio.com/wp-content/uploads/2022/11/syntrio-contact-purple-us.png" alt='contact-img' />

        <div className='info-contact'>
            <p className='titulo-contact'>GET IN <span className='amarillo'> TOUCH</span></p>
            <hr style={{color: 'white'}}/>

            <p className='parrafo-contact'>Have questions about investing or launching a project? 
                We're here to help! Get in touch with us today.</p>
            <div className='ayudaa'>
            <div className='descripcion-contact'>
                <div className='fila-descripcion'>
                    <p className='titulo-descripcion'>City</p>
                    <p className='subtitulo-descripcion'>Medellin, Colombia</p>
                </div>
                <img src={location} alt='location'/>
            </div>
            <div className='descripcion-contact'>               
                <div className='fila-descripcion'>
                    <p className='titulo-descripcion'>Email</p>
                    <p className='subtitulo-descripcion'>softwareashen@gmail.com</p>
                </div>
                <img src={email} alt='email'/>
            </div>
            <div className='descripcion-contact'>    
                <div className='fila-descripcion'>
                    <p className='titulo-descripcion'>Github</p>
                    <p className='subtitulo-descripcion'>github.com/ashensoftware</p>
                </div>
                <img src={github} alt='github'/>
            </div>
            </div>
        </div>

    </div>)
}

export default Contact;
