"use client"
import React, { useMemo } from 'react';
import Link from 'next/link';
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

export default function Services () {
  const services = useMemo(() => [
    {number: '01', title: 'Web Development', description: 'Building responsive and dynamic websites tailored to your needs.'},
    {number: '02', title: 'UI/UX Design', description: 'Designing intuitive and engaging user interfaces and experiences.'},
    {number:'03',title:'backend Development', description:'Creating robust backend systems and APIs to power your applications.'}
  ], []);
  
  return (
     <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
      className="py-12 xl:py-20"
    >
      <div className="container mx-auto px-6">
        <SectionHeader title="My Services" subtitle="Specialized solutions to help bring your ideas to life." />
   <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 justify-items-center my-12 xl:mx-12">
  {services.map((service, index) => (
    <div
      key={index}
      className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl w-full hover:bg-white/10 hover:shadow-[0_4px_25px_rgba(34,197,94,0.15)] hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-center  mb-4 justify-between">
      <h2 className="text-7xl font-bold mb-2 outlinee">{service.number}</h2>
         <Link
      href="/work"
      className=" inline-flex items-center justify-center 
                 text-4xl p-5 rounded-full 
                 bg-white text-black 
                 transition-all duration-300 
                 hover:bg-green-500 hover:text-white 
                 hover:rotate-270 cursor-pointer"
    >
      <BsArrowDownRight />
    </Link>
      </div>
      <h2 className=" font-bold text-green-400 mb-2">{service.title}</h2>
      <p className="text-white text-lg max-w-[500px] leading-relaxed">
        {service.description}
      </p>
      
    </div>

    
  ))}

</section>
      </div>
</motion.section>
  )
}
