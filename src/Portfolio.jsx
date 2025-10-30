import React, { useState } from 'react';

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSlides = [
    {
      id: 1,
      placeholderImage: 'Glamour Magazine Feature'
    },
    {
      id: 2,
      placeholderImage: 'Feature Slide 2'
    },
    {
      id: 3,
      placeholderImage: 'Feature Slide 3'
    },
    {
      id: 4,
      placeholderImage: 'Feature Slide 4'
    }
  ];

  const mediaAppearances = [
    {
      title: 'Glamour Magazine.',
      description: 'Evolone merges music and AI to build powerful experiences.',
      image: 'glamour-feature'
    },
    {
      title: 'BET.',
      description: 'Evolone uses AI to empower underrepresented communities.',
      image: 'bet-feature'
    },
    {
      title: 'Grow with Google.',
      description: 'Video feature highlighting Evolone\'s journey and impact.',
      image: 'google-feature'
    }
  ];

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen bg-stone-100 font-sans" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-stone-100 z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-light tracking-wide">EVOLONE</div>
          <div className="flex gap-8 text-sm">
            <a href="#home" className="hover:text-stone-600 transition">Home</a>
            <a href="#projects" className="hover:text-stone-600 transition">Projects</a>
            <a href="#publications" className="hover:text-stone-600 transition">Publications</a>
            <a href="#about" className="hover:text-stone-600 transition">About Me</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Carousel */}
      <section className="bg-white snap-start snap-always min-h-screen" id="home">
        <div className="h-screen flex flex-col justify-center py-8">
          <div className="max-w-6xl mx-auto px-6 w-full">
            {/* Carousel Container */}
            <div className="relative overflow-hidden group mb-6 md:mb-10">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentSlide * 100}%)`,
                  animation: currentSlide === 0 ? 'wiggle 2s ease-in-out 3' : 'none'
                }}
              >
                {carouselSlides.map((slide) => (
                  <div key={slide.id} className="w-full flex-shrink-0">
                    <div className="w-full">
                      {/* Placeholder Image for entire slide */}
                      <div className="bg-gradient-to-br from-stone-200 to-stone-300 rounded-lg aspect-video flex items-center justify-center text-stone-600 text-xl md:text-2xl font-medium shadow-lg">
                        {slide.placeholderImage}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-3">
              {carouselSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'bg-stone-500 scale-110' : 'bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="bg-stone-100 snap-start snap-always min-h-screen" id="about">
        <div className="h-screen flex flex-col justify-center py-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16">About Me.</h2>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              {/* Placeholder Image - Left */}
              <div className="bg-gradient-to-br from-stone-300 to-stone-400 rounded-lg aspect-square flex items-center justify-center text-stone-600 text-lg md:text-xl font-medium shadow-lg">
                Profile Image
              </div>

              {/* Text Content - Right */}
              <div className="max-w-md">
                <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  My name is Evolone Layne, and I'm a first-year PhD student at the Paul G. Allen School of Computer Science & Engineering at the University of Washington. I'm co-advised by <span className="font-bold">Maya Cakmak</span> from the <span className="font-bold">Human-Computer Robotics Lab</span> and <span className="font-bold">Siddhartha Srinivasa</span> from the <span className="font-bold">Personal Robotics Lab</span>. My research focuses on developing <span className="font-bold">assistive robots for individuals with disabilities</span>. I earned my <span className="font-bold">Master's degree in Human-Computer Interaction</span> from <span className="font-bold">Carnegie Mellon University</span> in July 2025, and my <span className="font-bold">Bachelor's degree in Computer Science</span> from <span className="font-bold">Howard University</span> in December 2023.
                </p>

                <div>
                  <button className="bg-black text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full hover:bg-stone-800 transition text-sm md:text-base">
                    Learn More.
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Appearances Section */}
      <section className="bg-white snap-start snap-always min-h-screen">
        <div className="h-screen flex flex-col justify-end pb-20 overflow-y-auto">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16">Media Appearances.</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              {mediaAppearances.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative bg-stone-900 rounded-lg overflow-hidden aspect-[3/5] cursor-pointer hover:shadow-xl transition"
                >
                  {/* Placeholder Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-700 to-stone-900 flex items-center justify-center text-white text-xs md:text-sm">
                    {item.image}
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-4 md:p-6">
                    <div>
                      <h3 className="text-white font-semibold text-base md:text-lg mb-1 md:mb-2">{item.title}</h3>
                      <p className="text-white/90 text-xs md:text-sm">{item.description}</p>
                    </div>
                    
                    {/* Arrow Icon */}
                    <div className="self-end bg-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center group-hover:scale-110 transition">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4">
              <button className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-100 transition">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-stone-800 transition">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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