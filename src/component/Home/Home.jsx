import React from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const Home = () =>{
    return(
        <div className='containerHome'>
            <div className="home">
                <span className='HomeName'>Hola soy Carlos</span>
                <span className="text2"> Full stack Developer</span>
            </div>
            <div className='homeIcon'>
                <a href="https://www.linkedin.com/in/carlos-bonomelli/" target="_blank" rel="noopener noreferrer" className='icon'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/carlosbonom" target="_blank" rel="noopener noreferrer"  className='icon'style={{marginLeft:"30px"}}>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </div>
    )
}

export default Home;
