import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "./Experience";



export default function ExperienceCard({ image, position, companyName, endDate, startDate, summary }: Experience) {
    return (
        <article className="snap-center flex flex-col items-center bg-[rgb(90,130,121)] bg-opacity-10 xs:[500px] sm:[500px] md:[450px] lg:[450px] xl:[450px] h-[600px] sm:[300px]">
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="xs:h-24 xs:w-24 md:w-32 md:h-32 rounded-full object-cover object-center my-3"
                src={image}
                alt=""
            />
            <h4 className="text-2xl font-light">{position}</h4>
            <p className="font-bold text-xl mt-1">{companyName}</p>
            <p className="uppercase py-2 md:py-5 text-gray-300">
                {startDate} - {endDate}
            </p>


            <div className="xs:h-64 md:h-64 overflow-y-scroll leading-loose no-scrollbar px-6">
                <ul>
                    {summary.map((point, index) => (
                        <li key={'point' + index} className="list-desc justify-evenly">
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </article>

    );
}





{/* <div className="px-4 md:px-6 grid items-center">
<div className="justify-center mx-auto">
    <h4 className="text-2xl font-light">{position}</h4>
    <p className="font-bold text-xl mt-1">{companyName}</p>
                <p className="uppercase py-2 md:py-5 text-gray-300">
        {startDate} - {endDate}
    </p>

    <div className="flex space-x-2 my-2">
        <Image
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt=""
            width={50} // Set the actual width of the image
            height={50} // Set the actual height of the image
        />

        {/* Add more images as needed */}
//     </div>

// </div>

// <div className="h-32 md:h-64 overflow-y-scroll leading-loose no-scrollbar">
//     <ul>
//         {summary.map((point, index) => (
//             <li key={'point' + index} className="list-desc">
//                 {point}
//             </li>
//         ))}
//     </ul>
// </div>
// </div> */}