"use client";
import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiFigma,
  SiTailwindcss,
  SiBootstrap,
  SiGithub,
  SiVercel,
} from "react-icons/si";

export default function page() {
  const skills = [
    {
      tittle: "My Skills",
      description: "Technologies I have worked with",
      skilllists: [
        { name: "HTML5", icon: <SiHtml5 size={80} color="#E34F26" /> },
        { name: "CSS3", icon: <SiCss3 size={80} color="#1572B6" /> },
        {
          name: "JavaScript",
          icon: <SiJavascript size={80} color="#F7DF1E" />,
        },
        { name: "React", icon: <SiReact size={80} color="#61DAFB" /> },
        { name: "Next.js", icon: <SiNextdotjs size={80} color="#000000" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss size={80} color="#38B2AC" />,
        },
        { name: "Bootstrap", icon: <SiBootstrap size={80} color="#7952B3" /> },
        { name: "Figma", icon: <SiFigma size={80} color="#F24E1E" /> },
        { name: "GitHub", icon: <SiGithub size={80} color="#181717" /> },
        { name: "Vercel", icon: <SiVercel size={80} color="#000000" /> },
      ],
    },
  ];
  const about = [
    {
      title: "About me",
      description:
        "I am a passionate Frontend Developer with a knack for creating engaging and user-friendly web applications. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive designs using React and Next.js. My goal is to deliver seamless user experiences while continuously learning and adapting to the latest industry trends.",
      info: [
        { fieldname: "Name", filesvalue: "Muahmed Ahmed Hssbo" },
        { fieldname: "Email", filesvalue: "Mohaamedhassabo26@gmail.com" },
        { fieldname: "Phone", filesvalue: "+20 101 462 5009" },
        { fieldname: "Address", filesvalue: "Cairo, Egypt" },
        { fieldname: "Freelance", filesvalue: "Available" },
        { fieldname: "expirence", filesvalue: "Junior" },
      ],
    },
  ];
  const expirence = [
    {
      title: "My experience",
      description:
        "I have worked on various projects that showcase my skills in frontend development. From building responsive websites to creating interactive web applications, I have gained valuable experience in delivering high-quality solutions that meet client requirements.",
      jobs: [
        {
          company: "(NTI)Digital Egypt Youth (DEY)",
          duration: "AUG 2025 - DEC 2025",
          role: "Frontend Developer Intern",
          details:
            "Worked on developing responsive web applications using React and Next.js. Collaborated with designers to implement user-friendly interfaces and ensured cross-browser compatibility.",
        },
        {
          company: "Digital Egypt Pioneers Initiative (DEPI) ",
          duration: "dec 2025 - aug 2026",
          role: "Frontend Developer Trainee",
          details:
            "Participated in a comprehensive training program focused on frontend development technologies. Gained hands-on experience in building web applications and enhancing UI/UX design skills.",
        },
        {
          company: "Google Developer Student Clubs (GDSC) ",
          duration: "Feb 2023 - march 2024",
          role: "Frontend Developer Member",
          details:
            "Contributed to various web development projects as part of the GDSC community. Participated in coding sessions, hackathons, and workshops to enhance my skills and collaborate with fellow developers.",
        },
      ],
    },
  ];
  const education = [
    {
      title: "My education",
      description: "CS Student in BFCAI",
      educations: [
        {
          institution: "Benha University",
          duration: "2022 - 2026",
          degree: "Bachelor's in Computer Science & AI",
          major: "Computer Science",
        },
      ],
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-9 "
    >
      <div className="px-5 xl:px-30 pt-14 xl:pt-5">
        <Tabs defaultValue="expirence" className="flex flex-col xl:flex-row  ">
          <TabsList className="flex flex-col  gap-8  mb-9  max-w-[380px] mx-auto xl:mx-0 ">
            <TabsTrigger
              className="text-white/80 hover:text-green-400 hover:transition-all hover:duration-300"
              value="about"
            >
              About Me
            </TabsTrigger>
            <TabsTrigger
              className="text-white/80 hover:text-green-400 hover:transition-all hover:duration-300"
              value="skills"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              className="text-white/80 hover:text-green-400 hover:transition-all hover:duration-300"
              value="expirence"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              className="text-white/80 hover:text-green-400 hover:transition-all hover:duration-300"
              value="education"
            >
              Education
            </TabsTrigger>
          </TabsList>
          <>
            <TabsContent className="min-h-[70vh] w-full  " value="about">
                <div className="flex flex-col text-center gap-[25px] xl:text-left">
                   <h3 className="text-4xl font-bold  text-green-400/90">
                  {about[0].title}
                </h3>
                <p className="max-w-[600px] mx-auto xl:mx-0 text-white/60">
                  {about[0].description}
                </p>
                <ScrollArea className="h-[400px]">
  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-5 h-[600px]">
    {about[0].info.map((info, index) => (
      <li
        key={index}
        className="text-center xl:text-left bg-[#2323298e] p-5 rounded-lg gap-2 hover:cursor-pointer hover:bg-green-400/15 transition-all duration-300"
      >
        <h4 className="text-2xl font-bold text-white">{info.fieldname}</h4>

        {info.fieldname === "Phone" ? (
          <a
            href="https://wa.me/201014625009"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-green-400 text-[18px] hover:underline mt-2 block"
          >
            {info.filesvalue}
          </a>
        ) : info.fieldname === "Email" ? (
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=Mohaamedhassabo26@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-green-400 text-[18px] hover:underline mt-2 block"
          >
            {info.filesvalue}
          </a>
        ) : (
          <span className="font-semibold text-green-400 text-[18px] block">
            {info.filesvalue}
          </span>
        )}
      </li>
    ))}
  </ul>
                 </ScrollArea>

                </div>
            </TabsContent>
            <TabsContent className="min-h-[70vh] w-full" value="skills">
              <div className="flex flex-col text-center gap-[25px] xl:text-left">
                <h3 className="text-4xl font-bold  text-green-400/90">
                  {skills[0].tittle}
                </h3>
                <p className="max-w-[600px] mx-auto xl:mx-0 text-white/60">
                  {skills[0].description}
                </p>
                <ScrollArea className="h-[400px] ">
                  <div className="h-[20px]"></div>
                  <ul className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    {skills[0].skilllists.map((skill, index) => (
                      <li
                        key={index}
                        className=" relative group bg-[#2323298e] p-5 rounded-lg flex flex-col items-center gap-2 hover:cursor-pointer hover:bg-green-400/15 hover:transition-all hover:duration-300"
                      >
                        <div className="relative group flex flex-col items-center">
                          {skill.icon}

                          {/* tooltip */}
                          <span
                            className="
            absolute -top-8 left-1/2 -translate-x-1/2
             text-black  bg-green-400 text-sm font-semibold px-2 py-1 rounded
            opacity-0 group-hover:opacity-100
            transition-all duration-300 whitespace-nowrap z-50
          "
                          >
                            {skill.name}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent className="min-h-[70vh] w-full" value="expirence">
              <div className="flex flex-col text-center gap-[25px] xl:text-left">
                <h3 className="text-4xl font-bold  text-green-400/90">
                  {expirence[0].title}
                </h3>
                <p className="max-w-[600px] mx-auto xl:mx-0 text-white/60">
                  {expirence[0].description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2  gap-8">
                    {expirence[0].jobs.map((job, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] p-5 rounded-lg flex flex-col gap-2"
                      >
                        <div className="flex flex-col gap-2">
                          <h4 className="text-2xl font-bold text-green-400 ">
                            {job.company}
                          </h4>
                          <p className="text-white/60">{job.duration}</p>
                          <p className="text-white/70 font-bold ">{job.role}</p>
                          <p className="text-white/60">{job.details}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent className="min-h-[70vh] w-full" value="education">
              <div className="flex flex-col text-center gap-[25px] xl:text-left">
                  <h3 className="text-4xl font-bold  text-green-400/90">
                  {education[0].title}
                </h3>
                <p className="max-w-[600px] mx-auto xl:mx-0 text-white/60">
                  {education[0].description}
                </p>
                 <ScrollArea>
                  {education[0].educations.map((education, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] p-5 rounded-lg flex flex-col gap-2"
                    >
                      <div className="flex flex-col gap-2">
                        <h4 className="text-2xl font-bold text-green-400">
                          {education.institution}
                        </h4>
                        <p className="text-white/60">{education.duration}</p>
                        <p className="text-white/70 font-bold">
                          {education.degree}
                        </p>
                        <p className="text-white/60">{education.details}</p>
                      </div>
                    </li>
                  ))}
                 </ScrollArea>
             </div>
            </TabsContent>
          </>
        </Tabs>
      </div>
    </motion.section>
  );
}
