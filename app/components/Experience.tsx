'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  const techStack = [
    'React.js',
    'Spring Boot',
    'Node.js',
    'MySQL',
    'AWS',
    'Postman',
    'IntelliJ',
    'Maven',
    'Git',
    'GitHub',
  ];

  const highlights = [
    'Developed responsive UI using React.js',
    'Integrated Spring Boot REST APIs',
    'Provided backend support using Node.js',
    'Handled database operations with MySQL',
    'Explored cloud basics using AWS',
    'Tested APIs with Postman',
    'Used IntelliJ and Maven for development workflows',
    'Version control and collaboration with Git and GitHub',
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-[#22D3EE] tracking-widest uppercase mb-2">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Real-World Full-Stack Experience</h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-2xl">
            Hands-on internship experience building a Bank Management System from UI to backend and cloud.
          </p>
        </motion.div>

        <div className="relative pl-10 md:pl-14">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-white/10" />

          {/* Timeline marker */}
          <motion.div
            className="absolute left-4 md:left-6 top-2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0A0A0B] border-2 border-[#22D3EE] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </motion.div>

          <motion.div
            className="relative bg-white/8 border border-white/10 rounded-2xl p-5 md:p-6 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-[#22D3EE]/30 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Yaazh Tech Pvt Ltd</h3>
                <p className="text-[#22D3EE] text-sm font-mono mt-1">
                  Frontend Developer Intern (Java Full Stack Development)
                </p>
              </div>
              <div className="text-right text-sm text-gray-400 font-mono flex-shrink-0">
                <div>Bank Management System</div>
                <div>Internship</div>
              </div>
            </div>

            <ul className="space-y-1.5 mb-4">
              {highlights.map((point, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
                  <span className="text-[#22D3EE] mt-1.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-mono text-gray-300 bg-white/5 border border-white/10 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
