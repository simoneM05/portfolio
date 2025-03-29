import { SunIcon, MoonIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  
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