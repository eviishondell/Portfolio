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

export default function PMDDProject() {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [overviewRef, overviewVisible] = useScrollAnimation();
  const [processRef, processVisible] = useScrollAnimation();
  const [outcomeRef, outcomeVisible] = useScrollAnimation();

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen bg-white font-sans" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-light tracking-wide">EVOLONE</a>
          <div className="flex gap-8 text-sm">
            <a href="/" className="hover:text-blue-600 transition">Home</a>
            <a href="/projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="/publications" className="hover:text-blue-600 transition">Publications</a>
            <a href="/about" className="hover:text-blue-600 transition">About Me</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-br from-blue-50 via-white to-blue-50 snap-start snap-always min-h-screen relative">
        <div className="h-screen flex flex-col justify-center items-center px-6">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            
            {/* Back Button */}
            <a 
              href="/projects"
              className={`inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">Back to Projects</span>
            </a>

            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent tracking-tight leading-none transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Self-Diagnosing PMDD.
            </h1>
            
            <p className={`text-xl md:text-2xl text-slate-700 font-normal max-w-3xl mx-auto transition-all duration-1000 delay-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              A mobile health platform empowering individuals to track, understand, and manage Premenstrual Dysphoric Disorder through data-driven insights.
            </p>

            {/* Tags */}
            <div className={`flex flex-wrap justify-center gap-3 pt-4 transition-all duration-1000 delay-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-xs bg-blue-100 text-blue-700 px-4 py-2 rounded-full border border-blue-200">Mobile Health</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-4 py-2 rounded-full border border-blue-200">Data Visualization</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-4 py-2 rounded-full border border-blue-200">UX Design</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-4 py-2 rounded-full border border-blue-200">React Native</span>
            </div>

          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={overviewRef} className="bg-gradient-to-br from-blue-50 via-white to-blue-50 snap-start snap-always min-h-screen">
        <div className="min-h-screen flex items-center py-20">
          <div className="max-w-5xl mx-auto px-6 w-full">
            
            <div className="grid md:grid-cols-2 gap-16">
              {/* Left Column */}
              <div className={`space-y-8 transition-all duration-1000 ${overviewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div>
                  <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
                    Overview.
                  </h2>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    PMDD affects millions of people, yet diagnosis often takes years due to the complexity of tracking symptoms across menstrual cycles. This project aims to simplify the diagnostic process through intuitive data collection and visualization.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-2">Role</h3>
                    <p className="text-slate-700">Lead Designer & Developer</p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-2">Timeline</h3>
                    <p className="text-slate-700">8 weeks</p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-2">Team</h3>
                    <p className="text-slate-700">Solo Project</p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className={`space-y-8 transition-all duration-1000 delay-300 ${overviewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="p-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl text-white shadow-xl">
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-4 opacity-90">The Challenge</h3>
                  <p className="text-lg leading-relaxed">
                    How might we create a tool that helps individuals track PMDD symptoms effectively while providing clinically relevant data for healthcare providers?
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start p-3 bg-white rounded-lg border border-blue-100 hover:border-blue-300 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Daily symptom tracking with customizable parameters</span>
                    </li>
                    <li className="flex items-start p-3 bg-white rounded-lg border border-blue-100 hover:border-blue-300 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Pattern recognition across menstrual cycles</span>
                    </li>
                    <li className="flex items-start p-3 bg-white rounded-lg border border-blue-100 hover:border-blue-300 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Exportable reports for medical appointments</span>
                    </li>
                    <li className="flex items-start p-3 bg-white rounded-lg border border-blue-100 hover:border-blue-300 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">Privacy-first data architecture</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="bg-white snap-start snap-always min-h-screen">
        <div className="min-h-screen flex items-center py-20">
          <div className="max-w-5xl mx-auto px-6 w-full">
            
            <h2 className={`text-4xl md:text-5xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-16 transition-all duration-1000 ${processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Design Process.
            </h2>

            <div className="space-y-12">
              {/* Research */}
              <div className={`transition-all duration-1000 delay-200 ${processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center font-semibold shadow-lg shadow-blue-200">
                    1
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-3">Research & Discovery</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Conducted interviews with individuals experiencing PMDD and reviewed existing symptom tracking applications. Identified key pain points in current solutions, including lack of cycle-aware visualization and overwhelming data entry requirements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Design */}
              <div className={`transition-all duration-1000 delay-400 ${processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center font-semibold shadow-lg shadow-blue-200">
                    2
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-3">Design & Prototyping</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Created low-fidelity wireframes focusing on simplicity and ease of use. Iteratively refined the interface based on user feedback, prioritizing quick daily entries and meaningful data visualization that highlights cycle patterns.
                    </p>
                  </div>
                </div>
              </div>

              {/* Development */}
              <div className={`transition-all duration-1000 delay-600 ${processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center font-semibold shadow-lg shadow-blue-200">
                    3
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-3">Development & Testing</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Built the application using React Native for cross-platform compatibility. Implemented local-first data storage to ensure privacy and offline functionality. Conducted usability testing with target users to validate the approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section ref={outcomeRef} className="bg-gradient-to-br from-blue-50 via-white to-blue-50 snap-start snap-always min-h-screen">
        <div className="min-h-screen flex items-center py-20">
          <div className="max-w-5xl mx-auto px-6 w-full">
            
            <h2 className={`text-4xl md:text-5xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-12 transition-all duration-1000 ${outcomeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Impact & Learnings.
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className={`transition-all duration-1000 delay-200 ${outcomeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Outcomes</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span>Successfully validated concept with 15+ beta users</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span>Reduced average symptom logging time to under 30 seconds</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span>Generated actionable reports used in clinical consultations</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={`transition-all duration-1000 delay-400 ${outcomeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Key Learnings</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span>Simplicity is crucial for daily-use health tracking apps</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span>Privacy concerns are paramount in health data applications</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span>Cycle-aware visualization helps users identify patterns</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Next Project Link */}
            <div className={`mt-16 pt-16 border-t border-blue-200 transition-all duration-1000 delay-600 ${outcomeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a 
                href="/projects"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-all group"
              >
                <span className="text-lg font-medium">View All Projects</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
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