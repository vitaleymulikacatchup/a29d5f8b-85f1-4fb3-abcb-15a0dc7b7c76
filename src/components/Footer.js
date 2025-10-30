import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rae-orange text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Üldine kontakt</h3>
            <div className="space-y-2 text-sm">
              <p className="font-medium">Rae Gümnaasium</p>
              <p>Arukula tee 22, Jüri alevik, Rae vald,</p>
              <p>Harjumaa, 75301. Registrikood 77001694.</p>
              <div className="flex items-center space-x-2 mt-3">
                <Phone className="w-4 h-4" />
                <a href="tel:+3725444659" className="hover:underline">+372 5444 0659</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@rae.edu.ee" className="hover:underline">info@rae.edu.ee</a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Jälgi meid</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-200 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-200 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* EU Fund */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Euroopa Regionaalarengu Fond</h3>
            <p className="text-sm">
              Rae Gümnaasium on rahastatud Euroopa Regionaalarengu Fondist.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-rae-orange-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
            <a href="#" className="hover:underline">Avaleht</a>
            <span className="hidden sm:inline text-gray-300">|</span>
            <a href="#" className="hover:underline">Saidikart</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;