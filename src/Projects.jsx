import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';


function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
}

function ProjectCarousel({ projects, visible, variant = 'light' }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScroll);
      return () => scrollElement.removeEventListener('scroll', checkScroll);
    }
  }, [projects]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const cardBg = variant === 'dark' ? 'bg-stone-100' : 'bg-white';
  const imageBg = variant === 'dark' 
    ? 'from-stone-300 to-stone-400 border-stone-300' 
    : 'from-stone-200 to-stone-300 border-stone-200';
  const tagStyle = variant === 'dark'
    ? 'bg-stone-900 text-white'
    : 'bg-stone-100 text-stone-700';

  return (
    <div className="relative group">
      {/* Scroll Container with padding for shadow space */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-8 -my-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, idx) => (
<Link
  to={project.link}
  key={project.id}
  className={`flex-shrink-0 w-[calc(33.333%-1rem)] min-w-[280px] ${cardBg} rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
  style={{ 
    transitionDelay: `${(idx + 1) * 150}ms`,
    boxShadow: 'none',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.2), 0 4px 8px rgba(0,0,0,0.15)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = 'none';
  }}
>
  <div className="aspect-[4/3] overflow-hidden border-b border-stone-200">
    <img 
      src={project.image} 
      alt={project.title}
      className="w-full h-full object-cover"
    />
  </div>
  
  <div className="p-6">
    <h3 className="font-semibold text-lg text-stone-900 mb-2">{project.title}</h3>
    <p className="text-stone-600 text-sm leading-relaxed mb-4">{project.description}</p>
    
    <div className="flex flex-wrap gap-2">
      {project.tags.map((tag, idx) => (
        <span key={idx} className={`text-xs ${tagStyle} px-3 py-1 rounded-full`}>
          {tag}
        </span>
      ))}
    </div>
  </div>
</Link>
        ))}
      </div>

      {/* Navigation Buttons */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-md hover:shadow-lg transition-all opacity-0 group-hover:opacity-100 z-20 hover:scale-105"
          aria-label="Scroll left"
        >
          <svg className="w-5 h-5 text-stone-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-md hover:shadow-lg transition-all opacity-0 group-hover:opacity-100 z-20 hover:scale-105"
          aria-label="Scroll right"
        >
          <svg className="w-5 h-5 text-stone-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default function Projects() {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [roboticsRef, roboticsVisible] = useScrollAnimation();
  const [softwareRef, softwareVisible] = useScrollAnimation();
  
const roboticsProjects = [
  {
    id: 1,
    title: 'Humanoid Robots in the Wild: Digital Ethnography',
    description: 'Analyzing naturalistic human-humanoid robot interactions through digital ethnography of online videos, revealing proximity patterns, personalization behaviors, and anthropomorphization tendencies that challenge existing HRI research assumptions.',
    image: '/Portfolio/img/abuse_of_robot.png',
    tags: ['Digital Ethnography', 'HRI', 'Consumer Robotics'],
    link: '/projects/humanoid-ethnography'
  },
  {
    id: 2,
    title: 'Privacy-Utility Tradeoffs in Assistive Robotics',
    description: 'Updating foundational privacy-utility frameworks for modern assistive robotics contexts, examining how users balance privacy concerns with functional benefits in home-based robot systems.',
    image: '/Portfolio/img/neo.png',
    tags: ['Privacy', 'Assistive Robotics', 'User Studies'],
    link: '/projects/privacy-utility'
  },
  {
    id: 3,
    title: 'Attitudes Towards Humanoid Robots for In-Home Assistance',
    description: 'Investigating user perceptions and acceptance of humanoid robots in domestic settings through qualitative research to inform the design of future assistive technologies.',
    image: '/Portfolio/img/in-home.jpg',
    tags: ['User Studies', 'HRI', 'Assistive Tech'],
    link: '/projects/humanoid-attitudes'
  }
];

const softwareProjects = [
  {
    id: 1,
    title: 'Data Visualization for Cycle Tracking',
    description: 'Platform that merges music composition with artificial intelligence for creative experiences.',
    image: '/Portfolio/img/cycle-track.png',
    tags: ['AI', 'Music', 'Web Development'],
    link: '/projects/cycle-tracking'
  },
  {
    id: 2,
    title: 'Self-Diagnosing PMDD',
    description: 'Mobile application designed to connect and empower underrepresented communities through technology.',
    image: '/Portfolio/img/pmdd.png',
    tags: ['Mobile', 'Social Impact', 'React Native'],
    link: '/projects/pmdd'
  },
  {
    id: 3,
    title: 'Smartstack Watch Face',
    description: 'Virtual reality platform for immersive STEM education in underserved schools.',
    image: '/Portfolio/img/siri.png',
    tags: ['VR', 'Education', 'Unity'],
    link: '/projects/smartstack'
  },
  {
    id: 4,
    title: 'WatchOS Color Picker',
    description: 'Virtual reality platform for immersive STEM education in underserved schools.',
    image: '/Portfolio/img/color-pick.png',
    tags: ['VR', 'Education', 'Unity'],
    link: '/projects/color-picker'
  }
];

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen bg-white font-sans" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-stone-100 z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-light tracking-wide">EVOLONE</div>
        <div className="flex gap-8 text-sm">
          <Link to="/" className="hover:text-stone-600 transition">Home</Link>
          <Link to="/projects" className="hover:text-stone-600 transition">Projects</Link>
          <Link to="/publications" className="hover:text-stone-600 transition">Publications</Link>
          <Link to="/about" className="hover:text-stone-600 transition">About Me</Link>
        </div>
      </div>
    </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="bg-white snap-start snap-always min-h-screen relative">
        <div className="h-screen flex flex-col justify-center items-center px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-semibold text-stone-900 tracking-tight leading-none transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Projects.
            </h1>
            
            <p className={`text-xl md:text-2xl text-stone-600 font-normal max-w-3xl mx-auto transition-all duration-1000 delay-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Research and development in assistive robotics, human-computer interaction, and accessible technology.
            </p>

            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 transition-all duration-1000 delay-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a 
                href="#robotics"
                className="text-blue-600 hover:text-blue-700 text-lg font-normal hover:underline transition-all"
              >
                View robotics →
              </a>
              <span className="hidden sm:block text-stone-300">|</span>
              <a 
                href="#software"
                className="text-blue-600 hover:text-blue-700 text-lg font-normal hover:underline transition-all"
              >
                View software →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Robotics Projects Section */}
      <section ref={roboticsRef} id="robotics" className="bg-stone-100 snap-start snap-always min-h-screen">
        <div className="min-h-screen flex items-center py-20">
          <div className="max-w-7xl mx-auto px-6 w-full">
            
            <div className={`text-center mb-16 transition-all duration-1000 ${roboticsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-6xl font-semibold text-stone-900 mb-4">
                Robotics Research.
              </h2>
              <p className="text-xl text-stone-600 font-normal">
                Human-robot interaction • Assistive technology • Accessibility
              </p>
            </div>
            
            <ProjectCarousel projects={roboticsProjects} visible={roboticsVisible} variant="light" />
          </div>
        </div>
      </section>

      {/* Software Projects Section */}
      <section ref={softwareRef} id="software" className="bg-white snap-start snap-always min-h-screen">
        <div className="min-h-screen flex items-center py-20">
          <div className="max-w-7xl mx-auto px-6 w-full">
            
            <div className={`text-center mb-16 transition-all duration-1000 ${softwareVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-6xl font-semibold text-stone-900 mb-4">
                Software Projects.
              </h2>
              <p className="text-xl text-stone-600 font-normal">
                Social impact • Creative expression • Accessible design
              </p>
            </div>
            
            <ProjectCarousel projects={softwareProjects} visible={softwareVisible} variant="dark" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12 snap-start">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-2xl font-light mb-4">EVOLONE</div>
          <p className="text-stone-400 text-sm">
            © 2025 Evolone Layne. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}