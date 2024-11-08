import React from "react";

import { HeroParallax } from "@/components/ui/hero-paralax";

export function ProjectsSection() {
  return <HeroParallax products={products} />;
}

const products = [
  {
    title: "Sun Devil Bookstore",
    link: "X",
    thumbnail: "/projects/SDBookstore.png",
  },
  {
    title: "Event Planner",
    link: "X",
    thumbnail: "/projects/next-event.png",
  },
  {
    title: "Devspace",
    link: "X",
    thumbnail: "/projects/devspace.png",
  },

  {
    title: "Google Clone",
    link: "X",
    thumbnail: "/projects/google-clone.png",
  },
  {
    title: "Portfolio V1",
    link: "X",
    thumbnail: "/projects/old-portfolio.png",
  },
  {
    title: "3D Dominoes Game",
    link: "",
    thumbnail: "/projects/3Ddomino.png",
  },

  {
    title: "Portfolio V2",
    link: "X",
    thumbnail: "/projects/portfoliov2.png",
  },
  {
    title: "Music App",
    link: "X",
    thumbnail: "/projects/music-app.png",
  },
  {
    title: "Artemis",
    link: "",
    thumbnail: "/projects/artemis.png",
  },
];
