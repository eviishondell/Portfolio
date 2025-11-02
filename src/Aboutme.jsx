import React, { useState } from 'react';

export default function AboutMe() {
  const [internshipPage, setInternshipPage] = useState(0);
  const [flippedCards, setFlippedCards] = useState({
    education: {},
    internships: {}
  });

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
      image: '/img/hu-img.png',
      fellowships: ['Google Generation Scholarship', 'Karsh Stem Scholars Program'],
      organizations: ['National Society of Black Engineers', 'Women in Computer Science']
    },
    {
      title: 'Carnegie Mellon University.',
      degree: 'Master of Human-Computer Interaction',
      years: '2024-2025',
      image: '/img/cmu-img.png',
      fellowships: ['NSF Graduate Research Fellowship', 'CMU Presidential Fellowship'],
      organizations: ['Human-Computer Interaction Institute', 'Graduate Student Assembly']
    },
    {
      title: 'University of Washington.',
      degree: 'Doctorate of Philosophy in Computer Science & Engineering',
      years: '2025-2030',
      image: '/img/uw-img.png',
      fellowships: ['NSF Graduate Research Fellowship', 'Paul G. Allen Fellowship'],
      organizations: ['Personal Robotics Lab', 'Human-Centered Robotics Lab']
    }
  ];

  const internships = [
    {
      title: 'Apple.',
      role: 'Software Engineering Intern',
      years: '2022-2024',
      image: '/img/apple-img.png',
      fellowships: ['Apple Scholars Program'],
      organizations: ['Apple Developer Academy', 'Swift Student Challenge']
    },
    {
      title: 'NASA.',
      role: 'Research & Development Intern',
      years: '2025',
      image: '/img/nasa-img.png',
      fellowships: ['NASA Pathways Intern Program'],
      organizations: ['NASA STEM Engagement', 'Jet Propulsion Laboratory']
    },
    {
      title: 'MIT Lincoln Laboratory.',
      role: 'Research & Development Intern',
      years: '2025-Present',
      image: '/img/mit-img.png',
      fellowships: ['Lincoln Laboratory Graduate Fellowship'],
      organizations: ['AI Technology Group', 'Advanced Capabilities Group']
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
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-light tracking-wide">EVOLONE</div>
          <div className="flex gap-8 text-sm">
            <a href="/" className="hover:text-stone-600 transition">Home</a>
            <a href="/projects" className="hover:text-stone-600 transition">Projects</a>
            <a href="/publications" className="hover:text-stone-600 transition">Publications</a>
            <a href="/about" className="hover:text-stone-600 transition font-semibold">About Me</a>
          </div>
        </div>
      </nav>

      {/* Education Section */}
      <section className="pt-32 pb-8 bg-white snap-start snap-always min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Education.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {education.map((item, idx) => (
              <div
                key={idx}
                className="relative aspect-[3/4] cursor-pointer"
                style={{ perspective: '1000px' }}
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
                    className="absolute inset-0 bg-stone-900 rounded-2xl overflow-hidden shadow-lg p-6 flex flex-col"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className="flex-grow overflow-y-auto">
                      <h3 className="text-white font-semibold text-lg md:text-xl mb-6">{item.title}</h3>
                      
                      {/* Fellowships */}
                      <div className="mb-6">
                        <h4 className="text-white/80 text-sm font-semibold mb-3 uppercase tracking-wide">Fellowships</h4>
                        <ul className="space-y-2">
                          {item.fellowships.map((fellowship, i) => (
                            <li key={i} className="text-white/90 text-sm flex items-start">
                              <span className="mr-2">•</span>
                              <span>{fellowship}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Organizations */}
                      <div>
                        <h4 className="text-white/80 text-sm font-semibold mb-3 uppercase tracking-wide">Organizations</h4>
                        <ul className="space-y-2">
                          {item.organizations.map((org, i) => (
                            <li key={i} className="text-white/90 text-sm flex items-start">
                              <span className="mr-2">•</span>
                              <span>{org}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Close Button */}
                    <button
                      onClick={() => toggleCard('education', idx)}
                      className="mt-4 bg-white rounded-full w-10 h-10 flex items-center justify-center self-end hover:scale-110 transition"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows would go here if pagination is added */}
        </div>
      </section>

      {/* Internships Section */}
      <section className="pt-32 pb-8 bg-white snap-start snap-always min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Internships.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {getCurrentInternships().map((item, idx) => {
              const actualIdx = internshipPage * internshipsPerPage + idx;
              return (
                <div
                  key={actualIdx}
                  className="relative aspect-[3/4] cursor-pointer"
                  style={{ perspective: '1000px' }}
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
                      className="absolute inset-0 bg-stone-900 rounded-2xl overflow-hidden shadow-lg p-6 flex flex-col"
                      style={{ 
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <div className="flex-grow overflow-y-auto">
                        <h3 className="text-white font-semibold text-lg md:text-xl mb-6">{item.title}</h3>
                        
                        {/* Fellowships */}
                        <div className="mb-6">
                          <h4 className="text-white/80 text-sm font-semibold mb-3 uppercase tracking-wide">Fellowships</h4>
                          <ul className="space-y-2">
                            {item.fellowships.map((fellowship, i) => (
                              <li key={i} className="text-white/90 text-sm flex items-start">
                                <span className="mr-2">•</span>
                                <span>{fellowship}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Organizations */}
                        <div>
                          <h4 className="text-white/80 text-sm font-semibold mb-3 uppercase tracking-wide">Organizations</h4>
                          <ul className="space-y-2">
                            {item.organizations.map((org, i) => (
                              <li key={i} className="text-white/90 text-sm flex items-start">
                                <span className="mr-2">•</span>
                                <span>{org}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {/* Close Button */}
                      <button
                        onClick={() => toggleCard('internships', actualIdx)}
                        className="mt-4 bg-white rounded-full w-10 h-10 flex items-center justify-center self-end hover:scale-110 transition"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={() => setInternshipPage(Math.max(0, internshipPage - 1))}
              disabled={internshipPage === 0}
              className={`w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center transition ${
                internshipPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-stone-100'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => setInternshipPage(Math.min(totalInternshipPages - 1, internshipPage + 1))}
              disabled={internshipPage === totalInternshipPages - 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                internshipPage === totalInternshipPages - 1 
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