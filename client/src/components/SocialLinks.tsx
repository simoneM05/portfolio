import { userInfo } from '@/lib/env';

interface SocialLinksProps {
  className?: string;
}

function SocialLinks({ className = '' }: SocialLinksProps) {
  const socialProfiles = [
    { platform: 'github', url: userInfo.github, icon: 'fab fa-github' },
    { platform: 'linkedin', url: userInfo.linkedin, icon: 'fab fa-linkedin' },
    { platform: 'twitter', url: userInfo.twitter, icon: 'fab fa-twitter' },
  ];
  
  return (
    <div className="flex gap-6">
      {socialProfiles.map((profile) => (
        <a 
          key={profile.platform}
          href={profile.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-light-muted hover:text-white transition-colors"
          aria-label={`${profile.platform} profile`}
        >
          <i className={`${profile.icon} ${className}`}></i>
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
