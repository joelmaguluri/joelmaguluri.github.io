"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Head from "next/head";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills/Skills";
export default function Home() {
  return (
    <div className="bg-[rgb(21,35,32)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 duration-500">
      <Head>
        <title>{`Sudeep's Portfolio`}</title>
      </Head>
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section className="snap-center" id="about">
        <About />
      </section>
      <section className="snap-center" id="experience">
        <Experience />
      </section>
      <section className="snap-start" id="skills">
        <Skills />
      </section>
    </div>
  );
}
