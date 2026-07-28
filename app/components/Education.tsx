'use client';

import { motion } from 'framer-motion';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Science and Engineering',
      institution: 'M. Kumarasamy College of Engineering, Karur',
      period: '2023 - 2027',
      grade: 'CGPA: 7.7 (up to 6th sem)',
      description: 'Focused on full-stack development, database management systems, artificial intelligence, software engineering principles, and data structures.',
    },
    {
      degree: '12th (Higher Secondary Education)',
      institution: 'SRV Boys Higher Secondary School, Rasipuram',
      period: '2022 - 2023',
      grade: 'Score: 68.6%',
      description: 'Core secondary coursework focusing on Mathematics, Physics, Chemistry, and Biology.',
    },
    {
      degree: '10th (Secondary School Education)',
      institution: 'Sri Vidhya Mandir Matric. Hr. Sec. School, Gurusamipalayam',
      period: '2020 - 2021',
      grade: 'Score: 85.4%',
      description: 'General matriculation curriculum focusing on science and mathematics.',
    },
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-[#22D3EE] tracking-widest uppercase mb-2">Education</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Academic Background</h2>
        </motion.div>

        <div className="relative pl-10 md:pl-14">
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-white/10" />

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="absolute -left-6 md:-left-8 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#22D3EE]" />
                <div className="bg-white/8 border border-white/10 rounded-2xl p-5 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-[#22D3EE]/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">{edu.degree}</h3>
                      <p className="text-gray-400 text-sm mt-1">{edu.institution}</p>
                    </div>
                    <div className="flex flex-row md:flex-col items-center md:items-end gap-2.5 md:gap-1.5 flex-shrink-0">
                      <span className="px-2.5 py-0.5 text-[10px] sm:text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-3 pt-3 border-t border-white/5">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
