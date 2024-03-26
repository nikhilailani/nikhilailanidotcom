import React from 'react'
import profilePic from '../assets/web_profile.jpg'
import SvgBackground from './SvgBackground'
import { styles } from '../styling'

export default function ProfilePicture() {
    return (
        // Main Div here
        <div className='md:h-[100vh] md:min-h-[600px] flex flex-col md:flex-row mx-auto lg:max-h-[800px] '>
            <div className="left bg-[black] md:w-[60%] flex items-center">
                {/* inner left container */}
                <div className={`mt-20 sm:mt-16 ${styles.innerCont} py-24 sm:pr-8`}>
                    <h1
                        className={`text-[#32cd32] ${styles.h1}`}>
                        Software Devloper</h1>
                    <p className='text-sm text-white md:text-base py-6 md:py-12 w-full '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos recusandae ea molestias nobis, quisquam ut repudiandae eaque rem doloremque maiores architecto totam blanditiis. Sit!
                    </p>
                    <div className='flex justify-between text-white'>
                        <p className='text-xs md:text-sm mr-10'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos recusandae.
                        </p><p className='text-xs md:text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos recusandae ea molestias nobis.
                        </p>
                    </div>


                </div>
            </div>
            <div className="right w-full md:w-[40%] bg-[#32cd32] md:h-full grid place-content-center relative min-h-[400px]">
                <SvgBackground />
                <figure className='w-full flex justify-center align-center'>
                    <img src={profilePic} alt="Profile Pic" className='profilePicShadow z-10 w-[60%] md:w-[60%] max-w-[450px]' />
                </figure>
            </div>
        </div>
    )
}
