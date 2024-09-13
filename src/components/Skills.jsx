import React from "react";
import svgBackground from "../assets/design4.svg";

export default function Skills() {
    // List of skills
    const skills = [
        "Python", "SQL", "R", "Java", "Spring Boot", "Flask", "AWS", "Pandas",
        "NumPy", "Matplotlib", "Seaborn", "Excel (Advanced)", "PostgreSQL",
        "MySQL", "MongoDB", "SQL Server", "Tableau", "Power BI"
    ];

    return (
        <div className="bg-bento5 p-6 rounded-[15px] text-center mb-2" style={{ backgroundImage: `url(${svgBackground})`, backgroundRepeat: 'no-repeat',  backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h1 className="text-5xl font-bold tracking-[-0.02em] mb-5
            "> Skills </h1>

            <div className="flex flex-wrap gap-2 justify-center">
                {skills.map((skill, index) => (
                    <span key={index} className="bg-bento4 rounded-[15px] px-4 py-2 text-backgroundcolor text-sm font-medium" >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
