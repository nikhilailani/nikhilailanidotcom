import React from "react";
import logo from '../assets/logo.png';
import svgBackground from '../assets/design3.svg';


const navlinkes = [
    {
        name: "home.",
        link: "#home",
    },
    {
        name: "work.",
        link: "#work",
    },
    {
        name: "contact.",
        link: "#contact",
    },
];
export default function Navbar() {
    return (
        <div className="pt-2">
            <div className="flex justify-between max-sm:justify-center items-center bg-bento1 px-8 py-4 max-lg:mx-2 rounded-[15px] mx-2" style={{ backgroundImage: `url(${svgBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="flexjustify-start">
                    <span className="flex text-black font-bold text-5xl max-md:text-[2rem] justify-between">
                        <img src={logo} alt="Logo" className="h-15 w-10 pr-[8px]" />
                        Nikhil Ailani
                    </span>
                </div>

                <div className="flex justify-end items-center gap-x-8 gap-y-8 max-md:gap-3 max-sm:hidden">
                    {navlinkes.map((navlink) => (
                        <a href={navlink.link} className={`md:w-[120px] transition-all duration-300 ease-[ease-out] text-[#8a8a93] text-lg leading-6 text-center tracking-[-0.01em] px-6 max-md:px-2 py-0 hover:text-white ${navlink.link === "#home" ? "text-white" : ""}`}>
                            {navlink.name}
                        </a>
                    ))}
                </div>
            </div>

            <div className="flex w-full justify-center items-center sm:hidden">
                <div className="flex justify-around items-center gap-x-8 gap-y-8 max-w-[1240px] bg-bento1 px-8 py-4 rounded-full fixed bottom-5 mx-auto">
                    {navlinkes.map((navlink) => (
                        <a href={navlink.link} className={`md:w-[120px] transition-all duration-300 ease-[ease-out] text-[#8a8a93] text-lg leading-6 text-center tracking-[-0.01em] px-6 max-md:px-2 py-0 hover:text-white ${navlink.link === "#home" ? "text-white" : ""}`}>
                            {navlink.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
