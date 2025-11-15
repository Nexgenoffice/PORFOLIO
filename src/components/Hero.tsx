import React from 'react';
import { personalInfo } from '../data/portfolio';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-pattern pt-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-luxury-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-forest-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-secondary-200/25 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[60vh]">
          
          {/* Business Card - Left Side */}
          <div className="lg:col-span-2 flex justify-start">
            <div className="business-card-authentic group">
              
              {/* Card Header */}
              <div className="flex justify-between items-start mb-10">
                <div className="text-xs text-gray-700 card-text-embossed tracking-[0.15em] font-medium">
                  +33 6 XX XX XX XX
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-gray-800 card-title-embossed tracking-[0.2em] mb-1">
                    TECH & INNOVATION
                  </div>
                  <div className="text-xs text-gray-600 card-text-embossed tracking-[0.12em]">
                    DÉVELOPPEMENT ET ACQUISITIONS
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="text-center mb-10">
                <h1 className="text-[2.2rem] font-bold text-gray-900 card-name-embossed tracking-[0.15em] mb-3 leading-tight">
                  {personalInfo.name.toUpperCase()}
                </h1>
                <h2 className="text-lg text-gray-700 card-title-embossed tracking-[0.25em] font-normal">
                  {personalInfo.title.toUpperCase()}
                </h2>
              </div>

              {/* Footer */}
              <div className="text-center text-xs text-gray-600 card-text-embossed tracking-[0.08em] leading-relaxed font-medium">
                Paris, France • contact@portfolio.dev • linkedin.com/in/profile
              </div>

            </div>
          </div>

          {/* Right Side Content */}
          <div className="lg:col-span-1 flex flex-col justify-center space-y-8 lg:pl-8">
            
            {/* Tagline */}
            <div className="animate-fade-in-delayed">
              <p className="text-lg text-forest-700 finance-text leading-relaxed text-center lg:text-left">
                {personalInfo.tagline}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 animate-slide-up">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary w-full lg:w-auto"
              >
                Voir mes projets
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary w-full lg:w-auto"
              >
                Me contacter
              </button>
            </div>

            {/* Status Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                {personalInfo.availability}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;