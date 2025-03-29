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
    const savedTheme = localStorage.getItem('theme');
    const isDarkMode = savedTheme !== 'light'; // default to dark
    setIsDark(isDarkMode);
    
    // Assicuriamoci che la classe sia impostata correttamente
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);
  
  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    console.log("Cambio tema:", newIsDark ? "dark" : "light");
    
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
      className={`rounded-full border border-dark-border bg-dark-card/80 hover:bg-dark-border/80 hover:text-secondary ${className}`}
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