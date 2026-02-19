import Porto1 from "@/public/project/portofolio1.png";
import Porto2 from "@/public/project/portofolio2.png";
import Porto3 from "@/public/project/portofolio3.png";
import Image from "next/image";
import { motion } from "motion/react";

const Project = [
  {
    id: 1,
    pic: Porto1,
    name: "Portofolio 1",
    year: "2025",
  },
  {
    id: 2,
    pic: Porto2,
    name: "Portofolio 2",
    year: "2025",
  },
  {
    id: 3,
    pic: Porto3,
    name: "Portofolio 3",
    year: "2025",
  },
];

export const MyProject = () => {
  return (
    <div
      id="Myproject"
      className="scroll-mt-30 w-full gap-24 px-16 md:px-40 lg:px-120 lg:py-80 lg:gap-48 py-40 flex flex-col items-center"
    >
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
        className="flex flex-col gap-8 text-center lg:gap-16"
      >
        <h1 className="font-bold text-[32px]/[42px] lg:text-[48px]/[60px] tracking-[-0.05em] ">
          Bridging Design and Development
        </h1>
        <p className="text-[14px]/[28px] lg:text-[16px]/[30px] tracking-[-0.03em] text-neutral-400 ">
          These are real projects where I implemented frontend interfaces with
          precision and attention to detail.
        </p>
      </motion.div>
      <div className="w-full gap-20 grid grid-cols-1 md:grid-cols-3 place-items-center">
        {Project.map((map) => (
          <motion.div
            initial={{
              filter: "blur(20px)",
              scale: 0.1,
              y: 50,
            }}
            whileInView={{
              filter: "blur(0px)",
              scale: 1,
              y: 0,
            }}
            transition={{ ease: "easeInOut", duration: 0.9 }}
            key={map.id}
            className="w-full max-w-373 flex flex-col gap-16"
          >
            <div className="w-full h-full rounded-8 overflow-hidden">
              <Image src={map.pic} alt={map.name} className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-[18px]/[32px] lg:text-[20px]/[34px] tracking-tight ">
                {map.name}
              </p>
              <p className="text-neutral-400 text-[14px]/[28px] lg:text-[16px]/[30px]  ">
                {map.year}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
