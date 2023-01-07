import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="grid h-screen place-items-center">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">Skills</h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <FaHtml5 className=" w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">HTML</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <FaCss3Alt className=" w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">CSS</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <FaCss3Alt className=" w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">CSS</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <SiJavascript className=" w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">JavaScript</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <SiTailwindcss className=" w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">Tailwind</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <FaReact className=" w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">React</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
