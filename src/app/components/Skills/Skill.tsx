import React from 'react'
import { motion } from 'framer-motion'
import { SkillImagesInfo } from './Skills'

function Skill({ directionLeft ,imageURL,percentage}: SkillImagesInfo) {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{
                    opacity: 0,
                    x: directionLeft ? -200 : 200
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src={imageURL}
                className="rounded-full border border-[#bee7d3]  object-cover w-24 h-24 xs:w-16 xs:h-16 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out relative z-10"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xs:w-16 xs:h-16 md:w-28 md:h-28 xl:w-24 xl:h-24 rounded-full">
                    <div className="flex items-center justify-center h-full">
                        <p className="text-3xl font-bold text-black opacity-100 xs:text-sm lg:text-lg xl:text-3xl">{percentage}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skill