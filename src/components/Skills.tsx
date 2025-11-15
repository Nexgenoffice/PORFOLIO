import React from 'react';
import type { Skill } from '../types';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
  const categories = {
    frontend: 'Frontend & Mobile',
    backend: 'Backend & Database',
    tools: 'DevOps & Outils',
    design: 'Design & UX'
  };

  const getSkillsByCategory = (category: keyof typeof categories) => 
    skills.filter(skill => skill.category === category);

  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-forest-700 font-medium finance-text">{skill.name}</span>
        <span className="text-forest-600 font-semibold finance-text">{skill.level}%</span>
      </div>
      <div className="w-full bg-luxury-200 rounded-full h-3">
        <div 
          className="bg-forest-600 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  const CategoryCard: React.FC<{ category: keyof typeof categories, skills: Skill[] }> = ({ category, skills }) => (
    <div className="card p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 bg-forest-600 rounded-full"></div>
        <h3 className="text-xl font-bold text-forest-900 finance-title-sm">{categories[category]}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Compétences & Expertise</h2>
          <div className="w-24 h-1 bg-forest-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-forest-700 max-w-3xl mx-auto font-medium">
            Un stack technique moderne et polyvalent pour transformer vos idées en réalité
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {(Object.keys(categories) as Array<keyof typeof categories>).map((category) => {
            const categorySkills = getSkillsByCategory(category);
            if (categorySkills.length === 0) return null;
            
            return (
              <CategoryCard 
                key={category} 
                category={category} 
                skills={categorySkills}
              />
            );
          })}
        </div>

        {/* Methodology Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-forest-900 mb-8 text-center finance-title">
            Ma Méthodologie
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-forest-100 text-forest-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                🎯
              </div>
              <h4 className="text-xl font-bold text-forest-900 mb-3 finance-title-sm">Vision Business</h4>
              <p className="text-forest-700 finance-text">
                Je commence toujours par comprendre vos objectifs business et les besoins de vos utilisateurs 
                avant de proposer une solution technique.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-forest-100 text-forest-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                ⚡
              </div>
              <h4 className="text-xl font-bold text-forest-900 mb-3 finance-title-sm">Développement Agile</h4>
              <p className="text-forest-700 finance-text">
                Approche itérative avec des livraisons fréquentes pour valider rapidement les concepts 
                et s'adapter aux retours utilisateurs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-forest-100 text-forest-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                🚀
              </div>
              <h4 className="text-xl font-bold text-forest-900 mb-3 finance-title-sm">Scalabilité</h4>
              <p className="text-forest-700 finance-text">
                Architecture et choix techniques pensés pour accompagner la croissance de votre projet 
                sur le long terme.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications & Learning */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-forest-900 mb-6 finance-title">
            Formation Continue & CV
          </h3>
          <p className="text-forest-700 mb-8 max-w-3xl mx-auto font-medium finance-text">
            Dans un domaine en constante évolution, je maintiens mes compétences à jour 
            et explore continuellement de nouvelles technologies pour offrir les meilleures solutions.
          </p>
          
          {/* Bouton CV */}
          <div className="mb-8">
            <a 
              href="/cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-cv inline-flex"
              title="Télécharger mon CV"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Télécharger mon CV
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'AWS Certified', year: '2024' },
              { name: 'Google Cloud', year: '2023' },
              { name: 'React Advanced', year: '2024' },
              { name: 'Startup School', year: '2023' }
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md border border-luxury-200">
                <div className="text-sm font-semibold text-forest-900">{cert.name}</div>
                <div className="text-xs text-forest-600">{cert.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;