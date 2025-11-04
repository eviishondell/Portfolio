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

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mediaPage, setMediaPage] = useState(0);
  const [heroRef, heroVisible] = useScrollAnimation();
  const [aboutRef, aboutVisible] = useScrollAnimation();

  const mediaAppearances = [
    {
      title: 'Glamour Magazine.',
      description: 'Evolone merges music and AI to build powerful experiences.',
      image: '/img/glamour-img.png',
      url: 'https://www.glamour.com/story/hbcu-college-woman-of-the-year-evolone-layne'
    },
    {
      title: 'BET.',
      description: 'Evolone uses AI to empower underrepresented communities.',
      image: '/img/bet-img.png',
      url: 'https://www.bet.com/article/lqo08m/glamour-cwoty-evolone-layne'
    },
    {
      title: 'Grow with Google.',
      description: 'When Evolone became a mentor, she was inspired to do more in her own career.',
      image: '/img/google-img.png',
      url: 'https://www.youtube.com/watch?v=6K8tKDz-sTk'
    },
    {
      title: 'Google for Developers',
      description: 'Meet Evolone, Google Developer Student Club Lead at Howard University in Washington, D.C..',
      image: '/img/gdev-img.png',
      url: 'https://www.youtube.com/watch?v=3Ro9NvQiYzM'
    }
  ];

  const mediaPerPage = 4;
  const totalMediaPages = Math.ceil(mediaAppearances.length / mediaPerPage);

  const getCurrentMedia = () => {
    const start = mediaPage * mediaPerPage;
    return mediaAppearances.slice(start, start + mediaPerPage);
  };

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen bg-stone-100 font-sans" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-stone-100 z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-light tracking-wide">EVOLONE</div>
          <div className="flex gap-8 text-sm">
            <a href="#home" className="hover:text-stone-600 transition">Home</a>
            <a href="/projects" className="hover:text-stone-600 transition">Projects</a>
            <a href="/publications" className="hover:text-stone-600 transition">Publications</a>
            <a href="/about" className="hover:text-stone-600 transition">About Me</a>
          </div>
        </div>
      </nav>

