import React from "react";

const socialData = [
    {
        name: "linkedin",
        link: "https://www.linkedin.com/in/nikhil-ailani",
    },
    {
        name: "github",
        link: "https://github.com/nikhilailani",
    },
];

export default function Socials() {
    return (
        <div className="grid grid-cols-2 gap-2 max-w-[746px] mx-auto my-2 max-sm:grid-cols-1">
            {socialData.map((social) => (
                <a key={social.name} href={social.link} className="flex w-full min-h-[56px] justify-center items-center bg-bento6 text-white text-lg leading-6 text-center tracking-[-0.01em] px-6 py-4 rounded-[99px]" >
                    {social.name}
                </a>
            ))}
        </div>

    );
}
