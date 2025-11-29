import React from 'react';
import { motion } from 'framer-motion';

interface WelcomeModalProps {
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.6, bounce: 0.4 }}
        className="flex flex-col items-center gap-10 text-center"
      >
        <div className="relative">
            <h1 className="text-7xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-600 to-red-900 tracking-tighter drop-shadow-[0_0_50px_rgba(220,38,38,0.6)] select-none">
            왜 들어옴?
            </h1>
            {/* Glitch/Noise overlay effect hint */}
            <div className="absolute inset-0 bg-red-500/20 blur-[40px] opacity-50 animate-pulse rounded-full pointer-events-none mix-blend-screen" />
        </div>
        
        <div className="space-y-6">
            <p className="text-white/30 text-lg sm:text-xl font-light tracking-widest uppercase">
            할 거 없어서 왔지?
            </p>
            
            <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="px-10 py-3 bg-white/5 border border-white/10 rounded-full text-white/50 hover:text-white hover:border-white/40 transition-all duration-300 font-medium"
            >
            ㅇㅇ...
            </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeModal;