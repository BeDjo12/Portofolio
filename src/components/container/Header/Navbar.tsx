"use client";
import { Menu, X } from "lucide-react";
import React from "react";
import { Menus } from "./Menus";
import { motion, AnimatePresence } from "motion/react";

export const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);
  return (
    <div
      className={`${showMenu ? "h-full" : "h-auto"} fixed top-0 left-0 px-16 py-16 w-full flex justify-center z-50`}
    >
      <motion.div
        initial={{
          opacity: 0,
          x: -50,
        }}
        animate={{
          opacity: 1,
          x: 0,
          height: showMenu ? "100%" : "48px",
        }}
        transition={{ ease: "easeInOut", duration: 0.9 }}
        whileHover={{
          boxShadow: "0px 0px 10px 1px rgba(255, 255, 255, 0.5)",
        }}
        className={`${showMenu ? "rounded-16 items-top py-16" : "rounded-full items-center py-0"} flex w-full bg-black/40 backdrop-blur-lg   justify-between px-16 md:w-528 md:h-48 gap-24 md:px-24 md:justify-center md:bg-black/20`}
      >
        <a href="/" onClick={closeMenu}>
          <h1 className="text-xl font-bold md:text-[20px]/[34px] md:w-60 hover:text-primary-300 ">
            Edwin
          </h1>
        </a>
        <div className="hidden md:block">
          <Menus />
        </div>
        <div className="block md:hidden cursor-pointer">
          {showMenu ? (
            <X onClick={toggleMenu} className="w-24 h-24" />
          ) : (
            <Menu onClick={toggleMenu} className="w-24 h-24" />
          )}
        </div>
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, transition: { duration: 0 } }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 15,
                mass: 1,
              }}
              className="absolute top-66 left-16 md:hidden"
            >
              <Menus onItemClick={closeMenu} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
