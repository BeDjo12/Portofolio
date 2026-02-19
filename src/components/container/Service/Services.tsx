"use client";
import { Framemarquee } from "./Framemarquee";
import { motion } from "motion/react";

const App = [
  {
    id: 1,
    name: "App Development",
  },
  {
    id: 2,
    name: "Website Development",
  },
  {
    id: 3,
    name: "Pixel Perfect",
  },
  {
    id: 4,
    name: "React Expert",
  },
];

const duplicatedApp = [...App, ...App, ...App, ...App];

export const Services = () => {
  return (
    <div className="w-full flex h-62 md:h-108 bg-primary-300 overflow-hidden">
      <motion.div
        animate={{
          x: ["0%", "-50%"],
          transition: {
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          },
        }}
        className="w-full flex h-full gap-14 py-12 items-center "
      >
        {duplicatedApp.map(({ id, name }, index) => (
          <div key={`${id}-${index}`} className="flex gap-14 items-center">
            <h1 className="text-xl md:text-[40px]/[56px] md:tracking-[-0.05em] font-bold text-nowrap">
              {name}
            </h1>
            <div className="w-38 h-38 md:w-60 md:h-60">
              <Framemarquee />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
