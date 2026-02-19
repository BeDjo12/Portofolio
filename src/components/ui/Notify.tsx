"use client";

import { toast } from "sonner";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import Framecheck from "@/public/Framecheck.svg";
import FrameX from "@/public/FrameX.svg";
import Grid from "@/public/Grid.svg";

const lockScroll = () => {
  document.body.style.overflow = "hidden";
};

const unlockScroll = () => {
  document.body.style.overflow = "auto";
};

const jumpToInputInstantly = () => {
  unlockScroll();
  const inputSection = document.getElementById("InputMail");
  if (inputSection) {
    const rect = inputSection.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const finalPosition = rect.top + scrollTop;

    window.scrollTo(0, finalPosition - 100);
  }
};

const overlayClass =
  "bg-black/60 flex w-full h-full min-w-screen min-h-screen left-1/2 -translate-x-1/2 relative justify-center item-center";

const boxClass =
  "w-361 lg:w-518 h-fit bg-black relative top-212 lg:top-227 flex flex-col item-center justify-center border border-neutral-900";

export const notify = {
  error: (
    title: string = "Message Not Sent",
    message: string = "Something broke along the way. Let's try resending it.",
  ) => {
    lockScroll();

    toast.custom((t) => (
      <div
        className={overlayClass}
        onClick={() => {
          toast.dismiss(t);
          unlockScroll();
        }}
      >
        <div onClick={(e) => e.stopPropagation()} className={cn(boxClass)}>
          <div className="relative w-361 lg:w-518 lg:h-260 h-222 overflow-hidden flex items-center justify-center">
            <div className="absolute -top-245 -left-162 lg:-left-84 lg:-top-245 w-656 h-457 bg-radial from-[#EE1D52]/80 to-transparent to-70%" />
            <div className="absolute w-533 h-246 top-7 -left-4">
              <Image
                src={Grid}
                style={{ width: "full", height: "full" }}
                alt="grid"
                className="absolute"
              />
            </div>
            <div className="w-142 h-142 lg:w-180 lg:h-180 flex items-center justify-center">
              <Image
                src={FrameX}
                style={{ width: "180", height: "180" }}
                alt="check"
                className="z-20"
              />
            </div>
          </div>
          <div className="lg:gap-32 lg:px-32 lg:pt-32 lg:pb-40 flex flex-col gap-24 w-full items-center px-16 pt-16 pb-24 ">
            <div className="flex w-full flex-col gap-3 lg:gap-8 text-center">
              <h3 className="text-[20px]/[34px] lg:text-[24px]/[36px] font-bold text-neutral-25">
                {title}
              </h3>
              <p className="text-neutral-400 font-medium text-[14px]/[28px] tracking-wide lg:text-[16px]/[30px]">
                {message}
              </p>
            </div>
            <button
              onClick={() => {
                toast.dismiss(t);
                jumpToInputInstantly();
              }}
              className="w-full rounded-full h-44 lg:h-48 flex items-center font-bold text-[14px]/[28px] justify-center bg-primary-300 cursor-pointer"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    ));
  },

  success: (
    title: string = "Thanks for Reaching Out!",
    message: string = "I've received your message and will get back to you shortly.",
  ) => {
    lockScroll();

    toast.custom((t) => (
      <div
        className={overlayClass}
        onClick={() => {
          toast.dismiss(t);
          unlockScroll();
        }}
      >
        <div onClick={(e) => e.stopPropagation()} className={cn(boxClass)}>
          <div className="relative w-full h-222 lg:w-518 lg:h-260 overflow-hidden flex items-center justify-center">
            <div className="absolute -top-222 -left-252 lg:-left-84 lg:-top-245 w-656 h-457 bg-radial from-primary-300/80 to-transparent to-70%" />
            <div className="absolute w-533 h-246 top-7 -left-4">
              <Image
                src={Grid}
                style={{ width: "full", height: "full" }}
                alt="grid"
                className="absolute"
              />
            </div>
            <div className="w-142 h-142 lg:w-180 lg:h-180 flex items-center justify-center">
              <Image
                src={Framecheck}
                style={{ width: "180", height: "180" }}
                alt="check"
                className="z-20"
              />
            </div>
          </div>
          <div className="lg:gap-32 lg:px-32 lg:pt-32 lg:pb-40 flex flex-col gap-24 w-full items-center px-16 pt-16 pb-24">
            <div className="flex w-full item-center flex-col gap-3 lg:gap-8 text-center">
              <h3 className="text-[20px]/[34px] lg:text-[24px]/[36px] font-bold text-neutral-25">
                {title}
              </h3>
              <p className="text-neutral-400 font-medium text-[14px]/[28px] lg:text-[16px]/[30px] tracking-wide">
                {message}
              </p>
            </div>
            <button
              onClick={() => {
                toast.dismiss(t);
                unlockScroll();
              }}
              className="w-full rounded-full h-44 lg:h-48 flex items-center font-bold text-[14px]/[28px] justify-center bg-primary-300 cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    ));
  },
};
