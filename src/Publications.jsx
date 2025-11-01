import React, { useState } from 'react';

export default function Publications() {
  const [conferenceePage, setConferencePage] = useState(0);
  const [workshopPage, setWorkshopPage] = useState(0);

  const conferencePublications = [
    {
      id: 1,
      title: 'Adaptive Robotic Systems for Assistive Care',
      authors: 'Evolone Layne, Maya Cakmak, Siddhartha Srinivasa',
      venue: 'IEEE International Conference on Robotics and Automation (ICRA)',
      year: '2025',
      type: 'Conference Paper',
      pdf: 'conference-paper-1.pdf'
    },
    {
      id: 2,
      title: 'Human-Robot Interaction in Domestic Environments',
      authors: 'Evolone Layne, Jane Smith, John Doe',
      venue: 'ACM/IEEE International Conference on Human-Robot Interaction (HRI)',
      year: '2025',
      type: 'Conference Paper',
      pdf: 'conference-paper-2.pdf'
    },
    {
      id: 3,
      title: 'Learning User Preferences for Personalized Assistance',
      authors: 'Evolone Layne, Maya Cakmak',
      venue: 'Conference on Robot Learning (CoRL)',
      year: '2024',
      type: 'Conference Paper',
      pdf: 'conference-paper-3.pdf'
    },
    {
      id: 4,
      title: 'Tactile Sensing for Delicate Object Manipulation',
      authors: 'Evolone Layne, Research Team',
      venue: 'Robotics: Science and Systems (RSS)',
      year: '2024',
      type: 'Conference Paper',
      pdf: 'conference-paper-4.pdf'
    },
    {
      id: 5,
      title: 'Accessible Technology Design Principles',
      authors: 'Evolone Layne, Accessibility Research Group',
      venue: 'ACM Conference on Human Factors in Computing Systems (CHI)',
      year: '2024',
      type: 'Conference Paper',
      pdf: 'conference-paper-5.pdf'
    },
    {
      id: 6,
      title: 'Multi-Agent Coordination in Dynamic Environments',
      authors: 'Evolone Layne, Siddhartha Srinivasa, Collaborators',
      venue: 'International Conference on Autonomous Agents and Multiagent Systems (AAMAS)',
      year: '2023',
      type: 'Conference Paper',
      pdf: 'conference-paper-6.pdf'
    }
  ];

  const workshopPublications = [
    {
      id: 1,
      title: 'Empowering Communities Through AI Education',
      authors: 'Evolone Layne',
      venue: 'NeurIPS Workshop on AI for Social Good',
      year: '2024',
      type: 'Workshop Paper',
      pdf: 'workshop-paper-1.pdf'
    },
    {
      id: 2,
      title: 'Bridging the Digital Divide with Accessible Robotics',
      authors: 'Evolone Layne, Community Partners',
      venue: 'AAAI Workshop on AI and Accessibility',
      year: '2024',
      type: 'Workshop Paper',
      pdf: 'workshop-paper-2.pdf'
    },
    {
      id: 3,
      title: 'Music Generation Using Machine Learning',
      authors: 'Evolone Layne',
      venue: 'ICML Workshop on Machine Learning for Creativity',
      year: '2024',
      type: 'Workshop Paper',
      pdf: 'workshop-paper-3.pdf'
    },
    {
      id: 4,
      title: 'Inclusive Design in Human-Robot Interaction',
      authors: 'Evolone Layne, HRI Research Team',
      venue: 'HRI Workshop on Inclusive HRI',
      year: '2023',
      type: 'Workshop Paper',
      pdf: 'workshop-paper-4.pdf'
    },
    {
      id: 5,
      title: 'Real-Time Learning in Assistive Robotics',
      authors: 'Evolone Layne, Maya Cakmak',
      venue: 'RSS Workshop on Assistive Robotics',
      year: '2023',
      type: 'Workshop Paper',
      pdf: 'workshop-paper-5.pdf'
    },
    {
      id: 6,
      title: 'Ethical Considerations in AI Development',
      authors: 'Evolone Layne, Ethics Committee',
      venue: 'AAAI/ACM Conference on AI, Ethics, and Society Workshop',
      year: '2023',
      type: 'Workshop Paper',
      pdf: 'workshop-paper-6.pdf'
    }
  ];

  const publicationsPerPage = 3;
  const totalConferencePages = Math.ceil(conferencePublications.length / publicationsPerPage);
  const totalWorkshopPages = Math.ceil(workshopPublications.length / publicationsPerPage);

  const getCurrentConference = () => {
    const start = conferenceePage * publicationsPerPage;
    return conferencePublications.slice(start, start + publicationsPerPage);
  };

  const getCurrentWorkshop = () => {
    const start = workshopPage * publicationsPerPage;
    return workshopPublications.slice(start, start + publicationsPerPage);
  };

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen bg-stone-100" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-stone-100 z-50 border-b border-stone-200">
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

      {/* Conference Publications Section */}
      <section className="bg-white snap-start snap-always min-h-screen">
        <div className="h-screen flex flex-col justify-center py-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="mb-8 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Conference Publications.</h2>
              <p className="text-stone-600 text-base md:text-lg">Peer-reviewed research published at top-tier conferences</p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:gap-8 mb-8 md:mb-12">
              {getCurrentConference().map((pub) => (
                <div
                  key={pub.id}
                  className="group relative bg-white border-2 border-stone-900 rounded-lg p-6 hover:shadow-xl transition cursor-pointer"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold bg-stone-900 text-white px-3 py-1 rounded-full">
                          {pub.type}
                        </span>
                        <span className="text-sm text-stone-600">{pub.year}</span>
                      </div>
                      
                      <h3 className="font-bold text-xl mb-2">{pub.title}</h3>
                      <p className="text-sm text-stone-600 mb-2">{pub.authors}</p>
                      <p className="text-sm text-stone-800 italic">{pub.venue}</p>
                    </div>

                    {/* PDF Icon */}
                    <div className="flex-shrink-0 bg-stone-900 rounded-full w-12 h-12 flex items-center justify-center group-hover:scale-110 transition">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => setConferencePage(Math.max(0, conferenceePage - 1))}
                disabled={conferenceePage === 0}
                className={`w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center transition ${
                  conferenceePage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-stone-100'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => setConferencePage(Math.min(totalConferencePages - 1, conferenceePage + 1))}
                disabled={conferenceePage === totalConferencePages - 1}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                  conferenceePage === totalConferencePages - 1 
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

      {/* Workshop Publications Section */}
      <section className="bg-stone-100 snap-start snap-always min-h-screen">
        <div className="h-screen flex flex-col justify-center py-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="mb-8 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Workshop Papers & Posters.</h2>
              <p className="text-stone-600 text-base md:text-lg">Extended abstracts and presentations at academic workshops</p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:gap-8 mb-8 md:mb-12">
              {getCurrentWorkshop().map((pub) => (
                <div
                  key={pub.id}
                  className="group relative bg-stone-900 text-white rounded-lg p-6 hover:shadow-xl transition cursor-pointer"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold bg-white text-stone-900 px-3 py-1 rounded-full">
                          {pub.type}
                        </span>
                        <span className="text-sm text-stone-300">{pub.year}</span>
                      </div>
                      
                      <h3 className="font-bold text-xl mb-2">{pub.title}</h3>
                      <p className="text-sm text-stone-300 mb-2">{pub.authors}</p>
                      <p className="text-sm text-white italic">{pub.venue}</p>
                    </div>

                    {/* PDF Icon */}
                    <div className="flex-shrink-0 bg-white rounded-full w-12 h-12 flex items-center justify-center group-hover:scale-110 transition">
                      <svg className="w-6 h-6 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => setWorkshopPage(Math.max(0, workshopPage - 1))}
                disabled={workshopPage === 0}
                className={`w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center transition ${
                  workshopPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-stone-100'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => setWorkshopPage(Math.min(totalWorkshopPages - 1, workshopPage + 1))}
                disabled={workshopPage === totalWorkshopPages - 1}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                  workshopPage === totalWorkshopPages - 1 
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