interface SocialLinksProps {
  className?: string;
}

function SocialLinks({ className = '' }: SocialLinksProps) {
  const socialProfiles = [
    { platform: 'github', url: 'https://github.com/', icon: 'fab fa-github' },
    { platform: 'linkedin', url: 'https://linkedin.com/', icon: 'fab fa-linkedin' },
    { platform: 'twitter', url: 'https://twitter.com/', icon: 'fab fa-twitter' },
    { platform: 'medium', url: 'https://medium.com/', icon: 'fab fa-medium' },
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
