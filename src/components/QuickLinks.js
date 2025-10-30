import React from 'react';
import { ExternalLink } from 'lucide-react';

const QuickLinks = () => {
  const links = [
    { label: 'Tunniplaan', icon: ExternalLink },
    { label: 'Õpilaspilet', icon: null },
    { label: 'Koolikõnts', icon: null },
    { label: 'Koolipuhvet', icon: null },
    { label: 'Telli koolipitsa', icon: null }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <button
                key={index}
                className="btn-orange flex items-center space-x-2 text-sm"
              >
                <span>{link.label}</span>
                {Icon && <Icon className="w-4 h-4" />}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;