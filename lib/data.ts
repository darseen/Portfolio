import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import YelpCampImage from "@/public/YelpCamp.png";
import FTPClientImage from "@/public/FTPCLient.png";
import ChatAppImage from "@/public/ChatApp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated College",
    location: "Ankara, Turkey",
    description: "I graduated College with a 3.10 GPA.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Finished a Web Developer Bootcamp",
    location: "Ankara, Turkey",
    description:
      "I took my first web developer bootcamp online on Udemy and finished it within 2 months.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Ankara, Turkey",
    description:
      "I'm now a full-stack developer working for a travel agency for booking flights.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ChatApp",
    description:
      "A chat app web application for sending and recieving messages, that supports global chat and private chats.",
    tags: ["React", "Node.js", "Socket.io", "Tailwind", "Express.js", "Redux"],
    imageUrl: ChatAppImage,
  },
  {
    title: "FTPClient",
    description:
      "FTP client is a web app that allows users to connect to ftp servers for file transfer",
    tags: ["Node.js", "Express.js", "Javascript", "Bootstrap", "EJS"],
    imageUrl: FTPClientImage,
  },
  {
    title: "YelpCamp",
    description:
      "This is the full-stack web developer bootcamp final project that i took on Udemy.",
    tags: ["Javascript", "Node.js", "Express.js", "MongoDB", "EJS"],
    imageUrl: YelpCampImage,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "React Native",
  "Next.js",
  "Redux",
  "Redis",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Framer Motion",
  "Prisma",
  "Web Sockets",
] as const;
