import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo } from "../assets";

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
      </div>
      <hr className="border-gray-600 my-4" />
      <p className="text-center text-sm">&copy; {new Date().getFullYear()} Mehul. All rights reserved.</p>
    </footer>
  );
};

export default Footer;