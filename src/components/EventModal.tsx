import { X, Calendar, MapPin, Users, Clock, Phone } from 'lucide-react';
import { Event } from '../types';

interface EventModalProps {
  event: Event;
  onClose: () => void;
}

const EventModal = ({ event, onClose }: EventModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-gradient-to-br from-gray-900 via-blue-900/50 to-purple-900/50 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8 sm:p-12">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {event.name}
              </h2>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                event.category === 'Indoor' ? 'bg-green-500/20 text-green-400' :
                event.category === 'Outdoor' ? 'bg-orange-500/20 text-orange-400' :
                'bg-blue-500/20 text-blue-400'
              }`}>
                {event.category}
              </span>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
            <p className="text-gray-300 leading-relaxed">{event.fullDescription}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <div className="flex items-center text-blue-400 mb-2">
                <Users size={20} className="mr-2" />
                <span className="font-semibold">Team Size</span>
              </div>
              <p className="text-gray-300">{event.teamSize}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <div className="flex items-center text-purple-400 mb-2">
                <Clock size={20} className="mr-2" />
                <span className="font-semibold">Timings</span>
              </div>
              <p className="text-gray-300">{event.timings}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <div className="flex items-center text-green-400 mb-2">
                <MapPin size={20} className="mr-2" />
                <span className="font-semibold">Venue</span>
              </div>
              <p className="text-gray-300">{event.venue}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
              <div className="flex items-center text-orange-400 mb-2">
                <Phone size={20} className="mr-2" />
                <span className="font-semibold">Contact</span>
              </div>
              <p className="text-gray-300">{event.contact}</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-3">Rules & Guidelines</h3>
            <ul className="space-y-2">
              {event.rules.map((rule, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="text-blue-400 mr-2">•</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-3">Coordinators</h3>
            <div className="space-y-3">
              <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
                <p className="text-sm text-gray-400 mb-1">Faculty Coordinator</p>
                <p className="text-white font-semibold">{event.facultyCoordinator}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10">
                <p className="text-sm text-gray-400 mb-1">Student Coordinators</p>
                {event.studentCoordinators.map((coordinator, index) => (
                  <p key={index} className="text-white font-semibold">{coordinator}</p>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/50"
          >
            Register for this Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
