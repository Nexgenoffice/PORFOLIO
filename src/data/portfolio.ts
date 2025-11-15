import type { Project, Experience, Skill, Contact } from '../types';

// Données du portfolio - À personnaliser selon vos informations
export const personalInfo = {
  name: "Votre Nom",
  title: "Entrepreneur & Développeur Full-Stack",
  tagline: "Je transforme les idées en solutions digitales innovantes",
  about: "Entrepreneur passionné avec plus de X années d'expérience dans le développement web et mobile. Je combine expertise technique et vision business pour créer des produits qui ont un impact réel.",
  location: "Paris, France",
  availability: "Disponible pour de nouveaux projets"
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Plateforme SaaS E-commerce",
    description: "Solution complète de gestion e-commerce avec tableau de bord analytique, gestion des stocks et intégration de paiement.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    image: "/api/placeholder/600/400",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/username/project",
    featured: true
  },
  {
    id: "2",
    title: "Application Mobile FinTech",
    description: "App mobile de gestion financière personnelle avec IA pour l'analyse des dépenses et recommandations d'investissement.",
    technologies: ["React Native", "Python", "TensorFlow", "Firebase"],
    image: "/api/placeholder/600/400",
    demoUrl: "https://demo.example.com",
    featured: true
  },
  {
    id: "3",
    title: "Startup EdTech",
    description: "Plateforme d'apprentissage en ligne avec système de gamification et suivi de progression personnalisé.",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
    image: "/api/placeholder/600/400",
    githubUrl: "https://github.com/username/project",
    featured: false
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Ma Startup",
    position: "Fondateur & CTO",
    duration: "2022 - Présent",
    description: "Création et développement d'une startup dans le domaine de la fintech",
    achievements: [
      "Levée de fonds de 500K€",
      "Équipe de 8 développeurs",
      "10K+ utilisateurs actifs",
      "Architecture scalable sur AWS"
    ]
  },
  {
    id: "2",
    company: "Tech Company",
    position: "Lead Developer",
    duration: "2020 - 2022",
    description: "Direction technique d'une équipe de développement sur des projets clients high-profile",
    achievements: [
      "Management d'équipe de 5 développeurs",
      "Réduction des temps de développement de 40%",
      "Implementation DevOps/CI-CD",
      "Formation et mentoring"
    ]
  },
  {
    id: "3",
    company: "Digital Agency",
    position: "Senior Full-Stack Developer",
    duration: "2018 - 2020",
    description: "Développement d'applications web et mobiles pour des clients variés",
    achievements: [
      "15+ projets livrés avec succès",
      "Expertise React/Node.js",
      "Optimisation performance (+60%)",
      "Relation client directe"
    ]
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "React/Next.js", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Vue.js", level: 85, category: "frontend" },
  { name: "React Native", level: 80, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 90, category: "backend" },
  { name: "Python", level: 85, category: "backend" },
  { name: "PostgreSQL", level: 85, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  
  // Tools
  { name: "AWS", level: 85, category: "tools" },
  { name: "Docker", level: 80, category: "tools" },
  { name: "Git", level: 95, category: "tools" },
  { name: "CI/CD", level: 80, category: "tools" },
  
  // Design
  { name: "Figma", level: 75, category: "design" },
  { name: "UI/UX", level: 80, category: "design" }
];

export const contact: Contact = {
  email: "contact@votremail.com",
  phone: "+33 6 12 34 56 78",
  linkedin: "https://linkedin.com/in/votrenom",
  github: "https://github.com/votrenom",
  website: "https://votrenom.com"
};

// Lien LinkedIn direct pour la navigation
export const linkedinUrl = "https://linkedin.com/in/votrenom";