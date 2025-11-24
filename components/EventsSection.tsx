import React, { useState } from 'react';
import { ArrowRight, Calendar as CalendarIcon, MapPin, Clock, LayoutGrid, List, ChevronLeft, ChevronRight, CalendarPlus, PlayCircle, FileText } from 'lucide-react';
import { Button } from './Button';
import { ScrollReveal } from './ScrollReveal';

// Mock data specifically structured to demonstrate the requested states
const DISPLAY_EVENTS = [
  {
    id: 101,
    status: 'past',
    date: 'Nov 14',
    day: '14',
    month: 'Nov',
    title: 'The DF All Hands',
    description: 'Global Townhalls to Local Workshops. Catch up on what you missed.',
    time: 'Recorded',
    location: 'Online',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 102,
    status: 'live',
    date: 'Nov 27',
    day: '27',
    month: 'Nov',
    title: 'Town Hall #75: Governance',
    description: 'Happening now! Monthly meetup to discuss governance proposals.',
    time: 'Live Now',
    location: 'Discord Stage',
    imageUrl: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 103,
    status: 'future',
    date: 'Dec 03',
    day: '03',
    month: 'Dec',
    title: 'DF Open All Hands',
    description: 'Building the future of AI together. Pre-register for access.',
    time: '10:00 AM EST',
    location: 'Youtube Live',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 104,
    status: 'future',
    date: 'Dec 15',
    day: '15',
    month: 'Dec',
    title: 'Round 4 Voting Close',
    description: 'Final day to cast your vote for Round 4 proposals.',
    time: '23:59 UTC',
    location: 'Snapshot',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  }
];

