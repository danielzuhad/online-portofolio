import React from "react";

export default function Certifications() {
  return (
    <div className=" flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-white font-semibold  sm:text-[2em] text-[3.5em] md:mt-[5em] sm:mt-[5em] md:mt-[-2.5em] lg:mt-[-6em] lg:mb-10 mt-[3em]">
        Certifications
      </h1>
      <div className="flex gap-10 w-[80vw] justify-center md:items-center mb-[-5em] md:flex-col sm:flex-col m-4 lg:flex-row">
        <div>
          <img
            className="lg:h-[20em] lg:w-[30em] md:h-[12em] md:w-[18em] object-cover"
            src="sertifikat1.png"
            alt="sertifikat"
          />
          <div className="bg-grey flex justify-center p-2">
            React & React Native{" "}
          </div>
        </div>
        <div>
          <img
            className="lg:h-[20em] lg:w-[30em] md:h-[12em] md:w-[18em] object-cover"
            src="sertifikat2.png"
            alt="sertifikat"
          />
          <div className="bg-grey flex justify-center p-2">
            Winner Final Project{" "}
          </div>
        </div>
        <div>
          <img
            className="lg:h-[20em] lg:w-[30em] md:h-[12em] md:w-[18em] object-cover"
            src="sertifikat3.png"
            alt="sertifikat"
          />
          <div className="bg-grey flex justify-center p-2">
            Full Stack Web Developer{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
