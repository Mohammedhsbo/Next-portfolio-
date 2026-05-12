import { motion } from "framer-motion";

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center mb-12 xl:mb-16 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl xl:text-5xl font-bold text-white mb-2 capitalize"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/60 text-lg max-w-2xl mx-auto mb-4"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-24 h-1 bg-green-500 rounded-full"
      />
    </div>
  );
}
