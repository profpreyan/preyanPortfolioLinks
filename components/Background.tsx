import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-void-900">
      {/* Main ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-crimson-900 rounded-full blur-[120px] mix-blend-screen opacity-10"
      />

      {/* Secondary drifting accent */}
      <motion.div
        animate={{
          x: ["-20%", "20%", "-20%"],
          y: ["0%", "30%", "0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[20%] right-[0%] w-[50vw] h-[50vw] bg-red-950 rounded-full blur-[100px] mix-blend-screen opacity-20"
      />

      {/* Bottom anchor glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-crimson-950/20 to-transparent opacity-40" />
      
      {/* Grain overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150"></div>
    </div>
  );
};

export default Background;