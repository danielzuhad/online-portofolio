import { Socmeds } from "@/components/Socmeds";
import { PageWrapper } from "./page-wrapper";
import { motion } from "framer-motion";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <PageWrapper>
      <div className=" flex flex-col gap-10 justify-center items-center min-h-screen">
        <h1 className="w-[80vw] flex items-center justify-center text-white font-bold sm:text-[3em] md:text-[3em] lg:text-[4.7em] border-b-2 pb-[0.1em] border-[#ffffff34]">
          Muhammad Daniel Zuhad
        </h1>
        <p className="w-[85vw] text-white font-light sm:text-[0.8em] md:text-[0.7em] lg:text-[1em] ">
          {" "}
          " Hello! I am Muhammad Daniel Zuhad. I have an interest in the field
          front-end development. I really enjoy the process of creating
          attractive and interactive interface using the latest web technologies
          such as HTML, CSS, Javascript and Typescript. Besides, me too
          interested in other technologies in the world of web development such
          as React, Next, and Express. "
        </p>

        <Socmeds />
      </div>
    </PageWrapper>
  );
}
