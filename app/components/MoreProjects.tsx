'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MoreProjects() {
  const projects = [
    {
      name: 'NEXUS DSA Portal',
      description: 'Interactive data structures visualizer with live hashmap collision chains, tries, and O(1) complexity reporting.',
      tech: ['JavaScript', 'Data Structures & Algorithms'],
      live: 'https://dsa-student-management-portal.vercel.app',
      github: 'https://github.com/ARULSELVANMAHALINGAM/Student-management-system-',
      image: '/projects/dsa-portal.png',
    },
    {
      name: 'AEGIS Visitor Management System',
      description: 'Secure facility access and visitor management terminal with role-based authentication.',
      tech: ['JavaScript', 'Authentication Systems'],
      live: 'https://visitor-management-system-plum-seven.vercel.app/',
      github: 'https://github.com/ARULSELVANMAHALINGAM/vistitor-management-system',
      image: '/projects/aegis-visitor.png',
    },
    {
      name: '2048 Game — Grandmaster Premium Edition',
      description: 'An enhanced take on the classic 2048 game with multiple game modes, a coin/rewards system, and unlockable visual themes.',
      tech: ['TypeScript'],
      live: 'https://2048-game-pink.vercel.app/',
      github: 'https://github.com/ARULSELVANMAHALINGAM/2048-game',
      image: '/projects/2048-game.png',
    },
    {
      name: 'Pet Care System',
      description: 'A management system for tracking pet health records, appointments, and care schedules.',
      tech: ['PHP'],
      live: null,
      github: 'https://github.com/ARULSELVANMAHALINGAM/Pet_Care_System',
      image: '/projects/pet-care.png',
    },
    {
      name: 'Medication Reminder System',
      description: 'A DBMS-based system for scheduling and tracking medication reminders.',
      tech: ['PHP'],
      live: null,
      github: 'https://github.com/ARULSELVANMAHALINGAM/Medication_Remainder_System',
      image: '/projects/medication-reminder.png',
    },
    {
      name: 'Online ERP System',
      description: 'A full-stack enterprise resource planning platform for managing organizational workflows.',
      tech: ['React', 'Spring Boot', 'MySQL'],
      live: null,
      github: 'https://github.com/ARULSELVANMAHALINGAM/Online-ERP-System-for-Rice-Shop',
      image: '/projects/online-erp.jpg',
    },
  ];

  return (
    <section id="more-projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-xs font-mono text-[#22D3EE] tracking-widest uppercase mb-2">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">More Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-white/8 border border-white/10 rounded-2xl p-5 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-[#22D3EE]/30 transition-all duration-300 group flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ translateY: -2, scale: 1.02 }}
            >
              <div className="relative flex flex-col flex-1">
                {project.image && (
                  <div className="relative w-full h-32 mb-4 -mt-1 rounded-lg overflow-hidden border border-white/10">
                    <Image
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                )}

                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.name}
                </h3>
                
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 text-[10px] font-mono text-[#22D3EE] bg-[#22D3EE]/10 rounded-full border border-[#22D3EE]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-medium text-white bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2 focus:ring-offset-black hover:shadow-lg"
                    >
                      GitHub
                    </a>
                  )}
                  
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-medium text-black bg-[#22D3EE] rounded-xl hover:bg-[#22D3EE]/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2 focus:ring-offset-black hover:shadow-lg"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
