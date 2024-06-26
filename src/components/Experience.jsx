import React from 'react'
import { styles } from '../styling'

export default function Section3() {
    return (
        <div className={`${styles.container} bg-[black] text-[${styles.green}]`}>
            <div className={`left md:w-[50%] w-full flex items-center`} >
                <div className={`innerLeft ${styles.innerCont}`}>
                    <h1 className={`${styles.h1} py-10`}>
                        More About me
                    </h1>
                    <p className={`${styles.para} py-2 md:py-1 lg:py-1`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus est voluptates, expedita obcaecati itaque, aperiam nisi dolor pariatur debitis odio? Veritatis exercitationem illum accusamus corporis praesentium ratione saepe cupiditate</p>
                    <p className={`${styles.para} py-2 md:py-1 lg:py-1`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus est voluptates, expedita obcaecati itaque, aperiam nisi dolor pariatur debitis odio? Veritatis exercitationem illum accusamus corporis praesentium ratione saepe cupiditate</p>
                    <p className={`${styles.para} py-2 md:py-1 lg:py-1`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus est voluptates, expedita obcaecati itaque, aperiam nisi dolor pariatur debitis odio? Veritatis exercitationem illum accusamus corporis praesentium ratione saepe cupiditate</p>
                </div>
            </div>
            <div className={`right md:w-[50%] w-full flex items-center `}>
            </div>

        </div>
    )
}
