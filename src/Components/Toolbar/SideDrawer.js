import React from 'react';
import { NavLink } from "react-router-dom";
import './SideDrawer.css'

const sideDrawer = props => {
    let drawerClasses = "side-drawer";
    if(props.show) {
        drawerClasses = "side-drawer open";
    }

    return (<nav className={drawerClasses}>
        <ul>
            <li><NavLink to="/"> Noticias em Destaque </NavLink></li>
            <li><NavLink to="/brazil"> Noticias do Brasil </NavLink></li>
            <li><NavLink to="/france"> Noticias da França </NavLink></li>
            <li><NavLink to="/us"> Noticias dos EUA </NavLink></li>
            <li><NavLink to="/argentina"> Noticias da Argentina </NavLink></li>
        </ul>

    </nav>);
};

export default sideDrawer;