export const EventsSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'cards' | 'calendar'>('cards');
  const [currentDate, setCurrentDate] = useState(new Date());

  // Calendar Helpers
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const renderCalendar = () => {
    const days = [];
    const emptySlots = firstDayOfMonth;

    // Empty slots for previous month
    for (let i = 0; i < emptySlots; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 md:h-32 bg-gray-50/50 border border-gray-100/50"></div>);
    }

    // Days of current month
    for (let d = 1; d <= daysInMonth; d++) {
      // Mocking some event logic for the calendar visuals
      const hasEvent = [3, 15, 27].includes(d); 
      const isToday = d === 27; // Mocking "Today" as the 27th for the 'Live' demo

      days.push(
        <div key={`day-${d}`} className={`h-24 md:h-32 border border-gray-100 p-2 relative group hover:bg-gray-50 transition-colors ${isToday ? 'bg-electricPurple/5' : 'bg-white'}`}>
          <span className={`text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full ${isToday ? 'bg-electricPurple text-white' : 'text-gray-700'}`}>
            {d}
          </span>
          
          {hasEvent && (
            <div className="mt-2 space-y-1">
              <div className="text-xs px-2 py-1 rounded bg-deepViolet/10 text-deepViolet truncate font-medium">
                {d === 27 ? 'Town Hall #75' : d === 3 ? 'Open All Hands' : 'Voting Close'}
              </div>
              {d === 27 && (
                 <div className="text-[10px] px-2 py-0.5 rounded bg-red-100 text-red-600 font-bold inline-block animate-pulse">
                    LIVE
                 </div>
              )}
            </div>
          )}
        </div>
      );
    }
    return days;
  };

  return (
    <section id="events" className="pt-20 pb-8 bg-offWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Controls */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row justify-between items-end lg:items-center mb-12 gap-6">
            <div className="w-full lg:w-auto">
              <span className="text-electricPurple font-medium mb-2 block text-lg">Schedule</span>
              <h2 className="text-4xl font-bold text-deepViolet">Community Events</h2>
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto justify-start lg:justify-end">
              {/* Connect Google Calendar */}
              <Button variant="outline-dark" className="gap-2 text-sm py-2.5 px-4 rounded-xl border-gray-300 hover:border-blue-500 hover:text-blue-600 group">
                  <CalendarPlus size={18} className="group-hover:text-blue-600" />
                  <span className="hidden sm:inline">Connect Google Agenda</span>
                  <span className="sm:hidden">Sync</span>
              </Button>

              <div className="h-8 w-[1px] bg-gray-300 hidden sm:block"></div>

              {/* View Switcher */}
              <div className="flex bg-gray-200 p-1 rounded-lg">
                  <button 
                    onClick={() => setViewMode('cards')}
                    className={`p-2 rounded-md flex items-center gap-2 transition-all ${viewMode === 'cards' ? 'bg-white shadow text-deepViolet font-bold' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                      <LayoutGrid size={18} />
                      <span className="text-sm">Cards</span>
                  </button>
                  <button 
                    onClick={() => setViewMode('calendar')}
                    className={`p-2 rounded-md flex items-center gap-2 transition-all ${viewMode === 'calendar' ? 'bg-white shadow text-deepViolet font-bold' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                      <CalendarIcon size={18} />
                      <span className="text-sm">Calendar</span>
                  </button>
              </div>

              <Button variant="secondary" className="text-sm py-2.5 px-5 hidden sm:flex">
                  All Events
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* --- VIEW MODE: CARDS --- */}
        {viewMode === 'cards' && (
            <div className="relative">
                {/* Horizontal Scroll Container */}
                <div className="flex overflow-x-auto gap-6 pb-4 pt-4 scrollbar-hide snap-x px-2">
                
                {DISPLAY_EVENTS.map((event, index) => {
                    const isPast = event.status === 'past';
                    const isLive = event.status === 'live';
                    // We map delay strings manually to satisfy TS
                    const delayMap = ['0', '100', '200', '300'];
                    const delay = (delayMap[index % 4]) as '0' | '100' | '200' | '300';
                    
                    return (
                        <ScrollReveal 
                          key={event.id} 
                          delay={delay} 
                          // Responsive sizing:
                          // sm: Single card + peek
                          // md: 2 Cards (calc(50% - half-gap))
                          // lg: 3 Cards (calc(33.33% - 2/3 gap)) -> Gap is 24px (1.5rem), so 16px offset
                          className="flex-shrink-0 w-[85vw] sm:w-[340px] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                        >
                          <div 
                          className={`
                              w-full rounded-2xl overflow-hidden shadow-lg flex flex-col snap-center transition-all duration-300 relative group h-full
                              ${isPast ? 'bg-gray-50 border border-gray-200 opacity-90 grayscale-[0.3] hover:grayscale-0' : 'bg-white'}
                              ${isLive ? 'ring-2 ring-electricPurple shadow-electricPurple/20 scale-[1.02] z-10' : ''}
                          `}
                          >
                              {/* Card Image Area REPLACED with Branding Backgrounds */}
                              <div className="relative h-60 overflow-hidden">
                                  {/* Abstract Geometric Backgrounds based on status */}
                                  <div className={`absolute inset-0 w-full h-full 
                                    ${isLive ? 'bg-gradient-to-br from-deepPurple via-electricPurple to-deepViolet' : ''}
                                    ${isPast ? 'bg-gradient-to-br from-gray-800 to-gray-600' : ''}
                                    ${!isLive && !isPast ? 'bg-gradient-to-br from-deepViolet via-skyBlue/20 to-deepPurple' : ''}
                                  `}></div>
                                  
                                  {/* Tech/Grid Overlay Pattern - Animated on Hover */}
                                  <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-[20s] ease-linear" 
                                      style={{ 
                                          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', 
                                          backgroundSize: '24px 24px' 
                                      }}>
                                  </div>
                                  
                                  {/* Abstract Circle Accent */}
                                  <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
                                  {isLive && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-electricPurple/20 blur-3xl animate-pulse"></div>}

                                  
                                  {/* Date Badge */}
                                  <div className={`absolute top-4 right-4 rounded-xl px-4 py-2 text-center shadow-lg min-w-[70px] backdrop-blur-md z-20
                                      ${isLive ? 'bg-white text-deepViolet' : 'bg-white/90 text-deepViolet'}
                                  `}>
                                      <span className="block text-sm font-bold uppercase tracking-wide opacity-80">{event.month}</span>
                                      <span className="block text-3xl font-bold leading-none">{event.day}</span>
                                  </div>

                                  {/* Status Badge (Live or Past) */}
                                  {isLive && (
                                      <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 animate-pulse shadow-lg z-20">
                                          <div className="w-2 h-2 bg-white rounded-full"></div> Live Now
                                      </div>
                                  )}
                                  {isPast && (
                                      <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg z-20">
                                          Past Event
                                      </div>
                                  )}

                                  {/* Overlay Gradient for Text Readability */}
                                  <div className="absolute inset-0 bg-gradient-to-t from-deepViolet/90 via-deepViolet/20 to-transparent"></div>
                                  
                                  <div className="absolute bottom-0 left-0 w-full p-6 text-white z-20">
                                      <div className="flex items-center gap-3 mb-2 text-sm font-medium text-white/90">
                                          <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md">
                                              <Clock size={14} /> <span>{event.time}</span>
                                          </div>
                                          <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md">
                                              <MapPin size={14} /> <span>{event.location}</span>
                                          </div>
                                      </div>
                                      <h3 className="text-2xl font-bold leading-tight group-hover:text-skyBlue transition-colors">{event.title}</h3>
                                  </div>
                              </div>

                              {/* Card Content */}
                              <div className="p-7 flex flex-col flex-grow relative">
                                  {/* Decorative gradient line for Live cards */}
                                  {isLive && <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gradient"></div>}

                                  <p className="text-base text-gray-600 mb-8 leading-relaxed flex-grow">
                                      {event.description}
                                  </p>

                                  <div className="pt-2 mt-auto">
                                      {isPast ? (
                                          <button className="w-full py-3 rounded-xl border border-deepViolet text-deepViolet font-bold text-base hover:bg-deepViolet hover:text-white transition-all flex items-center justify-center gap-2">
                                              <FileText size={18} /> View Event Resume
                                          </button>
                                      ) : isLive ? (
                                          <button className="w-full py-3 rounded-xl bg-brand-gradient text-white font-bold text-base shadow-lg hover:shadow-electricPurple/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                                              <PlayCircle size={18} /> Join Live Room
                                          </button>
                                      ) : (
                                          <button className="w-full py-3 rounded-xl bg-deepViolet text-white font-bold text-base hover:bg-electricPurple shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                                              Join Event <ArrowRight size={18} />
                                          </button>
                                      )}
                                  </div>
                              </div>
                          </div>
                        </ScrollReveal>
                    );
                })}
                </div>
                
                {/* Mobile All Events Button (only shows in cards view on small screens) */}
                <div className="sm:hidden text-center pb-4 pt-4">
                     <Button variant="secondary" className="w-full justify-center">View All Events</Button>
                </div>
            </div>
        )}


        {/* --- VIEW MODE: CALENDAR --- */}
        {viewMode === 'calendar' && (
            <ScrollReveal>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in">
                  {/* Calendar Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
                      <h3 className="text-2xl font-bold text-deepViolet">{monthName} <span className="text-gray-400 font-normal">{year}</span></h3>
                      <div className="flex gap-2">
                          <button onClick={handlePrevMonth} className="p-2 hover:bg-white hover:shadow rounded-full transition-all text-gray-600">
                              <ChevronLeft size={24} />
                          </button>
                          <button onClick={handleNextMonth} className="p-2 hover:bg-white hover:shadow rounded-full transition-all text-gray-600">
                              <ChevronRight size={24} />
                          </button>
                      </div>
                  </div>

                  {/* Days of Week */}
                  <div className="grid grid-cols-7 border-b border-gray-100 bg-white">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                          <div key={day} className="py-3 text-center text-sm font-bold text-gray-400 uppercase tracking-wider">
                              {day}
                          </div>
                      ))}
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 bg-gray-100 gap-px">
                      {renderCalendar()}
                  </div>
              </div>
            </ScrollReveal>
        )}

      </div>
    </section>
  );
};