import React from 'react';
import { styles } from '../styling';
import '.././index.css';
import SvgBackground from './SvgBackground';

export default function Education() {
    return (
        <div className={`${styles.container} relative bg-[whitesmoke]`}>
            {/* innerleft container */}
            <div className="left w-full min-h-fit py-10 flex items-center md:items-start relative">
                <div className={`innerLeft mt-16 ${styles.innerCont} relative z-50`}>
                    <h1 className={`${styles.h1}`}>Master of Computer Science</h1>
                    <p>
                        Lakehead University, May 2024
                    </p>
                    <p>
                        Studied Artificial Intelligence, Natural Language Processing, Deep Learning, Optimization Methods, and Machine Learning.
                    </p>
                    <p>
                        Capstone Project: Developed a Job Recommendation System using Knowledge Graphs.
                    </p>
                </div>
                <SvgBackground />
            </div>
            {/* innerleft container */}
            <div className="right w-full min-h-fit py-10 flex items-center md:items-end">
                <SvgBackground />
                <div className={`innerRight mt-16 ${styles.innerCont} relative z-50`}>
                    <h1 className={`${styles.h1}`}>Bachelor of Technology</h1>
                    <p>
                        Dharmsinh Desai University, April 2021
                    </p>
                    <p>
                        Completed a comprehensive curriculum covering Machine Learning, Big Data, Deep Learning, Artificial Intelligence, Object-Oriented Programming in Java, ASP.NET, Data Structures and Algorithms, Natural Language Processing, Operating Systems, and advanced Mathematics.
                    </p>
                </div>
            </div>
        </div>
    );
}
