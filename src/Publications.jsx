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

export default function Publications() {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [conferenceRef, conferenceVisible] = useScrollAnimation();
  const [workshopRef, workshopVisible] = useScrollAnimation();

  const conferencePublications = [
    {
      id: 1,
      title: 'Attitudes towards Humanoid Robots for In-Home Assistance',
      authors: 'Radka, B., Layne E., & Cakmak, M.',
      venue: 'IEEE International Conference on Robot and Human Interactive Communication (RO-MAN)',
      year: '2025',
      type: 'Conference Paper',
      pdf: 'https://ieeexplore.ieee.org/document/11217783'
    }
  ];

  const workshopPublications = [
    {
      id: 1,
      title: 'Replicating Bugs Faster',
      authors: 'Layne E. and Mostow, J.',
      venue: 'Working Papers Journal 9, pp. 155-156',
      year: '2021',
      type: 'Workshop Paper',
      pdf: 'https://riss.ri.cmu.edu/wp-content/uploads/2021/10/2021-CMU-RoboticsInstitute_SummerScholars-WorkingPapersJournal-Sized-compressed.pdf'
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
            <a href="/projects" className="hover:text-stone-600 transition">Projects</a>
            <a href="/publications" className="hover:text-stone-600 transition font-semibold">Publications</a>
            <a href="/about" className="hover:text-stone-600 transition">About Me</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="bg-white snap-start snap-always min-h-screen relative">
        <div className="h-screen flex flex-col justify-center items-center px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-semibold text-stone-900 tracking-tight leading-none transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Publications.
            </h1>
            
            <p className={`text-xl md:text-2xl text-stone-600 font-normal max-w-3xl mx-auto transition-all duration-1000 delay-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Peer-reviewed research in robotics, human-computer interaction, and accessible technology design.
            </p>

            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 transition-all duration-1000 delay-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a 
                href="#conference"
                className="text-blue-600 hover:text-blue-700 text-lg font-normal hover:underline transition-all"
              >
                Conference papers →
              </a>
              <span className="hidden sm:block text-stone-300">|</span>
              <a 
                href="#workshop"
                className="text-blue-600 hover:text-blue-700 text-lg font-normal hover:underline transition-all"
              >
                Workshop papers →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Conference Publications Section */}
      <section ref={conferenceRef} id="conference" className="bg-stone-100 snap-start snap-always min-h-screen">
        <div className="min-h-screen flex items-center py-20">
          <div className="max-w-5xl mx-auto px-6 w-full">
            
            <div className={`text-center mb-16 transition-all duration-1000 ${conferenceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-6xl font-semibold text-stone-900 mb-4">
                Conference Papers.
              </h2>
              <p className="text-xl text-stone-600 font-normal">
                Peer-reviewed research at top-tier venues
              </p>
            </div>
            
            <div className="space-y-6">
              {conferencePublications.map((pub, idx) => (
                <div
                  key={pub.id}
                  className={`group bg-white rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-stone-200 ${conferenceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${(idx + 1) * 150}ms` }}
                >
                  <div className="flex justify-between items-start gap-6">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold text-stone-600">
                          {pub.year}
                        </span>
                      </div>
                      
                      <h3 className="font-semibold text-xl md:text-2xl text-stone-900 mb-3 leading-snug">{pub.title}</h3>
                      <p className="text-sm text-stone-600 mb-2">{pub.authors}</p>
                      <p className="text-sm text-stone-700 italic">{pub.venue}</p>
                    </div>

                    {/* PDF Icon - only show if PDF exists */}
                    {pub.pdf && (
                      <a 
                        href={pub.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 w-12 h-12 rounded-full bg-stone-100 group-hover:bg-stone-900 flex items-center justify-center transition-all"
                      >
                        <svg className="w-5 h-5 text-stone-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Publications Section */}
      <section ref={workshopRef} id="workshop" className="bg-white snap-start snap-always min-h-screen">
        <div className="min-h-screen flex items-center py-20">
          <div className="max-w-5xl mx-auto px-6 w-full">
            
            <div className={`text-center mb-16 transition-all duration-1000 ${workshopVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-6xl font-semibold text-stone-900 mb-4">
                Workshop Papers.
              </h2>
              <p className="text-xl text-stone-600 font-normal">
                Extended abstracts and presentations
              </p>
            </div>
            
            <div className="space-y-6">
              {workshopPublications.map((pub, idx) => (
                <div
                  key={pub.id}
                  className={`group bg-stone-100 rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${workshopVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${(idx + 1) * 150}ms` }}
                >
                  <div className="flex justify-between items-start gap-6">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold text-stone-600">
                          {pub.year}
                        </span>
                      </div>
                      
                      <h3 className="font-semibold text-xl md:text-2xl text-stone-900 mb-3 leading-snug">{pub.title}</h3>
                      <p className="text-sm text-stone-600 mb-2">{pub.authors}</p>
                      <p className="text-sm text-stone-700 italic">{pub.venue}</p>
                    </div>

                    {/* PDF Icon - only show if PDF exists */}
                    {pub.pdf && (
                      <a 
                        href={pub.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 w-12 h-12 rounded-full bg-white group-hover:bg-stone-900 flex items-center justify-center transition-all"
                      >
                        <svg className="w-5 h-5 text-stone-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </a>
                    )}
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