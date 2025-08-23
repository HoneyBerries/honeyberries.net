import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { NAV_LINKS } from '../lib/constants';
import { PROJECTS } from '../lib/data';
import { getNavLinkClass } from '../lib/utils';

/**
 * Main navigation component with responsive design and dropdown
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="HoneyBerries home"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true"></span>
            <span className="font-semibold tracking-tight">HoneyBerries</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              if (link.name === 'Projects') {
                return (
                  <ProjectsDropdown key={link.name} link={link} />
                );
              }
              
              return (
                <NavLink 
                  key={link.name} 
                  to={link.path} 
                  className={({ isActive }) => getNavLinkClass(isActive)}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle main menu"
          >
            <span className="sr-only">Open menu</span>
            <MenuIcon isOpen={isOpen} />
          </button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <MobileMenu onClose={closeMenu} />
        )}
      </div>
    </header>
  );
}

/**
 * Projects dropdown component for desktop navigation
 */
function ProjectsDropdown({ link }) {
  return (
    <div className="relative group">
      <NavLink 
        to={link.path} 
        className={({ isActive }) => getNavLinkClass(isActive)}
      >
        {link.name}
      </NavLink>
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-0 mt-2 w-56 bg-white shadow-xl border border-gray-200 rounded-lg p-2">
        {PROJECTS.map((project) => (
          <Link 
            key={project.id} 
            to={project.href || `/projects#${project.id}`} 
            className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {project.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * Mobile menu component
 */
function MobileMenu({ onClose }) {
  return (
    <div id="mobile-menu" className="md:hidden pb-3 animate-floatIn">
      <nav className="flex flex-col gap-1 border-t border-gray-200 pt-2" role="navigation" aria-label="Mobile navigation">
        {NAV_LINKS.map((link) => (
          <div key={link.name}>
            <NavLink 
              onClick={onClose} 
              to={link.path} 
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              {link.name}
            </NavLink>
            {link.name === 'Projects' && (
              <div className="pl-3 mt-1">
                {PROJECTS.map((project) => (
                  <Link 
                    key={project.id} 
                    onClick={onClose} 
                    to={project.href || `/projects#${project.id}`} 
                    className="block px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    • {project.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

/**
 * Animated hamburger menu icon
 */
function MenuIcon({ isOpen }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
      aria-hidden="true"
    >
      {isOpen ? (
        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
      ) : (
        <path fillRule="evenodd" d="M3.75 6.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 4.5a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 4.5a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" clipRule="evenodd" />
      )}
    </svg>
  );
}
