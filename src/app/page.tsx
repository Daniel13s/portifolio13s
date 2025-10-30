'use client';

import { useContext } from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

import "./page.css"
import themeContext from "./context/ThemeContext";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";

export default function Page() {

  const {theme} = useContext(themeContext)
  return (
    <div className={theme === 'light' ? 'light' : 'dark'}>
      <Home />
      <AboutMe />
      <Projects />
      <Skills />
      <Form />
      <Footer />
    </div>
  );
}
