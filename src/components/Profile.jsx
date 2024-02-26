import React from 'react'
import ProfileImage from '../assets/web_profile.jpg'
import SvgBackground from './SvgBackground'
import { styles } from '../styling'
    
export default function Profile() {
    return (
        // Main Div here
        <div className='md:h-[100vh] md:min-h-[600px] flex flex-col md:flex-row mx-auto lg:max-h-[800px] '>
            <div className="left bg-[#e5e5e5] md:w-[60%] flex items-center">
                {/* inner left container */}
                <div className={`mt-20 sm:mt-16 ${styles.innerCont} py-24 sm:pr-8`}>
                    <h1
                        className={`text-[black] ${styles.h1}`}>
                        Software Developer</h1>
                    <p className='text-sm md:text-base py-6 md:py-12 w-full '>
                        Hi, I'm Nikhil Ailani, a passionate Data Engineer based in Ontario, Canada
                    </p>
                    <p>
                        <a href="https://www.linkedin.com/in/nikhil-ailani/"><i class="bi bi-linkedin"></i></a>
                    </p>
                </div>
            </div>
            <div className="right w-full md:w-[40%] bg-[#e5e5e5] md:h-full grid place-content-center relative min-h-[400px]">
                <SvgBackground />
                <figure className='w-full flex justify-center align-center'>
                    <img src={ProfileImage} alt="Profile image" className='z-10 w-[60%] md:w-[60%] max-w-[450px]' />
                </figure>
            </div>
        </div>
    )
}
