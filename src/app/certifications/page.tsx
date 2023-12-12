"use client";
import { motion } from "framer-motion";
import { PageWrapper } from "../page-wrapper";
import { useState } from "react";

export default function Certifications() {
  const certifications = [
    {
      src: "sertifikat1.png",
      alt: "sertifikat1",
      title: "React & React Native",
    },
    {
      src: "sertifikat2.png",
      alt: "sertifikat2",
      title: "Winner Final Project",
    },
    {
      src: "sertifikat3.png",
      alt: "sertifikat3",
      title: "Fullstack Web Developer",
    },
  ];

  return (
    <PageWrapper>
      <div className=" flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-white font-semibold  sm:text-[2em] text-[3.5em] md:mt-[5em] sm:mt-[5em] lg:mt-[-6em] lg:mb-10 mt-[3em]">
          Certifications
        </h1>
        <div className="flex gap-10 w-[80vw] justify-center md:items-center mb-[-5em] md:flex-col sm:flex-col m-4 lg:flex-row">
          {certifications.map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.4 }}>
              <img
                className="lg:h-[20em] lg:w-[30em] md:h-[12em] md:w-[18em] object-cover"
                src={item.src}
                alt="sertifikat"
              />
              <div className="bg-grey flex justify-center p-2">
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
