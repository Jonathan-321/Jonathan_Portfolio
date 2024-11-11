"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub, BsPlayCircle } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Chrome Extension",
    title: "Link Saver",
    description: "Save, categorize, and access your important links or entertaining reels with ease. Organize your favorite web content using predefined or custom categories and find saved content with a powerful search feature.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/assets/link_saver.png",
    live: "https://chromewebstore.google.com/detail/link-saver/ogaphffhjpfanmbibpjliehpbbdcgbmc?pli=1",
    
  },
  {
    num: "02",
    category: "NutriAI",
    title: "AI powered health and nutrition recommendation App",
    description: "A Progressive Web App generating personalized meal plans tailored to your unique health profile, genetic predispositions and fitness goals",
    stack: [{ name: "Python" }, { name: "OpenCV" }, { name: "Qwen 0.5B LLM" }],
    image: "/assets/nutri.png",
    live: "",
    github: "https://github.com/abdulkarim-mugisha/nutrai",
  },
  {
    num: "03",
    category: "E-commerce Website",
    title: "Papeteri",
    description: "Rwandan stationery and classroom materials e-commerce platform. Leverages Django, JavaScript, and Python to create a user-friendly interface and integrates MTN MoMo API for secure payment processing.",
    stack: [{ name: "Django" }, { name: "JavaScript" }, { name: "Python" }],
    image: "/assets/papeteri1.png",
    video: "https://drive.google.com/file/d/14WANu2bS8AfnJ6n4D-VjrQhu65AVGicl/view?usp=sharing",
    live: "https://papeteri.com/",
    github: "https://github.com/your-username/papeteri",
  },
  {
    num: "04",
    category: "Mobile App",
    title: "Traffic Rules App",
    description: "App enabling Rwandan users to learn traffic rules in preparation for driving tests. The app was later commercially acquired by the Rwandan National Police.",
    stack: [{ name: "Flutter" }, { name: "Dart" }],
    image: "/assets/traffic.png",
    live: "https://play.google.com/store/apps/details?id=com.traffic.rules&pcampaignid=web_share&pli=1",
    github: "https://github.com/your-username/traffic-rules-app",
  },
  {
    num: "05",
    category: "Corporate Website",
    title: "Tecno Mobile Rwanda Website",
    description: "Interactive website designed for Tecno Mobile Rwanda to improve user experience and engagement.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/assets/tecno3.png",
    live: "https://www.tecno-mobile.com/rw/",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 ">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3l group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3l group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.video && (
                  <Link href={project.video} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsPlayCircle className="text-white text-3l group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Watch video</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full flex justify-center items-center w-full h-full bg-black">
                      <Image
                        src={project.image}
                        fill
                        className="object-contain"
                        alt={project.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;