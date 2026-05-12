"use client"
import React, { memo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



const Nav = memo(function Nav() {
   const pathname = usePathname();
  
    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Resume', href: '/resume' },
        { name: 'Work', href: '/work' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ];
  return (
    <div className='flex gap-8 '> 
        {navItems.map((item, index) => (
    <Link
        href={item.href}
        key={item.name} 
      className={`text-lg font-medium relative group hover:text-green-400 transition-colors duration-300 ${
  pathname === item.href ? 'text-green-400' : ''
}`}

    >
        {item.name}
        {/* Animated underline */}
        <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-green-400 transform origin-left transition-transform duration-300 ${pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
    </Link>
))}

    </div>
  )
});

export default Nav;
