"use client";
import { useRef, FormEvent } from "react";
import { Button } from "../../ui/button";
import emailjs from "@emailjs/browser";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { notify } from "../../ui/Notify";
import { Textarea } from "../../ui/textarea";
import mail from "@/public/MailBlack.svg";
import Image from "next/image";
import { motion } from "motion/react";

export const InputMail = () => {
  const form = useRef(null);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    window.scrollTo(0, 0);
    const formData = new FormData(form.current);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    if (!name || !email || !message) {
      setTimeout(() => {
        notify.error();
      });
      return;
    }

    try {
      await emailjs.sendForm(
        "service_wey1b54",
        "template_xhak2q9",
        form.current,
        { publicKey: "3QZChKuPLeL3fB9Ib" },
      );

      notify.success();
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      notify.error();
    }
  };
  return (
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
      className="max-w-353 w-full md:max-w-580 z-10 bg-black border border-neutral-900 flex flex-col gap-24 p-16 lg:gap-31 lg:px-24 lg:py-40 "
    >
      <div className="w-full flex flex-col gap-8 lg:gap-16">
        <div className="font-bold text-[32px]/[42px] tracking-[-0.04em] lg:text-[48px]/[60px] lg:tracking-[-0.05em] ">
          <h1>
            Let's <span className="text-primary-300">Build Something</span>
          </h1>
          <h1>Great</h1>
        </div>
        <p className="text-[14px]/[28px] lg:text-[16px]/[30px] lg:tracking-[-0.03em] text-neutral-400 ">
          Got an idea, a project, or just want to connect? I'm always open to
          new conversations.
        </p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full flex flex-col gap-16 lg:gap-20"
      >
        <div className="flex flex-col gap-6 h-82">
          <Label className="text-neutral-25 text-[14px]/[28px] ">Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full h-48 flex gap-8 px-16 py-8 rounded-none border border-neutral-900 placeholder:text-neutral-600 placeholder:text-text-[16px]/[30px]"
          />
        </div>
        <div className="flex flex-col gap-6 h-82">
          <Label className="text-neutral-25 text-[14px]/[28px]">Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full h-48 flex gap-8 px-16 py-8 rounded-none border border-neutral-900 placeholder:text-neutral-600 placeholder:text-text-[16px]/[30px]"
          />
        </div>
        <div className="flex flex-col gap-6">
          <Label className="text-neutral-25 text-[14px]/[28px]">Message</Label>
          <Textarea
            name="message"
            placeholder="Enter your message"
            className="w-full h-134 flex gap-8 px-16 py-8 rounded-none border border-neutral-900 placeholder:text-neutral-600 placeholder:text-text-[16px]/[30px] resize-none"
          />
        </div>
        <Button
          type="submit"
          className="h-48 cursor-pointer lg:h-56 hover:scale-98 hover:shadow-[0px_0px_10px_1px_rgba(255,255,255,0.5)] transition-all ease-in-out duration-700 w-full flex gap-8 rounded-none text-neutral-950 bg-white hover:bg-primary-300"
        >
          <Image src={mail} alt="mail" className="w-24 h-24" />
          <p>Send Message</p>
        </Button>
      </form>
    </motion.div>
  );
};
