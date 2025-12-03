"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Mobilenav() {
  const pathname = usePathname();
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Resume", href: "/resume" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries
          size={30}
          className="hover:cursor-pointer text-green-500"
        />
      </SheetTrigger>
      <SheetContent className="bg-gray-900 text-white p-8 ">
        <div className="flex flex-col gap-8 mt-15 text-center">
          
          {navItems.map((item, index) => (
            <Link
              href={item.href}
              key={item.name}
              className={`text-lg font-medium  hover:text-green-400 hover:transition-all hover:duration-300  ${
                pathname === item.href ? "activeMobile" : ""
              }`}
            >
              {item.name}
            </Link>
            
          ))}
           <Link href="/contact" className="">
            <button className="bg-green-600 font-semibold py-2 px-4 rounded-4xl w-full  hover:bg-green-700 hover:cursor-pointer transition-all duration-300">
              Hire me
            </button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
