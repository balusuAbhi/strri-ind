import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../assets/logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg transition-colors duration-300 border-b-2 border-harvest-primary dark:border-harvest-gold">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src={logo}
              alt="Sri Tarakarama Rice Industries"
              className="h-12 w-auto group-hover:scale-105 transition-transform"
            />
            <h1 className="text-2xl font-serif font-bold text-harvest-primary dark:text-harvest-cream hidden sm:block">
              Sri Tarakarama Rice Industries
            </h1>
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-harvest-brown dark:text-gray-200 hover:text-harvest-primary dark:hover:text-harvest-gold transition-colors duration-300 font-medium ${
                  isActive(link.path) ? 'text-harvest-primary dark:text-harvest-gold font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-harvest-primary/10 dark:bg-gray-700 hover:bg-harvest-primary/20 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} className="text-harvest-primary" /> : <Sun size={20} className="text-harvest-gold" />}
            </button>
            <Link
              to="/contact"
              className="bg-harvest-primary hover:bg-harvest-primary-dark text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Quote
            </Link>
          </div>

          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-harvest-primary/10 dark:bg-gray-700 hover:bg-harvest-primary/20 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} className="text-harvest-primary" /> : <Sun size={20} className="text-harvest-gold" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-harvest-brown dark:text-gray-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block text-harvest-brown dark:text-gray-200 hover:text-harvest-primary dark:hover:text-harvest-gold transition-colors duration-300 font-medium py-2 ${
                  isActive(link.path) ? 'text-harvest-primary dark:text-harvest-gold font-semibold' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block bg-harvest-primary hover:bg-harvest-primary-dark text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
