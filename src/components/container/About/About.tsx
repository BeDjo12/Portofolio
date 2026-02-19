import { SosialMedia } from "../../ui/sosialMedia";
import { FaCode } from "react-icons/fa6";
import { PiGlobeBold } from "react-icons/pi";
import { RxComponent1 } from "react-icons/rx";
import { PiDeviceMobileCameraLight } from "react-icons/pi";
import Image from "next/image";
import Pic from "@/public/avatar/pic.png";
import React from "react";
import { Separator } from "../../ui/separator";
import { motion } from "motion/react";

const AboutUs = [
  {
    id: 1,
    icon: <FaCode className="w-full h-full" />,
    title: "Frontend Development",
    disk: "I build responsive, accessible, and scalable websites using modern frontend tools and best practices.",
  },
  {
    id: 2,
    icon: <PiGlobeBold className="w-full h-full" />,
    title: "Web Performance",
    disk: "I optimize websites for speed and efficiency to ensure smooth experiences across all devices.",
  },
  {
    id: 3,
    icon: <RxComponent1 className="w-full h-full" />,
    title: "Component Based UI",
    disk: "I specialize in crafting reusable UI components that are clean, maintainable, and aligned with design systems.",
  },
  {
    id: 4,
    icon: <PiDeviceMobileCameraLight className="rotate-180 w-full h-full" />,
    title: "Responsive Design",
    disk: "I ensure that every layout adapts beautifully to different screen sizes — from mobile to desktop.",
  },
];

export const About = () => {
  return (
    <div
      id="AboutMe"
      className="scroll-mt-40 w-full flex flex-col gap-24 px-16 py-40 md:px-40 lg:gap-48 lg:px-120 lg:py-80"
    >
      <motion.div
        initial={{
          filter: "blur(20px)",
          scale: 0.5,
          x: 50,
        }}
        whileInView={{
          filter: "blur(0px)",
          scale: 1,
          x: 0,
        }}
        transition={{ ease: "easeInOut", duration: 0.9 }}
        className="w-full flex flex-col gap-24 md:flex-row items-start justify-between "
      >
        <h1 className="text-[32px]/[42px] lg:text-[40px]/[56px] font-bold tracking-[-0.05em] w-full max-w-756">
          I turn ideas and designs into functional, accessible, and performant
          websites{" "}
          <span className="text-primary-300">
            using modern frontend technologies
          </span>
          .
        </h1>
        <div className="flex flex-col gap-16 md:gap-50 lg:gap-116">
          <p className="text-[16px]/[30px] text-neutral-400 tracking-tighter ">
            About Me
          </p>
          <SosialMedia gap="gap-16" />
        </div>
      </motion.div>
      <div className="w-full border border-neutral-900" />
      <div className="w-full flex flex-col gap-24 md:flex-row lg:gap-41 items-center">
        <motion.div
          initial={{
            filter: "blur(20px)",
            scale: 0.5,
            x: -50,
          }}
          whileInView={{
            filter: "blur(0px)",
            scale: 1,
            x: 0,
          }}
          transition={{ ease: "easeInOut", duration: 0.9 }}
          className="min-w-361 h-409 lg:min-w-453 lg:h-513 overflow-hidden"
        >
          <Image
            src={Pic}
            alt="Pictures"
            className="h-409 lg:h-513 lg:min-w-453 object-cover"
          />
        </motion.div>
        <motion.div
          initial={{
            filter: "blur(20px)",
            scale: 0.8,
            x: 50,
          }}
          whileInView={{
            filter: "blur(0px)",
            scale: 1,
            x: 0,
          }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="grid grid-cols-1 w-361 md:w-full gap-24 md:grid-cols-2 lg:gap-40"
        >
          {AboutUs.map((item, index) => (
            <React.Fragment key={item.id}>
              <div className="w-full flex flex-col gap-12 lg:gap-24 ">
                <div className="flex items-center justify-center w-40 h-40 text-primary-300">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-[18px]/[32px] lg:text-[20px]/[34px] ">
                    {item.title}
                  </h2>
                  <p className="text-[14px]/[28px] lg:text-[16px]/[30px] lg:tracking-tight text-neutral-400">
                    {item.disk}
                  </p>
                </div>
              </div>
              {index !== AboutUs.length - 1 && (
                <Separator className="w-full border border-neutral-900 md:hidden" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
