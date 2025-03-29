import { SunIcon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

function ThemeToggle({ className = '' }: ThemeToggleProps) {
  // Temporarily we're using dark theme only
  return (
    <div 
      className={`p-2 rounded-md text-light ${className}`}
      aria-label="Dark mode active"
      title="Tema scuro attivo"
    >
      <SunIcon className="h-5 w-5" />
    </div>
  );
}

export default ThemeToggle;