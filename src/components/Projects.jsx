import React from 'react'
import { styles } from '../styling'
import Buttons from './Buttons'

export default function Projects() {
    return (
        <div className={`${styles.container}`}>
            <div className="left w-full md:w-[50%]  flex items-center relative">
                <div className={`innerLeft ${styles.innerCont} relative z-20 `}>
                    <h1 className={`py-10 text-4xl font-bold  text-left ${styles['green-txt']}`}>I Design Sometimes</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, et. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, magni.</p>
                    <div className='my-10'>
                        <Buttons text={"Left Button"} />
                    </div>
                </div>
            </div>
            <div className="left md:w-[50%] flex items-center relative">
                <div className={`innerLeft ${styles.innerCont} relative z-20 `}>
                    <h1 className={`py-10 text-4xl font-bold  text-left ${styles['blue-txt']}`}>I Develop Sometimes</h1>
                    <p className={``}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, et. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, magni.</p>
                    <div className='my-10'>
                        <Buttons text={"Rigth Button"} />
                    </div>
                </div>
            </div>

        </div>
    )
}
