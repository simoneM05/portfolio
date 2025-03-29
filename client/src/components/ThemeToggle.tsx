import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ThemeToggleProps {
  className?: string;
}

function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(true);
  
  // Imposta il tema iniziale in base alla classe del documento
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);
  
  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    // Aggiorna le classi sul document
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
    
    // Salva la preferenza in localStorage
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };
  
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={`rounded-full bg-dark-card border-dark-border hover:bg-dark-border hover:text-secondary ${className}`}
      aria-label={isDark ? "Passa al tema chiaro" : "Passa al tema scuro"}
      title={isDark ? "Passa al tema chiaro" : "Passa al tema scuro"}
    >
      {isDark ? (
        <SunIcon className="h-5 w-5 text-light" />
      ) : (
        <MoonIcon className="h-5 w-5 text-light" />
      )}
    </Button>
  );
}

export default ThemeToggle;