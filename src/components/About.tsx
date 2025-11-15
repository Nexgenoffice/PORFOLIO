import React from 'react';
import { personalInfo } from '../data/portfolio';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 luxury-background relative">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-forest-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-luxury-200/30 to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">À propos de moi</h2>
          <div className="w-24 h-1 bg-forest-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-forest-600 via-forest-700 to-luxury-700 flex items-center justify-center text-white text-8xl font-bold shadow-2xl border-4 border-white/30">
              {personalInfo.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full flex items-center justify-center text-2xl animate-pulse-slow shadow-lg">
              ⚡
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-finance font-medium text-forest-900 mb-8 tracking-tight">
              Entrepreneur passionné par l'innovation
            </h3>
            
            <div className="prose prose-lg text-forest-700 font-finance">
              <p className="mb-8 finance-text">
                {personalInfo.about}
              </p>
              
              <p className="mb-8 finance-text">
                Mon approche combine une expertise technique approfondie avec une vision business stratégique. 
                Je crois fermement que la technologie doit servir à résoudre de vrais problèmes et créer de la valeur tangible.
              </p>
              
              <p className="finance-text">
                Quand je ne code pas, vous me trouverez en train de lire sur les dernières innovations tech, 
                de mentorer de jeunes développeurs ou d'explorer de nouvelles opportunités d'investissement.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-luxury-300/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-forest-700 mb-2">5+</div>
                <div className="text-sm text-forest-600 uppercase tracking-wide font-medium">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-forest-700 mb-2">50+</div>
                <div className="text-sm text-forest-600 uppercase tracking-wide font-medium">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-forest-700 mb-2">3</div>
                <div className="text-sm text-forest-600 uppercase tracking-wide font-medium">Startups créées</div>
              </div>
            </div>

            {/* Location & Contact */}
            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-luxury-300/50">
              <div className="flex items-center gap-2 text-forest-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;