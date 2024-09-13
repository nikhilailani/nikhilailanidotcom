import React from 'react';
import '.././index.css';
import svgBackground1 from '../assets/design5.svg';
import svgBackground2 from '../assets/design7.svg';

export default function Education() {
    return (
        <div className="grid gap-2 grid-cols-1 lg:grid-cols-[0.8fr_1fr] items-start mb-2">

            {/* Masters Section */}
            <div className="flex flex-col bg-bento7 p-6 h-full rounded-[15px]">
                <h1 className="text-4xl font-bold justify-between mt-auto mb-2"> Master of Science </h1>
                <h2 className="text-2xl font-bold justify-between mt-auto mb-2"> Computer Science </h2>
                <h3 className="text-lg justify-between mt-auto mb-2"> Lakehead University, May 2024 </h3>
                <span className="text-2xl tracking-[-0.02em]">
                    Studied Artificial Intelligence, Natural Language Processing, Deep Learning, Optimization Methods, and Machine Learning.
                    Capstone Project: Developed a Job Recommendation System using Knowledge Graphs.
                </span>
            </div>

            {/* Bachelors Section */}
            <div className="flex flex-col bg-bento3 p-6 h-full rounded-[15px]">
                <h1 className="text-4xl font-bold justify-between mt-auto mb-2"> Bachelor of Technology </h1>
                <h2 className="text-2xl font-bold justify-between mt-auto mb-2"> Computer Engineering </h2>
                <h3 className="text-lg justify-between mt-auto mb-2"> Dharmsinh Desai University, April 2021 </h3>
                <span className="text-2xl tracking-[-0.02em] ">
                    Completed a comprehensive curriculum covering Machine Learning, Big Data, Deep Learning, Artificial Intelligence, Object-Oriented Programming in Java, ASP.NET, Data Structures and Algorithms, Natural Language Processing, Operating Systems, and advanced Mathematics.
                </span>
            </div>

        </div>
    );
}
