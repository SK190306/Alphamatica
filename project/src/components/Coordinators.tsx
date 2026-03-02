import { Mail, User } from 'lucide-react';
import { coordinators } from '../data/coordinators';

const Coordinators = () => {
  return (
    <section id="coordinators" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coordinators.map((coordinator) => (
            <div
              key={coordinator.id}
              className="reveal group bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
                <User size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">
                {coordinator.name}
              </h3>
              <p className="text-sm text-gray-400 text-center mb-4">{coordinator.role}</p>
              {coordinator.contact && (
                <div className="flex items-center justify-center text-sm text-gray-300">
                  <Mail size={16} className="mr-2 text-blue-400" />
                  {coordinator.contact}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coordinators;
