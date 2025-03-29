import { useState } from "react";
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
  variant?: "default" | "icon";
  description?: string;
}

function SkillBadge({
  name,
  percentage,
  icon,
  variant = "default",
  description,
}: SkillBadgeProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (variant === "icon") {
    return (
      <TooltipProvider>
        <Tooltip open={isOpen} onOpenChange={setIsOpen}>
          <TooltipTrigger asChild>
            <div
              className="skill-badge text-center p-4 bg-primary/10 rounded-lg border border-primary/30 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/15 cursor-pointer"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <div className="text-primary text-3xl mb-3">{icon}</div>
              <p className="font-semibold text-white">{name}</p>
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
            className="skill-badge flex flex-col items-center bg-secondary/10 p-5 rounded-lg border border-secondary/30 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-secondary/50 hover:bg-secondary/15 cursor-pointer"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <span className="text-white font-semibold text-lg mb-3">
              {name}
            </span>
            {percentage !== undefined && (
              <div className="w-full bg-dark-border rounded-full h-3 mt-1">
                <div
                  className="bg-secondary h-3 rounded-full"
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
