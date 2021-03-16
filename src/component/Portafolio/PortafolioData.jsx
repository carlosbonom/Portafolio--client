import React from 'react';
import Henrycomic  from '../../img/HenryComic.png'
import HenrycomicP  from '../../img/HenryComicP.gif'
import GoBank  from '../../img/Gobank.png'
import LogoHC  from '../../img/logoHC.png'
import LogoGB  from '../../img/LogoGoB.png'

export const PortafoliData = [
    {
        logo:LogoHC,
        cover:Henrycomic,
        name:'Henry Comic',
        img: HenrycomicP,
        link:'https://henry-comics.vercel.app/',
        repo:'https://github.com/carlosbonom/Ecommerce--HenryComics',
        tool:[
            <i className="devicon-react-original colored"  />,
            <i className="devicon-redux-original colored" />,
            <i className="devicon-bootstrap-plain colored" />,
            <i className="devicon-materialui-plain colored" />,
            <i className="devicon-express-original colored" />,
            <i className="devicon-postgresql-plain colored" />,
            <i className="devicon-sequelize-plain colored" />,
        ]
        
    },
    {
        logo:LogoGB,
        cover:GoBank,
        name:'Go Bank',
        ref:'',
        link:'#',
        repo:'https://github.com/JorgeM18/henryBank',
        tool:[
            <i className="devicon-react-original colored"  />,
            <i className="devicon-redux-original colored" />,
            <i className="devicon-bootstrap-plain colored" />,
            <i className="devicon-materialui-plain colored" />,
            <i className="devicon-postgresql-plain colored" />,
            <i className="devicon-nodejs-plain colored" />,
            <i className="moleculer" />,
        ]
        
    },

]
