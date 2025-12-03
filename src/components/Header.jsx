import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import Mobilenav from "./Mobilenav";
import Image from "next/image";

export default function Header() {
   
  return (
    <header className="py-4 xl:py-6 px-6  text-white">
      <div className=" mx-auto  flex justify-between items-center">
        <Link href="/">
          <Image
            src="/assets/logo.png" 
            alt="My Logo"
            width={200} 
            height={200} 
            priority 
          />
        </Link>
        {/* desktopnav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        
        </div>
          <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=Mohaamedhassabo26@gmail.com" target="_blank" className="">
            <button className="bg-green-600 font-semibold py-2 px-4 rounded-4xl hidden xl:flex hover:bg-green-700 hover:cursor-pointer transition-all duration-300">
              Hire me
            </button>
          </Link>

        {/* mobile nav */}
        <div className="xl:hidden">
          <Mobilenav />
        </div>
      </div>
    </header>
  );
}
