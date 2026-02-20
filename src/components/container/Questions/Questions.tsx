"use client";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "../../ui/carousel";
import Image from "next/image";
import avatar from "@/public/avatar/avatar.svg";
import { TbMessage } from "react-icons/tb";
import { motion } from "motion/react";

const Quest = [
  {
    id: 1,
    question: "Do you work on freelance or remote projects?",
    answer:
      "I am available for freelance and remote projects. I am experienced in collaborating with distributed teams and am comfortable working across different time zones to deliver high-quality results.",
  },
  {
    id: 2,
    question: "What technologies do you work with?",
    answer:
      "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
  },
  {
    id: 3,
    question: "Can you convert Figma or Sketch designs into code?",
    answer:
      "I specialize in converting Figma or Sketch designs into clean, responsive, and pixel-perfect code using HTML, CSS, and React/Vue.",
  },
  {
    id: 4,
    question: "Do you collaborate with backend developers or teams?",
    answer:
      "I regularly collaborate with backend teams to integrate APIs and ensure seamless data flow.",
  },
  {
    id: 5,
    question: "Are you available for full-time roles?",
    answer: "I am available for full-time roles and long-term collaboration.",
  },
];

export const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  const goTo = (index: number) => {
    setActiveIndex(index);
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    if (api && isMobile) {
      api.scrollTo(index);
    }
  };

  const handleNext = () => {
    if (activeIndex < Quest.length - 1) {
      const nextIndex = activeIndex + 1;
      setActiveIndex(nextIndex);
      const isMobile = window.innerWidth < 768;
      const isNearEnd = nextIndex >= Quest.length - 1;
      if (isMobile || isNearEnd) {
        api?.scrollTo(nextIndex);
      }
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      const prevIndex = activeIndex - 1;
      setActiveIndex(prevIndex);
      const isMobile = window.innerWidth < 768;
      if (isMobile || prevIndex === 0) {
        api?.scrollTo(prevIndex);
      }
    }
  };

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
      }}
      className="w-full flex flex-col items-center gap-24 px-20 py-40 md:pl-40 lg:pl-120 lg:py-80 lg:gap-48"
    >
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
        className="w-full max-w-353 md:min-w-full flex flex-col md:flex-row justify-between md:items-center gap-25 md:pr-40 lg:pr-120"
      >
        <div className="flex flex-col gap-8 lg:gap-16">
          <h1 className="text-[32px]/[42px] tracking-[-0.04em] lg:text-[48px]/[60px] lg:tracking-[-0.05em] font-bold ">
            Still Got Questions?
          </h1>
          <p className="text-[14px]/[28px] lg:text-[16px]/[30px] lg:tracking-[-0.03em] text-neutral-400 ">
            I've listed answers to questions I often get as a frontend
            developer.
          </p>
        </div>

        <div className="h-40 lg:h-48 w-248 flex gap-12">
          <CarouselPrevious
            onClick={handlePrev}
            className="relative left-auto w-118 h-40 lg:h-48 rounded-none border-neutral-900 cursor-pointer hover:scale-98 hover:shadow-[0px_0px_10px_1px_rgba(20,155,176,0.5)] transition-all ease-in-out duration-700"
          >
            <span>Prev</span>
          </CarouselPrevious>

          <CarouselNext
            onClick={handleNext}
            className="relative border right-auto w-118 lg:h-48 h-40 rounded-none border-neutral-900 cursor-pointer hover:scale-98 hover:shadow-[0px_0px_10px_1px_rgba(20,155,176,0.5)] transition-all ease-in-out duration-700"
          >
            <span>Next</span>
          </CarouselNext>
        </div>
      </motion.div>

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
        className="w-full max-w-353 md:max-w-1440"
      >
        <CarouselContent className="flex w-full gap-10 h-356 lg:h-466 md:active:cursor-grab">
          {Quest.map((map, index) => {
            const isActive = activeIndex === index;

            return (
              <CarouselItem
                key={map.id}
                onClick={() => goTo(index)}
                className={`p-15 lg:p-20 justify-between basis-auto flex-none flex flex-col transition-all duration-300 ${
                  isActive
                    ? "bg-primary-400 w-353 lg:w-379 cursor-grab"
                    : "bg-black w-252 lg:w-252 cursor-pointer"
                }`}
              >
                <div className="flex justify-between">
                  <div
                    className={`${
                      isActive ? "block" : "hidden"
                    } w-80 h-80 bg-primary-300 relative rounded-full overflow-hidden`}
                  >
                    <Image
                      src={avatar}
                      alt="avatar"
                      className="absolute w-75 top-4 left-6"
                    />
                  </div>
                  <TbMessage className="w-40 h-40" />
                </div>

                <div className="flex flex-col gap-10 lg:gap-12">
                  <h3 className="text-[24px]/[36px] lg:text-[26px]/[38px] tracking-[-0.04em] font-semibold ">
                    {map.question}
                  </h3>

                  <p
                    className={`${
                      isActive ? "block" : "hidden"
                    } text-[14px]/[28px] lg:text-[16px]/[30px] tracking-[-0.03em] font-medium`}
                  >
                    {map.answer}
                  </p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </motion.div>
    </Carousel>
  );
};
