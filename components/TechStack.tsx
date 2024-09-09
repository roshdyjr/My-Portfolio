"use client";
import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiRedux, SiBootstrap, SiJquery, SiTypescript, SiNpm } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { MdOutlineApi } from "react-icons/md";
import { BiLockAlt } from "react-icons/bi";

const techStackIcons = [
  { id: 1, name: "React", icon: <FaReact /> },
  { id: 2, name: "Next.js", icon: <SiNextdotjs /> },
  { id: 3, name: "HTML", icon: <FaHtml5 /> },
  { id: 4, name: "CSS", icon: <FaCss3Alt /> },
  { id: 5, name: "JavaScript", icon: <FaJsSquare /> },
  { id: 6, name: "Node.js", icon: <FaNodeJs /> },
  { id: 7, name: "Git", icon: <FaGitAlt /> },
  { id: 8, name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { id: 9, name: "Redux", icon: <SiRedux /> },
  { id: 10, name: "Bootstrap", icon: <SiBootstrap /> },
  { id: 11, name: "jQuery", icon: <SiJquery /> },
  { id: 12, name: "TypeScript", icon: <SiTypescript /> },
  { id: 13, name: "Sass", icon: <DiSass /> },
  { id: 15, name: "Context API", icon: <MdOutlineApi /> },
  { id: 16, name: "npm", icon: <SiNpm /> },
  { id: 17, name: "JWT", icon: <BiLockAlt /> },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20">
      <h1 className="heading text-center mb-10">
        My <span className="text-purple">Tech Stack</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {techStackIcons.map(({ id, name, icon }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center p-4 w-32 h-32 bg-gray-800 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-700"
          >
            <div className="flex items-center justify-center text-3xl mb-2">
              {icon}
            </div>
            <p className="text-sm">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
