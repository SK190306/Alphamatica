import { Clock, MapPin } from 'lucide-react';

const Schedule = () => {
  const scheduleData = [
    {
      day: 'Day 1',
      date: '[Date TBA]',
      events: [
        { time: '09:00 AM', event: 'Inauguration Ceremony', venue: 'Main Auditorium' },
        { time: '10:30 AM', event: 'MathMaverics - Round 1', venue: 'Hall A' },
        { time: '11:00 AM', event: 'Mock Parliament - Opening', venue: 'Auditorium' },
        { time: '02:00 PM', event: 'BrainBuzz - Prelims', venue: 'Conference Hall' },
        { time: '03:30 PM', event: 'Logic Lap', venue: 'College Grounds' }
      ]
    },
    {
      day: 'Day 2',
      date: '[Date TBA]',
      events: [
        { time: '09:00 AM', event: 'Alpha Quest Begins', venue: 'Campus Wide' },
        { time: '10:00 AM', event: 'Math Mafia - Finals', venue: 'Hall B' },
        { time: '12:00 PM', event: 'Verbal Clash', venue: 'Seminar Hall' },
        { time: '02:00 PM', event: 'Escape the Upside Down', venue: 'Special Room' },
        { time: '04:00 PM', event: 'Courtroom Trail', venue: 'Open Theatre' }
      ]
    },
    {
      day: 'Day 3',
      date: '[Date TBA]',
      events: [
        { time: '09:00 AM', event: 'Monster Math', venue: 'Lab Complex' },
        { time: '11:00 AM', event: 'Alpha Adventure', venue: 'Campus Grounds' },
        { time: '02:00 PM', event: 'Math Mosaic', venue: 'Art Studio' },
        { time: '04:00 PM', event: 'Prize Distribution', venue: 'Main Auditorium' },
        { time: '05:30 PM', event: 'Closing Ceremony', venue: 'Main Auditorium' }
      ]
    }
  ];

  return (
    <section id="schedule" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Schedule
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {scheduleData.map((day, dayIndex) => (
            <div key={dayIndex} className="reveal">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10">
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">{day.day}</h3>
                  <p className="text-gray-400">{day.date}</p>
                </div>
                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:scale-102"
                    >
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2 sm:mb-0">
                          {event.event}
                        </h4>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Clock size={16} className="mr-2 text-blue-400" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2 text-purple-400" />
                          {event.venue}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
