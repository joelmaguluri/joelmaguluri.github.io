import React from "react";
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-white border-opacity-5 rounded-full h-[200px] w-[200px] mt-52 animate-ping xl:h-[248px] xl:w-[248px] lg:h-[198.4px] lg:w-[198.4px] md:h-[158.72px] md:w-[158.72px] sm:h-[126.976px] sm:w-[126.976px] xs:h-[150px] xs:w-[150px]" />
      <div className="rounded-full border border-white border-opacity-5 h-[300px] w-[300px] absolute mt-52 xl:h-[372px] xl:w-[372px] lg:h-[297.6px] lg:w-[297.6px] md:h-[238.08px] md:w-[238.08px] sm:h-[190.464px] sm:w-[190.464px] xs:h-[225px] xs:w-[225px]" />
      <div className="rounded-full border border-white border-opacity-5 h-[500px] w-[500px] absolute mt-52 xl:h-[620px] xl:w-[620px] lg:h-[496px] lg:w-[496px] md:h-[396.8px] md:w-[396.8px] sm:h-[317.44px] sm:w-[317.44px] xs:h-[375px] xs:w-[375px]" />
      <div className="rounded-full border border-[#a2f678] opacity-20 h-[620px] w-[620px] absolute mt-52 animate-pulse xl:h-[744px] xl:w-[744px] lg:h-[595.2px] lg:w-[595.2px] md:h-[476.16px] md:w-[476.16px] sm:h-[380.928px] sm:w-[380.928px] xs:h-[450px] xs:w-[450px]" />
      <div className="rounded-full border border-white border-opacity-5 h-[800px] w-[800px] absolute mt-52 xl:h-[992px] xl:w-[992px] lg:h-[793.6px] lg:w-[793.6px] md:h-[634.88px] md:w-[634.88px] sm:h-[507.904px] sm:w-[507.904px] xs:h-[600px] xs:w-[600px]" />

    </motion.div>
  );
}

export default BackgroundCircles;
