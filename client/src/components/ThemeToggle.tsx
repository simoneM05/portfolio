import { SunIcon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

function ThemeToggle({ className = '' }: ThemeToggleProps) {
  // Temporarily disabled theme toggle
  return (
    <button 
      className={`p-2 rounded-md text-light hover:bg-dark-card transition-colors ${className}`}
      aria-label="Light/Dark mode toggle (disabled)"
      disabled
    >
      <SunIcon className="h-5 w-5" />
    </button>
  );
}

export default ThemeToggle;