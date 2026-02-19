import { motion } from "motion/react";
const Navbar = [
  {
    id: 1,
    name: "About",
    link: "#AboutMe",
  },
  {
    id: 2,
    name: "Skill",
    link: "#Skills",
  },
  {
    id: 3,
    name: "Project",
    link: "#Myproject",
  },
  {
    id: 4,
    name: "FAQ",
    link: "#Faqs",
  },
  {
    id: 5,
    name: "Contact",
    link: "#InputMail",
  },
];

export const Menus = ({ onItemClick }: { onItemClick?: () => void }) => {
  return (
    <div className="flex flex-col w-full md:flex-row md:gap-24">
      {Navbar.map(({ id, name, link }) => (
        <motion.a
          initial={{
            opacity: 0,
            scale: 0.5,
            filter: "blur(20px) brightness(0.3)",
          }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px) brightness(1)" }}
          transition={{ ease: "easeInOut", duration: 0.7 }}
          whileHover={{ scale: 1.05, fontWeight: "bold", color: "#43afc0" }}
          key={id}
          href={link}
          onClick={onItemClick}
          className="h-46 w-full flex py-8 px-0 md:px-8 text-md md:text-[16px]/[30px] "
        >
          {name}
        </motion.a>
      ))}
    </div>
  );
};
