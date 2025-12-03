"use client";
import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowUpRight } from "react-icons/bs";
import { SiGithub } from "react-icons/si";

export default function Page() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };
  const projects = [
    {
      num: "01",
      title: "Fresh Cart",
      image: "/assets/fr.png",
      description:
        "A modern, responsive e-commerce platform for groceries and daily essentials.",
      tools: ["React JS", "JavaScript", "TailwindCSS", "API"],
    },
    {
      num: "02",
      title: "Movie App",
      image: "/assets/movie.png",
      description:
        "A movie app that allows users to search for movies by title and get detailed information.",
      tools: ["HTML", "JavaScript", "Bootstrap", "API"],
    },
    {
      num: "03",
      title: "Weather App",
      image: "/assets/wet.png",
      description:
        "A weather app that provides real-time weather information for any location.",
      tools: ["HTML", "JavaScript", "TailwindCSS", "API"],
    },
    {
      num:"04",
      tittle:"portfolio",
      image:"/assets/portfolio.png",
      description:"A portfolio website that showcases my skills and projects in a visually appealing and user-friendly way.",
      tools:["Next.js","React","TailwindCSS","Mediaquery"]

    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4 } }}
      className="py-9"
    >
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index}>
              <div className="flex flex-col xl:flex-row items-center gap-8 px-6">
                
               <div className="w-full xl:w-1/2 text-center xl:text-left relative pb-12 order-2 xl:order-0">
  <h1 className="outlinee font-bold">{project.num}</h1>
  <h3 className="text-3xl font-bold text-white my-2">{project.title}</h3>
  <p className="text-white/70 mb-4">{project.description}</p>
  <div className="relative flex flex-wrap gap-2 justify-center xl:justify-start mb-4">
    {project.tools.map((tool, i) => (
      <span
        key={i}
        className="bg-green-400/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold hover:bg-green-400 hover:text-black transition-all duration-300"
      >
        {tool}
      </span>
    ))}
  </div>

  {/* الخط تحت المحتوى */}
  <div className="w-full h-0.5 bg-green-400/20 mb-4"></div>

  {/* الايقونات تحت الخط */}
  <div className="flex gap-9 justify-center xl:justify-start mt-4">
    <a  href="https://github.com/Mohammedhsbo?tab=repositories" target="_blank" className="hover:text-black hover:bg-green-400/25 hover:transition-all duration-300 p-5 bg-green-400/15 rounded-full">
      <SiGithub size={50}  />
    </a>
    <a href="https://vercel.com/muhamedhsbos-projects" target="_blank" className="hover:text-black hover:bg-green-400/25 hover:transition-all duration-300 p-5 bg-green-400/15 rounded-full" >
      <BsArrowUpRight size={50} />
    </a>
  </div>
</div>


              
                <div className="w-full xl:w-1/2 flex justify-center xl:justify-end">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={800}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </motion.section>
  );
}  