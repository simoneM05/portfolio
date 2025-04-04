import { useEffect } from 'react';
import { Link } from 'wouter';
import SocialLinks from '@/components/SocialLinks';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { goIntroCode } from '@/lib/data';
import { userInfo } from '@/lib/env';

function Home() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center py-16 pt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 animate-[fadeIn_0.5s_ease-out_forwards]" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-secondary">{userInfo.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-light-muted mb-6">
              {userInfo.jobTitle}
            </h2>
            <p className="text-lg mb-8 max-w-xl">
              I build robust, scalable backend systems using Node.js and TypeScript. 
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
          
          <div className="lg:col-span-7 animate-[fadeIn_0.5s_ease-out_forwards]" style={{ animationDelay: '0.3s' }}>
            <div className="code-block font-mono text-sm p-4 overflow-auto rounded-md bg-[#1A1A1A] border-l-4 border-secondary">
              <SyntaxHighlighter
                language="typescript"
                style={atomDark}
                customStyle={{
                  background: 'transparent',
                  padding: 0,
                  margin: 0,
                  fontSize: '0.875rem',
                }}
                showLineNumbers={false}
              >
                {goIntroCode}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
