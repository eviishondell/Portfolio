import React, { useState } from 'react';

export default function Projects() {
  const [roboticsPage, setRoboticsPage] = useState(0);
  const [softwarePage, setSoftwarePage] = useState(0);
  const [snapEnabled, setSnapEnabled] = useState(false);
  const scrollContainerRef = React.useRef(null);

  // Trigger peek animation on mount
  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const peekTimer = setTimeout(() => {
      // Scroll down to peek at software section
      container.scrollTo({
        top: 200,
        behavior: 'smooth'
      });

      // Scroll back up and enable snap
      setTimeout(() => {
        container.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        
        // Enable snap after scrolling back
        setTimeout(() => {
          setSnapEnabled(true);
        }, 300);
      }, 800);
    }, 500);

    return () => clearTimeout(peekTimer);
  }, []);
  
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
    },
    {
      id: 4,
      title: 'Autonomous Navigation System',
      description: 'Developing intelligent navigation for robots in dynamic indoor environments.',
      image: 'robotics-project-4',
      tags: ['Navigation', 'Computer Vision', 'SLAM']
    },
    {
      id: 5,
      title: 'Tactile Sensing Research',
      description: 'Advancing touch-based perception for delicate object manipulation.',
      image: 'robotics-project-5',
      tags: ['Sensing', 'Hardware', 'Research']
    },
    {
      id: 6,
      title: 'Multi-Agent Coordination',
      description: 'Enabling multiple robots to work together on complex tasks.',
      image: 'robotics-project-6',
      tags: ['Multi-Agent', 'Coordination', 'AI']
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
    },
    {
      id: 4,
      title: 'Accessibility Web Tools',
      description: 'Suite of web tools to improve digital accessibility for users with disabilities.',
      image: 'software-project-4',
      tags: ['Accessibility', 'React', 'Web']
    },
    {
      id: 5,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for visualizing complex research data and insights.',
      image: 'software-project-5',
      tags: ['Data Viz', 'D3.js', 'Analytics']
    },
    {
      id: 6,
      title: 'Collaborative Coding Platform',
      description: 'Real-time collaborative environment for teaching programming to beginners.',
      image: 'software-project-6',
      tags: ['Education', 'WebSockets', 'Node.js']
    }
  ];

  const projectsPerPage = 3;
  const totalRoboticsPages = Math.ceil(roboticsProjects.length / projectsPerPage);
  const totalSoftwarePages = Math.ceil(softwareProjects.length / projectsPerPage);

  const getCurrentRoboticsProjects = () => {
    const start = roboticsPage * projectsPerPage;
    return roboticsProjects.slice(start, start + projectsPerPage);
  };

  const getCurrentSoftwareProjects = () => {
    const start = softwarePage * projectsPerPage;
    return softwareProjects.slice(start, start + projectsPerPage);
  };

  return (
    <div 
      ref={scrollContainerRef}
      className={`${snapEnabled ? 'snap-y snap-mandatory' : ''} overflow-y-scroll h-screen bg-stone-100`}
      style={{ 
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif'
      }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-stone-100 z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-light tracking-wide">EVOLONE</a>
          <div className="flex gap-8 text-sm">
            <a href="/" className="hover:text-stone-600 transition">Home</a>
            <a href="/projects" className="hover:text-stone-600 transition font-semibold">Projects</a>
            <a href="/publications" className="hover:text-stone-600 transition">Publications</a>
            <a href="/about" className="hover:text-stone-600 transition">About Me</a>
          </div>
        </div>
      </nav>

      {/* Robotics Projects Section */}
      <section className="bg-white snap-start snap-always min-h-screen pt-24">
        <div className="min-h-screen flex flex-col py-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="mb-8 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Robotics Projects.</h2>
              <p className="text-stone-600 text-base md:text-lg">Research and development in assistive robotics and human-robot interaction</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              {getCurrentRoboticsProjects().map((project) => (
                <div
                  key={project.id}
                  className="group relative bg-stone-900 rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition flex flex-col"
                >
                  {/* Placeholder Image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-stone-700 to-stone-900 flex items-center justify-center text-white text-sm flex-shrink-0">
                    {project.image}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 bg-white flex-grow flex flex-col">
                    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-stone-600 text-sm mb-4 flex-grow">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs bg-stone-100 text-stone-700 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => setRoboticsPage(Math.max(0, roboticsPage - 1))}
                disabled={roboticsPage === 0}
                className={`w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center transition ${
                  roboticsPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-stone-100'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => setRoboticsPage(Math.min(totalRoboticsPages - 1, roboticsPage + 1))}
                disabled={roboticsPage === totalRoboticsPages - 1}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                  roboticsPage === totalRoboticsPages - 1 
                    ? 'bg-stone-300 cursor-not-allowed' 
                    : 'bg-stone-900 text-white hover:bg-stone-800'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Software Projects Section */}
      <section className="bg-stone-100 snap-start snap-always min-h-screen pt-24">
        <div className="min-h-screen flex flex-col py-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="mb-8 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Software Projects.</h2>
              <p className="text-stone-600 text-base md:text-lg">Applications and platforms for social impact and creative expression</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              {getCurrentSoftwareProjects().map((project) => (
                <div
                  key={project.id}
                  className="group relative bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition border border-stone-200 flex flex-col"
                >
                  {/* Placeholder Image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center text-stone-600 text-sm flex-shrink-0">
                    {project.image}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-stone-600 text-sm mb-4 flex-grow">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs bg-stone-900 text-white px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-4 right-4 bg-stone-900 rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => setSoftwarePage(Math.max(0, softwarePage - 1))}
                disabled={softwarePage === 0}
                className={`w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center transition ${
                  softwarePage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-stone-100'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => setSoftwarePage(Math.min(totalSoftwarePages - 1, softwarePage + 1))}
                disabled={softwarePage === totalSoftwarePages - 1}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                  softwarePage === totalSoftwarePages - 1 
                    ? 'bg-stone-300 cursor-not-allowed' 
                    : 'bg-stone-900 text-white hover:bg-stone-800'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
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