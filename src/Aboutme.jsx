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

export default function AboutMe() {
  const [educationRef, educationVisible] = useScrollAnimation();
  const [internshipsRef, internshipsVisible] = useScrollAnimation();
  const [internshipPage, setInternshipPage] = useState(0);
  const [flippedCards, setFlippedCards] = useState({
    education: {},
    internships: {}
  });

  // Reset flipped cards when scrolling away from sections
  useEffect(() => {
    if (!educationVisible) {
      setFlippedCards(prev => ({
        ...prev,
        education: {}
      }));
    }
  }, [educationVisible]);

  useEffect(() => {
    if (!internshipsVisible) {
      setFlippedCards(prev => ({
        ...prev,
        internships: {}
      }));
    }
  }, [internshipsVisible]);

  const toggleCard = (section, index) => {
    setFlippedCards(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [index]: !prev[section][index]
      }
    }));
  };

  const education = [
  {
    title: 'Howard University.',
    degree: 'Bachelor of Science in Computer Science',
    years: '2020-2023',
    image: '/Portfolio/img/hu-img.png',
    fellowships: ['Thurgood Marshall College Fund Apple Scholarship', 'Crown Castle Opportunity Scholarship', 'Howard University Capstone Scholarship '],
    organizations: ['National Society of Black Engineers', 'Google Developer Student Club', 'ColorStack Undergraduate Chapter']
  },
  {
    title: 'Carnegie Mellon University.',
    degree: 'Master of Human-Computer Interaction',
    years: '2024-2025',
    image: '/Portfolio/img/cmu-img.png',
    fellowships: ['National GEM Consortium Fellowship (Apple)', 'Carnegie Mellon University Robotics Pathways Fellowship'],
    organizations: ['National Society of Black Engineers', 'Graduate Student Assembly', 'ColorStack Graduate Chapter']
  },
  {
    title: 'University of Washington.',
    degree: 'Doctorate of Philosophy in Computer Science & Engineering',
    years: '2025-2030',
    image: '/Portfolio/img/uw-img.png',
    fellowships: ['National GEM Consortium Fellowship (MIT Lincoln Lab)', 'University of Washington College of Engineering Dean\'s Fellowship','Herbold Fellowship', 'Donar Fellowship'],
    organizations: ['National Society of Black Engineers', 'ColorStack' ]
  }
];

  const internships = [
  {
    title: 'Apple.',
    role: 'Software Engineering Intern',
    years: '2022-2024',
    image: '/Portfolio/img/apple-img.png',
    skills: ['Swift', 'iOS Development', 'UIKit', 'SwiftUI'],
    organizations: ['Watch Frameworks','Health Sensing Experience', 'Watch Complications']
  },
  {
    title: 'NASA.',
    role: 'Research & Development Intern',
    years: '2025',
    image: '/Portfolio/img/nasa-img.png',
    skills: ['Swift', 'Data Visualization', 'Research', 'Rapid Prototyping'],
    organizations: ['Human-Computer Interaction']
  },
  {
    title: 'MIT Lincoln Laboratory.',
    role: 'Research & Development Intern',
    years: '2025-Present',
    image: '/Portfolio/img/mit-img.png',
    skills: ['React.js', 'Research', 'User Studies', 'Data Analysis'],
    organizations: ['Group 42 - Transportation Safety & Resiliance ']
  }
];

  const internshipsPerPage = 3;
  const totalInternshipPages = Math.ceil(internships.length / internshipsPerPage);

  const getCurrentInternships = () => {
    const start = internshipPage * internshipsPerPage;
    return internships.slice(start, start + internshipsPerPage);
  };

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen bg-white font-sans" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-stone-100 z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-light tracking-wide">EVOLONE</div>
        <div className="flex gap-8 text-sm">
          <a href="#home" className="hover:text-stone-600 transition">Home</a>
          <Link to="/projects" className="hover:text-stone-600 transition">Projects</Link>
          <Link to="/publications" className="hover:text-stone-600 transition">Publications</Link>
          <Link to="/about" className="hover:text-stone-600 transition">About Me</Link>
        </div>
      </div>
    </nav>

      {/* Education Section */}
      <section ref={educationRef} className="pt-32 pb-8 bg-white snap-start snap-always min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${educationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-6xl font-semibold text-stone-900 mb-4">
              Education.
            </h2>
            <p className="text-xl text-stone-600 font-normal">
              Academic journey • Research foundation • Technical training
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {education.map((item, idx) => (
              <div
                key={idx}
                className={`relative aspect-[3/4] cursor-pointer transition-all duration-1000 ${educationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ 
                  perspective: '1000px',
                  transitionDelay: `${(idx + 1) * 150}ms`
                }}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-500`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: flippedCards.education[idx] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front of Card */}
                  <div
                    className="absolute inset-0 bg-stone-100 rounded-2xl overflow-hidden shadow-lg"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    {/* Background Image */}
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                      <div>
                        <h3 className="text-white font-semibold text-lg md:text-xl leading-tight mb-1">{item.title}</h3>
                        <div className="text-white/90 text-sm md:text-base leading-relaxed mb-1" style={{ minHeight: '2.5rem' }}>{item.degree}</div>
                        <p className="text-white/80 text-sm leading-tight">{item.years}</p>
                      </div>
                      
                      {/* Plus Icon */}
                      <button
                        onClick={() => toggleCard('education', idx)}
                        className="absolute bottom-6 right-6 bg-white rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    {/* Blurred Background Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                        style={{ filter: 'blur(20px)', transform: 'scale(1.1)' }}
                      />
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                    </div>

                    {/* Content */}
                    <div className="relative h-full p-8 flex flex-col">
                      {/* Header */}
                      <div className="mb-8">
                        <h3 className="text-white font-semibold text-2xl mb-1 drop-shadow-lg">{item.title}</h3>
                        <p className="text-white/80 text-sm drop-shadow">{item.years}</p>
                      </div>

                      <div className="flex-grow space-y-6">
                        {/* Fellowships */}
                        <div>
                          <h4 className="text-white font-bold text-xs mb-3 uppercase tracking-wider drop-shadow">Fellowships</h4>
                          <div className="space-y-2">
                            {item.fellowships.map((fellowship, i) => (
                              <div key={i} className="flex items-start">
                                <div className="w-1.5 h-1.5 rounded-full bg-white/80 mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-white/95 text-sm leading-relaxed drop-shadow">{fellowship}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Organizations */}
                        <div>
                          <h4 className="text-white font-bold text-xs mb-3 uppercase tracking-wider drop-shadow">Organizations</h4>
                          <div className="space-y-2">
                            {item.organizations.map((org, i) => (
                              <div key={i} className="flex items-start">
                                <div className="w-1.5 h-1.5 rounded-full bg-white/80 mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-white/95 text-sm leading-relaxed drop-shadow">{org}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Close Button */}
                      <button
                        onClick={() => toggleCard('education', idx)}
                        className="mt-6 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center self-end transition-all hover:scale-105 border border-white/30"
                      >
                        <svg className="w-5 h-5 text-white drop-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section ref={internshipsRef} className="pt-32 pb-8 bg-white snap-start snap-always min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${internshipsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-6xl font-semibold text-stone-900 mb-4">
              Internships.
            </h2>
            <p className="text-xl text-stone-600 font-normal">
              Industry experience • Research development • Technical innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {getCurrentInternships().map((item, idx) => {
              const actualIdx = internshipPage * internshipsPerPage + idx;
              return (
                <div
                  key={actualIdx}
                  className={`relative aspect-[3/4] cursor-pointer transition-all duration-1000 ${internshipsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ 
                    perspective: '1000px',
                    transitionDelay: `${(idx + 1) * 150}ms`
                  }}
                >
                  <div
                    className={`relative w-full h-full transition-transform duration-500`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: flippedCards.internships[actualIdx] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                  >
                    {/* Front of Card */}
                    <div
                      className="absolute inset-0 bg-stone-100 rounded-2xl overflow-hidden shadow-lg"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      {/* Background Image */}
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      
                      {/* Content Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                        <div>
                          <h3 className="text-white font-semibold text-lg md:text-xl leading-tight mb-1">{item.title}</h3>
                          <div className="text-white/90 text-sm md:text-base leading-relaxed mb-1" style={{ minHeight: '2.5rem' }}>{item.role}</div>
                          <p className="text-white/80 text-sm leading-tight">{item.years}</p>
                        </div>
                        
                        {/* Plus Icon */}
                        <button
                          onClick={() => toggleCard('internships', actualIdx)}
                          className="absolute bottom-6 right-6 bg-white rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Back of Card */}
                    <div
                      className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
                      style={{ 
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      {/* Blurred Background Image */}
                      <div className="absolute inset-0">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                          style={{ filter: 'blur(20px)', transform: 'scale(1.1)' }}
                        />
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                      </div>

                      {/* Content */}
                      <div className="relative h-full p-8 flex flex-col">
                        {/* Header */}
                        <div className="mb-8">
                          <h3 className="text-white font-semibold text-2xl mb-1 drop-shadow-lg">{item.title}</h3>
                          <p className="text-white/80 text-sm drop-shadow">{item.years}</p>
                        </div>

                        <div className="flex-grow space-y-6">
                          {/* Skills */}
                          <div>
                            <h4 className="text-white font-bold text-xs mb-3 uppercase tracking-wider drop-shadow">Skills</h4>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill, i) => (
                                <span key={i} className="bg-white/20 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/30 drop-shadow">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          {/* Organizations */}
                          <div>
                            <h4 className="text-white font-bold text-xs mb-3 uppercase tracking-wider drop-shadow">Teams</h4>
                            <div className="space-y-2">
                              {item.organizations.map((org, i) => (
                                <div key={i} className="flex items-start">
                                  <div className="w-1.5 h-1.5 rounded-full bg-white/80 mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-white/95 text-sm leading-relaxed drop-shadow">{org}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {/* Close Button */}
                        <button
                          onClick={() => toggleCard('internships', actualIdx)}
                          className="mt-6 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center self-end transition-all hover:scale-105 border border-white/30"
                        >
                          <svg className="w-5 h-5 text-white drop-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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