"use client"
import { number } from 'framer-motion'
import Link from 'next/link';
import React from 'react'
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
export default function Services () {
  const services=
  [
    {number: '01', title: 'Web Development', description: 'Building responsive and dynamic websites tailored to your needs.'},
    {number: '02', title: 'UI/UX Design', description: 'Designing intuitive and engaging user interfaces and experiences.'},
    {number:'03',title:'backend Development', description:'Creating robust backend systems and APIs to power your applications.'}
  ]
  
  return (
     <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
      className="py-9"
    >
   <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 justify-items-center my-12 mx-12">
  {services.map((service, index) => (
    <div
      key={index}
      className="p-6 border-b border-gray-700 last:border-b-0 "
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
</motion.section>
  )
}
