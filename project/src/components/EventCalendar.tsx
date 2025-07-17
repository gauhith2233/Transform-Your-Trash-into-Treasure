import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import LoginModal from './LoginModal';

interface EventCalendarProps {
  className?: string;
}

const EventCalendar: React.FC<EventCalendarProps> = ({ className = '' }) => {
  const [selectedEventIndex, setSelectedEventIndex] = useState<number | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const events = [
    {
      date: '2024-12-28',
      title: 'Community Cleanup Day',
      time: '09:00 AM',
      type: 'Environmental',
      redirectUrl: 'https://conferencealerts.co.in/event/2693941'
    },
    {
      date: '2025-01-04',
      title: 'Composting Workshop',
      time: '02:00 PM',
      type: 'Education',
      redirectUrl: 'https://conferencealerts.co.in/event/3109413'
    },
    {
      date: '2025-01-12',
      title: 'Zero Waste Meeting',
      time: '06:00 PM',
      type: 'Community',
      redirectUrl: 'https://conferencealerts.co.in/event/3112378'
    },
  ];

  const handleJoinClick = (index: number) => {
    setSelectedEventIndex(index);
    setShowLoginModal(true);
  };

  const handleLoginSubmit = (data: { name: string; phone: string; email: string }) => {
    // Here you could add API calls to save the user data if needed
    console.log('Form submitted:', data);
    
    // Close the modal
    setShowLoginModal(false);
    
    // Redirect to the appropriate URL
    if (selectedEventIndex !== null) {
      window.location.href = events[selectedEventIndex].redirectUrl;
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-md p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-green-800">Upcoming Events</h3>
        <CalendarIcon className="h-5 w-5 text-green-600" />
      </div>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg flex flex-col items-center justify-center border border-green-200">
              <span className="text-sm font-semibold text-green-600">
                {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
              </span>
              <span className="text-xl font-bold text-green-800">
                {new Date(event.date).getDate()}
              </span>
            </div>
            <div className="ml-4 flex-1">
              <h4 className="text-lg font-semibold text-green-800">{event.title}</h4>
              <div className="flex items-center mt-1 text-green-600">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm">{event.time}</span>
                <span className="mx-2">•</span>
                <span className="text-sm">{event.type}</span>
              </div>
            </div>
            <button
              onClick={() => handleJoinClick(index)}
              className="ml-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              Join
            </button>
          </div>
        ))}
      </div>

      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onSubmit={handleLoginSubmit}
        />
      )}
    </div>
  );
};

export default EventCalendar;