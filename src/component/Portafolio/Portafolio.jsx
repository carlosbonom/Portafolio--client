import React, {useState} from 'react'
import {PortafoliData} from './PortafolioData'
import './Portafolio.css'
import ModalProyect from './Modalproye'
const Portafolio = () =>{
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({});

    const handleOpen = (element) => {
        setData(element)
        setOpen(true)
    };
        
    const handleClose = () => setOpen(false);

    return(
        <>
            <div>
                <h1>Proyectos</h1>
            </div>
             <div class="slider">
                    <div class="slides">
                        {PortafoliData.map((item, key)=>{
                            return(
                                <div  className="containerProyect" key={key} onClick={()=>handleOpen(item)}>
                                    <img src={item.logo} className="logo" alt={`logo de ${item.name}`} />
                                    <div className='ifoContainer'>
                                        <img src={item.cover}  alt={`cover de ${item.name}`}/>
                                        <div className='info'>
                                            <h3>{item.name}</h3>
                                            <div>
                                                {item.tool.map((element, i)=>{
                                                    return(
                                                        <div>
                                                            {element}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    
            <ModalProyect modalState = {open} modalClose={handleClose} data={data}/>
            </div>
        </>
    )
}

export default Portafolio;