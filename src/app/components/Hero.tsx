import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import BackgroundCircles from "./UI/Backgroundcircles";
import Link from "next/link";
import personal_2 from '@/app/assets/personal_5.jpg'

type Props = {};

export default function Hero(props: Props): JSX.Element {
  const [text] = useTypewriter({
    words: [
      "Greetings! I'm Sudeep Joel",
      "Fueling my passion for AI and ML",
      "Coding to shape a brighter future"
    ],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative rounded-full h-36 w-36 mx-auto object-cover">
        <Image
          src={personal_2}
          alt="Picture of the author"
          fill={true}
          className="rounded-full"
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-[#a2f678] pb-2 tracking-[15px] xs:text-xs xs:tracking-[5px]">
          Software Engineer
        </h2>
        <div className="px-10 font-semibold inline-flex items-center ">
          <span className="cursortext-st">{text}</span>
          <p className="cursor-st">
            <Cursor cursorColor="#a2f678" />
          </p>
        </div>
      </div>
      <div className="xs:space-x-2 xs:text-xs md:space-x-4 md:text-sm lg:space-x-6 lg:text-md xs:tracking-normal sm:tracking-wide md:tracking-wider xl:tracking-widest my-2 z-20">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="/about">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="/about">
          <button className="heroButton">Projects</button>
        </Link>
        <Link href="/about">
          <button className="heroButton">Blog</button>
        </Link>
      </div>
    </div>
  );
}
