"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  const links = [
    { href: "/", text: "Home" },
    { href: "/skill", text: "Skills" },
    { href: "/projects", text: "Projects" },
    { href: "/certifications", text: "Certifications" },
  ];

  return (
    <div className="absolute mt-9 w-[70vw] h-10 flex items-center justify-center">
      <ul className="flex justify-center sm:gap-2  md:gap-10 lg:gap-16 font-medium lg:text-[1.3em] relative group text-white">
        {links.map((link) => (
          <motion.li
            className={`${
              link.href === path ? "border-white border-b-2" : ""
            } p-2 transition border-black duration-[750ms] hover:border-b-2 hover:border-white  `}
            key={link.href}
          >
            <Link href={link.href}>{link.text}</Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
