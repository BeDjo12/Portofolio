"use client";
import grid from "@/public/Grid.svg";
import Image from "next/image";
import Frame from "@/public/Frame.svg";
import Vector from "@/public/VectorFrame.svg";
import picavatar from "@/public/avatar/Ava.svg";
import { Button } from "../../ui/button";
import mail from "@/public/Mail.svg";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <div className="relative w-full h-756">
      <div className="absolute flex justify-center md:justify-end md:px-40 lg:px-140 w-full left-1/2 -translate-x-1/2 h-756  drop-shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] overflow-hidden">
        <motion.div
          whileInView={{
            x: [25, -75, -175, 275, -175, -75, 25],
            y: [5, -95, 5, -95, 5, -95, 5],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
            times: [0, 0.17, 0.33, 0.5, 0.67, 0.83, 1],
          }}
          className="absolute -top-586 -left-76 w-1845 h-1230 opacity-70 bg-radial from-[#B029AE]/30  to-transparent to-70% md:-left-76 md:-top-586 "
        />
        <motion.div
          whileInView={{
            x: [25, 125, 225, 325, 225, 125, 25],
            y: [5, -95, 5, -95, 5, -95, 5],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
            times: [0, 0.17, 0.33, 0.5, 0.67, 0.83, 1],
          }}
          className="absolute -top-501 -left-1047 w-1845 h-1230 bg-radial from-primary-300 to-primary-300/0 to-70% md:-left-1047 md:-top-501"
        />
        <motion.div
          whileInView={{
            y: [25, 75, 125, 225, 125, 75, 25],
            x: [75, 25, 25, 75, 125, 125, 75],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
            times: [0, 0.17, 0.33, 0.5, 0.67, 0.83, 1],
          }}
          className="absolute w-894 h-413 -top-29 -left-289 md:w-1090 md:h-503 md:-left-304 md:-top-64"
        >
          <Image
            loading="eager"
            style={{ width: "full", height: "full" }}
            src={grid}
            alt="grid"
            className="absolute"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            scale: { type: "spring", stiffness: 300, damping: 10 },
            opacity: { duration: 0.9 },
          }}
          className="relative flex justify-center w-251 h-496 rounded-12 overflow-hidden md:w-300 md:h-590 lg:w-341 lg:h-671"
        >
          <Image
            sizes="(max-width: 768px) 251px, (max-width: 1024px) 300px, 341px"
            src={Frame}
            alt="Frame"
            fill
          />
          <Image
            src={Vector}
            alt="Vector"
            className="absolute top-284 left-12 md:w-325 md:top-335 lg:top-385"
          />
          <Image
            loading="eager"
            src={picavatar}
            alt="PicHero"
            className="absolute bottom-0 w-251.8 md:w-341 object-cover "
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9 }}
        className="relative top-520 flex flex-col px-16 gap-32 w-full md:top-227 md:left-40 lg:left-140 md:w-[50%] lg:gap-62"
      >
        <div className="flex flex-col w-full gap-16 lg:gap-32">
          <h3 className="text-base lg:text-[20px]/[34px] text-neutral-25 -tracking-[0.03em]">
            Hi I'm Edwin Anderson
          </h3>
          <div className="font-bold text-[56px]/[68px] flex flex-col lg:gap-28 lg:text-[96px]/[68px] -tracking-[0.06em]">
            <h1>
              FRONT <span className="font-charm font-normal">END</span>
            </h1>
            <h1>DEVELOPER</h1>
          </div>
          <p className="text-[14px]/[28px] lg:text-[18px]/[32px] text-neutral-400 font-normal tracking-[-0.03em]">
            Passionate about frontend development, I focus on crafting digital
            products that are visually polished, performance-optimized, and
            deliver a consistent experience across all platforms.
          </p>
        </div>
        <a href="#InputMail">
          <Button className="w-full cursor-pointer flex h-48 p-8 gap-8 hover:scale-102 hover:shadow-[0px_0px_10px_1px_rgba(255,255,255,0.5)] transition-all ease-in-out duration-700 delay-100 bg-primary-300 rounded-none text-sm font-semibold border-none lg:w-287 lg:h-56">
            <Image src={mail} alt="mail" className="w-24 h-24" />
            <p>Hire Me</p>
          </Button>
        </a>
      </motion.div>
    </div>
  );
};