{/* Hero Section - Apple Style with Animations */}
<section ref={heroRef} className="bg-white snap-start snap-always min-h-screen relative" id="home">
  <div className="h-screen flex flex-col justify-center items-center px-6">
    <div className="max-w-4xl mx-auto text-center space-y-6">
      
      {/* Main Headline */}
      <h1 className={`text-5xl md:text-7xl lg:text-8xl font-semibold text-stone-900 tracking-tight leading-none transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        Building robots that<br/>understand people.
      </h1>
      
      {/* Subheadline */}
      <p className={`text-xl md:text-2xl text-stone-600 font-normal max-w-3xl mx-auto transition-all duration-1000 delay-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        PhD research in human-robot interaction. Working directly with people with disabilities to design technology that actually works for them — not around them.
      </p>

      {/* Clean CTAs */}
      <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 transition-all duration-1000 delay-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <a 
          href="#about"
          className="text-blue-600 hover:text-blue-700 text-lg font-normal hover:underline transition-all"
        >
          Learn more →
        </a>
        <span className="hidden sm:block text-stone-300">|</span>
        <a 
          href="/cv/Layne_Evolone_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 text-lg font-normal hover:underline transition-all"
        >
          View CV →
        </a>
      </div>

    </div>

    {/* Signature */}
    <div className={`absolute bottom-20 text-stone-400 text-sm font-normal transition-all duration-1000 delay-1500 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}>
      Evolone Layne
    </div>
  </div>
</section>

           {/* About Me Section */}
      <section ref={aboutRef} className="bg-stone-100 snap-start snap-always min-h-screen" id="about">
        <div className="min-h-screen flex items-center py-20">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <h2 className={`text-4xl md:text-5xl font-bold mb-16 transition-all duration-1000 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              About Me.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Profile Image - Left */}
              <div className={`transition-all duration-1000 delay-200 ${aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/img/profile-pic2.png" 
                    alt="Evolone Layne Profile" 
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>
              </div>

              {/* Text Content - Right */}
              <div className={`transition-all duration-1000 delay-400 ${aboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <p className="text-lg leading-relaxed mb-8 text-stone-700">
                  My name is Evolone Layne, and I&apos;m a first-year PhD student at the Paul G. Allen School of Computer Science & Engineering at the University of Washington. I&apos;m co-advised by <span className="font-semibold text-stone-900">Maya Cakmak</span> from the <span className="font-semibold text-stone-900">Human-Computer Robotics Lab</span> and <span className="font-semibold text-stone-900">Siddhartha Srinivasa</span> from the <span className="font-semibold text-stone-900">Personal Robotics Lab</span>. My research focuses on developing <span className="font-semibold text-stone-900">assistive robots for individuals with disabilities</span>. I earned my <span className="font-semibold text-stone-900">Master&apos;s degree in Human-Computer Interaction</span> from <span className="font-semibold text-stone-900">Carnegie Mellon University</span> in July 2025, and my <span className="font-semibold text-stone-900">Bachelor&apos;s degree in Computer Science</span> from <span className="font-semibold text-stone-900">Howard University</span> in December 2023.
                </p>

                <div className={`transition-all duration-1000 delay-600 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <a 
                    href="/cv/Layne_Evolone_CV.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-stone-900 text-white px-8 py-3 rounded-full hover:bg-stone-800 transition-all text-base font-medium"
                  >
                    View My CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Media Appearances Section */}
      <section className="bg-white snap-start snap-always min-h-screen pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Media Appearances.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
              {getCurrentMedia().map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target={item.url ? "_blank" : undefined}
                  rel={item.url ? "noopener noreferrer" : undefined}
                  className="group relative bg-white border-2 border-stone-900 rounded-lg overflow-hidden hover:shadow-xl transition block"
                >
                  <div className="flex items-center p-3 gap-3">
                    {/* Logo/Image - Zoomed in */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden bg-stone-100">
                      {item.image.startsWith('/img/') ? (
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                          style={{ transform: 'scale(1.5)', objectPosition: 'center' }}
                        />
                      ) : (
                        <div className="w-full h-full bg-stone-200 flex items-center justify-center text-xs text-stone-600">
                          {item.title.split('.')[0]}
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow min-w-0">
                      <h3 className="font-bold text-sm md:text-base mb-0.5">{item.title}</h3>
                      <p className="text-stone-600 text-xs line-clamp-1">{item.description}</p>
                    </div>
                    
                    {/* Arrow Icon */}
                    <div className="flex-shrink-0 bg-stone-900 rounded-full w-8 h-8 flex items-center justify-center group-hover:scale-110 transition">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media Section */}
                        <div className="mt-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Connect With Me.</h3>
              
              <div className="grid grid-cols-6 gap-3">
                {/* <div className="flex flex-wrap col-span-2 gap-3"> */}
                  {/* LinkedIn */}
                  <a
                  href="https://www.linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border-2 border-stone-900 rounded-lg p-3 hover:shadow-xl transition flex items-center gap-2"
                >
                  <div className="bg-stone-900 rounded-lg w-10 h-10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span className="font-semibold text-sm">LinkedIn</span>
                </a>

                {/* Gmail */}
                <a
                  href="mailto:your.email@gmail.com"
                  className="group bg-white border-2 border-stone-900 rounded-lg p-3 hover:shadow-xl transition flex items-center gap-2"
                >
                  <div className="bg-stone-900 rounded-lg w-10 h-10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"/>
                    </svg>
                  </div>
                  <span className="font-semibold text-sm">Gmail</span>
                </a>

                {/* Google Scholar */}
                <a
                  href="https://scholar.google.com/citations?user=YOUR_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border-2 border-stone-900 rounded-lg p-3 hover:shadow-xl transition flex items-center gap-2"
                >
                  <div className="bg-stone-900 rounded-lg w-10 h-10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5 12 0z"/>
                    </svg>
                  </div>
                  <span className="font-semibold text-sm">Scholar</span>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com/@eviishondell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border-2 border-stone-900 rounded-lg p-3 hover:shadow-xl transition flex items-center gap-2"
                >
                  <div className="bg-stone-900 rounded-lg w-10 h-10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.05A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </div>
                  <span className="font-semibold text-sm">TikTok</span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border-2 border-stone-900 rounded-lg p-3 hover:shadow-xl transition flex items-center gap-2"
                >
                  <div className="bg-stone-900 rounded-lg w-10 h-10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <span className="font-semibold text-sm">GitHub</span>
                </a>
                
                {/* Linktree */}
                <a
                  href="https://linktr.ee/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                                  className="group bg-white border-2 border-stone-900 rounded-lg p-3 hover:shadow-xl transition flex items-center gap-2"
                >
                  <div className="bg-stone-900 rounded-lg w-10 h-10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.89h1.294v4.776c0 .486-.404.89-.89.89H6.577a.898.898 0 0 1-.889-.891v-4.774H.992c-.728 0-1.214-.729-.89-1.377l6.96-12.627a1.065 1.065 0 0 1 1.863 0l2.913 5.585-3.885 7.042zm15.945 0-6.96-12.627a1.065 1.065 0 0 0-1.862 0l-2.995 5.586 3.885 7.04c.081.164.081.326.081.487-.08.517-.529.897-1.052.89h-1.296v4.776c.005.49.4.887.89.89h2.914a.9.9 0 0 0 .892-.89v-4.775h4.612c.73 0 1.214-.729.89-1.377z"/>
                    </svg>
                  </div>
                  <span className="font-semibold text-sm">Linktree</span>
                </a>
                </div>
              </div>
            </div>
            

            {/* Navigation Arrows
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={() => setMediaPage(Math.max(0, mediaPage - 1))}
                disabled={mediaPage === 0}
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full border border-stone-300 flex items-center justify-center transition ${
                  mediaPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-stone-100'
                }`}
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => setMediaPage(Math.min(totalMediaPages - 1, mediaPage + 1))}
                disabled={mediaPage === totalMediaPages - 1}
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition ${
                  mediaPage === totalMediaPages - 1 
                    ? 'bg-stone-300 cursor-not-allowed' 
                    : 'bg-stone-900 text-white hover:bg-stone-800'
                }`}
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div> */}
          {/* </div> */}
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