import { ProfileData } from './profile.models';

export const PROFILE_DATA: ProfileData = {
  name: 'Louis Chevereau',
  headline: 'Ingénieur Développement Logiciel | Développeur Full Stack',
  location: 'Noisy-le-Grand, France',
  socials: [
    { type: 'email', label: 'louis.chevereau.pro@gmail.com', url: 'mailto:louis.chevereau.pro@gmail.com' },
    { type: 'linkedin', label: 'linkedin.com/in/louis-chevereau', url: 'https://www.linkedin.com/in/louis-chevereau/' },
    { type: 'github', label: 'github.com/louischevereaupro-coder', url: 'https://github.com/louischevereaupro-coder' },
  ],

  experiences: [
    {
      company: 'Saint-Gobain',
      role: 'Développeur Full Stack',
      contract: 'Alternance',
      location: 'La Défense',
      start: '09/2022',
      end: '08/2025',
      highlights: [
        'Développement de fonctionnalités et implémentation de règles métiers (Clean Code, best practices).',
        'Création d’APIs RESTful pour les échanges front/back.',
        'Amélioration UX et intégration front-end.',
        'Résolution d’incidents, revue de pull requests.',
        'Déploiements via pipelines CI/CD Jenkins sur environnements cloud.',
        'Travail en équipe Agile : daily, sprint, planning poker, rétrospective.',
        'Migration Vue 2 → Vue 3, refonte UI, refactoring, intégration Shadcn/Tailwind.',
      ],
      stack: ['Vue.js', 'TypeScript', 'Tailwind', 'Vite', 'PHP', 'Drupal', 'REST', 'Jenkins', 'Git', 'Jira'],
    },
  ],

  projects: [
    {
      title: 'Code de la route en Réalité Virtuelle',
      period: '10/2023 — 06/2024',
      description: [
        'Création d’un outil ludique et interactif pour faciliter l’apprentissage du code de la route.',
        'Implémentation de scénarios VR de conduite sous Unity VR.',
        'Présenté lors du Jour des Projets ESIEE 2024.',
      ],
      stack: ['Unity', 'C#', 'VR'],
    },
  ],

  education: [
    {
      title: 'Diplôme d’ingénieur (Informatique et Applications)',
      school: 'ESIEE Paris - Université Gustave Eiffel',
      location: 'Champs-sur-Marne, France',
      start: '09/2020',
      end: '09/2025',
    },
    {
      title: 'Échange Erasmus',
      school: 'UPNA - Université publique de Navarre',
      location: 'Pampelune, Espagne',
      start: '09/2024',
      end: '01/2025',
    },
  ],

  certifications: [
    { title: 'TOEIC - 850', year: '2024' },
    { title: 'Voltaire - 711', year: '2023' },
  ],

  skills: {
    backend: ['PHP', 'Drupal', 'Java', 'APIs RESTful', 'Node.js', 'SQL', 'C#'],
    frontend: ['JavaScript', 'TypeScript', 'Vue.js', 'Angular', 'Tailwind CSS', 'Leaflet', 'Shadcn', 'Vite'],
    devops: ['Jenkins', 'Docker', 'GitHub', 'GitLab'],
    agile: ['Daily', 'Sprint', 'Planning poker', 'Story points', 'Rétrospective'],
    tools: ['Git', 'GitLab', 'Jenkins', 'Jira', 'VS Code'],
  },

  languages: ['Français (langue maternelle)', 'Anglais (B2)'],
};
