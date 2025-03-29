// Questo file fornisce accesso alle informazioni personali
// caricandole direttamente dal file JSON

import personalInfoData from '@/data/personalInfo.json';

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

// Carica le informazioni dal file JSON
export const userInfo: UserInfo = personalInfoData.user;

export const portfolioInfo: PortfolioInfo = personalInfoData.portfolio;

export const projectDefaults = {
  defaultImage: personalInfoData.project.defaultImage,
};