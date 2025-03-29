import { useEffect } from 'react';
import CodeBlock from '@/components/CodeBlock';
import SkillBadge from '@/components/SkillBadge';
import { nodeSkills, goSkills, additionalSkills, nodeCodeSnippet, goCodeSnippet } from '@/lib/data';

function Skills() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="skills" className="py-20 bg-dark-surface pt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-light-muted max-w-2xl mx-auto">
            I specialize in backend development with a focus on building high-performance, scalable systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Node.js Skills */}
          <div className="bg-dark rounded-lg p-6 border border-dark-border">
            <div className="flex items-center mb-6">
              <i className="fab fa-node text-4xl text-green-500 mr-4"></i>
              <h3 className="text-2xl font-semibold">Node.js Expertise</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {nodeSkills.map((skill, index) => (
                <SkillBadge 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
            
            <CodeBlock language="javascript" code={nodeCodeSnippet} />
          </div>
          
          {/* Go Skills */}
          <div className="bg-dark rounded-lg p-6 border border-dark-border">
            <div className="flex items-center mb-6">
              <i className="fab fa-golang text-4xl text-blue-400 mr-4"></i>
              <h3 className="text-2xl font-semibold">Go Expertise</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {goSkills.map((skill, index) => (
                <SkillBadge 
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
            
            <CodeBlock language="go" code={goCodeSnippet} />
          </div>
        </div>
        
        {/* Additional Skills */}
        <div className="mt-12 bg-dark rounded-lg p-6 border border-dark-border">
          <h3 className="text-xl font-semibold mb-6">Additional Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {additionalSkills.map((skill, index) => (
              <SkillBadge 
                key={index}
                name={skill.name}
                icon={<i className={skill.icon}></i>}
                variant="icon"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
