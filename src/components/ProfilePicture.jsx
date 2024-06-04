import React from 'react'
import profilePic from '../assets/web_profile.jpg'
import SvgBackground from './SvgBackground'
import { styles } from '../styling'

export default function ProfilePicture() {
    return (
        // Main Div here
        <div className='md:h-[100vh] md:min-h-[600px] flex flex-col md:flex-row mx-auto lg:max-h-[800px] '>
            <div className="left bg-[whitesmoke] md:w-[60%] flex items-center">
                {/* inner left container */}
                <div className={`mt-20 sm:mt-16 ${styles.innerCont} py-24 sm:pr-8`}>
                    <h1 className={`${styles.h1} text-7xl`}> Nikhil Ailani </h1>
                    <h1
                        className={`${styles.h1} text-[#3c6e71]`}>Data Analyst<span className='cursor'></span></h1>
                    <p className='text-sm md:text-base py-6 md:py-12 w-full '>
                        with nearly 2 years of experience in Java Spring, Flask and data processing
                    </p>
                </div>
            </div>
            <div className="right w-full md:w-[50%] bg-[#3c6e71] md:h-full grid place-content-center relative min-h-[400px]">
                <SvgBackground />
                <figure className='w-full flex justify-center align-center'>
                    <img src={profilePic} alt="Profile Pic" className='z-10 w-[70%] md:w-[70%] max-w-[450px]' />
                </figure>
            </div>
        </div>
    )
}
