import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';

interface CodeBlockProps {
  language: string;
  code: string;
  className?: string;
  maxHeight?: string;
}

function CodeBlock({ language, code, className = '', maxHeight = '300px' }: CodeBlockProps) {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  
  return (
    <div className={`code-block relative font-mono text-sm p-4 rounded-md bg-[#1A1A1A] border-l-4 border-secondary ${className}`}>
      <div 
        className={`overflow-auto transition-all duration-300 ${expanded ? '' : 'max-h-[300px]'}`} 
        style={{ maxHeight: expanded ? '100vh' : maxHeight }}
      >
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          customStyle={{
            background: 'transparent',
            padding: 0,
            margin: 0,
            fontSize: '0.875rem',
          }}
          showLineNumbers={false}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      
      {!expanded && code.split('\n').length > 10 && (
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#1A1A1A] to-transparent pointer-events-none" />
      )}
      
      {code.split('\n').length > 10 && (
        <button 
          onClick={toggleExpand}
          className="absolute bottom-2 right-2 text-xs px-2 py-1 bg-dark-card text-light rounded hover:bg-dark-border transition-colors z-10"
        >
          {expanded ? 'Mostra meno' : 'Mostra tutto'}
        </button>
      )}
    </div>
  );
}

export default CodeBlock;
