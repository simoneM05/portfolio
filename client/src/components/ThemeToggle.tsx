import { useState } from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

interface ThemeToggleProps {
  className?: string;
}

function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(true);
  
  const toggleTheme = () => {
    setIsDark(!isDark);
    
    // Aggiorna le classi sul document
    if (isDark) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  };
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <MoonIcon className="h-4 w-4 text-light" />
      <Switch 
        checked={!isDark}
        onCheckedChange={toggleTheme}
        aria-label={isDark ? "Passa al tema chiaro" : "Passa al tema scuro"}
      />
      <SunIcon className="h-4 w-4 text-light" />
    </div>
  );
}

export default ThemeToggle;