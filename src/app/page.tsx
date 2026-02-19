"use client";

import { Navbar } from "../components/container/Header/Navbar";
import { Hero } from "../components/container/Hero/Hero";
import { Footer } from "../components/container/Footer/Footer";
import { Services } from "../components/container/Service/Services";
import { About } from "../components/container/About/About";
import { ToolsUse } from "../components/container/About/ToolsUse";
import { Skill } from "../components/container/Skill/Skill";
import { MyProject } from "../components/container/Project/MyProject";
import { MyJourney } from "../components/container/MyJourney/MyJourney";
import { Faq } from "../components/container/Faq/Faq";
import { Questions } from "../components/container/Questions/Questions";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <div
      id="Home"
      className="scroll-mt-30 w-full select-none flex relative flex-col items-center "
    >
      <Toaster
        duration={Infinity}
        className="absolute top-0 left-0 w-full min-w-screen transition-all ease-in-out duration-700 h-full"
      />
      <div className="w-full max-w-1440 flex flex-col">
        <Navbar />
        <Hero />
      </div>
      <div className="absolute w-full max-w-1440 flex flex-col top-971">
        <Services />
        <About />
        <ToolsUse />
        <Skill />
        <MyProject />
        <MyJourney />
        <Faq />
        <Questions />
        <Footer />
      </div>
    </div>
  );
}
