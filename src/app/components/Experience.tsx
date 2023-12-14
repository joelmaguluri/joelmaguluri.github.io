import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
function Experience() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-24   items-center justify-evenly">

            <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl text-red-300'>Experience</h3>
            <div className='w-full flex space-x-5 overflow-x-scroll  snap-x snap-mandatory h-full  overflow-y-hidden  mt-64 py-8'>
                
                <ExperienceCard/>
                <ExperienceCard/>
                <ExperienceCard/>
                <ExperienceCard/>

     
            </div>
        </motion.div>
    )
}

export default Experience