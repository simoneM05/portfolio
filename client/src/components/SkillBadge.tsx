interface SkillBadgeProps {
  name: string;
  percentage?: number;
  icon?: React.ReactNode;
  variant?: 'default' | 'icon';
}

function SkillBadge({ name, percentage, icon, variant = 'default' }: SkillBadgeProps) {
  if (variant === 'icon') {
    return (
      <div className="skill-badge text-center p-4 bg-dark-card rounded-lg transition-all duration-200 hover:-translate-y-1">
        <div className="text-primary text-2xl mb-2">{icon}</div>
        <p className="text-sm">{name}</p>
      </div>
    );
  }
  
  return (
    <div className="skill-badge flex flex-col items-center bg-dark-card p-3 rounded-lg transition-all duration-200 hover:-translate-y-1">
      <span className="text-secondary text-sm mb-2">{name}</span>
      {percentage !== undefined && (
        <div className="w-full bg-dark-border rounded-full h-1.5">
          <div 
            className="bg-secondary h-1.5 rounded-full" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default SkillBadge;
