import React from 'react'
import profilePic from '../assets/web_profile.jpg'
import { styles } from '../styling'
import SvgBackground from './SvgBackground'

export default function ProfilePicture() {
    return (
        // Main Div here
        <div className='md:h-[100vh] md:min-h-[600px] flex flex-col md:flex-row mx-0'>
            <div className="left bg-[whitesmoke] md:w-[60%] flex items-center">
                {/* inner left container */}
                <div className={`mt-20 sm:mt-16 ${styles.innerCont} py-24 sm:pr-8`}>
                    <h1 className={`${styles.h1} text-7xl`}> Nikhil Ailani </h1>
                    <h1
                        className={`${styles.h1} text-[#004764]`}>Data Analyst<span className='cursor'></span></h1>
                    <p className='tag_line text-lg md:text-base py-6 md:py-12 w-full '>
                        with nearly 2 years of experience in Java Spring, Flask and data processing
                    </p>
                </div>
            </div>
            <div className="right w-full md:w-[50%] md:h-full grid place-content-center relative min-h-[400px] bg-repeat">
                <div className='w-full flex justify-center align-center'>
                    <img src={profilePic} alt="Profile Pic" className='profile_pic z-10 w-[75%] md:w-[75%] max-w-[450px]' />
                </div>
            </div>
        </div>
    )
}
