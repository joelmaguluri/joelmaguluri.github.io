import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'


const Experienceobj = [
    {
        image: 'https://media.licdn.com/dms/image/C4E0BAQGMwHywWNH_ew/company-logo_200_200/0/1630568304235/cartedo_logo?e=1710374400&v=beta&t=3eAKKXBBjfuxXg8SumqS5pTSIIcoxgDjFMOBvTZWG60',
        role: "Fullstack Developer",
        companyName: "Cartedo",
        startDate: 'Jan 2021',
        endDate: 'July 2022',
        summary: [`Developed TypeScript/Node.js REST APIs for managing 10,000+ workspaces, projects, and challenges in MongoDB, delivering 
        a 30% speed improvement with dynamic user and organization controls.`,
            `● Utilized Kafka Streams for real-time dynamic dashboards on challenges, projects, and workspaces, driving a remarkable 20% 
        increase in user engagement. `,
            `● Integrated Amazon S3 for efficient media storage, coupled with Unsplash API for customizable banners, driving a 20% boost
        in user interactions and enhancing visual appeal`]

    },

    {
        image: 'https://th.bing.com/th/id/OIP.40p-bXkFUBo4bet0ieY9-QAAAA?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        role: "Fullstack Developer",
        companyName: "Wisedoc",
        startDate: 'Jan 2021',
        endDate: 'July 2022',
        summary: [`Boosted User Interaction: Designed and implemented React components resulting in a remarkable 25% increase in user interaction, enhancing the overall user experience and engagement on the platform.`,
            `Streamlined Document Conversion: Spearheaded document conversion using AWS Lambda, successfully achieving a significant 40% reduction in processing time. This optimization not only improved efficiency but also contributed to a more seamless workflow for users interacting with document-related features.`,
            `Enhanced User Efficiency: Through the strategic combination of React component design and AWS Lambda implementation, the project led to a tangible enhancement in user efficiency, positively impacting both interaction rates and document processing times for a more streamlined and effective user experience.`
        ]

    },
    {
        image: 'https://th.bing.com/th/id/OIP.40p-bXkFUBo4bet0ieY9-QAAAA?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        role: "Fullstack Developer",
        companyName: "Cartedo",
        startDate: 'Jan 2021',
        endDate: 'July 2022',
        summary: [`Developed TypeScript/Node.js REST APIs for managing 10,000+ workspaces, projects, and challenges in MongoDB, delivering 
        a 30% speed improvement with dynamic user and organization controls.`,
            `● Utilized Kafka Streams for real-time dynamic dashboards on challenges, projects, and workspaces, driving a remarkable 20% 
        increase in user engagement. `,
            `● Integrated Amazon S3 for efficient media storage, coupled with Unsplash API for customizable banners, driving a 20% boost
        in user interactions and enhancing visual appeal`]

    },


]
function Experience() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className="h-screen flex relative  flex-col text-left md:flex-row max-w-full md:px-24   items-center justify-evenly xs:px-12">

            <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl text-[#bee7d3] '>Experience</h3>
            <div className='w-full flex flex-col md:flex-row space-x-5 overflow-x-scroll  snap-x snap-mandatory h-full    mt-32 md:mt-24 py-8 md:py-24 xs:items-center xs:space-y-2'>

                {Experienceobj.map(({ image, role, companyName, startDate, endDate, summary }) => <ExperienceCard image={image} key={image} role={role} companyName={companyName} startDate={startDate} endDate={endDate} summary={summary} />)}



            </div>
        </motion.div>
    )
}

export default Experience