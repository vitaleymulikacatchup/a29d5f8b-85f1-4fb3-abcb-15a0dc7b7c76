import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-96 bg-gradient-to-r from-pink-200 via-blue-200 to-blue-300 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/rae-gymnasium-building.jpg"
          alt="Rae Gümnaasium hoone"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 via-blue-200/30 to-blue-300/30"></div>
      </div>
      
      {/* Building text overlay */}
      <div className="absolute bottom-8 right-8">
        <div className="text-white text-4xl md:text-6xl font-light tracking-wider opacity-80">
          RAE GÜMNAASIUM
        </div>
      </div>
    </section>
  );
};

export default Hero;