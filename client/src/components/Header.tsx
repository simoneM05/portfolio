import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { userInfo } from "@/lib/env";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  
  // Rimosso handleClickOutside che interferiva con la navigazione
  
  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
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
    <header className={`fixed top-0 left-0 right-0 ${mobileMenuOpen ? 'bg-dark' : 'bg-dark/90 backdrop-blur-sm'} z-50 border-b border-dark-border transition-colors duration-300`}>
      <div className="container mx-auto px-4 md:px-6 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold text-white flex items-center">
            <span className="text-secondary mr-2">&lt;</span>
            {userInfo.name}
            <span className="text-secondary ml-2">/&gt;</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className={`md:hidden ${mobileMenuOpen ? 'text-secondary' : 'text-light'} p-2 rounded-md transition-colors`}
            aria-label="Toggle menu"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  href={item.path}
                  className={`hover:text-secondary transition-colors ${isActive(item.path) ? 'text-secondary' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-dark-border">
            <ul className="container mx-auto px-4 md:px-6 flex flex-col py-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    href={item.path}
                    className={`block py-3 px-4 my-1 hover:text-secondary transition-colors ${isActive(item.path) ? 'text-secondary' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
