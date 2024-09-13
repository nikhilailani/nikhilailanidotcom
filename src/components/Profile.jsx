import React from "react";
import profileImage from "../assets/profile.jpg";
import svgBackground from '../assets/design2.svg';


export default function Profile() {
    return (
        <div className="grid gap-2 grid-cols-1 lg:grid-cols-[1fr_0.5fr] items-start mb-2">

            <div className="flex flex-col bg-bento2 p-6 h-full rounded-[15px]">
                <h1 className="text-5xl text-xl-left text-center justify-between mt-auto mb-2"> Data Analyst 
                <span className="text-2xl text-center">
                    &nbsp; with nearly 2 years of experience in Java Spring, Flask and data processing
                </span>
                </h1>
            </div>

            <div className="flex flex-col bg-bento3 rounded-[15px]">
                <img src={profileImage} alt="Nikhil Ailani" className="w-full rounded-[15px]" />
            </div>
        </div>
    );
}