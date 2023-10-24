import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const HomeView = () => {
  return (
    <>
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default HomeView;
