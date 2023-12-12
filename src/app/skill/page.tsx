"use client";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { PageWrapper } from "../page-wrapper";
import { motion } from "framer-motion";

export default function Skill() {
  const skills = [
    { icon: <FaHtml5 fill="white" size={70} />, title: "HTML" },
    { icon: <FaCss3 fill="white" size={70} />, title: "CSS" },
    { icon: <SiTailwindcss fill="white" size={70} />, title: "Tailwind" },
    { icon: <IoLogoJavascript fill="white" size={70} />, title: "JavaScript" },
    { icon: <SiTypescript fill="white" size={70} />, title: "Typescript" },
    { icon: <FaReact fill="white" size={70} />, title: "HTML" },
    { icon: <SiExpress fill="white" size={70} />, title: "Expresss" },
    { icon: <SiNextdotjs fill="white" size={70} />, title: "Next" },
  ];

  return (
    <PageWrapper>
      <div className=" flex flex-col gap-10 justify-center items-center min-h-screen w-[70vw]">
        <h1 className="text-white font-semibold sm:text-[2em] text-[3.5em] sm:mt-10 md:mt-[-2.5em] lg:mt-[-6em] lg:mb-10 ">
          Skills
        </h1>
        <div className="flex gap-10 text-white w-[70vw] flex-wrap justify-center">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -30 }}
              className="flex flex-col items-center gap-2"
            >
              {skill.icon}
              <span>{skill.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
