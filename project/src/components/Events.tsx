import { Lightbulb, BookOpen } from 'lucide-react';
import { Event } from '../types';
import { mathematicaEvents, alphabeticaEvents } from '../data/events';
import EventCard from './EventCard';

interface EventsProps {
  onEventClick: (event: Event) => void;
}

const Events = ({ onEventClick }: EventsProps) => {
  return (
    <section id="events" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="reveal mb-20">
          <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl p-8 sm:p-12 border border-blue-400/30 backdrop-blur-md">
            <div className="flex items-center justify-center mb-6">
              <Lightbulb className="w-12 h-12 text-blue-400 mr-4" />
              <h3 className="text-3xl sm:text-4xl font-bold text-white">MATHEMATICA 2K26</h3>
            </div>
            <p className="text-center text-gray-300 mb-8 text-lg">
              Analytical & Logical Events - Where Numbers Tell Stories
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mathematicaEvents.map((event) => (
                <EventCard key={event.id} event={event} onClick={onEventClick} />
              ))}
            </div>
          </div>
        </div>

        <div className="reveal">
          <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-2xl p-8 sm:p-12 border border-purple-400/30 backdrop-blur-md">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-12 h-12 text-purple-400 mr-4" />
              <h3 className="text-3xl sm:text-4xl font-bold text-white">ALPHABETICA 2K26</h3>
            </div>
            <p className="text-center text-gray-300 mb-8 text-lg">
              Communication & Literary Events - Where Words Weave Magic
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {alphabeticaEvents.map((event) => (
                <EventCard key={event.id} event={event} onClick={onEventClick} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
