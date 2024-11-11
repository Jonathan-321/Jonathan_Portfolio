"use client";
import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaGithub, FaPython, FaNode, FaEye } from "react-icons/fa";
import { SiCplusplus, SiSwift, SiRuby, SiDjango, SiArduino, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// about data
const about = {
    title: 'About me',
    description: "I'm a dedicated Dual degree Computer Science and Artificial Intelligence student at Oklahoma Christian University, passionate about leveraging technology to solve real-world problems. With a diverse set of experiences in software engineering and IT, I'm constantly seeking new challenges and opportunities to grow.",
    info: [
        { fieldName: "Name", fieldValue: "Jonathan Muhire" },
        { fieldName: "Phone", fieldValue: "(+1) 572 205 5073" },
        { fieldName: "Experience", fieldValue: "3+ Years" },
        { fieldName: "GitHub", fieldValue: "jonathanmuhire" },
        { fieldName: "Nationality", fieldValue: "Rwandan" },
        { fieldName: "Email", fieldValue: "jonathan.muhire@eagles.oc.edu" },
        { fieldName: "Education", fieldValue: "Oklahoma Christian University" },
        { fieldName: "Language", fieldValue: "English, French & Swahili" },
    ]
};

// experience data
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description: "A track record of impactful roles in software engineering and IT, demonstrating skills in various programming languages and technologies.",
    items: [
        {
            company: "Oklahoma's Information Technology Services (ITS)",
            position: "IT Student Associate (ITSA)",
            duration: "Sep 2023 - Present",
        },
        {
            company: "Techno Rwanda",
            position: "Software Engineer Intern",
            duration: "May 2023 - Aug 2023",
        },
        {
            company: " Watchit Group inc",
            position: "junior Embedded Systems Engineer",
            duration: "July 2022 - March 2023",
        },
        {
            company: "Equity Bank Limited",
            position: "Banking Intern",
            duration: "Nov 2020 - Feb 2021",
        },
    ]
};

// education data
const education = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description: "A blend of formal education and self-directed learning, focusing on Computer Science, Artificial Intelligence, and various programming technologies.",
    items: [
        {
            institution: "Oklahoma Christian University",
            degree: "Dual B.A. in Computer Science, M.S. in Artificial Intelligence",
            duration: "2023 - 2027 (Expected)",
        },
        {
            institution: "MIT",
            degree: "Data Science and Machine Learning",
            duration: "2024 (Summer)",
        },
        {
            institution: "CodePath",
            degree: "Intermediate Technical Interview Prep Course",
            duration: "2024",
        },
        {
            institution: "NVIDIA",
            degree: "Summer Bridge Program",
            duration: "2023",
        },
        {
            institution: "Udemy",
            degree: "100 Days of Code: The Complete Python Pro Bootcamp",
            duration: "2021",
        },
        {
            institution: "AT&T",
            degree: "Technology Academy",
            duration: "2024",
        },
        {
            institution: "Harvard",
            degree: "Harvard CS50",
            duration: "2021",
        },
        {
            institution: "Google Student Developers Club",
            degree: "Member",
            duration: "2023 - Present",
        },
    ]
};

// Skills
const skills = {
    title: "My skills",
    description: "A diverse set of programming languages and technologies, with a focus on software engineering, web development, and data structures.",
    skillList: [
        { icon: <FaPython />, name: "Python" },
        { icon: <SiCplusplus />, name: "C++" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <SiSwift />, name: "Swift" },
        { icon: <SiRuby />, name: "Ruby" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3 />, name: "CSS3" },
        { icon: <FaGithub />, name: "Git/GitHub" },
        { icon: <SiDjango />, name: "Django" },
        { icon: <FaReact />, name: "React" },
        { icon: <FaNode />, name: "Node.js" },
        { icon: <SiArduino />, name: "Arduino" },
    ]
};

const Resume = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const openResume = () => {
        window.open('https://drive.google.com/file/d/1hJ6tHBglhWyo-cwFYc-DwEK3RUHTiXpl/view?usp=sharing', '_blank');
    };

    return (
        <motion.div 
        initial={{opacity: 0}} 
        animate={{
            opacity: 1, 
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn" }, 
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <div className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
                        <TabsList className="flex flex-col gap-6 mb-12">
                            <TabsTrigger value="experience">Experience</TabsTrigger>
                            <TabsTrigger value="education">Education</TabsTrigger>
                            <TabsTrigger value="skills">Skills</TabsTrigger>
                            <TabsTrigger value="about">About me</TabsTrigger>
                        </TabsList>
                        {/* View Resume Button */}
                        <motion.div 
                            className="flex justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: showButton ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Button
                                onClick={openResume}
                                className="flex items-center justify-center gap-2 bg-accent text-black hover:bg-accent/80 px-4 py-2 text-sm"
                            >
                                <FaEye /> View Resume
                            </Button>
                        </motion.div>
                    </div>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4l font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-content justify-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                {item.position}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4l font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => (
                                            <li key={index} className="bg-[#232329] h-[180px] p-6 rounded-xl flex flex-col justify-start items-start">
                                                <div className="mb-2">
                                                    <span className="text-accent text-sm">{item.duration}</span>
                                                </div>
                                                <h3 className="text-lg font-semibold leading-tight mb-2">
                                                    {item.institution}
                                                </h3>
                                                <p className="text-white/60 text-sm leading-tight overflow-hidden overflow-ellipsis line-clamp-3 mt-auto">
                                                    {item.degree}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                            {skill.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent className="bg-white text-black">
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => (
                                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;