import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-950 pointer-events-none">
      
      {/* 1. Base Deep Gradient (Static & Fast) */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-950 to-black opacity-80" />

      {/* 2. Top Spotlight Gradient (Adds depth instantly) */}
      <div className="absolute top-[-10%] left-[-10%] right-[-10%] h-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(100,50,255,0.15),rgba(255,255,255,0))]" />
      
      {/* 3. Backdrop Blur for content */}
      <div className="absolute inset-0 z-10 backdrop-blur-[60px] sm:backdrop-blur-3xl" />
      
      {/* 
         Performance Optimization:
         1. CSS Keyframes (defined in index.html) for animations.
         2. 'gpu-accelerated' class for hardware acceleration.
         3. Reduced opacity to blend better with the new rich background.
      */}

      <div 
        className="blob-anim-1 gpu-accelerated absolute top-[-20%] left-[-20%] sm:top-[-10%] sm:left-[-10%] w-[100vw] h-[100vw] sm:w-[50vw] sm:h-[50vw] bg-purple-600 rounded-full mix-blend-screen filter blur-[60px] sm:blur-[100px] opacity-20"
      />
      
      <div 
        className="blob-anim-2 gpu-accelerated absolute bottom-[-20%] right-[-20%] sm:bottom-[-10%] sm:right-[-10%] w-[100vw] h-[100vw] sm:w-[60vw] sm:h-[60vw] bg-blue-600 rounded-full mix-blend-screen filter blur-[60px] sm:blur-[100px] opacity-20"
      />

      <div 
        className="blob-anim-3 gpu-accelerated absolute top-[20%] right-[20%] w-[80vw] h-[80vw] sm:w-[40vw] sm:h-[40vw] bg-pink-500 rounded-full mix-blend-screen filter blur-[50px] sm:blur-[80px] opacity-20"
      />
      
      {/* Noise Texture */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
};

export default Background;