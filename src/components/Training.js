import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

export default function Training() {
  return (
    <section id="training" className="grid h-screen place-items-center">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">Training</h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 justify-center ">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center justify-between">
              <span className="title-font font-medium text-white">Studi Independen React and React Native</span>
              <AiFillCheckCircle className="text-green-400 text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
