import Navigation from './components/Navigation';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import AmbientBackground from './components/AmbientBackground';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import FeaturedProjects from './components/FeaturedProjects';
import MoreProjects from './components/MoreProjects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen relative bg-[#0A0A0B] overflow-x-hidden">
      <AmbientBackground />
      <ScrollProgress />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <TechMarquee />
        <About />
        <Education />
        <Experience />
        <Achievements />
        <FeaturedProjects />
        <MoreProjects />
        <Skills />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}
