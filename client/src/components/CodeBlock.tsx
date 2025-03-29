import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  language: string;
  code: string;
  className?: string;
}

function CodeBlock({ language, code, className = '' }: CodeBlockProps) {
  return (
    <div className={`code-block font-mono text-sm p-4 overflow-x-auto rounded-md bg-[#1A1A1A] border-l-4 border-secondary ${className}`}>
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
  );
}

export default CodeBlock;
