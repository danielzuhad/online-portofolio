import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link activeClass="active" spy={true} smooth={true} duration={500} to="about" className="title-font cursor-pointer font-medium text-white mb-4 md:mb-0 ml-3 text-xl">
          Daniel
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="training" className="mr-5 cursor-pointer hover:text-white">
            Training
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="skills" className="mr-5 cursor-pointer hover:text-white">
            Skills
          </Link>
          <Link activeClass="active" spy={true} smooth={true} duration={500} to="projects" className="mr-5 cursor-pointer hover:text-white">
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}
