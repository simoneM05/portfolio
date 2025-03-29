import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  codeLink: string;
  technologies: string[];
  category: 'nodejs' | 'go';
}

function ProjectCard({
  title,
  description,
  image,
  demoLink,
  codeLink,
  technologies,
  category,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const categoryBadgeClass = category === 'nodejs' 
    ? 'bg-secondary/20 text-secondary' 
    : 'bg-blue-500/20 text-blue-400';
  
  return (
    <div 
      className="project-card bg-dark-surface border border-dark-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        {/* Use a placeholder color background for the image area */}
        <div 
          className="w-full h-full bg-dark-card flex items-center justify-center" 
          aria-label={`${title} project thumbnail`}
        >
          <i className={`fas fa-${category === 'nodejs' ? 'server' : 'code'} text-4xl text-gray-700`}></i>
        </div>
        
        <div 
          className={`project-overlay absolute inset-0 bg-dark/80 flex flex-col justify-center items-center p-4 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="space-x-4">
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm transition-colors"
            >
              <i className="fas fa-eye mr-2"></i> Demo
            </a>
            <a 
              href={codeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-dark text-white hover:bg-dark-card px-4 py-2 rounded-md text-sm transition-colors"
            >
              <i className="fab fa-github mr-2"></i> Code
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className={`${categoryBadgeClass} text-xs px-2 py-1 rounded`}>
            {category === 'nodejs' ? 'Node.js' : 'Go'}
          </span>
        </div>
        
        <p className="text-light-muted text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-dark-card text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
