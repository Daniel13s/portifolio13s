"use client";

import { FaGithub, FaInstagram, FaLinkedin, FaMoon, FaSun, FaWhatsapp } from "react-icons/fa";
import "./style.css";
import { useContext } from "react";
import themeContext from "@/app/context/ThemeContext";

export default function Home() {
  const {theme, setTheme} = useContext(themeContext);
  return (
    <div className={theme === 'light' ? "HomeLight" : "Home"}>
      <button className="theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark'? <FaMoon size={30} color='white' /> : <FaSun size={30} color="black" />}</button>
      <section className="Id">
        <h1>Daniel Silva Cardoso</h1>
        <p>Front-end Developer</p>
      </section>
      <div className="Links">
        <a href="https://github.com/Daniel13s" target="_blank">
          <FaGithub size={50} />
        </a>
        <a href="https://www.linkedin.com/in/daniel-silva-a70610313" target="_blank">
          <FaLinkedin size={50} />
        </a>
        <a href="https://www.instagram.com/eudandev" target="_blank
        ">
          <FaInstagram size={50} />
        </a>
        <a href="https://contate.me/5583996166858" target="_blank">
          <FaWhatsapp size={50} />
        </a>
      </div>
    </div>
  );
}
