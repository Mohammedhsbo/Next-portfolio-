"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';



export default function Nav() {
   const pathname = usePathname();
  
    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Resume', href: '/resume' },
        { name: 'Work', href: '/work' },
        { name: 'Services', href: '/s     ervices' },
        { name: 'Contact', href: '/contact' },
    ];
  return (
    <div className='flex gap-8 '> 
        {navItems.map((item, index) => (
    <Link
        href={item.href}
        key={item.name} 
      className={`text-lg font-medium  hover:text-green-400 hover:transition-all hover:duration-300  ${
  pathname === item.href ? 'active' : ''
}`}

    >
        { item.name}
    </Link>
))}

    </div>
  )
}
