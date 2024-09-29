import React from "react";
import { FiArrowUpRight } from "react-icons/fi"; // Import the north-east arrow icon
import avatarImg from "../../assets/Kumar-Raunak-portfolio.jpg";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-lg tracking-tight my-2">
          Passionate Java Full Stack Developer having hands on experience in backend technologies like 
          Spring Boot, Microservices and REST APIs.
        </p>
        <a 
          href="https://drive.google.com/file/d/194vE9A8gj4YU0s6SgcmsAexYbm6N20YC/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="mt-5 md:mt-8 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#4f5463] flex items-center">
            Check Resume/CV
            <FiArrowUpRight className="ml-2" size={20} /> {/* Add north-east arrow icon */}
          </button>
        </a>
      </div>
      <div className="flex-shrink-0 -translate-x-5 md:-translate-x-10">
        <img className="w-48 h-auto md:w-64 md:h-auto rounded-full object-cover" src={avatarImg} alt="Avatar" />
      </div>
    </div>
  );
};

export default Home;
