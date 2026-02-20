import Grid from "@/public/Grid.svg";
import Image from "next/image";
import { FaCheck, FaX } from "react-icons/fa6";
import { motion } from "motion/react";

const Skills = [
  {
    id: 1,
    name: "React Expert",
  },
  {
    id: 2,
    name: "Pixel Perfect",
  },
  {
    id: 3,
    name: "TypeScript Proficiency",
  },
  {
    id: 4,
    name: "Clean, Maintainable Code",
  },
  {
    id: 5,
    name: "Performance Optimization",
  },
  {
    id: 6,
    name: "Responsive Website",
  },
  {
    id: 7,
    name: "Ul Design Proficiency (Figma)",
  },
];

export const Skill = () => {
  return (
    <div
      id="Skills"
      className="scroll-mt-30 w-full relative flex flex-col gap-24 px-16 py-40 items-center md:px-40 lg:px-120 lg:py-80 lg:gap-48"
    >
      <div className="w-full h-756 absolute bottom-0 overflow-hidden ">
        <div className="absolute w-1845 h-1230 top-112 -left-76 opacity-70 bg-radial from-[#B029AE]/10 to-transparent z-0 md:-left-76 md:top-112" />
        <div className="absolute w-1845 h-1230 top-27 -left-1047 opacity-80 bg-radial to-transparent  from-primary-300/80 to-70% z-0 md:-left-1047 md:top-27 " />
        <div className="absolute w-796 h-368 -left-202 top-515 md:-left-581 md:top-219 md:w-1379 md:h-637">
          <Image loading="eager" src={Grid} alt="grid" className="w-full" />
        </div>
      </div>

      <motion.div
        initial={{
          filter: "blur(20px)",
          scale: 0.5,
          y: 50,
        }}
        whileInView={{
          filter: "blur(0px)",
          scale: 1,
          y: 0,
        }}
        transition={{ ease: "easeInOut", duration: 0.9 }}
        className="w-full flex flex-col gap-8 items-center text-center"
      >
        <h1 className="text-[32px]/[42px] lg:text-[48px]/[60px] lg:tracking-[-0.05em] font-bold ">
          Not Your Typical Frontend Developer
        </h1>
        <p className="text-[14px]/[28px] lg:text-[16px]/[30px] tracking-tight  text-neutral-400 ">
          I care about how it looks, how it works, and how it feels — all at
          once
        </p>
      </motion.div>
      <motion.div
        initial={{
          filter: "blur(20px)",
          scale: 0.5,
          y: 50,
        }}
        whileInView={{
          filter: "blur(0px)",
          scale: 1,
          y: 0,
        }}
        transition={{ ease: "easeInOut", duration: 0.9 }}
        className="w-full bg-black border border-neutral-900 flex z-10 p-12 md:p-24"
      >
        <div className="w-[56%] md:w-[34%] divide-y divide-neutral-900 ">
          <p className="h-72 flex px-12 md:px-24 items-center text-[16px]/[30px] tracking-[-0.03em] lg:text-[24px]/[36px]  ">
            Skill
          </p>
          {Skills.map((map) => (
            <p
              key={map.id}
              className="h-72 text-[14px]/[28px] lg:text-[18px]/[32px] flex px-12 items-center md:px-24"
            >
              {map.name}
            </p>
          ))}
        </div>
        <div className="divide-y w-[20%] md:w-[33%] divide-white/40 bg-primary-400">
          <p className="  h-72 flex px-12 md:px-24 items-center text-[16px]/[30px] tracking-[-0.03em] lg:text-[24px]/[36px]">
            With Me
          </p>
          {[...Array(7)].map((_, i) => (
            <div key={i} className=" h-72 flex px-12 items-center md:px-24">
              <div className="bg-white rounded-full flex justify-center items-center text-primary-400 w-32 h-32 lg:w-40 lg:h-40">
                <FaCheck className="w-14 h-14 lg:w-17 lg:h-17" />
              </div>
            </div>
          ))}
        </div>
        <div className="divide-y w-[20%] md:w-[33%] divide-neutral-900">
          <p className="h-72 flex px-12 md:px-24 items-center text-[16px]/[30px] tracking-[-0.03em] lg:text-[24px]/[36px]">
            Other
          </p>
          {[...Array(7)].map((_, i) => (
            <div key={i} className="h-72 flex px-12 items-center md:px-24">
              <div className="bg-neutral-700 rounded-full flex justify-center items-center text-[#0A0D12] w-32 h-32 lg:w-40 lg:h-40">
                <FaX className="w-14 h-14 lg:w-17 lg:h-17" />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
