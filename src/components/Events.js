import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      date: { day: '31', month: 'OKT', year: '2025' },
      title: 'Halloweeni kostüümide konkurss',
      time: null,
      location: null
    },
    {
      id: 2,
      date: { day: '07', month: 'NOV', year: '2025' },
      title: 'Filmiõõ',
      time: '19:00 - 23:59',
      location: 'Rae Gümnaasium'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Sündmused</h2>
        
        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="event-date flex-shrink-0">
                <div className="text-2xl font-bold">{event.date.day}</div>
                <div className="text-xs font-medium">{event.date.month}</div>
                <div className="text-xs text-gray-500">{event.date.year}</div>
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                
                {event.time && (
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <Clock className="w-4 h-4 mr-2 text-rae-orange" />
                    <span>{event.time}</span>
                  </div>
                )}
                
                {event.location && (
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-rae-orange" />
                    <span>{event.location}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button className="btn-outline-orange">
            Vaata kõiki sündmusi
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;