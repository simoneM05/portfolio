import { useEffect } from 'react';

function About() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '5+', label: 'Years of Experience' },
    { value: '30+', label: 'Projects Completed' },
    { value: '8+', label: 'Open Source Contributions' },
    { value: '3+', label: 'Tech Conference Talks' },
  ];

  return (
    <section id="about" className="py-20 bg-dark-surface pt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-light-muted mb-4">
              I'm a passionate backend developer with 5+ years of experience building robust, scalable systems. 
              My expertise lies in Node.js and TypeScript, with a focus on creating high-performance APIs, microservices, 
              and data processing pipelines.
            </p>
            <p className="text-light-muted mb-4">
              After graduating with a degree in Computer Science, I worked at several tech companies 
              where I honed my skills in distributed systems design, cloud infrastructure, and performance optimization.
            </p>
            <p className="text-light-muted mb-6">
              When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts, 
              or speaking at developer conferences about backend technologies.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-dark p-4 rounded-lg border border-dark-border">
                  <div className="text-3xl font-bold text-secondary mb-2">{stat.value}</div>
                  <div className="text-light-muted text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <a 
              href="/simone-martino-resume.pdf" 
              className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                // In a real app, this would download the resume
                alert('Resume download would start here');
              }}
            >
              Download CV <i className="fas fa-download ml-2"></i>
            </a>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary">
              {/* Use a placeholder for the profile image */}
              <div className="w-full h-full bg-dark-card flex items-center justify-center">
                <i className="fas fa-user text-6xl text-gray-700"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
