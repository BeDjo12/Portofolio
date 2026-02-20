import avatar1 from "@/public/Faq/Ellipse 8.svg";
import avatar2 from "@/public/Faq/Ellipse 8-1.svg";
import avatar3 from "@/public/Faq/Ellipse 8-2.svg";
import avatar4 from "@/public/Faq/Ellipse 8-3.svg";
import rating from "@/public/Faq/Rating.svg";
import Image from "next/image";
import quote from "@/public/Faq/quote.svg";
import { motion } from "motion/react";

const TestimonialList = [
  {
    id: 1,
    stat: "8X",
    title: "More users converted after redesign",
    description:
      "Working with Edwin has been a fantastic experience. His attention to detail and commitment to quality are evident in every project. He consistently delivers results that exceed expectations, making him a valuable asset to any team.",
    user: {
      name: "Pablo Stanley",
      role: "Product Manager at Finovate",
      avatar: avatar1,
    },
  },
  {
    id: 2,
    stat: "3X",
    title: "Improved user engagement and sign-ups",
    description:
      "Edwin's expertise in frontend development is remarkable. He brings creativity and innovation to the table, ensuring that every project is not only functional but also visually appealing.",
    user: {
      name: "Pablo Stanley",
      role: "Product Manager at Finovate",
      avatar: avatar2,
    },
  },
  {
    id: 3,
    stat: null,
    title: null,
    description:
      "Edwin's work ethic and dedication are truly inspiring. He approaches challenges with a positive attitude and consistently finds effective solutions.",
    user: {
      name: "Pablo Stanley",
      role: "Product Manager at Finovate",
      avatar: avatar3,
    },
  },
  {
    id: 4,
    stat: null,
    title: null,
    description:
      "Edwin has a unique ability to transform complex ideas into user-friendly designs. His contributions have significantly enhanced our projects.",
    user: {
      name: "Pablo Stanley",
      role: "Product Manager at Finovate",
      avatar: avatar4,
    },
  },
];

export const Faq = () => {
  return (
    <div
      id="Faqs"
      className="scroll-mt-30 flex flex-col w-full items-center px-16 py-40 gap-24 md:px-40 lg:px-120 lg:py-80 lg:gap-48"
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
        <h1 className="text-[32px]/[42px] font-bold tracking-[-0.04em] lg:text-[48px]/[60px] lg:tracking-[-0.05em] ">
          Trusted Voices
        </h1>
        <p className="text-[14px]/[28px] text-neutral-400 lg:text-[16px]/[30px] lg:tracking-[-0.03em]  ">
          Here's what people say about working with me — across projects, teams,
          and timelines.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-[448fr_732fr] place-items-center gap-16 lg:gap-20">
        {/* border box1 */}
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
          className="h-486 w-full bg-linear-to-tl from-[#22252B] from-60% to-[#149BB0] flex items-center justify-center md:h-full md:w-full"
        >
          {/* box1 */}
          {TestimonialList.filter((item) => item.id === 1).map((item) => (
            <div
              key={item.id}
              className="p-20 gap-24 bg-black bg-linear bg-linear-140  from-primary-300/40 to-transparent to-70%   flex flex-col justify-between h-[99.5%] w-[99.5%] "
            >
              <div className="flex flex-col w-full gap-8">
                <h1 className="text-[28px]/[38px] lg:text-[36px]/[44px] lg:tracking-tight font-bold ">
                  {item.stat}
                </h1>
                <h3 className="text-[18px]/[32px] lg:text-[24px]/[36px] font-bold">
                  {item.title}
                </h3>
                <Image
                  src={rating}
                  alt="rating"
                  className="h-16 lg:h-24 lg:w-136"
                />
                <p className="text-neutral-400 text-[14px]/[28px] lg:text-[16px]/[30px] lg:tracking-[-0.03em] ">
                  {item.description}
                </p>
              </div>
              <div className="flex justify-between items-end">
                <div className="flex flex-col gap-8 lg:gap-16">
                  <Image src={item.user.avatar} alt="w-48 h-48" />
                  <div className="text-[14px]/[28px] lg:text-[16px]/[30px] flex flex-col ">
                    <p className="font-semibold">{item.user.name}</p>
                    <p>{item.user.role}</p>
                  </div>
                </div>
                <Image src={quote} alt="quote" className="w-48 h-48" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* box 2-4 */}
        <div className="w-full flex flex-col gap-16 lg:gap-20 md:w-full ">
          {/* box 2 */}
          {TestimonialList.filter((item) => item.id === 2).map((item) => (
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
              key={item.id}
              className="p-20 gap-24 border border-neutral-900 w-full md:w-full flex flex-col"
            >
              <div className="flex flex-col w-full gap-8">
                <h1 className="text-[28px]/[38px] lg:text-[36px]/[44px] lg:tracking-tight font-bold ">
                  {item.stat}
                </h1>
                <h3 className="text-[18px]/[32px] font-bold">{item.title}</h3>
                <Image
                  src={rating}
                  alt="rating"
                  className="h-16 lg:h-24 lg:w-136"
                />
                <p className="text-neutral-400 text-[14px]/[28px] lg:text-[16px]/[30px] lg:tracking-[-0.03em] ">
                  {item.description}
                </p>
              </div>
              <div className="flex justify-between items-end">
                <div className="flex flex-col gap-8">
                  <Image src={item.user.avatar} alt="w-48 h-48" />
                  <div className="text-[14px]/[28px] lg:text-[16px]/[30px] lg:tracking-[-0.03em] flex flex-col ">
                    <p className="font-semibold">{item.user.name}</p>
                    <p>{item.user.role}</p>
                  </div>
                </div>
                <Image src={quote} alt="quote" className="w-48 h-48" />
              </div>
            </motion.div>
          ))}

          {/* Box 3 & 4 */}
          <motion.div
            initial={{
              filter: "blur(20px)",
              scale: 0.5,
              y: 200,
            }}
            whileInView={{
              filter: "blur(0px)",
              scale: 1,
              y: 0,
            }}
            transition={{ ease: "easeInOut", duration: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 md:w-full h-full "
          >
            {TestimonialList.filter(
              (item) => item.id === 3 || item.id === 4,
            ).map((item) => (
              <div
                key={item.id}
                className="p-20 gap-24 border border-neutral-900 w-full flex flex-col md:w-full"
              >
                <div className="flex flex-col w-full gap-8">
                  <Image
                    src={rating}
                    alt="rating"
                    className="h-16 lg:h-24 lg:w-136"
                  />
                  <p className="text-neutral-400 text-[14px]/[28px] lg:text-[16px]/[30px] lg:tracking-[-0.03em] ">
                    {item.description}
                  </p>
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex flex-col gap-8">
                    <Image src={item.user.avatar} alt="w-48 h-48" />
                    <div className="text-[14px]/[28px] lg:text-[16px]/[30px] lg:tracking-[-0.03em] flex flex-col ">
                      <p className="font-semibold">{item.user.name}</p>
                      <p>{item.user.role}</p>
                    </div>
                  </div>
                  <Image src={quote} alt="quote" className="w-48 h-48" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
