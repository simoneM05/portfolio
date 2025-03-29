// Questo file fornisce accesso alle variabili d'ambiente
// e utilizza valori predefiniti quando non sono disponibili

interface UserInfo {
  name: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  twitter: string;
}

interface PortfolioInfo {
  title: string;
  description: string;
  yearsExperience: number;
  projectsCompleted: number;
  openSourceContributions: number;
}

export const userInfo: UserInfo = {
  name: import.meta.env.VITE_USER_NAME || 'Simone Martino',
  jobTitle: import.meta.env.VITE_USER_JOB_TITLE || 'Node.js Backend Developer',
  email: import.meta.env.VITE_USER_EMAIL || 'simone.martino@example.com',
  phone: import.meta.env.VITE_USER_PHONE || '+39 123 456 7890',
  location: import.meta.env.VITE_USER_LOCATION || 'Milano, Italia',
  github: import.meta.env.VITE_USER_GITHUB || 'https://github.com/simonemartino',
  linkedin: import.meta.env.VITE_USER_LINKEDIN || 'https://www.linkedin.com/in/simonemartino',
  twitter: import.meta.env.VITE_USER_TWITTER || 'https://twitter.com/simonemartino',
};

export const portfolioInfo: PortfolioInfo = {
  title: import.meta.env.VITE_PORTFOLIO_TITLE || 'Simone Martino | Node.js Developer',
  description: import.meta.env.VITE_PORTFOLIO_DESCRIPTION || 'Backend developer specializzato in Node.js e TypeScript',
  yearsExperience: Number(import.meta.env.VITE_PORTFOLIO_YEARS_EXPERIENCE || 5),
  projectsCompleted: Number(import.meta.env.VITE_PORTFOLIO_PROJECTS_COMPLETED || 30),
  openSourceContributions: Number(import.meta.env.VITE_PORTFOLIO_OPEN_SOURCE_CONTRIBUTIONS || 8),
};

export const projectDefaults = {
  defaultImage: import.meta.env.VITE_PROJECT_DEFAULT_IMAGE || 'project-thumbnail.jpg',
};