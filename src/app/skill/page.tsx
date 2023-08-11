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
  return (
    <PageWrapper>
      <div className=" flex flex-col gap-10 justify-center items-center min-h-screen w-[70vw]">
        <h1 className="text-white font-semibold sm:text-[2em] text-[3.5em] sm:mt-10 md:mt-[-2.5em] lg:mt-[-6em] lg:mb-10 ">
          Skills
        </h1>
        <div className="flex gap-10 text-white w-[70vw] flex-wrap justify-center">
          <motion.div
            whileHover={{ y: -30 }}
            className="flex flex-col items-center gap-2"
          >
            <FaHtml5 fill="white" size={70} />
            <span>HTML</span>
          </motion.div>
          <motion.div
            whileHover={{ y: -30 }}
            className="flex flex-col items-center gap-2"
          >
            <FaCss3 fill="white" size={70} />
            <span>CSS</span>
          </motion.div>
          <motion.div
            whileHover={{ y: -30 }}
            className="flex flex-col items-center gap-2"
          >
            <SiTailwindcss fill="white" size={70} />
            <span>Tailwind</span>
          </motion.div>
          <motion.div
            whileHover={{ y: -30 }}
            className="flex flex-col items-center gap-2"
          >
            <IoLogoJavascript fill="white" size={70} />
            <span>Javascript</span>
          </motion.div>
          <motion.div
            whileHover={{ y: -30 }}
            className="flex flex-col items-center gap-2"
          >
            <SiTypescript fill="white" size={70} />
            <span>Typescript</span>
          </motion.div>
          <motion.div
            whileHover={{ y: -30 }}
            className="flex flex-col items-center gap-2"
          >
            <FaReact fill="white" size={70} />
            <span>React</span>
          </motion.div>
          <motion.div
            whileHover={{ y: -30 }}
            className="flex flex-col items-center gap-2"
          >
            <SiNextdotjs fill="white" size={70} />
            <span>Next</span>
          </motion.div>
          <motion.div
            whileHover={{ y: -30 }}
            className="flex flex-col items-center gap-2"
          >
            <SiExpress fill="white" size={70} />
            <span>Express</span>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
