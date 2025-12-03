"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// single stair
const Stair = ({ delay }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -50, opacity: 0 }}
    transition={{ delay, duration: 0.4, ease: "easeInOut" }}
    className="w-8 h-8 bg-green-500 m-1 rounded-sm"
  />
);

const Stairs = () => {
  const steps = [0, 0.1, 0.2, 0.3, 0.4];
  return (
    <div className="flex items-end justify-center gap-2">
      {steps.map((delay, index) => (
        <Stair key={index} delay={delay} />
      ))}
    </div>
  );
};

const StairPreloader = () => {
  const [loading, setLoading] = useState(true);

  // hide preloader after 2 seconds (or page load)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="stair-preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center bg-gray-950 pointer-events-none"
        >
          <Stairs />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StairPreloader;
