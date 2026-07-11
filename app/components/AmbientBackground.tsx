'use client';

import { motion } from 'framer-motion';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#0A0A0B]">
      {/* Background Dot Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(34, 211, 238, 0.4) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Blob 1: Cyan, drifting around top-right / right */}
      <motion.div
        className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-[#22D3EE]/4 blur-[120px]"
        animate={{
          x: [0, -80, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Blob 2: Purple, drifting around bottom-left / left */}
      <motion.div
        className="absolute bottom-[-10%] left-[-10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-[#A855F7]/3.5 blur-[130px]"
        animate={{
          x: [0, 90, -60, 0],
          y: [0, -120, 80, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Blob 3: Mixed Cyan/Purple drifting around center */}
      <motion.div
        className="absolute top-[35%] left-[20%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-br from-[#22D3EE]/2 to-[#A855F7]/2 blur-[110px]"
        animate={{
          x: [0, -50, 70, 0],
          y: [0, 80, -90, 0],
          scale: [0.9, 1.05, 0.95, 0.9],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
