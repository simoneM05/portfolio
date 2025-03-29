import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import ThemeToggle from './ThemeToggle';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);
  
  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === '/' && location === '/') return true;
    if (path !== '/' && location.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-dark-surface/90 backdrop-blur-sm z-50 border-b border-dark-border">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold text-light flex items-center">
            <span className="text-secondary mr-2">&lt;</span>
            John Doe
            <span className="text-secondary ml-2">/&gt;</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-light"
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    href={item.path}
                    className={`text-light hover:text-secondary transition-colors ${isActive(item.path) ? 'text-secondary' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggle className="ml-8" />
          </div>
        </nav>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col space-y-4 pt-4 pb-2 border-t border-dark-border mt-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  href={item.path}
                  className={`block py-2 text-light hover:text-secondary transition-colors ${isActive(item.path) ? 'text-secondary' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center pt-2 pb-4">
            <span className="text-sm text-light-muted">Toggle theme</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
