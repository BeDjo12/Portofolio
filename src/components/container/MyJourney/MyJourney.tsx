"use client";
import React from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import Airbnb from "@/public/company/Airbnb.svg";
import Dribbble from "@/public/company/Dribbble.svg";
import Zoom from "@/public/company/Zoom.svg";
import { MdOutlineWorkOutline } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/src/components/ui/carousel";
import Image from "next/image";

const Journey = [
  {
    id: 1,
    title: "Frontend Developer",
    year: "2025- Present",
    disk: "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
    logo: Airbnb,
  },
  {
    id: 2,
    title: "Frontend Developer",
    year: "2025- Present",
    disk: "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
    logo: Dribbble,
  },
  {
    id: 3,
    title: "Frontend Developer",
    year: "2025- Present",
    disk: "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
    logo: Zoom,
  },
];

export const MyJourney = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  const scrollRaw = useMotionValue(0);

  const onScroll = React.useCallback(
    (api: CarouselApi) => {
      if (!api) return;
      const progress = Math.max(0, Math.min(1, api.scrollProgress()));
      scrollRaw.set(progress);
    },
    [scrollRaw],
  );

  React.useEffect(() => {
    if (!api) return;
    onScroll(api);
    api.on("scroll", () => onScroll(api));
    api.on("reInit", () => onScroll(api));
  }, [api, onScroll]);
  const widthProgress = useTransform(scrollRaw, [0, 1], ["33%", "100%"]);
  return (
    <div className="w-full gap-24 px-16 py-40 flex flex-col items-center lg:gap-48 md:px-40 lg:pl-120 lg:py-80 lg:pr-16">
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
        className="md:w-full max-w-361 flex flex-col gap-8 lg:gap-16"
      >
        <h1 className="font-bold text-[32px]/[42px] lg:text-[48px]/[60px] lg:tracking-[-0.05em] tracking-[-0.04em] ">
          My Journey in Tech
        </h1>
        <p className="text-[14px]/[28px] lg:text-[16px]/[30px] tracking-[-0.03em] text-neutral-400 ">
          From small gigs to real-world challenges — each experience helped me
          grow as a builder and problem-solver.
        </p>
      </motion.div>
      <motion.div
        initial={{
          filter: "blur(20px)",
          scale: 0.1,
          x: 50,
        }}
        whileInView={{
          filter: "blur(0px)",
          scale: 1,
          x: 0,
        }}
        transition={{ ease: "easeInOut", duration: 0.9 }}
        className="w-full flex justify-center"
      >
        <Carousel
          setApi={setApi}
          className="w-full max-w-361 md:max-w-1440 flex flex-col h-427 gap-16 lg:h-480 lg:gap-48"
        >
          <CarouselContent className="w-361 md:w-564 flex pl-4 gap-20">
            {Journey.map((map) => (
              <CarouselItem
                key={map.id}
                className="flex cursor-grab flex-col items-start border border-neutral-900 relative w-361 h-370 md:h-336 gap-20 p-16"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="w-194 gap-4 flex flex-col text-neutral-25">
                    <h3 className="font-bold text-[16px]/[30px] lg:text-[20px]/[34px] lg:tracking-normal tracking-[-0.02em]  ">
                      {map.title}
                    </h3>
                    <p className="text-[14px]/[28px] lg:text-[16px]/[30px] lg:tracking-[-0.03em] ">
                      {map.year}
                    </p>
                  </div>
                  <MdOutlineWorkOutline className="w-24 h-24" />
                </div>
                <div className="w-full border border-neutral-900" />
                <div className="text-[14px]/[28px] text-neutral-400 lg:text-[16px]/[30px] lg:tracking-[-0.03em]  ">
                  {map.disk}
                </div>
                <Image
                  style={{ width: "auto", height: "48px" }}
                  src={map.logo}
                  alt="Logo"
                />
                <div className="absolute w-3 h-68 bg-primary-300 top-24 left-0 z-10" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex pr-104">
            <div className="w-full h-4 border-b border-neutral-900 relative overflow-hidden hidden md:block">
              <motion.div
                style={{
                  width: widthProgress,
                  transformOrigin: "left",
                }}
                className="absolute border-4 inset-0 border-white "
              />
            </div>
          </div>

          <div className="h-40 flex gap-12 ">
            <CarouselPrevious className="relative left-auto w-118 h-40 cursor-pointer rounded-none border-neutral-900 hover:scale-98 hover:shadow-[0px_0px_10px_1px_rgba(20,155,176,0.5)] transition-all ease-in-out duration-700">
              <span>Prev</span>
            </CarouselPrevious>
            <CarouselNext className="relative left-auto w-118 h-40 cursor-pointer rounded-none border-neutral-900 hover:scale-98 hover:shadow-[0px_0px_10px_1px_rgba(20,155,176,0.5)] transition-all ease-in-out duration-700">
              <span>Next</span>
            </CarouselNext>
          </div>
        </Carousel>
      </motion.div>
    </div>
  );
};
