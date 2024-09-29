import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    
    <footer className="bg-[#121212] text-white py-8 md:py-12">
      <div id="Footer" className="container mx-auto flex flex-col md:flex-row justify-between items-center p-6">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">Contact</h1>
          <h3 className="text-sm md:text-xl font-normal mt-2">
            Feel free to reach out!
          </h3>
        </div>

        <ul className="flex flex-col md:flex-row text-sm md:text-lg mt-4 md:mt-0">
          <li className="flex items-center gap-2 mb-2 md:mb-0 md:mr-6">
            <MdOutlineEmail size={24} />
            <a
              href="mailto:kumarraunak42003@gmail.com"
              className="hover:underline"
            >
              kumarraunak42003@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-2 mb-2 md:mb-0 md:mr-6">
            <CiLinkedin size={24} />
            <a
              href="https://www.linkedin.com/in/kumar-raunak-527904262/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex items-center gap-2 mb-2 md:mb-0">
            <FaGithub size={24} />
            <a
              href="https://github.com/SatanS-CL4W"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center text-sm mt-6">
        <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
