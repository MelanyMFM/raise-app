import './texto-animado.css'
import '@github/typing-effect-element'

function TextoAnimado(){

    return(
        
    <p>Conect with awesome 
    <typing-effect data-lines='[" people/projects/ideas..."]'>
        <span data-target="typing-effect.content"></span>
        <span data-target="typing-effect.cursor">|</span>
    </typing-effect>
    </p>

);
}


export default TextoAnimado;