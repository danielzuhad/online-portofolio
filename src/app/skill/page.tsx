import React from "react";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

export default function Skill() {
  return (
    <div className=" flex flex-col gap-10 justify-center items-center min-h-screen w-[70vw]">
      <h1 className="text-white font-semibold sm:text-[2em] text-[3.5em] sm:mt-10 md:mt-[-2.5em] lg:mt-[-6em] lg:mb-10 ">
        Skills
      </h1>
      <div className="flex gap-10 text-white w-[70vw] flex-wrap justify-center">
        <div className="flex flex-col items-center gap-2">
          <FaHtml5 fill="white" size={70} />
          <span>HTML</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaCss3 fill="white" size={70} />
          <span>CSS</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <SiTailwindcss fill="white" size={70} />
          <span>Tailwind</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IoLogoJavascript fill="white" size={70} />
          <span>Javascript</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <SiTypescript fill="white" size={70} />
          <span>Typescript</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaReact fill="white" size={70} />
          <span>React</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <SiNextdotjs fill="white" size={70} />
          <span>Next</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <SiExpress fill="white" size={70} />
          <span>Express</span>
        </div>
      </div>
    </div>
  );
}
