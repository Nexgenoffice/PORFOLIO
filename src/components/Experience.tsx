import React from 'react';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 forest-background relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-to-br from-luxury-300/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gradient-to-br from-forest-300/30 to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Parcours Professionnel</h2>
          <div className="w-24 h-1 bg-forest-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-forest-700 max-w-3xl mx-auto font-medium">
            Mon parcours entrepreneurial et technique, des premiers projets aux réalisations actuelles
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-luxury-300 via-forest-300 to-luxury-300 hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-forest-600 to-luxury-600 rounded-full border-4 border-white shadow-lg hidden lg:block z-10"></div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="card p-8 relative">
                    {/* Arrow for desktop */}
                    <div className={`absolute top-8 hidden lg:block ${
                      index % 2 === 0 
                        ? 'right-0 transform translate-x-full' 
                        : 'left-0 transform -translate-x-full'
                    }`}>
                      <div className={`w-0 h-0 border-t-8 border-b-8 border-transparent ${
                        index % 2 === 0 
                          ? 'border-l-8 border-l-white' 
                          : 'border-r-8 border-r-white'
                      }`}></div>
                    </div>

                    {/* Duration Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-luxury-100 text-luxury-800 mb-4 border border-luxury-200">
                      {exp.duration}
                    </div>

                    {/* Company & Position */}
                    <h3 className="text-2xl font-bold text-forest-900 mb-2 finance-title">{exp.position}</h3>
                    <h4 className="text-xl text-forest-700 font-semibold mb-4 finance-title-sm">{exp.company}</h4>

                    {/* Description */}
                    <p className="text-forest-700 mb-6 leading-relaxed finance-text">{exp.description}</p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h5 className="font-semibold text-forest-900 mb-3 finance-title-sm">Réalisations clés :</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-forest-700 finance-text">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden lg:block w-2/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 pt-16 border-t border-luxury-300/50">
          <h3 className="text-2xl font-bold text-forest-900 mb-4">
            Prêt à démarrer votre prochain projet ?
          </h3>
          <p className="text-forest-700 mb-8 max-w-2xl mx-auto font-medium">
            Mon expérience entrepreneuriale et technique peut vous aider à concrétiser vos idées et à faire croître votre business.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Discutons de votre projet
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;