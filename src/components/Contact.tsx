import React, { useState } from 'react';
import { contact } from '../data/portfolio';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    projectType: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        projectType: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-50 rounded-2xl p-12">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
              ✓
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Merci pour votre message !
            </h2>
            <p className="text-neutral-600 text-lg mb-6">
              Je vous répondrai dans les plus brefs délais, généralement sous 24h.
            </p>
            <p className="text-sm text-neutral-500">
              Cette page se rechargera automatiquement dans quelques secondes...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Travaillons Ensemble</h2>
          <div className="w-24 h-1 bg-forest-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-neutral-600 max-w-3xl mx-auto finance-text">
            Vous avez un projet ? Une idée ? Ou simplement envie de discuter tech et business ?
            <br />N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 finance-title">
                Restons connectés
              </h3>
              <p className="text-neutral-600 mb-8 finance-text">
                Je suis toujours ouvert aux discussions sur de nouveaux projets, 
                des partenariats ou simplement pour échanger sur l'entrepreneuriat tech.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <a href={`mailto:${contact.email}`} 
                 className="flex items-center gap-4 p-4 rounded-lg hover:bg-neutral-50 transition-colors group">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-neutral-900">Email</div>
                  <div className="text-neutral-600">{contact.email}</div>
                </div>
              </a>

              {contact.phone && (
                <a href={`tel:${contact.phone}`} 
                   className="flex items-center gap-4 p-4 rounded-lg hover:bg-neutral-50 transition-colors group">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900">Téléphone</div>
                    <div className="text-neutral-600">{contact.phone}</div>
                  </div>
                </a>
              )}

              {contact.linkedin && (
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-4 p-4 rounded-lg hover:bg-neutral-50 transition-colors group">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900">LinkedIn</div>
                    <div className="text-neutral-600">Réseau professionnel</div>
                  </div>
                </a>
              )}
            </div>

            {/* Response Time */}
            <div className="bg-primary-50 rounded-lg p-6">
              <h4 className="font-bold text-primary-900 mb-2">⚡ Réponse rapide</h4>
              <p className="text-primary-800 text-sm">
                Je réponds généralement sous 24h. Pour les urgences, 
                n'hésitez pas à m'appeler directement.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Parlez-moi de votre projet
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Type de projet
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Sélectionner...</option>
                      <option value="mvp">MVP / Proof of Concept</option>
                      <option value="webapp">Application Web</option>
                      <option value="mobile">Application Mobile</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="consulting">Consulting Tech</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Résumez votre projet en quelques mots"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Décrivez votre projet, vos besoins, vos objectifs, votre budget approximatif, vos délais..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Envoyer le message
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-neutral-200 text-center">
                <p className="text-sm text-neutral-500">
                  En soumettant ce formulaire, vous acceptez d'être contacté concernant votre demande. 
                  Vos données sont traitées de manière confidentielle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;