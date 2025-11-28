import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      <div className="absolute inset-0 bg-black opacity-20 z-10 backdrop-blur-3xl" />
      
      {/* Animated Orbs - Sizes increased for mobile visibility */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0], 
          y: [0, -50, 0],
          scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-20%] sm:top-[-10%] sm:left-[-10%] w-[120vw] h-[120vw] sm:w-[50vw] sm:h-[50vw] bg-purple-600 rounded-full mix-blend-screen filter blur-[80px] sm:blur-[120px] opacity-40"
      />
      
      <motion.div 
        animate={{ 
          x: [0, -100, 0], 
          y: [0, 100, 0],
          scale: [1, 1.5, 1] 
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-20%] sm:bottom-[-10%] sm:right-[-10%] w-[140vw] h-[140vw] sm:w-[60vw] sm:h-[60vw] bg-blue-600 rounded-full mix-blend-screen filter blur-[80px] sm:blur-[120px] opacity-40"
      />

      <motion.div 
        animate={{ 
          x: [0, 50, -50, 0], 
          y: [0, 50, -50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] right-[20%] w-[100vw] h-[100vw] sm:w-[40vw] sm:h-[40vw] bg-pink-500 rounded-full mix-blend-screen filter blur-[70px] sm:blur-[100px] opacity-30"
      />
      
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
};

export default Background;