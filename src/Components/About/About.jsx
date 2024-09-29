import React from "react";
import AboutImg from "../../assets/3d-icon-travel-with-man-modified.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About Me</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img 
            className="md:h-80 -translate-x-5 md:-translate-x-10" 
            src={AboutImg} 
            alt="About img" 
          />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Full Stack Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Passionate about creating scalable web applications with expertise in 
                  both frontend and backend development. Experienced with Spring Boot, 
                  Microservices architecture, REST APIs, and React.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Skilled in backend development using Java, Spring Boot, and creating 
                  microservice-based architectures. Proficient in building RESTful APIs and 
                  ensuring performance and scalability.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Adept at working with databases such as MySQL and PostgreSQL, ensuring 
                  efficient data handling, query optimization, and database integration in 
                  web applications.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
