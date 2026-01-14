// ========================================
// Portfolio Data - Théo ALASSEUR-DEJOIE
// ========================================

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  impact?: string;
  isNew?: boolean;
  image?: string;
  canvaEmbedId?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  category: 'data' | 'frontend' | 'nocode' | 'analytics' | 'soft';
}

// ========================================
// Projects Data
// ========================================

export const projects: Project[] = [
  {
    id: 'interpol',
    title: 'Interpol Data Scraper',
    description: 'Système de scraping automatisé des données publiques Interpol. Extraction et structuration des fiches de personnes recherchées, stockage en base de données et visualisation interactive des données collectées.',
    technologies: ['Python', 'BeautifulSoup', 'Pandas', 'SQL', 'Data Viz'],
    featured: true,
    isNew: true,
    impact: '1000+ fiches extraites et structurées',
    demoUrl: 'https://www.canva.com/design/DAG2_cg2RIQ/1HPsVikjcUzIKAMuoWaw0A/view'
  },
  {
    id: '0',
    title: 'Carbon Balance',
    description: 'Développement d\'une application Full-stack de comptabilité carbone. Architecture micro-services traitant les scopes 1, 2 et 3. Mise en place d\'un pipeline de nettoyage de données pour uniformiser les entrées énergétiques et logistiques.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'N8N', 'Data Pipeline'],
    featured: true,
    isNew: false,
    impact: '-70% temps d\'analyse vs Excel traditionnel',
    demoUrl: 'https://www.canva.com/design/DAG4q1S1IKs/4AwIKZ_u1WI1nWWnm4bhYQ/view'
  },
  {
    id: 'sports-betting',
    title: 'Analyse Paris Sportifs',
    description: 'Modèle d\'analyse Excel avancé pour décrypter les paris sportifs. Calcul des cotes implicites, analyse des value bets, suivi de bankroll et visualisation des performances. Outil pédagogique pour comprendre les mathématiques derrière les paris.',
    technologies: ['Excel', 'Data Analysis', 'Statistics', 'Data Viz', 'Probabilités'],
    featured: false,
    isNew: false,
    impact: 'Modèle prédictif avec ROI tracker',
    demoUrl: 'https://www.canva.com/design/DAG0R4JTDBc/A6YYksSyZyeX7AUObNdBOg/view'
  },
  {
    id: 'dust-agent',
    title: 'Agent IA - DUST',
    description: 'Conception et déploiement d\'un agent IA conversationnel avec la plateforme DUST. Intégration de sources de données multiples, création de workflows automatisés et fine-tuning des prompts pour des réponses contextualisées et pertinentes.',
    technologies: ['DUST', 'GPT-4', 'API REST', 'Prompt Engineering', 'RAG'],
    featured: false,
    isNew: false,
    impact: 'Assistant IA opérationnel 24/7',
    demoUrl: 'https://www.canva.com/design/DAG14V7VQ1M/7EaWTnwYGrQ7wtxWZmHJJA/view'
  },
  {
    id: '1',
    title: 'Solutions d\'aide à la décision - Brandsisters',
    description: 'Déploiement de solutions BI pour Zapa, Tara-Jarmon et Vanessa Bruno. Recueil des besoins métiers et traduction en spécifications techniques.',
    technologies: ['Power BI', 'SQL', 'Python', 'Excel'],
    featured: true,
    impact: 'KPIs stratégiques pour 3 marques'
  },
  {
    id: '2',
    title: 'Sites Internet - VibeCoding',
    description: 'Création de sites internet modernes avec les dernières technologies de développement assisté par IA.',
    technologies: ['Cursor', 'Next.js', 'Tailwind CSS', 'ChatGPT'],
    demoUrl: '#',
    featured: true,
    impact: 'Développement accéléré par IA'
  },
  {
    id: '3',
    title: 'Dashboard Performance Brandsisters',
    description: 'Supervision de l\'intégrité des flux de données et mise en place de KPIs stratégiques pour le suivi de la performance.',
    technologies: ['Power BI', 'Dataiku', 'SQL'],
    featured: true,
    impact: 'Monitoring temps réel'
  },
  {
    id: '6',
    title: 'Gestion Événementielle - Dauphine On Air',
    description: 'Coordination de projets événementiels, suivi et analyse des résultats, collaboration avec sponsors et prestataires.',
    technologies: ['Excel', 'Notion', 'Airtable'],
    impact: '4 ans de coordination d\'équipe'
  }
];

