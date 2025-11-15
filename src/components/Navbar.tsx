import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'experience', label: 'Expérience' },
    { id: 'projects', label: 'Projets' },
    { id: 'skills', label: 'Compétences' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-luxury-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <h1 className="text-2xl font-bold gradient-text">Portfolio</h1>
            <a 
              href="https://linkedin.com/in/votrenom" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-forest-600 hover:text-forest-700 transition-colors p-2 rounded-lg hover:bg-luxury-50"
              title="Voir mon profil LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-forest-700 bg-luxury-100/70'
                      : 'text-forest-600 hover:text-forest-700 hover:bg-luxury-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a 
                href="/cv.md" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-md text-sm font-medium text-luxury-700 hover:text-luxury-800 hover:bg-luxury-100 transition-colors duration-200 border border-luxury-300"
              >
                CV
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-forest-600 hover:text-forest-700 hover:bg-luxury-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-forest-500"
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 border-t border-luxury-200/50">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-forest-700 bg-luxury-100/70'
                    : 'text-forest-600 hover:text-forest-700 hover:bg-luxury-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href="/cv.md" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-luxury-700 hover:text-luxury-800 hover:bg-luxury-100 transition-colors duration-200 border border-luxury-300 mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;