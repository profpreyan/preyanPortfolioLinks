import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE_DATA } from '../constants';

const ProfileHeader: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 flex flex-col items-center text-center pt-24 pb-12 px-4"
    >
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tracking-tight"
      >
        {PROFILE_DATA.name}
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "100px" }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="h-1 bg-crimson-600 mt-6 mb-6 rounded-full"
      />
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-crimson-500 font-medium tracking-widest text-sm uppercase mb-4"
      >
        {PROFILE_DATA.title}
      </motion.p>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="max-w-xl text-gray-300 leading-relaxed text-lg"
      >
        {PROFILE_DATA.bio}
      </motion.p>
    </motion.div>
  );
};

export default ProfileHeader;