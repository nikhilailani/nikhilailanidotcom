import React from 'react';
import { styles } from '../styling';
import '.././index.css';

export default function Education() {
    return (
        <div className={`${styles.container} relative`}>
            {/* innerleft container */}
            <div className="left w-full my-0 min-h-fit flex items-center">
                <div className={`innerLeft mt-16 ${styles.innerCont} relative z-50`}>
                    <h1 className={`${styles.h1}`}>Master of Science</h1>
                    <h2 className='text-3xl font-bold text-center md:text-left'>Computer Science</h2>
                    <h3 className='text-xl text-center md:text-left'> Lakehead University, May 2024 </h3>
                    <br/>
                    <p>
                        Studied Artificial Intelligence, Natural Language Processing, Deep Learning, Optimization Methods, and Machine Learning.
                    </p>
                    <p>
                        Capstone Project: Developed a Job Recommendation System using Knowledge Graphs.
                    </p>
                </div>
            </div>
            {/* innerleft container */}
            <div className="right w-full my-0 min-h-fit flex items-center">
                <div className={`innerRight mt-16 ${styles.innerCont} relative z-50`}>
                    <h1 className={`${styles.h1}`}>Bachelor of Technology</h1>
                    <h2 className='text-3xl font-bold text-center md:text-left'>Computer Engineering</h2>
                    <h3 className='text-xl text-center md:text-left'>
                        Dharmsinh Desai University, April 2021
                    </h3>
                    <br/>
                    <p>
                        Completed a comprehensive curriculum covering Machine Learning, Big Data, Deep Learning, Artificial Intelligence, Object-Oriented Programming in Java, ASP.NET, Data Structures and Algorithms, Natural Language Processing, Operating Systems, and advanced Mathematics.
                    </p>
                </div>
            </div>
        </div>
    );
}
