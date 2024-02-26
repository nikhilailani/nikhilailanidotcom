import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import logoipsum from '../assets/logo-ipsum.svg';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Sidebar from './Sidebar';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='flex flex-row justify-between'>
            <div>
                <img src={logoipsum} alt="" className="navbar-logo" />
            </div>
            <HiOutlineMenuAlt3 className="menu-icon" onClick={toggleMenu} />
            <Sidebar></Sidebar>
        </div>
    )
}
