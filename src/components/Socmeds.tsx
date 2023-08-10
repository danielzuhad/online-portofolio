import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Socmeds = () => {
  return (
    <div className="text-white flex gap-10 mt-5">
      <a href="https://www.instagram.com/daniel_zuhad/">
        <AiFillInstagram size={45} />
      </a>

      <a href="https://github.com/danielzuhad">
        <FaGithub size={45} />
      </a>
    </div>
  );
};
