interface SkillBadgeProps {
  name: string;
  percentage?: number;
  icon?: React.ReactNode;
  variant?: 'default' | 'icon';
}

function SkillBadge({ name, percentage, icon, variant = 'default' }: SkillBadgeProps) {
  if (variant === 'icon') {
    return (
      <div className="skill-badge text-center p-4 bg-dark-card rounded-lg border border-dark-border shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-secondary/50">
        <div className="text-primary text-2xl mb-2">{icon}</div>
        <p className="font-medium">{name}</p>
      </div>
    );
  }
  
  return (
    <div className="skill-badge flex flex-col items-center bg-dark-card p-4 rounded-lg border border-dark-border shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-secondary/50">
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
  );
}

export default SkillBadge;
