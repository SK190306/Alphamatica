import { ArrowRight } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  onClick: (event: Event) => void;
}

const EventCard = ({ event, onClick }: EventCardProps) => {
  const categoryColors = {
    Indoor: 'bg-green-500/20 text-green-400 border-green-400/50',
    Outdoor: 'bg-orange-500/20 text-orange-400 border-orange-400/50',
    Open: 'bg-blue-500/20 text-blue-400 border-blue-400/50'
  };

  return (
    <div className="group bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
      <div className="flex items-start justify-between mb-4">
        <h4 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
          {event.name}
        </h4>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[event.category]}`}>
          {event.category}
        </span>
      </div>
      <p className="text-gray-400 mb-6 text-sm">
        {event.shortDescription}
      </p>
      <button
        onClick={() => onClick(event)}
        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group/btn"
      >
        <span className="mr-2">View Details</span>
        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default EventCard;
