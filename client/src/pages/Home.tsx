import { useEffect } from 'react';
import { Link } from 'wouter';
import SocialLinks from '@/components/SocialLinks';
import CodeBlock from '@/components/CodeBlock';
import { goIntroCode } from '@/lib/data';

function Home() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center py-16 pt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-[fadeIn_0.5s_ease-out_forwards]" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-secondary">John Doe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-light-muted mb-6">
              Backend Developer
            </h2>
            <p className="text-lg mb-8 max-w-xl">
              I build robust, scalable backend systems using Node.js and Go. 
              Specialized in API development, microservices architecture, and 
              high-performance computing solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/projects" 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                View Projects
              </Link>
              <Link 
                href="/contact" 
                className="border border-secondary text-secondary hover:bg-secondary/10 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Contact Me
              </Link>
            </div>
            <div className="flex gap-6 mt-10">
              <SocialLinks />
            </div>
          </div>
          
          <div className="animate-[fadeIn_0.5s_ease-out_forwards]" style={{ animationDelay: '0.3s' }}>
            <CodeBlock language="go" code={goIntroCode} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
