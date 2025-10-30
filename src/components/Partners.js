import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      name: 'Tallinna Tehnikaülikool',
      logo: '/images/partners/ttu.png'
    },
    {
      name: 'TalTech',
      logo: '/images/partners/taltech.png'
    },
    {
      name: 'Arhitektuurikool',
      logo: '/images/partners/arhitektuurikool.png'
    },
    {
      name: 'Rae Ettevõtete Liit',
      logo: '/images/partners/rae-ettevotete-liit.png'
    },
    {
      name: 'Partner 5',
      logo: '/images/partners/partner5.png'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Koostööpartnerid</h2>
        
        <div className="relative">
          <div className="flex items-center justify-between">
            <button className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="flex items-center justify-center space-x-8 flex-1 mx-8">
              {partners.slice(0, 5).map((partner, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="partner-logo"
                  />
                </div>
              ))}
            </div>
            
            <button className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center mt-6 space-x-2">
            <div className="w-2 h-2 bg-rae-orange rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;