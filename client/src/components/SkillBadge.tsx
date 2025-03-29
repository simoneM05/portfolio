import { useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SkillBadgeProps {
  name: string;
  percentage?: number;
  icon?: React.ReactNode;
  variant?: 'default' | 'icon';
  description?: string;
}

function SkillBadge({ name, percentage, icon, variant = 'default', description }: SkillBadgeProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  if (variant === 'icon') {
    return (
      <TooltipProvider>
        <Tooltip open={isOpen} onOpenChange={setIsOpen}>
          <TooltipTrigger asChild>
            <div 
              className="skill-badge text-center p-4 bg-dark-card rounded-lg border border-dark-border shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-secondary/50 cursor-pointer"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <div className="text-primary text-2xl mb-2">{icon}</div>
              <p className="font-medium">{name}</p>
            </div>
          </TooltipTrigger>
          {description && (
            <TooltipContent side="top" className="max-w-xs">
              <p>{description}</p>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    );
  }
  
  return (
    <TooltipProvider>
      <Tooltip open={isOpen} onOpenChange={setIsOpen}>
        <TooltipTrigger asChild>
          <div 
            className="skill-badge flex flex-col items-center bg-dark-card p-4 rounded-lg border border-dark-border shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-secondary/50 cursor-pointer"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <span className="text-secondary font-medium mb-3">{name}</span>
            {percentage !== undefined && (
              <div className="w-full bg-dark-border rounded-full h-2.5">
                <div 
                  className="bg-secondary h-2.5 rounded-full" 
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            )}
          </div>
        </TooltipTrigger>
        {description && (
          <TooltipContent side="top" className="max-w-xs">
            <p>{description}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}

export default SkillBadge;
