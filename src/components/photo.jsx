//  <Image
//               src="/assets/me.jpg"
//               width={500}
//               height={500}
//               alt="profile image"
//               className="mx-auto pt-9 w-[300px]   xl:mx-0 xl:w-[500px] xl:pt-0 rounded-full "
//             />

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileGlowInfinite() {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="rounded-full w-[300px] xl:w-[500px] relative"
        animate={{ boxShadow: ["0 0 20px rgba(0,255,100,0.5)", "0 0 40px rgba(0,255,100,1)", "0 0 20px rgba(0,255,100,0.5)"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/assets/me.jpg"
          width={500}
          height={500}
          alt="profile image glow"
          className="rounded-full w-[300px] xl:w-[500px]"
        />
      </motion.div>
    </div>
  );
}

