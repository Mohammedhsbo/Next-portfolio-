"use client";
import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast, { Toaster } from "react-hot-toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

export default function Page() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlesubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, lastname, email, phone, service, message }),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          duration: 4000,
          position: "top-center",
        });
        setName("");
        setLastname("");
        setEmail("");
        setMessage("");
        setPhone("");
        setService("");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while sending the message.");
    } finally {
      setIsSubmitting(false);
    }
  }, [name, lastname, email, phone, service, message]);

  const info = [
    { icon: <FaPhoneAlt />, name: "Phone", text: "+20 101 462 5009" },
    { icon: <FaEnvelope />, name: "Email", text: "mohaamedhassabo26@gmail.com" },
    { icon: <FaMapMarkedAlt />, name: "Address", text: "Cairo, Egypt" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
      className="py-12 xl:py-20"
    >
      <Toaster />
      <div className="container mx-auto px-6 mb-10">
        <SectionHeader title="Let's Work Together" subtitle="Contact me if you have any questions or want to collaborate." />
      </div>
      <div className="flex flex-col xl:flex-row gap-9 xl:gap-20 justify-around items-center h-full px-8 xl:px-20">
        <div className="xl:h-[54%] order-2 xl:order-0 xl:w-[900px]">
          <form onSubmit={handlesubmit} className="flex flex-col gap-6 p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center">
              <Input required placeholder="Firstname" value={name} onChange={(e) => setName(e.target.value)} />
              <Input placeholder="Lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
              <Input required type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Input required placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>

            <Select onValueChange={(value) => setService(value)}>
              <SelectTrigger className="w-full h-12">
                <SelectValue placeholder="Select Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Service</SelectLabel>
                  <SelectItem value="web development">Web Development</SelectItem>
                  <SelectItem value="ui/ux design">UI/UX Design</SelectItem>
                  <SelectItem value="backend development">Backend Development</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Textarea
              placeholder="Your Message"
              className="min-h-[120px] resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <Button type="submit" className="bg-green-600 font-semibold py-3 rounded-4xl hover:bg-green-700 transition-all">
              Send Message
            </Button>
          </form>
        </div>

        <div className="flex-1 flex items-center order-1 xl:order-0 mb-8 xl:mb-0">
          <div className="flex flex-col gap-6">
            {info.map((item, index) => (
  <div key={index} className="flex items-center gap-4 text-white/80">
    <div className="text-green-400 text-4xl bg-gray-800/50 p-3 rounded-full">{item.icon}</div>
    <div className="block">
      <p className="text-white/50">{item.name}</p>
      {item.name === "Phone" ? (
        <a
          href={`https://wa.me/201014625009`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 font-semibold tracking-wider text-lg hover:underline"
        >
          {item.text}
        </a>
      ) : item.name === "Email" ? (
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=Mohaamedhassabo26@gmail.com`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 font-semibold tracking-wider text-lg hover:underline"
        >
          {item.text}
        </a>
      ) : (
        <span className="text-white/60 font-semibold tracking-wider text-lg">{item.text}</span>
      )}
    </div>
  </div>
))}

          </div>
        </div>
      </div>
    </motion.section>
  );
}
