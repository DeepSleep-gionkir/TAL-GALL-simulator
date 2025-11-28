import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ActionButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  colorClass: string;
  delay?: number;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon: Icon, label, onClick, colorClass, delay = 0 }) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: "backOut" }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95, y: 0 }}
      onClick={onClick}
      className={`group relative flex flex-col items-center justify-center w-full h-36 sm:h-44 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 ${colorClass}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="p-3 sm:p-4 rounded-full bg-white/10 ring-1 ring-white/20 shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/20">
          <Icon size={28} className="text-white sm:w-8 sm:h-8" strokeWidth={1.5} />
        </div>
        <span className="text-lg font-medium text-white/90 tracking-wide group-hover:text-white transition-colors">
          {label}
        </span>
      </div>
      
      {/* Shine effect */}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
    </motion.button>
  );
};

export default ActionButton;