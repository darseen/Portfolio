import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaLandmark, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import YelpCampImage from "@/public/YelpCamp.png";
import FTPClientImage from "@/public/FTPCLient.png";
import ChatAppImage from "@/public/ChatApp.png";
import FlightPathImage from "@/public/FlightPath.png";
import AmadeusTSImage from "@/public/amadeus-ts.png";
import { BsBuilding } from "react-icons/bs";

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
    title: "BNM Software",
    location: "Ankara, Turkey",
    description:
      "I worked as a web developer intern for BNM Software, a company that provides software solutions for Businesses.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Ankara, Turkey",
    description:
      "I'm now a full-stack developer working for a travel agency, building their online flight booking system.",
    icon: React.createElement(BsBuilding),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Baghdad, Iraq",
    description:
      "I currently work in the IT department as a programmer, creating and managing systems that I have built, such as a ticketing system and a reports management system.",
    icon: React.createElement(FaLandmark),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "amadeus-ts",
    description:
      "A TypeScript library for the Amadeus API, providing a simple and intuitive way to interact with the Amadeus API.",
    tags: [
      "TypeScript",
      "Module",
      "SDK",
      "Package",
      "NPM",
      "Git",
      "GitHub",
      "CI/CD",
    ],
    imageUrl: AmadeusTSImage,
  },
  {
    title: "Fligh Path",
    description:
      "A web application that allows users to plan their flight itinerary and search for flights.",
    tags: ["React", "Next.js", "amadeus-ts", "Tailwind", "Server Actions"],
    imageUrl: FlightPathImage,
  },
  {
    title: "Chat App",
    description:
      "A chat app web application for sending and recieving messages, that supports global chat and private chats.",
    tags: ["React", "Node.js", "Socket.io", "Tailwind", "Express.js", "Redux"],
    imageUrl: ChatAppImage,
  },
  {
    title: "FTP Client",
    description:
      "FTP client is a web app that allows users to connect to ftp servers for file transfer",
    tags: ["Node.js", "Express.js", "Javascript", "Bootstrap", "EJS"],
    imageUrl: FTPClientImage,
  },
  {
    title: "Yelp Camp",
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
  "PostgreSQL",
  "Docker",
  "CI/CD",
  "Linux",
  "Terminal",
  "GitHub",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Framer Motion",
  "Prisma",
  "Web Sockets",
] as const;
