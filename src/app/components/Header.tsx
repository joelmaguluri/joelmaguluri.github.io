"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-8 flex items-start justify-between max-w-7xl mx-auto">
      <motion.div
        initial={{
          x: -580,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://www.youtube.com/channel/UCSdotVMo7stJgkuU_P8osLg"
          fgColor="#00a359"
          bgColor="transparent"
          type="youtube"
        />
        <SocialIcon
          url="https://www.linkedin.com/msudeepjoel/"
          fgColor="#00a359"
          bgColor="transparent"
          type="linkedin"
        />
        <SocialIcon
          url="https://github.com/joelmaguluri"
          fgColor="#00a359"
          bgColor="transparent"
          type="github"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="#00a359"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-[#bee7d3]">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
