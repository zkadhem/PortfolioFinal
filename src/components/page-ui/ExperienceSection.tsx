"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

import { TracingBeam } from "@/components/ui/tracing-beams";

export function ExperienceSection() {
  return (
    <>
      <h1
        id="experience"
        className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl"
      >
        Experience
      </h1>
      <TracingBeam className="px-6">
        <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
          {experience.map((item, index) => (
            <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
              <h2 className={twMerge("text-xl text-black dark:text-white")}>
                {item.title}
              </h2>
              <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">
                {item.badge}
              </span>
              <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
}

const experience = [
  {
    title: "Sandhills Global",
    description: (
      <ul className="list-disc">
        <li>
          Development in C#, .NET, VB, Swift, and Objective-C. Developing applications
          using Xamarin, utilizing MVC architecture to create scalable applications in
          C# on the .NET Framework.
        </li>
        <li>
          Working within a professional environment that adheres to Agile practices,
          daily task flows, and ensuring client satisfaction with the product through
          internal application reviews.
        </li>
      </ul>
    ),
    badge: "Software Developer Intern / Dec 2024 - Present",
  },
  {
      title: "Experis Game Solutions",
      description: (
          <ul className="list-disc">
              <li>
                  Collaborating closely with developers and other team members, refining
                  gameplay, enhancing user experience, and ensuring that games meet both
                  company standards and player expectations before release.
              </li>
              <li>
                  Lead the frontend development team, focusing on creating, improving,
                  and fine-tuning web applications to make them fast and reliable. My
                  job includes planning our technical approaches, guiding the team, and
                  actively coding and reviewing code.
              </li>
          </ul>
      ),
      badge: "Quality Assurance Intern / Jun 2024 - Aug 2024",
  },
  {
    title: "Compass Strategies",
    description: (
      <ul className="list-disc">
        <li>
          Developed and maintained internal software solutions to support the
          campaign&apos;s data management and communication systems.
        </li>
        <li>
          Assisted in managing the campaign&apos;s IT infrastructure, ensuring
          seamless integration of databases and optimizing data flows between
          departments.
        </li>
        <li>
          Regularly updated key stakeholders on the progress of technical
          operations, providing insights and solutions to enhance the campaign&apos;s
          reach through data analytics.
        </li>
      </ul>
    ),
    badge: "Campaign Coordinator / Aug 2019 - Oct 2022",
  }, //,
  /*   {
        title: '(Intenship)',
        description: (
            <ul className="list-disc">
                <li>x</li>
                <li>
                    x
                </li>
            </ul>
        ),
        badge: 'X'
    } */
];