// ========================================
// Experience Data
// ========================================

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Chef de Projets Data',
    company: 'Brandsisters (Zapa, Tara-Jarmon, Vanessa Bruno)',
    period: 'Sept 2025 - Sept 2026',
    description: 'Recueil des besoins métiers et traduction en spécifications techniques pour le déploiement de solutions d\'aide à la décision. Supervision de l\'intégrité des flux de données et mise en place de KPIs stratégiques. Création de sites internet (VibeCoding).',
    technologies: ['Power BI', 'SQL', 'Python', 'Cursor']
  },
  {
    id: '2',
    title: 'Nageur-Sauveteur / Sapeur-Pompier Volontaire',
    company: 'SDIS 06',
    period: 'Juin 2024 - Août 2024',
    description: 'Réactivité et gestion de crise en environnement stressant. Travail d\'équipe, reporting de mission avec rigueur et sens de l\'analyse.',
    technologies: ['Gestion de crise', 'Communication', 'Travail d\'équipe']
  },
  {
    id: '3',
    title: 'Responsable Barman/Serveur',
    company: 'Louisette',
    period: 'Juin 2022 - Nov 2023',
    description: 'Gestion logistique, gestion de stocks et relation client. Développement de compétences en organisation et service.',
    technologies: ['Logistique', 'Relation client', 'Gestion stocks']
  },
  {
    id: '4',
    title: 'Responsable Événements',
    company: 'Dauphine On Air',
    period: 'Sept 2021 - Aujourd\'hui',
    description: 'Suivi de projets, coordination d\'équipe, analyse de résultats des événements. Collaboration avec des partenaires externes (sponsors, prestataires).',
    technologies: ['Gestion de projet', 'Coordination', 'Partenariats']
  }
];

// ========================================
// Education Data
// ========================================

export const education: Education[] = [
  {
    id: '1',
    school: 'Eugenia School',
    degree: 'MSc AI Applied to Business',
    period: '2025 - Aujourd\'hui',
    description: 'Business Analytics, Data Visualisation, CRM, No-Code, Marketing Analytique'
  },
  {
    id: '2',
    school: 'Université Paris-Dauphine',
    degree: 'Licence Sciences des Organisations',
    period: '2021 - 2025',
    description: 'Analyse stratégique, macroéconomie, expression orale, outils quantitatifs'
  }
];

// ========================================
// Skills Data
// ========================================

export const skills: Skill[] = [
  // Data & Analytics
  { name: 'Python', category: 'data' },
  { name: 'SQL', category: 'data' },
  { name: 'Power BI', category: 'data' },
  { name: 'Excel', category: 'data' },
  { name: 'Dataiku', category: 'data' },
  
  // Analytics
  { name: 'Google Analytics', category: 'analytics' },
  { name: 'Business Analytics', category: 'analytics' },
  { name: 'Data Visualisation', category: 'analytics' },
  
  // No-Code & Automation
  { name: 'Airtable', category: 'nocode' },
  { name: 'Notion', category: 'nocode' },
  { name: 'Zapier', category: 'nocode' },
  { name: 'Hubspot', category: 'nocode' },
  
  // Frontend & AI
  { name: 'Cursor', category: 'frontend' },
  { name: 'ChatGPT', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  
  // Soft Skills
  { name: 'Leadership', category: 'soft' },
  { name: 'Gestion de crise', category: 'soft' },
  { name: 'Communication', category: 'soft' },
  { name: 'Coordination d\'équipe', category: 'soft' }
];

// ========================================
// Certifications
// ========================================

export const certifications = [
  { name: 'BNSSA', description: 'Brevet National de Sécurité et de Sauvetage Aquatique', year: '2021' },
  { name: 'PSE1', description: 'Premiers Secours en Équipe niveau 1', year: '2021' },
  { name: 'PSE2', description: 'Premiers Secours en Équipe niveau 2', year: '2024' },
  { name: 'Surveillant de baignade', description: 'Diplôme Sapeur-Pompier', year: '2024' }
];

// ========================================
// Interests
// ========================================

export const interests = [
  { emoji: '🤽', name: 'Water-polo', detail: '12 ans de compétition, capitaine d\'équipe, 3x Champion Île-de-France' },
  { emoji: '🏄', name: 'Surf & Natation', detail: 'Sports aquatiques' },
  { emoji: '🎧', name: 'Podcasts Business', detail: 'Développement personnel' },
  { emoji: '📸', name: 'Photographie', detail: 'Passion créative' },
  { emoji: '🎬', name: 'Cinéma & Musique live', detail: 'Culture' },
  { emoji: '🚒', name: 'Secourisme', detail: 'Sensibilisation et prévention' }
];

// ========================================
// Social Links
// ========================================

export const socialLinks = {
  github: 'https://github.com/theoalasseur',
  linkedin: 'https://linkedin.com/in/theo-alasseur-dejoie',
  email: 'theo.alasseur@outlook.fr'
};

// ========================================
// Personal Info
// ========================================

export const personalInfo = {
  name: 'Théo ALASSEUR-DEJOIE',
  title: 'Data, IA & Transformation Digitale',
  subtitle: 'MSc AI Applied to Business',
  bio: 'Étudiant passionné par la Data et l\'IA appliquée au Business. Je transforme les données en insights actionnables et j\'automatise les processus grâce au No-Code et à l\'IA.',
  location: 'Paris, France',
  availability: 'En recherche d\'alternance à partir de Septembre 2026',
  rhythm: '4 jours entreprise / 1 jour école',
  phone: '07 82 06 43 30'
};
