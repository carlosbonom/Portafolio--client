import React from 'react';
import {SideBarData} from './SideBarData'
import { Link } from 'react-router-dom';
import "./SideBar.css";



const SideBar = () =>{

    return(
        <>
            <nav className='navMenu'>
                <ul className='navMenuItems'>
                    {SideBarData.map((item, key)=>{
                        return(
                            <li key={key} className='itemBars'>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span className='navTitle'>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    )
}

export default SideBar;