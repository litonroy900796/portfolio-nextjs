import { GoDeviceDesktop } from "react-icons/go";
import {
  MdOutlineAppSettingsAlt,
  MdOutlineDesignServices,
} from "react-icons/md";
import { SiFigma } from "react-icons/si";

export const ABOUT = {
  title: "About Me",
  name: "Liton Roy",
  description:
    "Frontend Developer with 3+ years of experience building responsive and high-performance web applications using modern technologies like React, Next.js, and TypeScript. Skilled in transforming UI/UX designs into scalable, maintainable, and user-friendly interfaces. Passionate about writing clean, efficient code and delivering impactful digital solutions.",

  exports: ["JavaScript", "React", "Next.js", "TypeScript"],

  image: "/me.png",

  services: [
    {
      title: "Frontend Development",
      text: "I build modern, responsive, and high-performance web applications using React, Next.js, and other modern frontend technologies, ensuring clean code and excellent user experience.",
      icon: <GoDeviceDesktop size={33} />,
    },
    {
      title: "Responsive Web Design",
      text: "I create fully responsive websites that adapt seamlessly across all devices using flexible layouts, media queries, and modern CSS frameworks like Tailwind CSS.",
      icon: <MdOutlineAppSettingsAlt size={33} />,
    },
    {
      title: "UI/UX Implementation",
      text: "I transform UI/UX designs into interactive and user-friendly interfaces, focusing on usability, accessibility, and performance.",
      icon: <MdOutlineDesignServices size={33} />,
    },
    {
      title: "Modern Web Design",
      text: "I design clean and modern website layouts with a strong focus on user experience, visual hierarchy, and simplicity.",
      icon: <SiFigma size={33} />,
    },
  ],
};
