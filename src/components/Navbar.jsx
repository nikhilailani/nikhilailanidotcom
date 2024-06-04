import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import logo from '../assets/niklogotransparent.png';
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
    return (
        <div className='flex flex-row justify-between'>
            <div>
                <img src={logo} alt="" className='w-[6%] md:w-[7%] lg:w-[8%]' />
            </div>
            <HiOutlineMenuAlt3 className=' text-4xl  md:text-5xl' />
        </div>
    )
}
