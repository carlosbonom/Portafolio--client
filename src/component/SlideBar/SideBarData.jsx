import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faUserAlt, faBriefcase, faCog, faEnvelope} from '@fortawesome/free-solid-svg-icons';

export const SideBarData = [
    {
        title:"Inicio",
        path:'/',
        icon:<FontAwesomeIcon icon={faHome} />,
    },
    {
        title:"Sobre mi",
        path:'/about',
        icon:<FontAwesomeIcon icon={faUserAlt} />,
    },
    {
        title:"Proyectos",
        path:'/proyect',
        icon:<FontAwesomeIcon icon={faBriefcase} />,
    },
    {
        title:"Skill",
        path:"/skill",
        icon:<FontAwesomeIcon icon={faCog} />,
    },
    {
        title:"Contacto",
        path:"/contact",
        icon:<FontAwesomeIcon icon={faEnvelope} />,
    },
]

