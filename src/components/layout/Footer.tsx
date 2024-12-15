import React from 'react';
import Logo from './Logo';
import { Mail, Phone, MapPin, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-gray-400">
              Empowering innovation across Europe, Africa and beyond. Your trusted partner in digital transformation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/funding" className="text-gray-400 hover:text-white">Funding</a></li>
              <li><a href="/expertise" className="text-gray-400 hover:text-white">Expertise</a></li>
              <li><a href="/news" className="text-gray-400 hover:text-white">News</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-500" />
                <span className="text-gray-400">contact@uqase.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span className="text-gray-400">France</span>
                <Phone className="h-5 w-5 text-blue-500" />
                <span className="text-gray-400">+33650138788</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span className="text-gray-400">Morocco</span>
                <Phone className="h-5 w-5 text-blue-500" />
                <span className="text-gray-400">+212661186850</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Uqase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}