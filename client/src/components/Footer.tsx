import SocialLinks from "./SocialLinks";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-surface border-t border-dark-border py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#top" className="text-xl font-semibold text-white flex items-center">
              <span className="text-secondary mr-1">&lt;</span>
              Simone Martino
              <span className="text-secondary ml-1">/&gt;</span>
            </a>
            <p className="text-light-muted text-sm mt-2">
              Backend Developer specializing in Node.js and TypeScript
            </p>
          </div>
          
          <SocialLinks className="text-xl" />
        </div>
        
        <div className="border-t border-dark-border mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-muted text-sm mb-4 md:mb-0">
            © {currentYear} Simone Martino. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-light-muted hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-light-muted hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
