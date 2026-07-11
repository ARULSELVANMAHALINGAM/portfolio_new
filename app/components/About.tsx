'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

function CountUp({ target, duration = 1.2, decimals = 0, prefix = '', suffix = '', delay = 0 }: { target: number, duration?: number, decimals?: number, prefix?: string, suffix?: string, delay?: number }) {
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!triggered) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // easeOutCubic curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = easeProgress * target;
      setCount(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [triggered, target, duration, delay]);

  return (
    <span ref={ref}>
      {prefix}
      {(triggered ? count : 0).toFixed(decimals)}
      {suffix}
    </span>
  );
}

function GitHubStatsTicker() {
  const [stats, setStats] = useState<{ repos: number; stars: number; lastCommit: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const userRes = await fetch('https://api.github.com/users/ARULSELVANMAHALINGAM');
        if (!userRes.ok) throw new Error();
        const userData = await userRes.json();

        const reposRes = await fetch('https://api.github.com/users/ARULSELVANMAHALINGAM/repos?per_page=100');
        if (!reposRes.ok) throw new Error();
        const reposData = await reposRes.json();
        
        let totalStars = 0;
        reposData.forEach((repo: any) => {
          totalStars += repo.stargazers_count;
        });

        const eventsRes = await fetch('https://api.github.com/users/ARULSELVANMAHALINGAM/events/public');
        if (!eventsRes.ok) throw new Error();
        const eventsData = await eventsRes.json();
        
        const pushEvent = eventsData.find((event: any) => event.type === 'PushEvent');
        let lastCommitTime = '';
        if (pushEvent) {
          const date = new Date(pushEvent.created_at);
          const diffMs = Date.now() - date.getTime();
          const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
          const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
          const diffMins = Math.floor(diffMs / (1000 * 60));
          
          if (diffDays > 0) {
            lastCommitTime = `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
          } else if (diffHours > 0) {
            lastCommitTime = `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
          } else {
            lastCommitTime = `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
          }
        } else {
          lastCommitTime = 'recently';
        }

        setStats({
          repos: userData.public_repos,
          stars: totalStars,
          lastCommit: lastCommitTime
        });
      } catch (err) {
        // Silent fail
      } finally {
        setLoading(false);
      }
    }
    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="flex gap-4 items-center justify-center py-2 text-xs text-gray-500 font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
        Loading GitHub stats...
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center sm:justify-start items-center py-2.5 px-4 bg-white/[0.02] border border-white/5 rounded-xl text-xs font-mono text-gray-400 w-full">
      <div>
        Repos: <span className="text-[#22D3EE] font-semibold">{stats.repos}</span>
      </div>
      <div className="hidden sm:block w-1 h-1 rounded-full bg-white/10" />
      <div>
        Stars: <span className="text-[#22D3EE] font-semibold">{stats.stars}</span>
      </div>
      <div className="hidden sm:block w-1 h-1 rounded-full bg-white/10" />
      <div>
        Last Commit: <span className="text-[#22D3EE] font-semibold">{stats.lastCommit}</span>
      </div>
    </div>
  );
}

export default function About() {
  const stats = [
    { target: 7, decimals: 0, prefix: '', suffix: '+', label: 'Certifications', delay: 0.5 },
    { target: 10, decimals: 0, prefix: '', suffix: '+', label: 'Projects Shipped', delay: 0.6 },
    { target: 12.5, decimals: 1, prefix: '₹', suffix: 'L', label: 'Funded Project', delay: 0.7 },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-[#22D3EE] tracking-widest uppercase mb-2">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio text */}
          <motion.div
            className="text-gray-400 text-[15px] sm:text-base leading-relaxed space-y-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I'm a final-year BE Computer Science Engineering student with hands-on experience across full-stack development, AI/ML engineering, and UI/UX design. My passion lies in building intelligent, production-ready systems that solve real-world problems.
            </p>
            <p>
              I've led award-winning projects including a government-funded, patent-filed IoT security system, built AI-powered detection and prediction systems, and shipped multiple full-stack platforms end to end. As a team lead at Smart India Hackathon 2025 and a presenter at AI ASCEND 2026 (AWS + KRYNDLE), I thrive in collaborative, innovation-driven environments.
            </p>
            <p>
              My work spans from AI-powered security tools to full-stack platforms, always focusing on scalability, user experience, and technical excellence. I'm constantly exploring new technologies and pushing the boundaries of what's possible with modern web and AI technologies.
            </p>
            <p>
              Each project has pushed me a step further — from building straightforward CRUD applications early on to architecting AI-integrated, cloud-backed systems today. That trajectory is what I bring into every new problem.
            </p>
          </motion.div>

          {/* Right Column: Stats & Quick Facts */}
          <motion.div
            className="flex flex-col space-y-6 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/8 border border-white/10 rounded-2xl p-5 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-[#22D3EE]/30 transition-all duration-300 w-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ translateY: -4, scale: 1.02 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#22D3EE] mb-1.5 font-mono">
                    <CountUp
                      target={stat.target}
                      decimals={stat.decimals}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      delay={stat.delay}
                    />
                  </div>
                  <div className="text-sm text-gray-400 font-mono">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recently Shipped Mini Update Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-sm shadow-lg hover:border-[#22D3EE]/20 transition-all duration-300 w-full space-y-3.5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] flex-shrink-0 animate-pulse" />
                <span className="text-gray-500 font-mono text-[10px] uppercase tracking-widest font-semibold">Recently Shipped</span>
              </div>
              <p className="text-gray-300 text-xs sm:text-[13px] leading-relaxed">
                Added verified GitHub repositories for the Incident Traceability platform and IoT Warehouse Security System — closing the loop from concept to public, reviewable code.
              </p>
              <div className="text-[10px] text-gray-500 font-mono pt-1">
                Updated July 2026
              </div>
            </div>

            {/* GitHub Ticker Element */}
            <GitHubStatsTicker />
          </motion.div>
        </div>

        <motion.div
          className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] flex-shrink-0" />
          <span className="text-gray-500 font-mono text-xs uppercase tracking-wider">Currently Learning</span>
          <span className="text-gray-300">ML systems design and applied deep learning</span>
        </motion.div>
      </div>
    </section>
  );
}
