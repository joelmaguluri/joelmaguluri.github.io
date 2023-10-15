"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Head from "next/head";
import About from "./components/About";
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
    </div>
  );
}
