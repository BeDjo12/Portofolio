import { ReactNode } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import Link from "next/link";

// Data default agar tidak perlu menulis ulang di setiap tempat
const defaultMedias = [
  { id: 1, icon: <FaFacebookF />, link: "#" },
  { id: 2, icon: <FaInstagram />, link: "#" },
  { id: 3, icon: <FaLinkedinIn />, link: "#" },
  { id: 4, icon: <FaTiktok />, link: "#" },
];

interface SosialMediaProps {
  gap?: string;
  size?: string;
  textSize?: string;
}

export const SosialMedia = ({
  gap = "gap-12",
  size = "w-40 h-40",
  textSize = "text-[20px]",
}: SosialMediaProps) => {
  return (
    <div className={`flex items-center ${gap}`}>
      {defaultMedias.map(({ id, icon, link }) => (
        <Link
          key={id}
          href={link}
          className={`${size} ${textSize} rounded-full flex items-center justify-center border border-neutral-25/10 text-neutral-25 transition-all hover:scale-110 hover:bg-white/5`}
        >
          {icon}
        </Link>
      ))}
    </div>
  );
};
