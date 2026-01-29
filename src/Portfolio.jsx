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

export default function Portfolio() {
  // Ensure mediaVisible and mediaRef are defined to prevent runtime errors
  const mediaVisible = true;
  const mediaRef = React.useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mediaPage, setMediaPage] = useState(0);
  const [heroRef, heroVisible] = useScrollAnimation();
  const [aboutRef, aboutVisible] = useScrollAnimation();

  const mediaAppearances = [
  {
    title: 'Glamour Magazine',
    description: 'Evolone merges music and AI to build powerful experiences.',
    image: '/Portfolio/img/glamour-img.png',
    url: 'https://www.glamour.com/story/hbcu-college-woman-of-the-year-evolone-layne'
  },
  {
    title: 'BET',
    description: 'Evolone uses AI to empower underrepresented communities.',
    image: '/Portfolio/img/bet-img.png',
    url: 'https://www.bet.com/article/lqo08m/glamour-cwoty-evolone-layne'
  },
  {
    title: 'Grow with Google',
    description: 'When Evolone became a mentor, she was inspired to do more in her own career.',
    image: '/Portfolio/img/google-img.png',
    url: 'https://www.youtube.com/watch?v=6K8tKDz-sTk'
  },
  {
    title: 'Google for Developers',
    description: 'Meet Evolone, Google Developer Student Club Lead at Howard University in Washington, D.C..',
    image: '/Portfolio/img/gdev-img.png',
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
          <Link to="/" className="hover:text-stone-600 transition">Home</Link>
          <Link to="/projects" className="hover:text-stone-600 transition">Projects</Link>
          <Link to="/publications" className="hover:text-stone-600 transition">Publications</Link>
          <Link to="/about" className="hover:text-stone-600 transition">About Me</Link>
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
<section ref={aboutRef} className="bg-white snap-start snap-always min-h-screen" id="about">
  <div className="min-h-screen flex items-center py-20">
    <div className="max-w-5xl mx-auto px-6 w-full">
      
      {/* Header */}
      <div className={`text-center mb-16 transition-all duration-1000 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-4xl md:text-6xl font-semibold text-stone-900 mb-4">
          About Me.
        </h2>
        <p className="text-xl text-stone-600 font-normal">
          Researcher • Innovator • Advocate
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-3 gap-12 items-start">
        
        {/* Profile Image - Takes 1 column */}
        <div className={`md:col-span-1 transition-all duration-1000 delay-200 ${aboutVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
            <img 
              src="/Portfolio/img/profile-pic2.png"
              alt="Evolone Layne" 
              className="w-full h-full object-cover"
              style={{ 
                objectPosition: 'center 30%',
                transform: 'scale(1.15)'
              }}
            />
          </div>
        </div>

        {/* Text Content - Takes 2 columns */}
        <div className={`md:col-span-2 transition-all duration-1000 delay-400 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-stone-700">
              My name is <span className="font-semibold text-stone-900">Evolone Layne</span>, and I&apos;m a first-year PhD student at the <span className="font-semibold text-stone-900">Paul G. Allen School of Computer Science & Engineering</span> at the University of Washington.
            </p>
            
            <p className="text-lg leading-relaxed text-stone-700">
              I&apos;m co-advised by <span className="font-semibold text-stone-900">Maya Cakmak</span> from the <span className="font-semibold text-stone-900">Human-Centered Robotics Lab</span>.
            </p>
            
            <p className="text-lg leading-relaxed text-stone-700">
              My research focuses on developing <span className="font-semibold text-stone-900">assistive robots for individuals with disabilities</span>.
            </p>

            <div className="pt-4 space-y-3 text-base text-stone-600">
              <div className="flex items-baseline gap-2">
                <span className="text-stone-400">•</span>
                <span><span className="font-semibold text-stone-900">MS in Human-Computer Interaction</span> from Carnegie Mellon University (2025)</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-stone-400">•</span>
                <span><span className="font-semibold text-stone-900">BS in Computer Science</span> from Howard University (2023)</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-stone-400">•</span>
                <span><span className="font-semibold text-stone-900">PhD in Computer Science & Engineering</span> from the University of Washington (2030)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

{/* Media Appearances Section */}
<section className="bg-stone-100 snap-start snap-always h-screen overflow-hidden">
  <div className="h-screen flex flex-col justify-center py-12">
    <div className="max-w-5xl mx-auto px-6 w-full">
      
      {/* Header - Centered */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-semibold text-stone-900 mb-3">
          In the News.
        </h2>
        <p className="text-lg text-stone-600 font-normal">
          Stories about innovation and impact
        </p>
      </div>
      
      {/* Media Grid - Sleeker Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
        {getCurrentMedia().map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Logo at top */}
            <div className="aspect-square bg-gradient-to-br from-stone-50 to-stone-100 flex items-center justify-center p-6 border-b border-stone-200">
              {item.image.startsWith('/img/') ? (
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-2xl font-bold text-stone-400">
                  {item.title.split('.')[0]}
                </div>
              )}
            </div>
            
            {/* Content at bottom */}
            <div className="p-4">
              <h3 className="font-semibold text-sm text-stone-900 mb-1 line-clamp-1">
                {item.title.replace('.', '')}
              </h3>
              <p className="text-stone-500 text-xs leading-relaxed line-clamp-2">
                {item.description}
              </p>
            </div>
            
            {/* Hover indicator */}
            <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-stone-900/0 group-hover:bg-stone-900 flex items-center justify-center transition-all">
              <svg className="w-3.5 h-3.5 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      {/* Social Media Section - Centered */}
      <div className="border-t border-stone-300 pt-10">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-stone-900 mb-2">
            Let's Connect.
          </h3>
        </div>
        
        <div className="flex justify-center gap-3 max-w-3xl mx-auto flex-wrap">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/evolonelayne"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-stone-200 rounded-full px-5 py-2.5 hover:border-[#0A66C2] hover:bg-[#0A66C2] transition-all flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-stone-700 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="font-medium text-xs text-stone-900 group-hover:text-white transition-colors">LinkedIn</span>
          </a>

          {/* Gmail */}
          <a
            href="mailto:evolone@uw.edu"
            className="group bg-white border border-stone-200 rounded-full px-5 py-2.5 hover:border-[#EA4335] hover:bg-[#EA4335] transition-all flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-stone-700 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"/>
            </svg>
            <span className="font-medium text-xs text-stone-900 group-hover:text-white transition-colors">Email</span>
          </a>

          {/* Google Scholar */}
          <a
            href="https://scholar.google.com/citations?hl=en&user=Qr2faHcAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-stone-200 rounded-full px-5 py-2.5 hover:border-[#4285F4] hover:bg-[#4285F4] transition-all flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-stone-700 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5 12 0z"/>
            </svg>
            <span className="font-medium text-xs text-stone-900 group-hover:text-white transition-colors">Scholar</span>
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com/@eviishondell"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-stone-200 rounded-full px-5 py-2.5 hover:border-black hover:bg-black transition-all flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-stone-700 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.05A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            <span className="font-medium text-xs text-stone-900 group-hover:text-white transition-colors">TikTok</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/eviishondell"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-stone-200 rounded-full px-5 py-2.5 hover:border-stone-900 hover:bg-stone-900 transition-all flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-stone-700 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="font-medium text-xs text-stone-900 group-hover:text-white transition-colors">GitHub</span>
          </a>
          
          {/* Linktree */}
          <a
            href="https://linktr.ee/evolone"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-stone-200 rounded-full px-5 py-2.5 hover:border-[#39E09B] hover:bg-[#39E09B] transition-all flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-stone-700 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.89h1.294v4.776c0 .486-.404.89-.89.89H6.577a.898.898 0 0 1-.889-.891v-4.774H.992c-.728 0-1.214-.729-.89-1.377l6.96-12.627a1.065 1.065 0 0 1 1.863 0l2.913 5.585-3.885 7.042zm15.945 0-6.96-12.627a1.065 1.065 0 0 0-1.862 0l-2.995 5.586 3.885 7.04c.081.164.081.326.081.487-.08.517-.529.897-1.052.89h-1.296v4.776c.005.49.4.887.89.89h2.914a.9.9 0 0 0 .892-.89v-4.775h4.612c.73 0 1.214-.729.89-1.377z"/>
            </svg>
            <span className="font-medium text-xs text-stone-900 group-hover:text-white transition-colors">Linktree</span>
          </a>
        </div>
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