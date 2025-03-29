import { useEffect, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import personalInfoData from '@/data/personalInfo.json';

// Definizione dei tipi per i progetti
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  demoLink: string;
  codeLink: string;
  technologies: string[];
  category: 'nodejs' | 'go';
}

function Projects() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const [projects, setProjects] = useState<Project[]>(personalInfoData.projects || []);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    image: 'project-thumbnail.jpg',
    demoLink: '',
    codeLink: '',
    technologies: '',
    category: 'nodejs'
  });

  // Funzione per aggiungere un nuovo progetto
  const addProject = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Crea un nuovo progetto con ID incrementale
    const newId = projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1;
    
    // Converte la stringa technologies in array
    const technologiesArray = newProject.technologies
      .split(',')
      .map(tech => tech.trim())
      .filter(tech => tech !== '');
    
    const projectToAdd = {
      id: newId,
      title: newProject.title,
      description: newProject.description,
      image: newProject.image,
      demoLink: newProject.demoLink,
      codeLink: newProject.codeLink,
      technologies: technologiesArray,
      category: newProject.category as 'nodejs' | 'go'
    };
    
    // Aggiorna lo stato locale
    setProjects([...projects, projectToAdd]);
    
    // Reset del form
    setNewProject({
      title: '',
      description: '',
      image: 'project-thumbnail.jpg',
      demoLink: '',
      codeLink: '',
      technologies: '',
      category: 'nodejs'
    });
    
    setShowAddForm(false);
    
    // In un'applicazione reale, qui si salverebbe nel database
    // Per ora lo salviamo solo nello stato locale
    console.log("Progetto aggiunto:", projectToAdd);
  };

  // Gestisce i cambiamenti nei campi del form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewProject({
      ...newProject,
      [name]: value
    });
  };
  
  return (
    <section id="projects" className="py-20 pt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-light-muted max-w-2xl mx-auto">
            A selection of my recent backend development work using Node.js.
          </p>
        </div>
        
        {/* Admin feature - Hidden in public view
        <div className="flex justify-end mb-6">
          <button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            {showAddForm ? 'Annulla' : '+ Aggiungi Progetto'}
          </button>
        </div>
        
        {showAddForm && (
          <div className="bg-dark-surface p-6 rounded-lg border border-dark-border mb-10">
            <h3 className="text-xl font-semibold mb-6">Aggiungi nuovo progetto</h3>
            <form onSubmit={addProject}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Titolo</label>
                    <input
                      type="text"
                      name="title"
                      value={newProject.title}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-dark-card border border-dark-border rounded-md px-3 py-2 text-light"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Descrizione</label>
                    <textarea
                      name="description"
                      value={newProject.description}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full bg-dark-card border border-dark-border rounded-md px-3 py-2 text-light"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Tecnologie (separate da virgola)</label>
                    <input
                      type="text"
                      name="technologies"
                      value={newProject.technologies}
                      onChange={handleInputChange}
                      required
                      placeholder="Node.js, Express, MongoDB, ecc."
                      className="w-full bg-dark-card border border-dark-border rounded-md px-3 py-2 text-light"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Link Demo</label>
                    <input
                      type="url"
                      name="demoLink"
                      value={newProject.demoLink}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-dark-card border border-dark-border rounded-md px-3 py-2 text-light"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Link Codice</label>
                    <input
                      type="url"
                      name="codeLink"
                      value={newProject.codeLink}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-dark-card border border-dark-border rounded-md px-3 py-2 text-light"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Categoria</label>
                    <select
                      name="category"
                      value={newProject.category}
                      onChange={handleInputChange}
                      className="w-full bg-dark-card border border-dark-border rounded-md px-3 py-2 text-light"
                    >
                      <option value="nodejs">Node.js</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Salva Progetto
                </button>
              </div>
            </form>
          </div>
        )}
        */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
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
            href="https://github.com/simoneM" 
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
