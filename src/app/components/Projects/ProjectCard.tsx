import React from 'react';
import Image from "next/image";

export interface ProjectCardType {
    imageUrl?: string;
    title: string;
    logos?: string[];
    description: string;
}

const ProjectCard: React.FC<ProjectCardType> = ({ imageUrl, title, logos, description }) => {
    return (
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen xs:py-60 md:py-0 ">
            <Image
                src={imageUrl || ''}
                alt=""
                className='h-32 w-32 object-cover'
                />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="xs:text-sm lg:text-4xl font-semibold text-center">
                    <span className="underline decoration-[#a2f678]/50">{title}</span>
                </h4>
                <div className="flex items-center space-x-2 justify-center">
                    {logos?.map((logo, index) => (
                        <Image key={index} className="h-10 w-10" src={logo} alt="" fill={true} />
                    ))}
                </div>
                <p className="text-lg text-center md:text-left sm:text-sm md:text-lg">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;
