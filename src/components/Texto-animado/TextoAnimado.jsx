import './texto-animado.css'
import { useEffect, useState } from 'react';

function TextoAnimado() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const words = ["people", "projects", "ideas"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            if (isDeleting) {
                setText(fullText.substring(0, text.length - 1));
                setTypingSpeed(50);
            } else {
                setText(fullText.substring(0, text.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum]);

    return (
        <p id="animated-text">
            Connect with awesome <span>{text}</span>
        </p>
    );
}

export default TextoAnimado;
