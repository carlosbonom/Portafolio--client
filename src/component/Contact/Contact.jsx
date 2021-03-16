import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import './Contact.css'

const Contact = () =>{


    return(
        <>
            <div className='titulo'>
                <h1>Contáctame</h1>
            </div>
            <div className='formContainer'>
                <form >
                    <div className='inputContainer'>
                        
                        <input type='text' placeholder='Nombre'/>
                    </div>
                    <div className='inputContainer'>
                        
                        <input type='email' placeholder='Email' />
                    </div>
                    <div className='inputContainer'>
                        
                        <textarea  placeholder='Mensaje' />
                    </div >
                    <button type="submit" className='contacButton'>Enviar</button>
                </form>
                <div className='contactIcon'>
                    <a href="https://www.linkedin.com/in/carlos-bonomelli/" target="_blank" rel="noopener noreferrer" >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href='https://api.whatsapp.com/send?phone=56932091929&text=Hola%20Carlos!' target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <a href="mailto:bonomellicarlos@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a href="https://github.com/carlosbonom" target="_blank" rel="noopener noreferrer"  >
                    <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
            
        </>
    )
}

export default Contact;
