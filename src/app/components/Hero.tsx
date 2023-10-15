import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import BackgroundCircles from "./UI/Backgroundcircles";
import Link from "next/link";

type Props = {};

export default function Hero(props: Props): JSX.Element {
  const [text, count] = useTypewriter({
    words: [
      "Greetings! I'm Sudeep Joel.",
      "Fueling my passion for AI and ML.",
      "Coding to shape a brighter future."
    ],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative rounded-full h-32 w-32 mx-auto object-cover">
        <Image
          // src="https://media.licdn.com/dms/image/D5603AQGxAJ_UOuRpwA/profile-displayphoto-shrink_800_800/0/1695105793902?e=1702512000&v=beta&t=XQWcBnxZayTSVY5361fLg3KBGbkScjb141XsYTE12b4"
          alt="Picture of the author"
          src="https://th.bing.com/th/id/OIG.AxJpq0LQS0FZjXZyJFm_?pid=ImgGn"
          fill={true}
          className="rounded-full"
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-[#a2f678] pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:6xl px-10 font-semibold">
          <span>{text}</span>
          <Cursor cursorColor="#a2f678" />
        </h1>
        <div>
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="/about">
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
    </div>
  );
}
