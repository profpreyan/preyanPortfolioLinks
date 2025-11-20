import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
      className="relative z-10 py-12 flex flex-col items-center gap-8"
    >
      <div className="flex gap-8">
        {CONTACT_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target={link.id !== 'email' && link.id !== 'phone' ? "_blank" : undefined}
            rel={link.id !== 'email' && link.id !== 'phone' ? "noopener noreferrer" : undefined}
            className="text-gray-500 hover:text-crimson-500 transition-colors duration-300 p-3 hover:bg-white/5 rounded-full border border-transparent hover:border-white/10"
            aria-label={link.label}
          >
            <link.icon size={24} strokeWidth={1.5} />
          </a>
        ))}
      </div>
      <div className="text-center space-y-2">
        <p className="text-[10px] text-gray-600 font-mono tracking-widest uppercase">
          © {new Date().getFullYear()} • Vibe coded using Google Gemini 3, Single Shot in 15 Minutes
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;