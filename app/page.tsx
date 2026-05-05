"use client"
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import SmoothScrollProvider from "./components/smoothScrollProvider";
import About from "./section/about";
import Github from "./section/github";
import Timeline from "./section/timeline";
import Project from "./section/project";
import Skill from "./section/skill";
import Stack from "./section/stack";
import Footer from "./section/footer";
import Preloader from "./components/preLoader";
import { useState } from "react";

export default function Home() {
  const [ready, setReady] = useState(false);


  return (
    <main>
      <SmoothScrollProvider />
      {!ready && <Preloader onFinish={() => setReady(true)} />}
      <Navbar />
      <Hero ready={ready} />
      <About />
      <Skill />
      <Project />
      <Github />
      <Stack />
      <Timeline />
      <Footer />
    </main>
  );
}
