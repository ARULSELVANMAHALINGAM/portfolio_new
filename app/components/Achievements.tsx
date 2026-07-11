'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Achievements() {
  const [activeView, setActiveView] = useState<'team' | 'prototype' | 'dashboard'>('team');

  const achievements = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      ),
      title: 'Smart India Hackathon 2025',
      description: 'Team Lead - Led a team to build innovative solutions for real-world challenges.',
      year: '2025',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: 'AI ASCEND 2026',
      description: 'Presenter in collaboration with AWS + KRYNDLE - Showcased AI-powered innovations.',
      year: '2026',
    },
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-xs font-mono text-[#22D3EE] tracking-widest uppercase mb-2">Achievements</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Achievements & Recognition</h2>
        </motion.div>

        {/* Spotlight Card for MSME-funded IoT Project */}
        <motion.div
          className="relative bg-gradient-to-br from-[#22D3EE]/10 to-purple-500/10 border border-[#22D3EE]/20 rounded-2xl p-4 sm:p-5 mb-5 backdrop-blur-sm shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#22D3EE]/5 to-purple-500/5 rounded-2xl pointer-events-none" />
          
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
            {/* Left Column: Image & Toggle (5 cols on desktop) */}
            <div className="md:col-span-5 flex flex-col justify-between min-w-0 w-full">
              <div>
                {/* 3-option Toggle Controls */}
                <div className="flex bg-white/5 border border-white/10 rounded-xl p-0.5 mb-2.5 w-fit">
                  <button
                    onClick={() => setActiveView('team')}
                    className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition-all duration-300 ${
                      activeView === 'team'
                        ? 'bg-[#22D3EE] text-black shadow-md'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Team
                  </button>
                  <button
                    onClick={() => setActiveView('prototype')}
                    className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition-all duration-300 ${
                      activeView === 'prototype'
                        ? 'bg-[#22D3EE] text-black shadow-md'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Prototype
                  </button>
                  <button
                    onClick={() => setActiveView('dashboard')}
                    className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition-all duration-300 ${
                      activeView === 'dashboard'
                        ? 'bg-[#22D3EE] text-black shadow-md'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Dashboard
                  </button>
                </div>

                {/* Image Area */}
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/10 bg-black/40">
                  {activeView === 'dashboard' && (
                    <Image
                      src="/projects/iot-dashboard-v3.png"
                      alt="RFID & Access Control Dashboard"
                      fill
                      className="object-cover object-center hover:scale-[1.01] transition-transform duration-500"
                      sizes="(max-w-768px) 100vw, 400px"
                      priority
                    />
                  )}
                  {activeView === 'team' && (
                    <Image
                      src="/projects/iot-team-v2.jpg"
                      alt="4-Member Development Team"
                      fill
                      className="object-cover object-top hover:scale-[1.01] transition-transform duration-500"
                      sizes="(max-w-768px) 100vw, 400px"
                    />
                  )}
                  {activeView === 'prototype' && (
                    <Image
                      src="/projects/iot-prototype-v3.jpg"
                      alt="Physical Hardware Prototype"
                      fill
                      className="object-cover object-center hover:scale-[1.01] transition-transform duration-500"
                      sizes="(max-w-768px) 100vw, 400px"
                    />
                  )}
                </div>
              </div>
              
              {/* Caption */}
              <p className="text-[11px] text-gray-500 font-mono mt-2 leading-relaxed">
                {activeView === 'dashboard' && "Live monitoring dashboard — RFID access logs, sensor alerts, and manual override controls."}
                {activeView === 'team' && "Built by a 4-member team as part of an MSME 4.0-funded initiative."}
                {activeView === 'prototype' && "The physical build — embedded sensors and RFID modules wired into the warehouse security unit."}
              </p>
            </div>

            {/* Right Column: Info & Details (7 cols on desktop) */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-3.5 min-w-0 w-full">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5 text-[#22D3EE]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">IoT-Based Warehouse Security System</h3>
                </div>

                <div className="space-y-2">
                  <p className="text-gray-300 text-xs sm:text-[13px] leading-relaxed">
                    ₹12.5 Lakh government funding under <strong className="font-semibold text-white">MSME 4.0</strong> scheme, <strong className="font-semibold text-white">patent filed</strong>. AWS Lambda + DynamoDB anomaly detection system.
                  </p>
                  <p className="text-gray-400 text-xs sm:text-[13px] leading-relaxed">
                    Built around a Spring Boot backend that processes real-time sensor and RFID data, with AWS Lambda and DynamoDB powering anomaly detection on movement and access patterns. The system flags irregular entry attempts and inventory discrepancies as they happen, rather than relying on manual audits after the fact — the core reason it moved from a class project to a funded, patent-filed initiative.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3.5">
                <div className="inline-flex items-center gap-3 bg-[#22D3EE]/20 border-2 border-[#22D3EE]/60 rounded-xl px-4 py-2 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                  <span className="text-2xl font-black text-[#22D3EE] tracking-tight">₹12.5L</span>
                  <div className="flex flex-col border-l border-[#22D3EE]/30 pl-2.5 text-left">
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-[#22D3EE] leading-tight">Central Government Funded</span>
                    <span className="text-[8px] sm:text-[9px] font-mono text-gray-400 uppercase tracking-wider mt-0.5 leading-none">Under MSME 4.0 Scheme</span>
                  </div>
                </div>

                <a
                  href="https://github.com/ARULSELVANMAHALINGAM/Iot-based-warehouse-security-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-gray-400 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Achievements */}
        <div className="grid md:grid-cols-2 gap-5">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="relative bg-white/8 border border-white/10 rounded-2xl p-5 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-[#22D3EE]/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ translateY: -4, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#22D3EE]/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[#22D3EE]">
                    {achievement.icon}
                  </div>
                  {achievement.year && (
                    <span className="text-xs font-mono text-gray-500 border border-white/10 rounded-full px-2 py-0.5">
                      {achievement.year}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 text-[13px] leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
