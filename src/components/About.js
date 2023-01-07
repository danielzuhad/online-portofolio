import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function About() {
  return (
    <section id="about">
      <div className="container h-screen mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        {/* Icon */}
        <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-8xl text-8xl mb-4 mx-auto font-medium text-gray-100">Muhammad Daniel Zuhad</h1>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 mx-auto font-medium text-gray-400">want to be FrontEnd Developer</h1>
          {/* Description */}
          <p className="mb-8 leading-relaxed mx-auto">a student majoring in management who wants to be a front end developer </p>
          {/* Icon */}
          <div className="flex justify-center gap-2 mx-auto">
            <a href="https://www.instagram.com/daniel_zuhad/">
              <BsInstagram style={{ fontSize: "28px" }} />
            </a>
            <a href="https://github.com/danielzuhad">
              <BsGithub style={{ fontSize: "28px" }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
