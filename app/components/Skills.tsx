'use client';

import { motion } from 'framer-motion';
import {
  SiPython, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss, SiFlutter,
  SiNodedotjs, SiSpringboot, SiPhp,
  SiMysql,
  SiGit, SiGithub, SiFigma,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { FaAws, FaJava } from 'react-icons/fa';
import type { IconType } from 'react-icons';

const skillIcons: Record<string, IconType> = {
  'Python': SiPython,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'Java': FaJava,
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'Flutter': SiFlutter,
  'Node.js': SiNodedotjs,
  'Spring Boot': SiSpringboot,
  'PHP': SiPhp,
  'MySQL': SiMysql,
  'AWS': FaAws,
  'Azure': VscAzure,
  'Git/GitHub': SiGithub,
  'Figma': SiFigma,
};

export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java'],
    },
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Flutter'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Spring Boot', 'PHP'],
    },
    {
      category: 'Database',
      skills: ['DynamoDB', 'MySQL'],
    },
    {
      category: 'Cloud & Tools',
      skills: ['AWS', 'Azure', 'Git/GitHub', 'Figma'],
    },
    {
      category: 'Domains',
      skills: ['Full-Stack Development', 'Machine Learning', 'AI Anomaly Detection', 'IoT Systems', 'Clinical Data Modeling'],
    },
  ];

  const certifications = [
    {
      name: 'Azure AI Fundamentals (AI-900)',
      issuer: 'Microsoft',
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/ARULSELVANKM-0632/592BFD2B374D55E5?sharingId=42CE9672B23B065E',
      image: '/ai-900.png',
      isAssociate: true,
    },
    {
      name: 'Azure AI Engineer Associate (AI-102)',
      issuer: 'Microsoft',
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/ARULSELVANKM-0632/ECA99C4B9A9F3BEE?sharingId=42CE9672B23B065E',
      image: '/ai-102.png',
      isAssociate: true,
    },
    {
      name: 'AWS Educate: Introduction to Cloud 101',
      issuer: 'AWS',
      link: 'https://www.credly.com/badges/a6bc0051-9eee-482c-a0a4-72c1c6f33f93/public_url',
      image: 'https://images.credly.com/images/e51a8579-188d-4363-8ed1-12ad164ef57b/linkedin_thumb_blob',
      isAssociate: false,
    },
    {
      name: 'Cybersecurity Fundamentals',
      issuer: 'IBM SkillsBuild',
      link: 'https://www.credly.com/badges/f691cbd4-8e0b-410e-94a1-f3581eb57efe/public_url',
      image: 'https://images.credly.com/images/50b96632-6cbb-40b7-ac0e-b83f49ff7f94/linkedin_thumb_image.png',
      isAssociate: false,
    },
    {
      name: 'Getting Started with Artificial Intelligence',
      issuer: 'IBM SkillsBuild',
      link: 'https://www.credly.com/badges/241faed0-fff7-49a4-b03b-3da21c107417/public_url',
      image: 'https://images.credly.com/images/73c08e76-eb9c-4c03-92da-3dad49e99e5a/linkedin_thumb_Getting_Started_With_Artificial_Intelligence_Badge.png',
      isAssociate: false,
    },
    {
      name: 'Artificial Intelligence Fundamentals',
      issuer: 'IBM SkillsBuild',
      link: 'https://www.credly.com/badges/0d287f06-66a9-4aaf-a660-19869468c805/public_url',
      image: 'https://images.credly.com/images/82b908e1-fdcd-4785-9d32-97f11ccbcf08/linkedin_thumb_image.png',
      isAssociate: false,
    },
    {
      name: 'AWS Educate: Introduction to Generative AI',
      issuer: 'AWS',
      link: 'https://www.credly.com/badges/c6178ae7-adc6-44aa-961f-5c3e2897cc5e/public_url',
      image: 'https://images.credly.com/images/e50c657a-edd9-4c93-b1cf-2b6634b54abf/linkedin_thumb_blob',
      isAssociate: false,
    },
    {
      name: 'AWS Educate: Machine Learning Foundations',
      issuer: 'AWS',
      link: 'https://www.credly.com/badges/770faf2e-137a-4955-bfbd-5b0801a1f6e0/public_url',
      image: 'https://images.credly.com/images/247efe36-9fa6-4209-ad56-0fd522283872/linkedin_thumb_blob',
      isAssociate: false,
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-[#22D3EE] tracking-widest uppercase mb-2">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills & Certifications</h2>
        </motion.div>

        {/* Skills Section */}
        <div className="mb-20">
          <motion.h3
            className="text-xl font-semibold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technical Skills
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm"
              >
                <h4 className="text-[#22D3EE] font-mono text-sm mb-4 tracking-wider uppercase">{category.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skillIcons[skill];
                    return (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.04 }}
                        whileHover={{ y: -2 }}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-200 bg-white/8 border border-white/10 rounded-full hover:border-[#22D3EE]/40 hover:bg-[#22D3EE]/10 hover:text-[#22D3EE] transition-all duration-300 cursor-default"
                      >
                        {Icon && <Icon className="w-4 h-4 flex-shrink-0" />}
                        {skill}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <motion.h3
            className="text-xl font-semibold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Certifications
          </motion.h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link || undefined}
                target={cert.link ? '_blank' : undefined}
                rel={cert.link ? 'noopener noreferrer' : undefined}
                className={`group flex flex-col items-center text-center bg-white/[0.03] border rounded-2xl p-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2 focus:ring-offset-black ${
                  cert.isAssociate 
                    ? 'border-[#22D3EE]/45 shadow-[0_0_15px_rgba(34,211,238,0.12)] hover:border-[#22D3EE]/75 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:bg-white/[0.06]' 
                    : 'border-white/10 hover:border-[#22D3EE]/40 hover:bg-white/[0.06]'
                } ${!cert.link ? 'cursor-default' : 'cursor-pointer'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={cert.link ? { translateY: -5 } : {}}
              >
                <div className="w-full h-28 mb-4 flex items-center justify-center flex-shrink-0">
                  {cert.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={cert.image}
                      alt={`${cert.name} badge`}
                      className="max-w-full max-h-full w-auto h-auto object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                        <path d="M8.5 13.5 6 21l6-2 6 2-2.5-7.5" />
                      </svg>
                    </div>
                  )}
                </div>
                <h4 className="text-sm font-medium text-white leading-tight mb-1">
                  {cert.name}
                </h4>
                <p className="text-xs text-gray-500 font-mono mb-2">
                  {cert.issuer}
                </p>
                {cert.isAssociate && (
                  <span className="inline-flex items-center px-2 py-0.5 mb-2.5 text-[9px] font-mono font-medium text-[#22D3EE]/80 bg-[#22D3EE]/5 border border-[#22D3EE]/10 rounded">
                    Proctored Exam
                  </span>
                )}
                {cert.link && (
                  <span className="text-[11px] text-[#22D3EE] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                    Verify
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </span>
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
