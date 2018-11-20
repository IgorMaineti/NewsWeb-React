import React from 'react';
import { NavLink } from "react-router-dom";
import './Toolbar.css';
import './DrawerToggleButton';
import DrawerToggleButton from './DrawerToggleButton';


const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_Navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            
            <div className="toolbar_navigation_items">
                <ul>
                <li><NavLink to="/"> Noticias em Destaque </NavLink></li>
                <li><NavLink to="/brazil"> Noticias do Brasil </NavLink></li>
                <li><NavLink to="/france"> Noticias da França </NavLink></li>
                <li><NavLink to="/us"> Noticias dos EUA </NavLink></li>
                <li><NavLink to="/argentina"> Noticias da Argentina </NavLink></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;