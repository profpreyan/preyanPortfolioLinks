import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { LinkItem } from '../constants';

interface LinkCardProps {
  item: LinkItem;
  index: number;
}

const LinkCard: React.FC<LinkCardProps> = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: 0.6 + (index * 0.1),
        duration: 0.5,
        ease: "easeOut"
      }}
      className="group relative flex items-start gap-4 p-6 w-full bg-void-800/40 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden hover:bg-void-800/60 transition-all duration-500"
    >
      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-crimson-900/10 to-transparent pointer-events-none" />
      
      {/* Left Accent Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-crimson-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

      {/* Icon Box */}
      <div className="relative z-10 flex-shrink-0 p-3 rounded-lg bg-void-950/50 border border-white/5 text-gray-400 group-hover:text-crimson-500 group-hover:border-crimson-500/30 transition-colors duration-300">
        <Icon size={24} strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors duration-300 font-serif">
            {item.title}
          </h3>
          <ArrowUpRight className="text-gray-600 group-hover:text-crimson-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={18} />
        </div>
        
        <p className="mt-1 text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300 leading-relaxed">
          {item.description}
        </p>

        {/* Tags */}
        {item.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag, i) => (
              <span 
                key={i}
                className="px-2 py-1 text-[10px] uppercase tracking-wider font-medium text-gray-500 bg-white/5 rounded-md border border-white/5 group-hover:border-crimson-500/20 group-hover:text-crimson-200/70 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.a>
  );
};

export default LinkCard;