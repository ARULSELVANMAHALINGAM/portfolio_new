'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FeaturedProjects() {
  interface Project {
    name: string;
    description: string;
    rationale: string;
    tech: string[];
    github: string | null;
    live: string | null;
    image: string | null;
    isPrivate?: boolean;
  }

  const projects: Project[] = [
    {
      name: 'Permission Abuse Detector',
      description: 'An AI-powered hybrid mobile security system that detects and flags abnormal permission usage patterns in real time, helping prevent unauthorized data access.',
      rationale: 'Used DynamoDB for its low-latency reads on permission logs, and paired it with an anomaly detection model to catch abuse patterns that static rule-based checks would miss.',
      tech: ['Flutter', 'Java', 'DynamoDB', 'AI Anomaly Detection'],
      github: 'https://github.com/ARULSELVANMAHALINGAM/Permission-abuse-detector',
      live: null,
      image: '/projects/permission-abuse.png',
    },
    {
      name: 'Smart Canteen Management',
      description: 'A full-stack campus dining platform enabling students to pre-order meals and skip queues entirely, with live kitchen dashboards and real-time queue tracking.',
      rationale: 'Built the queue system to update live across student and kitchen views simultaneously, since a stale queue state would defeat the entire point of pre-ordering.',
      tech: ['React', 'Tailwind CSS', 'Real-time Queue System'],
      github: 'https://github.com/ARULSELVANMAHALINGAM/smart-canteen-management',
      live: 'https://smart-canteen-management-five.vercel.app/',
      image: '/projects/smart-canteen.png',
    },
    {
      name: 'AI-Powered Incident Traceability & Recovery Platform',
      description: 'A platform for tracing, analyzing, and recovering from operational incidents using AI-assisted root-cause analysis, built with REST and GitHub API integrations.',
      rationale: 'Integrated directly with the GitHub API so incident timelines could be cross-referenced against real commit and deploy history, not just manually logged notes.',
      tech: ['React', 'Tailwind CSS', 'REST APIs', 'GitHub API'],
      github: 'https://github.com/ARULSELVANMAHALINGAM/-AI-Powered-Incident-Traceability-Recovery-Platform',
      live: null,
      image: '/projects/incident-traceability.png',
    },
    {
      name: 'Plantar Wart Treatment Prediction System',
      description: 'A clinical decision-support system using machine learning to predict optimal treatment pathways for plantar wart cases, aiding faster, data-driven medical decisions.',
      rationale: 'Framed treatment selection as a supervised classification problem over structured clinical data, prioritizing interpretability so the model\'s reasoning stays useful to a clinician, not just accurate.',
      tech: ['Python', 'Machine Learning', 'Clinical Data Modeling'],
      github: 'https://github.com/ARULSELVANMAHALINGAM/plantar-wart-treatement-predictio-system',
      live: null,
      image: '/projects/plantar-wart.png',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-[#22D3EE] tracking-widest uppercase mb-2">Projects</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-white/8 border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-[#22D3EE]/30 transition-all duration-300 group flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ translateY: -4, scale: 1.01 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#22D3EE]/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex flex-col flex-1">
                {project.image && (
                  <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden border border-white/10">
                    <Image
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                )}

                <h3 className="text-xl font-semibold text-white mb-2.5">
                  {project.name}
                </h3>
                
                <p className="text-gray-400 text-[13px] sm:text-sm leading-relaxed mb-3">
                  {project.description}
                </p>

                <p className="text-xs text-gray-500 leading-relaxed mb-4 pl-3 border-l-2 border-[#22D3EE]/20 italic">
                  {project.rationale}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-0.5 text-xs font-mono text-[#22D3EE] bg-[#22D3EE]/10 rounded-full border border-[#22D3EE]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  {project.isPrivate && (
                    <span className="px-2.5 py-1 text-xs font-mono text-gray-400 bg-gray-500/10 rounded-full border border-gray-500/20">
                      Private/Team Project
                    </span>
                  )}
                  
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
                      Live Demo
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
