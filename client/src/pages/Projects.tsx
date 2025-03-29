import { useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';

function Projects() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="projects" className="py-20 pt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-light-muted max-w-2xl mx-auto">
            A selection of my recent backend development work using Node.js and Go.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
              technologies={project.technologies}
              category={project.category}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors"
          >
            <span className="mr-2">View more projects on GitHub</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
