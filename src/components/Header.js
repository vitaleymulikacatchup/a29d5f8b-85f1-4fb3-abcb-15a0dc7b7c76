import React, { useState } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { label: 'Avaleht', href: '#', active: true },
    { label: 'Õppetöö', href: '#', hasDropdown: true },
    { label: 'Koolielu', href: '#', hasDropdown: true },
    { label: 'Koolist', href: '#', hasDropdown: true },
    { label: 'Talendiotsing', href: '#', hasDropdown: true },
    { label: 'Vastuvõtt', href: '#', hasDropdown: true },
    { label: 'Koolimeedia', href: '#', external: true },
    { label: 'Kalender', href: '#', hasDropdown: true },
    { label: 'Kontaktid', href: '#', hasDropdown: true }
  ];

  return (
    <header className="bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-rae-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-8">
              <div className="text-white font-medium">
                Rae Gümnaasium
              </div>
              <div className="hidden md:block text-white text-sm">
                Avene. Üllata. Korda. Naudi.
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white text-sm hover:text-gray-200">
                Juurdepääsetavus
              </a>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Otsing..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-3 pr-10 py-1 text-sm rounded-md border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <Search className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-rae-orange font-bold text-2xl">
                rae
              </div>
              <div className="text-xs text-gray-600 -mt-1">
                Rae Gümnaasium
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <a
                  href={item.href}
                  className={`nav-link flex items-center space-x-1 py-2 ${
                    item.active ? 'active' : ''
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                  {item.external && (
                    <span className="text-xs bg-rae-orange text-white px-1 rounded">↗</span>
                  )}
                </a>
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-rae-orange"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium ${
                  item.active
                    ? 'text-rae-orange bg-rae-light-gray'
                    : 'text-gray-700 hover:text-rae-orange hover:bg-gray-50'
                }`}
              >
                {item.label}
                {item.external && (
                  <span className="text-xs bg-rae-orange text-white px-1 rounded ml-2">↗</span>
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;