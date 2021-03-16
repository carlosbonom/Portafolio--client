import React from 'react'
import {Dialog}  from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import  './ModalPortafolio.css'
 
const ModalProyect = ({modalState, modalClose, data}) =>{
    return(
        <>
            <Dialog
                open={modalState}
                onClose={modalClose}
            > 
                <div className='modalContainer' >
                    <button  className='modalClose' onClick={modalClose} >X</button>
                    <div>
                        <img src={data.img} alt={`imagen gif de ${data.name}`} style={{width:'100%'}}/>
                    </div>
                    <div className='modalInfo'>
                        <h3>{data.name}</h3>
                        <p style={{color:'#bbe1fa'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nulla et nisi deserunt esse sed, nam iusto totam odit ipsam iste blanditiis minus nemo vero, nesciunt aliquam atque, excepturi velit!</p>
                    </div>
                    <div className='modalLinks' >
                        <a href={data.link} className='modalIcon' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon  icon={faLink}/></a>
                        <a href={data.repo} className='modalIcon' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon  icon={faGithub}/></a>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default ModalProyect