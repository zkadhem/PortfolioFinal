import Link from "next/link";
import React from "react";
import { FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiXcode } from "react-icons/si";
//import { TbBrandNextjs } from 'react-icons/tb';

import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

export function SkillsSection() {
  return (
    <div className="mx-auto max-w-5xl px-8 pb-8">
      <h1
        id="skills"
        className="max-w-5xl pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl"
      >
        Skills
      </h1>
      <div
        className={
          "grid grid-cols-1 gap-6  py-10 md:grid-cols-2 lg:grid-cols-3"
        }
      >
        {skills.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            className="relative mx-auto flex h-[13rem] w-full max-w-full flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]"
          >
            <Icon className="absolute -left-3 -top-3 size-6 text-black dark:text-white" />
            <Icon className="absolute -bottom-3 -left-3 size-6 text-black dark:text-white" />
            <Icon className="absolute -right-3 -top-3 size-6 text-black dark:text-white" />
            <Icon className="absolute -bottom-3 -right-3 size-6 text-black dark:text-white" />

            <EvervaultCard text={item.title} icon={item.icon} />
          </Link>
        ))}
      </div>
    </div>
  );
}

const skills = [
  {
    title: "C++",
    link: "https://cplusplus.com",
    icon: <SiCplusplus />,
  },
  {
    title: "JavaScript",
    link: "https://www.javascript.com",
    icon: <SiJavascript />,
  },
  {
    title: "Xcode",
    link: "https://developer.apple.com/xcode",
    icon: <SiXcode />,
  },
  {
    title: "Java",
    link: "https://www.oracle.com/java/",
    icon: <FaJava />,
  },
  {
    title: "HTML",
    link: "https://html.com",
    icon: <FaHtml5 />,
  },
  {
    title: "CSS",
    link: "https://www.w3.org/Style/CSS/Overview.en.html",
    icon: <FaCss3Alt />,
  },
];
