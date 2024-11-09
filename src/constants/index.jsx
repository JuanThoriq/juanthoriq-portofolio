import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/project-5.webp";

import {
  RiReactjsLine,
  RiNextjsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiTailwindCssFill,
  RiBootstrapFill,
  RiJavascriptFill,
  // RiJavaFill,
  RiNodejsFill,
} from "react-icons/ri";
// import { SiMysql } from "react-icons/si";
// import { FaPython } from "react-icons/fa";
// import { Icon } from "@iconify/react";

import { FaGithub, FaLinkedin, FaInstagram, FaFigma } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
// import { CiGlobe } from "react-icons/ci";

export const NAVIGATION_LINKS = [
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "Work Experience", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Juan Thoriq",
  role: "Full Stack Developer",
  subheading:
    "I am a third-year Software Engineering student with a strong passion for web development, particularly in front-end and back-end development. Over the course of my studies, I have successfully worked on several projects, with a primary focus on front-end technologies. I am currently deepening my expertise in front-end development while simultaneously expanding my knowledge in back-end technologies. My long-term goal is to contribute to the development of innovative and scalable tech solutions, driving impactful change in the industry",
};

export const HERO_CONTENT = `I am a third-year Software Engineering student with a strong passion for web development, particularly in front-end and back-end development. Over the course of my studies, I have successfully worked on several projects, with a primary focus on front-end technologies. I am currently deepening my expertise in front-end development while simultaneously expanding my knowledge in back-end technologies. My long-term goal is to contribute to the development of innovative and scalable tech solutions, driving impactful change in the industry`;

export const TECHNOLOGIES = [
  { name: "HTML5", icon: <RiHtml5Fill className="text-orange-600" /> },
  { name: "CSS3", icon: <RiCss3Fill className="text-blue-600" /> },
  {
    name: "JavaScript",
    icon: <RiJavascriptFill className="text-yellow-300" />,
  },
  { name: "Bootstrap", icon: <RiBootstrapFill className="text-purple-500" /> },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="text-sky-400" />,
  },
  { name: "React", icon: <RiReactjsLine className="text-cyan-400" /> },
  { name: "Next.js", icon: <RiNextjsFill /> },
  { name: "Node.js", icon: <RiNodejsFill className="text-green-500" /> },
];

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Software Developer Intern",
    company: "PT. Zahir Internasional",
    description: `Currently involved in an internship, focused on identifying problems to be solved through a potential application solution. Collaborating with the mentor to analyze and define the problem before moving into the development stage.`,
    technologies: ["Dart", "Flutter", "Firebase", "Trello"],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Portfolio Website",
    image: project1,
    description:
      "My first personal portfolio website to showcase my skills, projects, expiriences, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
    link: [
      {
        projectlink: "https://github.com/JuanThoriq/juanthoriq-portofolio",
        projectlogo: <FaGithub />,
      },
      {
        projectlink: "https://juanthoriq-portofolio.vercel.app/",
        projectlogo: <CiGlobe />,
      },
    ],
  },
  {
    id: 2,
    title: "Cashier Jo",
    image: project2,
    description:
      "Built a responsive landing page website project aimed at simulating a cashier system for a retail environment.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    link: [
      {
        projectlink: "https://github.com/JuanThoriq/CashierJo",
        projectlogo: <FaGithub />,
      },
      {
        projectlink: "https://juanthoriq.github.io/CashierJo/",
        projectlogo: <CiGlobe />,
      },
    ],
  },
  {
    id: 3,
    title: "NuCare",
    image: project3,
    description:
      "This project was built as part of a university project, focusing on creating a more intuitive and user-friendly interface.",
    technologies: ["HTML", "CSS", "JavaScript", "Figma"],
    link: [
      {
        projectlink:
          "https://www.figma.com/proto/CKdNDoPyUTAuTyZzQdqqOp/Prototype-Nucare?node-id=0-1&t=ljQnMQQyHGj2ARK3-1",
        projectlogo: <FaFigma />,
      },
      {
        projectlink: "https://github.com/JuanThoriq/NuCare",
        projectlogo: <FaGithub />,
      },
      {
        projectlink: "https://pallzzz.github.io/NuCare/",
        projectlogo: <CiGlobe />,
      },
    ],
  },
  {
    id: 4,
    title: "WorkIn",
    image: project4,
    description:
      "This project was built as part of a university project, focusing on creating a more intuitive and user-friendly interface.",
    technologies: ["HTML", "CSS", "JavaScript", "Figma"],
    link: [
      {
        projectlink:
          "https://www.figma.com/proto/YKcG39zgLFB8QMBzKuxGv1/Prototype-WorkIn?node-id=0-1&t=sCuvJRNUN5H3HdDJ-1",
        projectlogo: <FaFigma />,
      },
      {
        projectlink: "https://github.com/JuanThoriq/WorkIn",
        projectlogo: <FaGithub />,
      },
      {
        projectlink: "https://itismefinn.github.io/WorkIn.github.io/",
        projectlogo: <CiGlobe />,
      },
    ],
  },
  {
    id: 5,
    title: "VKellogs",
    image: project5,
    description:
      "This project was built as part of a university project, focusing on creating a more intuitive and user-friendly interface.",
    technologies: ["HTML", "CSS", "JavaScript", "Figma"],
    link: [
      {
        projectlink:
          "https://www.figma.com/proto/hAqOlo9PUuqEIdTLGKIL4Y/HCI-LAB-Juan-Thoriq?node-id=0-1&t=TYHylunOIvGBCr5D-1",
        projectlogo: <FaFigma />,
      },
      {
        projectlink: "https://github.com/JuanThoriq/VKellogsJo",
        projectlogo: <FaGithub />,
      },
    ],
  },
];

export const CONTACT = [
  {
    name: "GitHub Account",
    link: "https://github.com/JuanThoriq",
    logo: <FaGithub />,
  },
  {
    name: "Instagram Account",
    link: "https://www.instagram.com/juantphlv",
    logo: <FaInstagram />,
  },
  {
    name: "LinkedIn Account",
    link: "https://www.linkedin.com/in/juan-thoriq-pahlevi/",
    logo: <FaLinkedin />,
  },
];
