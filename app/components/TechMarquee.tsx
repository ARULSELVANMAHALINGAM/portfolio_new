'use client';

import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiSpringboot,
  SiPython, SiTailwindcss, SiFlutter, SiMysql
} from 'react-icons/si';
import { FaAws, FaBrain, FaDatabase, FaJava } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';
import type { IconType } from 'react-icons';

interface TechItem {
  name: string;
  icon: IconType;
}

export default function TechMarquee() {
  const techs: TechItem[] = [
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Spring Boot', icon: SiSpringboot },
    { name: 'Python', icon: SiPython },
    { name: 'Machine Learning', icon: FaBrain },
    { name: 'AWS', icon: FaAws },
    { name: 'Azure', icon: VscAzure },
    { name: 'DynamoDB', icon: FaDatabase },
    { name: 'MySQL', icon: SiMysql },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Flutter', icon: SiFlutter },
    { name: 'Java', icon: FaJava },
    { name: 'REST APIs', icon: TbApi },
  ];

  // Duplicate the array to create seamless loop
  const row = [...techs, ...techs, ...techs];

  return (
    <div className="relative py-8 border-y border-white/10 overflow-hidden bg-black/20 backdrop-blur-sm">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0B] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0B] to-transparent z-10" />

      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {row.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <span
              key={index}
              className="text-sm font-mono text-gray-400 hover:text-[#22D3EE] transition-colors duration-300 tracking-wider uppercase flex items-center gap-3 select-none cursor-default group"
            >
              <Icon className="w-5 h-5 text-[#22D3EE]/70 group-hover:text-[#22D3EE] group-hover:scale-110 transition-all duration-300" />
              {tech.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
