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
              className="skill-badge text-center p-2 bg-primary/5 rounded-md shadow transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/10 cursor-pointer"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <div className="text-primary text-2xl mb-2">{icon}</div>
              <p className="font-medium text-sm text-white">{name}</p>
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
            className="skill-badge flex flex-col items-center bg-secondary/5 p-2 rounded-md shadow transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary/10 cursor-pointer"
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
