"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";


const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    
    <AnimatePresence mode="wait">
      
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }}
        exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        className="h-screen w-screen fixed top-0 left-0 bg-primary overflow-auto"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
