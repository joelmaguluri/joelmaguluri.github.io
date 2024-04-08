import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { ASULogoURL, cartedoLogoUrl, wisedocLogoUrl } from '../constants'

export type Experience = {
    image: string
    companyName: string
    position: string
    summary: string[]
    startDate: string
    endDate: string

}


const experienceObj = [
    {
        image: ASULogoURL,

        companyName: "Arizona State Universiy",
        location: "Tempe, Arizona",
        position: "Software Engineer",
        startDate: "01/2023",
        endDate:"present",
        summary: [
            "1. Grading assignments and projects: Completed grading for 100 assignments and 50 projects",
            "2. Providing constructive feedback on assignments and projects: Delivered detailed feedback to 300 students",
            "3. Ensuring fair and consistent evaluation of student work: Maintained grading consistency across all assignments and projects",
            "4. Mentoring and guiding students through courses: Provided personalized guidance to 300+ students",
            "5. Offering valuable insights and explanations on course material: Hosted 30+ additional review sessions for course material clarification",
            "6. Clarifying complex concepts to aid student understanding: Received 95% positive feedback on clarity of explanations",
            "7. Assisting in administrative tasks related to course management: Contributed to the organization of 20+ course-related events",
            "8. Ensuring smooth class operations and logistics: Resolved 100% of student queries within 24 hours"
        
        ]
    },
    {
      
        image:cartedoLogoUrl,
        companyName: "Cartedo CORP",
        location: "Hyderabad, India",
        position: "Software Engineer",
        startDate: "06/2020",
        endDate: "07/2022",
        summary: [
            "Led development of an e-learning platform using Next JS and React, incorporating Tailwind CSS for streamlined styling and design; implemented core functionalities (workspace, project management) resulting in 500,000+ users across 5+ countries.",
            "Optimized system scalability by 70% via Database Schema and Typescript API enhancements, alongside efficient state management and lazy loading with Context API, leading to a 40% rendering time improvement and minimized re-renders.",
            "Engineered a seamless migration from Rails to React, ensuring uninterrupted operations and slashing response times to under 90ms by implementing microservice architecture for optimized functionalities (e.g., S3 file upload, User Authentication).",
            "Elevated user engagement by 15% with real-time dashboards via Kafka Streams, leveraging Google Analytics for insightful metrics tracking, thus enhancing user participation and demographics understanding.",
            "Collaborated closely with Data analysis and Data Engineering teams to turbocharge ETL pipelines in Spark, resulting in a 30% boost in speed for user behavior analysis and enhanced user segmentation using DBSCAN clustering.",
            "Revolutionized development environments with Docker packaging and automated CI/CD pipelines using Bitbucket. Mentored 3+ junior engineers, simplifying their work by streamlining processes and documenting architectures."
        ]
    },
    {
        image:wisedocLogoUrl,
        companyName: "Wisedoc INC",
        location: "Hyderabad, India",
        position: "Full Stack Developer",
        startDate: "02/2019",
        endDate: "05/2020",
        summary: [
            "Led development of a responsive editor app using React JS, HTML, CSS, enhancing UX with 20% longer session durations and 25% faster task completions; Utilized Redux for scalable data flow optimization.",
            "Employed PdfMake and DocX in Slate JS, reducing processing time by 30% and increasing throughput by 20%, resulting in 30% overall system efficiency improvement; Implemented distributed architecture with serverless functions.",
            "Designed Wisedoc IEEE template schema for PDF export, reducing errors by 15% and enhancing accuracy by 25%; Implemented real-time collaboration feature for seamless document editing.",
            "Implemented async processing and caching for scalable document generation on AWS Lambda, handling 10x peak traffic with 25% latency reduction; Utilized efficient data structures for improved responsiveness.",
            "Spearheaded automated testing, increasing code coverage by 20% and reducing bugs by 25%; Developed Jest and Enzyme test suites for UI components and Lambda functions, ensuring reliability."
        ]
    }
];


function Experience() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className="h-screen flex relative  flex-col text-left md:flex-row max-w-full md:px-24   items-center justify-evenly xs:px-12">

            {/* <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl text-[#bee7d3] opacity-100 sm:opacity-0 md:opacity-0 xl:opacity-100'>Experience</h3> */}
            <div className='w-full  overflow-x-scroll  snap-x snap-mandatory h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-[20%] sm:px-12 my-3 py-6'>

                {experienceObj.map(({ image, position,companyName, startDate, endDate, summary }: Experience) => <ExperienceCard image={image} key={image} position={position} companyName={companyName} startDate={startDate} endDate={endDate} summary={summary} />)}

            </div>
        </motion.div>
    )
}

export default Experience