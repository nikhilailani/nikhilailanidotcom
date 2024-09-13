import React from "react";
import svgBackground from "../assets/design3.svg";

export default function Certificates() {
    // List of skills
    const certificates = [
        ["Machine Learning", "https://coursera.org/share/f276651d73a6d0e09dcec999b223afab"],
        ["AWS Fundamentals", "https://coursera.org/share/f276651d73a6d0e09dcec999b223afab"],
        ["IBM Data Analyst", "https://coursera.org/share/f276651d73a6d0e09dcec999b223afab"],
        ["Google AI Essentials", "https://coursera.org/share/f276651d73a6d0e09dcec999b223afab"],
    ];

    return (
        <div className="bg-bento9 p-6 rounded-[15px] text-center mb-2" style={{ backgroundImage: `url(${svgBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h1 className="text-5xl font-bold tracking-[-0.02em] mb-4">Certificates</h1>

            <div className="flex flex-wrap gap-2 justify-center">
                {certificates.map((certificate, index) => (
                    <span key={index} className="w-full bg-bento4 rounded-[15px] px-4 py-2 text-backgroundcolor text-sm font-medium" >
                        <a href={certificate[1]}>{certificate[0]}</a>
                    </span>
                ))}
            </div>
        </div>
    );
}
