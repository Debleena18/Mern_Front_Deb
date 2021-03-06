import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks= props => {
    
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>Everyone</NavLink>
        </li>
        <li>
            <NavLink to="/u1/places">Only Mine</NavLink>
        </li>
        <li>
            <NavLink to="/places/new">Friends</NavLink>
        </li>
        <li>
            <NavLink to="/auth">Authenticate</NavLink>
        </li>
    </ul>
}

export default NavLinks;
