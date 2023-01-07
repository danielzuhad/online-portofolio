import React from "react";
import { Route, Routes } from "react-router";

import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/Skills";
import Training from "./components/Training";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <ScrollToTop />
      <Navbar />
      <About />
      <Training />
      <Skills />
      <Skills />
      <Projects />
    </main>
  );
}
