'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center px-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-mono text-[#22D3EE] tracking-widest uppercase mb-4">Error 404</p>
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist, or may have moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-[#22D3EE] text-black font-semibold rounded-xl hover:bg-[#22D3EE]/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2 focus:ring-offset-black"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
