import React from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <Logo />Together Innovation Works
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/funding">Funding</NavLink>
            <NavLink to="/expertise">Expertise</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="mailto:contact@uqase.com"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <Mail className="h-4 w-4 mr-2" />
              Contact Us
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" mobile>Home</NavLink>
            <NavLink to="/services" mobile>Services</NavLink>
            <NavLink to="/funding" mobile>Funding</NavLink>
            <NavLink to="/expertise" mobile>Expertise</NavLink>
            <NavLink to="/news" mobile>News</NavLink>
            <NavLink to="/about" mobile>About</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}