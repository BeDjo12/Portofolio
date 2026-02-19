"use client";
import { SosialMedia } from "../../ui/sosialMedia";
import { InputMail } from "./InputMail";
import { motion } from "motion/react";

const columns = Array.from({ length: 19 });
export const Footer = () => {
  return (
    <div
      id="InputMail"
      className="scroll-mt-30 grid grid-col-1 md:grid-cols-2 relative gap-24 w-full place-items-center px-20 py-40 bg-linear-to-t from-[#1BB2C9] to-transparent to-65% overflow-hidden md:overflow-x-hidden md:overflow-y-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:display-none lg:gap-40 md:px-40 md:pt-80 md:pb-160 lg:px-120"
    >
      <InputMail />

      {/* footer */}
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
        className="flex flex-col gap-16 md:h-full max-w-353 w-full md:max-w-580 justify-between z-20 "
      >
        <div className="w-full flex flex-col gap-16 lg:gap-20">
          <div className="w-full  flex flex-col gap-2 lg:gap-12">
            <h2 className="font-bold text-[16px]/[30px] lg:text-[20px]/[34px] lg:tracking-normal text-neutral-25 tracking-tight">
              Address
            </h2>
            <p className="text-[14px]/[28px] lg:text-[16px]/[30px] lg:tracking-[-0.03em] text-neutral-400">
              Jakarta, Indonesia
            </p>
          </div>
          <div className="w-full border border-white/10" />
          <div className="w-full  flex flex-col gap-2">
            <h2 className="font-bold text-[16px]/[30px] lg:text-[20px]/[34px] lg:tracking-normal text-neutral-25 tracking-tight">
              Contact
            </h2>
            <p className="text-[14px]/[28px] lg:text-[16px]/[30px] lg:tracking-[-0.03em] text-neutral-400">
              (+62) 1234567890
            </p>
          </div>
          <div className="w-full border border-white/10" />
          <div className="w-full  flex flex-col gap-16">
            <h2 className="font-bold text-[16px]/[30px] lg:text-[20px]/[34px] lg:tracking-normal text-neutral-25 tracking-tight">
              Sosial Media
            </h2>
            <SosialMedia />
          </div>
        </div>
        <h1 className="font-bold text-[40px]/[56px] lg:text-[56px]/[68px] tracking-tighter ">
          GET IN TOUCH
        </h1>
      </motion.div>
      <div className="w-1276 h-671 md:w-1440 md:h-757 md:left-0 absolute bottom-0 -left-410 flex">
        <div className="absolute bottom-0 w-1276 h-465 md:w-1440 md:h-757 bg-linear-to-t from-black to-black/0 to-50%" />

        {columns.map((_, index) => (
          <div
            key={index}
            className="flex-1 bg-linear-to-l opacity-40 from-[#161618] from-0% via-black via-17% to-[#1A1A1D]/1 to-100%"
          />
        ))}
      </div>
    </div>
  );
};
