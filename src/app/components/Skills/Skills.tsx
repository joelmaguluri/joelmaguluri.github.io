
import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

export type SkillImagesInfo = {
    imageURL: string;
    percentage: string;
    directionLeft: boolean;
};

const skillImages: SkillImagesInfo[] = [
    {
        "imageURL": "https://cdn.sanity.io/images/ltuexkre/production/6077d4327de2a7b28008b4235fa6c6dd5d381e7e-500x500.png",
        "percentage": "50%",
        directionLeft: true
    },
    {
        "imageURL": "https://cdn.sanity.io/images/ltuexkre/production/3b6be32275d8b7ff5fb3b20275fd3e0f35a27609-600x315.png",
        "percentage": "85%",
        directionLeft: true

    },
    {
        "imageURL": "https://cdn.sanity.io/images/ltuexkre/production/26444e46fd9284f0920dc1352331cf8c5c3fd9a9-512x512.png",
        "percentage": "65%",
        directionLeft: true

    },
    {
        "imageURL": "https://cdn.sanity.io/images/ltuexkre/production/c4f385a736afb18e7cb37277d966f5b0b89b7c77-506x470.png",
        "percentage": "85%",
        directionLeft: true
    },
    {
        "imageURL": "https://cdn.sanity.io/images/ltuexkre/production/9c1587d869001b2a2e479b5fdf92a4c14d3cfd6f-500x500.png",
        "percentage": "65%",
        directionLeft: true
    },
    {
        "imageURL": "https://cdn.sanity.io/images/ltuexkre/production/fa5e6eeb3377a1601e181d0eeb9a60633090cff2-500x500.png",
        "percentage": "75%",
        directionLeft: true
    },
    {
        "imageURL": "https://cdn.sanity.io/images/ltuexkre/production/5ca925937ccd56e069dd6f7cf8c5c7853542603f-500x500.png",
        "percentage": "80%",
        directionLeft: true
    },
    {
        "imageURL": "https://cdn.sanity.io/images/ltuexkre/production/1c91bdb96211632d51af6a853efceb3976785e3d-500x500.png",
        "percentage": "70%",
        directionLeft: true
    },
    {
        "imageURL": "https://cdn.sanity.io/images/ltuexkre/production/28cdc2c56750f218336fa8f3a528b5c6935c8f43-500x500.png",
        "percentage": "85%",
        directionLeft: false
    },
    {
        "imageURL": "https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png",
        "percentage": "85%",
        directionLeft: false
    },
    {
        "imageURL": "https://cdn.sanity.io/images/ltuexkre/production/19c3754580996e50daf37261462d9f5c01795d54-1200x1200.png",
        "percentage": "70%",
        directionLeft: false
    },
    {
        "imageURL": "https://cdn.sanity.io/images/ltuexkre/production/df2fb90aec55dc3d8df7544efeb4a476508b0029-500x500.png",
        "percentage": "95%",
        directionLeft: false
    },
    {
        "imageURL": "https://cdn.sanity.io/images/ltuexkre/production/4d05ea180968c83605afe80a2617de5fb71744e2-500x500.png",
        "percentage": "90%",
        directionLeft: false
    },
    {
        "imageURL": "https://cdn.sanity.io/images/ltuexkre/production/b54b0a9525e943809d5cfd9b1549b9f7d3b8858f-500x500.png",
        "percentage": "99%",
        directionLeft: false
    },
    {
        "imageURL": "https://cdn.sanity.io/images/ltuexkre/production/ec85d60e35ac7570017f90d93c1cfd7bf1e77bcb-2048x2048.png",
        "percentage": "95%",
        directionLeft: false
    },
    {
        "imageURL": "https://cdn.sanity.io/images/ltuexkre/production/da55259f760c8c5606b1cab6e6a9f61bbc60bf0d-500x500.png",
        "percentage": "90%",
        directionLeft: false
    },
    {
        "imageURL": "https://cdn.sanity.io/images/ltuexkre/production/19a30950e8bb4ce1c2155bde79a02626202b173c-500x500.png",
        "percentage": "90%",
        directionLeft: false
    }
]


function Skills() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className="h-screen flex relative  flex-col text-left md:flex-row max-w-full md:px-24   items-center justify-evenly xs:px-12 over">


            <h3 className='absolute top-[100px] uppercase tracking-[20px] text-2xl text-[#bee7d3] mb-3 '>Skills</h3>
            <h3 className='absolute top-[150px] uppercase tracking-[4px] text-sm text-[#bee7d3] mb-3 xs:text-xs xs:px-12 sm:px-0'>Hover over current skill for proficiency</h3>
            <div className='grid grid-cols-4 gap-3 mt-32 xs:mt-12 md:mt-24 xl:mt-32'>
                {skillImages.map(({ imageURL, percentage, directionLeft }, index) => <Skill imageURL={imageURL} percentage={percentage} directionLeft={directionLeft} key={'img-skills' + index} />)}

            </div>
        </motion.div>
    )
}

export default Skills