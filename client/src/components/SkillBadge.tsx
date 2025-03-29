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
              className="skill-badge text-center p-3 bg-primary/5 rounded-lg shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-primary/10 cursor-pointer"
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
            className="skill-badge flex flex-col items-center bg-secondary/5 p-3 rounded-lg shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-secondary/10 cursor-pointer"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <span className="text-white font-semibold text-base">
              {name}
            </span>
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
