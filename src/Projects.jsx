import React, { useState, useEffect, useRef } from 'react';

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

export default function Projects() {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [roboticsRef, roboticsVisible] = useScrollAnimation();
  const [softwareRef, softwareVisible] = useScrollAnimation();
  
  const roboticsProjects = [
    {
      id: 1,
      title: 'Assistive Robot for Daily Tasks',
      description: 'Developing autonomous systems to assist individuals with disabilities in performing daily activities.',
      image: 'robotics-project-1',
      tags: ['Robotics', 'AI', 'Accessibility']
    },
    {
      id: 2,
      title: 'Human-Robot Interaction Study',
      description: 'Research on improving natural communication between humans and robotic systems.',
      image: 'robotics-project-2',
      tags: ['HRI', 'Research', 'UX']
    },
    {
      id: 3,
      title: 'Adaptive Manipulation System',
      description: 'Creating adaptive robotic arms that learn from user preferences and environments.',
      image: 'robotics-project-3',
      tags: ['Machine Learning', 'Robotics', 'Control Systems']
    }
  ];

  const softwareProjects = [
    {
      id: 1,
      title: 'AI Music Generation Platform',
      description: 'Platform that merges music composition with artificial intelligence for creative experiences.',
      image: 'software-project-1',
      tags: ['AI', 'Music', 'Web Development']
    },
    {
      id: 2,
      title: 'Community Empowerment App',
      description: 'Mobile application designed to connect and empower underrepresented communities through technology.',
      image: 'software-project-2',
      tags: ['Mobile', 'Social Impact', 'React Native']
    },
    {
      id: 3,
      title: 'Educational VR Experience',
      description: 'Virtual reality platform for immersive STEM education in underserved schools.',
      image: 'software-project-3',
      tags: ['VR', 'Education', 'Unity']
    }
  ];

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen bg-white font-sans" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-light tracking-wide">EVOLONE</a>
          <div className="flex gap-8 text-sm">
            <a href="/" className="hover:text-stone-600 transition">Home</a>
            <a href="/projects" className="hover:text-stone-600 transition font-semibold">Projects</a>
            <a href="/publications" className="hover:text-stone-600 transition">Publications</a>
            <a href="/#about" className="hover:text-stone-600 transition">About Me</a>
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
          <div className="max-w-6xl mx-auto px-6 w-full">
            
            <div className={`text-center mb-16 transition-all duration-1000 ${roboticsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-6xl font-semibold text-stone-900 mb-4">
                Robotics Research.
              </h2>
              <p className="text-xl text-stone-600 font-normal">
                Human-robot interaction • Assistive technology • Accessibility
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {roboticsProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className={`group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${roboticsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${(idx + 1) * 150}ms` }}
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center text-stone-600 text-sm border-b border-stone-200">
                    {project.image}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-stone-900 mb-2">{project.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs bg-stone-100 text-stone-700 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Software Projects Section */}
      <section ref={softwareRef} id="software" className="bg-white snap-start snap-always min-h-screen">
        <div className="min-h-screen flex items-center py-20">
          <div className="max-w-6xl mx-auto px-6 w-full">
            
            <div className={`text-center mb-16 transition-all duration-1000 ${softwareVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-6xl font-semibold text-stone-900 mb-4">
                Software Projects.
              </h2>
              <p className="text-xl text-stone-600 font-normal">
                Social impact • Creative expression • Accessible design
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {softwareProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className={`group bg-stone-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${softwareVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${(idx + 1) * 150}ms` }}
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-stone-300 to-stone-400 flex items-center justify-center text-stone-600 text-sm border-b border-stone-300">
                    {project.image}
                  </div>
                  
                  <div className="p-6 bg-white">
                    <h3 className="font-semibold text-lg text-stone-900 mb-2">{project.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs bg-stone-900 text-white px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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