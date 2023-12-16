import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
    image:string
    role:string
    companyName:string
    endDate:string
    startDate:string
    summary:string[]
};

export default function ExperienceCard({image ,role,companyName,endDate,startDate,summary}: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  w-[200px] md:w-[600px] xl:w-[700px] snap-center bg-[rgb(90,130,121)] bg-opacity-10 h-full px-32 py-2">
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full  object-cover object-center my-3"
                src={image}
                alt=""

            />
            <div className="px-0 md:px-10  overflow-hidden">
                <h4 className="text-2xl font-light">{role}</h4>
                <p className="font-bold text-xl mt-1">{companyName}</p>
                <div className="flex space-x-2 my-2">
                    <Image
                        className="h-10 w-10 rounded-full"
                        src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                        alt=""
                        width={50} // Set the actual width of the image
                        height={50} // Set the actual height of the image

                    />

                    <Image
                        className="h-10 w-10 rounded-full"
                        src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                        alt=""
                        width={50} // Set the actual width of the image
                        height={50} // Set the actual height of the image

                    />
                    <Image
                        className="h-10 w-10 rounded-full"
                        src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                        alt=""
                        width={50} // Set the actual width of the image
                        height={50} // Set the actual height of the image

                    />
                </div>
                <p className="uppercase py-5 text-gray-300">
                    {startDate} - {endDate}
                </p>
                <ul className="list-disc space-y-4 ml-5 text-lg overflow-y-hidden h-32">
                    {summary.map(summary=><li key={summary} className="py-2">{summary}</li>)}
         
                </ul>
            </div>
        </article>
    );
}


{/* <div className="px-0 md:px-10 space-y-2">
<h4 className="text-4xl font-light">CEO of PAPAFAM</h4>
<p className="font-bold text-2xl mt-1">PAPAFAM</p>
<div className="flex space-x-2 my-2">
    <Image
        className="h-10 w-10 rounded-full"
        src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
        alt=""
        width={100} // Set the actual width of the image
        height={100} // Set the actual height of the image

    />
    <Image
        className="h-10 w-10 rounded-full"
        src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
        alt=""
        width={100} // Set the actual width of the image
        height={100} // Set the actual height of the image

    />
    {/* Add your second image URL for the last image */}
// </div >

// <p className="uppercase py-5 text-gray-300">
//     Started work... - Ended...
// </p>
// <ul className="list-disc space-y-4 ml-5 text-lg">
//     <li>Summary points</li>
//     <li>Summary points</li>
//     <li>Summary points</li>
//     <li>Summary points</li>
//     <li>Summary points</li>
// </ul>
// </div > * /}