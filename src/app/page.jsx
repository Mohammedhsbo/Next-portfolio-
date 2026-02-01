"use client";
import { Section } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Teext from "../components/textanim.jsx";
import Resume from "./resume/page.jsx";
import Work from "./work/page.jsx";
import Services from "./services/page.jsx";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import Photo from "../components/photo.jsx";
import { FiDownload } from "react-icons/fi";
import { use } from "react";
export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-9"
    >
      <section className="h-full w-full xl:pb-25 ">
        <div className="container mx-auto h-full">
          <div className=" flex flex-col xl:flex-row justify-around items-center h-full  xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-0">
              <h1>
                Hello, I'm <br />{" "}
                <span className="text-green-400 text-3xl font-bold">
                  <Teext />{" "}
                </span>
              </h1>
              <p className="max-w-[600px] mb-9 text-white/80 leading-relaxed text-lg">
                Passionate Frontend Developer with practical experience in
                building modern, responsive, and user-focused web interfaces. I
                enjoy turning clean designs into smooth interactions, with
                strong fundamentals in Computer Science and a growing interest
                in Artificial Intelligence.
              </p>

              <div className="flex flex-col xl:flex-row gap-8  items-center">
                <Link
                  href="https://drive.google.com/drive/folders/1_rT2cC2C8Bd71bapjcS2wuwSyqEdWJKj"
                  className="flex gap-2 items-center justify-center xl:justify-start hover:text-green-400 hover:transition-all hover:duration-300"
                >
                  <button className="flex  items-center gap-3 px-6 py-3 transition-all duration-300 border border-green-400  text-green-400 rounded-full hover:bg-green-400/10 hover:text-white hover:cursor-pointer">
                    Download CV
                    <FiDownload size={20} className="opacity-90" />
                  </button>
                </Link>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.facebook.com/mohammed.hassabo.3705/"
                    target="_blank"
                    className="w-10 h-10 flex items-center justify-center 
               rounded-full border border-green-400  text-green-400 
               hover:bg-green-400/10 hover:text-white hover:cursor-pointer
               transition-all duration-300"
                  >
                    <FaFacebookF size={18} />
                  </a>

                  <a
                    href="www.linkedin.com/in/mohammed-hassabo-2a010020a"
                    target="_blank"
                    className="w-10 h-10 flex items-center justify-center 
               rounded-full border border-green-400  text-green-400 
               hover:bg-green-400/10 hover:text-white hover:cursor-pointer
               transition-all duration-300"
                  >
                    <FaLinkedinIn size={18} />
                  </a>

                  <a
                    href="https://github.com/Mohammedhsbo?tab=repositories"
                    target="_blank"
                    className="w-10 h-10 flex items-center justify-center 
               rounded-full border border-green-400  text-green-400 
               hover:bg-green-400/10 hover:text-white hover:cursor-pointer
               transition-all duration-300"
                  >
                    <FaGithub size={18} />
                  </a>

                  <a
                    href="https://www.instagram.com/mohammedhsbo/"
                    target="_blank"
                    className="w-10 h-10 flex items-center justify-center 
               rounded-full border border-green-400  text-green-400 
               hover:bg-green-400/10 hover:text-white hover:cursor-pointer
               transition-all duration-300"
                  >
                    <FaInstagram size={18} />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center xl:text-right ">
              <Photo />
            </div>
          </div>
        </div>
        <Resume />
        <Work />
        <Services />
      </section>
    </motion.section>
  );
}
