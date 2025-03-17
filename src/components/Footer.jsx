import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo, github,linkedin,instagram } from "../assets";

const Footer = () => {
  return (
    <footer className={`bg-primary text-white ${styles.paddingX} py-6`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-[18px] font-bold cursor-pointer">
            Mehul &nbsp; <span className="sm:block hidden">| MERN Stack Developer</span>
          </p>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://github.com/MehulGS" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="w-6 h-6 hover:opacity-80 transition-opacity" />
          </a>
          <a href="https://www.linkedin.com/in/gupta-mehul-30855a291/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6 hover:opacity-80 transition-opacity" />
          </a>
          <a href="https://www.instagram.com/mehulgupta13.6?igsh=bzM5dW54azQ2d2Fo" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="w-6 h-6 hover:opacity-80 transition-opacity" />
          </a>
        </div>
      </div>
      <hr className="border-gray-600 my-4" />
      <p className="text-center text-sm">&copy; {new Date().getFullYear()} Mehul. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
