"use client";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export const Socmeds = () => {
  return (
    <div className="text-white flex gap-10 mt-5">
      <motion.a
        whileHover={{ scale: 1.5 }}
        href="https://www.instagram.com/daniel_zuhad/"
      >
        <AiFillInstagram size={45} />
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.5 }}
        href="https://github.com/danielzuhad"
      >
        <FaGithub size={45} />
      </motion.a>
    </div>
  );
};
