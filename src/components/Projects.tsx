import React, { useState } from 'react';
import type { Project } from '../types';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.featured
  );

  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="card p-0 overflow-hidden group cursor-pointer" 
         onClick={() => setSelectedProject(project)}>
      {/* Project Image */}
      <div className="relative h-48 bg-forest-600 flex items-center justify-center">
        <div className="text-white text-6xl font-bold opacity-20 finance-title">
          {project.title.split(' ').map(w => w[0]).join('')}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-forest-900 group-hover:text-forest-700 transition-colors finance-title-sm">
            {project.title}
          </h3>
          {project.featured && (
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium finance-text">
              Featured
            </span>
          )}
        </div>
        
        <p className="text-forest-600 mb-4 line-clamp-2 finance-text">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="bg-luxury-100 text-forest-700 text-xs px-2 py-1 rounded font-medium finance-text">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-luxury-500 text-xs px-2 py-1 finance-text">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" 
               className="text-forest-600 hover:text-forest-700 text-sm font-medium"
               onClick={(e) => e.stopPropagation()}>
              Demo Live →
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
               className="text-luxury-600 hover:text-luxury-700 text-sm font-medium"
               onClick={(e) => e.stopPropagation()}>
              Code →
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Mes Projets</h2>
          <div className="w-24 h-1 bg-forest-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-forest-700 max-w-3xl mx-auto font-medium">
            Une sélection de projets qui illustrent mon approche entrepreneuriale et technique
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              filter === 'all' 
                ? 'bg-forest-600 text-white shadow-lg' 
                : 'bg-luxury-100 text-forest-700 hover:bg-luxury-200'
            }`}
          >
            Tous les projets
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              filter === 'featured' 
                ? 'bg-forest-600 text-white shadow-lg' 
                : 'bg-luxury-100 text-forest-700 hover:bg-luxury-200'
            }`}
          >
            Projets phares
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
               onClick={() => setSelectedProject(null)}>
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                 onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="h-64 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                  <div className="text-white text-8xl font-bold opacity-30">
                    {selectedProject.title.split(' ').map(w => w[0]).join('')}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-forest-900 mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-forest-700 mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-forest-900 mb-3">Technologies utilisées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="bg-forest-100 text-forest-800 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    {selectedProject.demoUrl && (
                      <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" 
                         className="btn-primary flex-1 text-center">
                        Voir la démo
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" 
                         className="btn-secondary flex-1 text-center">
                        Voir le code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16 pt-16 border-t border-luxury-300/50">
          <h3 className="text-2xl font-bold text-forest-900 mb-4">
            Vous avez un projet en tête ?
          </h3>
          <p className="text-forest-700 mb-8 max-w-2xl mx-auto font-medium">
            Que ce soit pour un MVP, une refonte complète ou un accompagnement technique, 
            discutons de la façon dont je peux vous aider à réaliser vos ambitions.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Démarrons ensemble
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;