import React from "react";
import { FaJava, FaDocker, FaReact, FaDatabase } from "react-icons/fa";
import { SiSpringboot, SiKotlin, SiPostgresql, SiMysql } from "react-icons/si";
import { FaCode } from "react-icons/fa";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="#007396" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiSpringboot color="#6DB33F" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiKotlin color="#7F52FF" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaDocker color="#2496ED" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPostgresql color="#336791" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#4479A1" size={50} />
          </span>
        </div>

        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaCode color="#F4A261" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer Intern, Eduskills</h2>
              <p className="text-sm leading-tight font-thin">
                Jan 2024 - March 2024
              </p>
              <ul className="text-sm p-2">
                <li>- Developed backend services using Java and Spring Boot.</li>
                <li>- Worked with Docker for containerized deployments.</li>
                <li>- Integrated APIs for seamless data transfer between services.</li>
              </ul>
            </span>
          </div>

          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaCode color="#F4A261" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Backend Intern, VaultOfCodes</h2>
              <p className="text-sm leading-tight font-thin">
                Nov 2023 - Dec 2023
              </p>
              <ul className="text-sm p-2">
                <li>- Worked on backend systems in Java.</li>
                <li>- Built and maintained REST APIs and microservices.</li>
                <li>- Optimized code for high performance and scalability.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
