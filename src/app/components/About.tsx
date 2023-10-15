import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className=" relative flex flex-col  md:flex-row  h-screen text-center  max-w-7xl px-4 justify-evenly mx-auto items-center">
      <h3 className="absolute text-2xl uppercase tracking-[10px] text-[#bee7d3] top-24  lg:hidden">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://th.bing.com/th/id/OIG.0Eh42zPnuMNf.5XqPwrQ?pid=ImgGn"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md: h-95 xl:w-[400px] xl:h-[500px]" />

      <div className="space-y-10 px-0 md:px-10 lg:px-36">

        <h3 className="text-2xl uppercase tracking-[10px] text-[#bee7d3] sm:opacity-0 lg:opacity-100">
          About
        </h3>

        <h4 className="text-4xl font-semibold">
          <span>
            Here is a <span></span> little
          </span>{" "}
          background{" "}
        </h4>
        <p className="text-base text-[#bee7d3] ">
          {` I'm a passionate Software Developer with a deep appreciation for the human side of technology. Beyond my love for coding and AI, I find joy in exploring the harmonies of piano keys, sharing my thoughts through blogs, and taking leisurely walks.
          My mission is to blend the world of technology with these diverse passions. I'm dedicated to using my technical expertise to contribute to projects that enrich lives. Whether it's through lines of code or musical notes, I aim to create a brighter, more connected future. Let's connect and discover how we can make a difference together`}
        </p>
      </div>


    </div>
  );
}

export default About;
// import React from 'react'

// function About() {
//   return (
//     <div className='flex flex-col relative h-screen text-center  md:flex-row max-w-7xl justify-evenly mx-auto items-center '>


//       <motion.img
//         initial={{
//           x: -200,
//           opacity: 0,
//         }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1.2 }}
//         src="https://th.bing.com/th/id/OIG.0Eh42zPnuMNf.5XqPwrQ?pid=ImgGn"
//         className=" md:mb-0  w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[500px]"
//       />
//       <h3 className="absolute text-2xl uppercase tracking-[20px] text-[#bee7d3]   top-24 md:top-0 md:relative ">
//         About
//       </h3>

//       <div className="space-y-10 px-0 md:px-10">


//         <h4 className="text-4xl font-semibold">
//           <span>
//             Here is a <span></span> little
//           </span>{" "}
//           background{" "}
//         </h4>
//         <div className="w-[600px]">
//           <p className="text-base text-[#bee7d3]">
//             {` I'm a passionate Software Developer with a deep appreciation for the human side of technology. Beyond my love for coding and AI, I find joy in exploring the harmonies of piano keys, sharing my thoughts through blogs, and taking leisurely walks.
//            My mission is to blend the world of technology with these diverse passions. I'm dedicated to using my technical expertise to contribute to projects that enrich lives. Whether it's through lines of code or musical notes, I aim to create a brighter, more connected future. Let's connect and discover how we can make a difference together`}
//           </p>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default About