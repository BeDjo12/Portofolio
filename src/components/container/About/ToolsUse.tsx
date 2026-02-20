import { Button } from "../../ui/button";
import mail from "@/public/Mail.svg";
import Image from "next/image";
import HTML from "@/public/property/HTML.svg";
import CSS from "@/public/property/CSS.svg";
import Javascripct from "@/public/property/Javascript.svg";
import TypeScript from "@/public/property/TypeScript.svg";
import Reactjs from "@/public/property/React js.svg";
import ReactNative from "@/public/property/ReactNative.svg";
import Next from "@/public/property/Next JS.svg";
import Sequalize from "@/public/property/Sequalize.svg";
import MongoDB from "@/public/property/Mongo DB.svg";
import Docker from "@/public/property/Docker.svg";
import ExpressJS from "@/public/property/Express JS.svg";
import PostgreSQL from "@/public/property/PostgreSQL.svg";
import { ScrollArea, ScrollBar } from "../../ui/scroll-area";
import React from "react";
import { Separator } from "../../ui/separator";
import Link from "next/link";
import { motion } from "motion/react";

const Tools = [
  {
    id: 1,
    icon: HTML,
    name: "HTML",
    Percentase: "100%",
  },
  {
    id: 2,
    icon: CSS,
    name: "CSS",
    Percentase: "90%",
  },
  {
    id: 3,
    icon: Javascripct,
    name: "Javascripct",
    Percentase: "90%",
  },
  {
    id: 4,
    icon: TypeScript,
    name: "TypeScript",
    Percentase: "80%",
  },
  {
    id: 5,
    icon: Sequalize,
    name: "Sequalize",
    Percentase: "80%",
  },
  {
    id: 6,
    icon: MongoDB,
    name: "Mongo DB",
    Percentase: "75%",
  },
  {
    id: 7,
    icon: Reactjs,
    name: "React JS",
    Percentase: "75%",
  },
  {
    id: 8,
    icon: ReactNative,
    name: "React Native",
    Percentase: "75%",
  },
  {
    id: 9,
    icon: Next,
    name: "Next JS",
    Percentase: "75%",
  },
  {
    id: 10,
    icon: Docker,
    name: "Docker",
    Percentase: "70%",
  },
  {
    id: 11,
    icon: ExpressJS,
    name: "Express JS",
    Percentase: "70%",
  },
  {
    id: 12,
    icon: PostgreSQL,
    name: "Postgre SQL",
    Percentase: "70%",
  },
];

export const ToolsUse = () => {
  const [activeId, setActiveId] = React.useState<number | null>(null);
  return (
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
      className="w-full flex flex-col items-center gap-24 px-16 py-40 md:flex-row md:px-40 lg:px-120 lg:py-80 lg:gap-191 "
    >
      <div className="w-full flex flex-col gap-24 md:h-529 md:w-fit lg:w-full lg:max-w-367 md:justify-between">
        <div className="w-full flex flex-col gap-8 lg:gap-16">
          <h1 className="font-bold text-[32px]/[42px] lg:text-[48px]/[60px] tracking-[-0.05em] ">
            Tools I Use to Build
          </h1>
          <p className="text-[14px]/[28px] lg:text-[16px]/[30px] tracking-[-0.03em] text-neutral-400 ">
            From code to design — here's the tech that helps me turn ideas into
            real products.
          </p>
        </div>
        <Link href="#InputMail">
          <Button className="h-48 w-full min-w-200 rounded-none bg-primary-300 flex items-center justify-center gap-8 cursor-pointer hover:scale-98 hover:shadow-[0px_0px_10px_1px_rgba(255,255,255,0.5)] transition-all ease-in-out duration-700">
            <Image src={mail} alt="mail" />
            <p>Send Message</p>
          </Button>
        </Link>
      </div>
      <ScrollArea
        type="always"
        className="w-full h-529 max-w-642 gap-24 flex pb-15 "
      >
        <div className="flex flex-col w-full h-full gap-15 md:pl-24 md:border-l md:border-neutral-900">
          {Tools.map((item, index) => (
            <React.Fragment key={item.id}>
              <div
                onClick={() => setActiveId(item.id)}
                className="w-full cursor-pointer relative h-60 flex items-center justify-between text-[16px]/[30px] lg:text-[20px]/[34px] tracking-[-0.03em]  "
              >
                <div className="flex flex-row gap-3 z-20 items-center  ">
                  <Image src={item.icon} alt="icon" className="w-60 h-60" />
                  <p>{item.name}</p>
                </div>
                <p className="font-bold z-20">{item.Percentase}</p>
                <div className="absolute w-full h-full z-10 bg-linear-to-l from-transparent via-black/35 to-black to-80%" />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: activeId === item.id ? item.Percentase : 0,
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full z-0 left-0 absolute bg-primary-300 "
                />
              </div>
              {index !== Tools.length - 1 && (
                <Separator className="w-full border border-neutral-900" />
              )}
            </React.Fragment>
          ))}
        </div>
        <ScrollBar
          orientation="vertical"
          className="w-8 h-full cursor-pointer  active:cursor-grab rounded-none hidden -left-4 md:block"
        />
      </ScrollArea>
    </motion.div>
  );
};
