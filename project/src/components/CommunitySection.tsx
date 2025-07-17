import React, { useState } from 'react';
import { MapPin, Users, Calendar, MessageCircle, Award } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import EventCalendar from './EventCalendar';

interface Community {
  id: number;
  name: string;
  location: string;
  members: number;
  description: string;
  image: string;
  nextEvent?: string;
  achievements?: string[];
}

const CommunitySection = () => {
  const navigate = useNavigate();
  const [communities] = useState<Community[]>([
    {
      id: 1,
      name: 'Green City Initiative',
      location: 'TUMKUR',
      members: 958,
      description: 'Working together for a cleaner, greener city through innovative waste management solutions.',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
      nextEvent: 'Community Cleanup - This Saturday',
      achievements: ['Recycled 10,000kg', 'Tree Planting Award']
    },
    {
      id: 2,
      name: 'Zero Waste Community',
      location: 'BENGALURU',
      members: 856,
      description: 'Promoting zero waste lifestyle and sustainable practices in our community.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      nextEvent: 'Composting Workshop - Next Tuesday',
      achievements: ['Zero Waste Champion', 'Education Leader']
    },
  ]);

  const [showCalendar, setShowCalendar] = useState(false);

  const handleCreateCommunity = () => {
    navigate('/create-community');
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-lg p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-green-800">Community Initiatives</h2>
        <button
          onClick={() => setShowCalendar(!showCalendar)}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Calendar className="h-5 w-5" />
          {showCalendar ? 'Hide Calendar' : 'Show Calendar'}
        </button>
      </div>

      {showCalendar && <EventCalendar className="mb-8" />}

      <div className="grid md:grid-cols-2 gap-8">
        {communities.map((community) => (
          <div
            key={community.id}
            className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-green-100"
          >
            <div className="relative">
              <img
                src={community.image}
                alt={community.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Active
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">{community.name}</h3>
              <div className="flex items-center text-green-600 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{community.location}</span>
              </div>
              <div className="flex items-center text-green-600 mb-4">
                <Users className="h-4 w-4 mr-1" />
                <span className="text-sm">{community.members} members</span>
              </div>
              <p className="text-gray-600 mb-4">{community.description}</p>
              
              {community.nextEvent && (
                <div className="mb-4 p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center text-green-700">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">{community.nextEvent}</span>
                  </div>
                </div>
              )}

              {community.achievements && (
                <div className="flex gap-2 mb-4">
                  {community.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs"
                    >
                      <Award className="h-3 w-3" />
                      {achievement}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex gap-2">
                <Link
                  to={`/community/${community.id}`}
                  className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-center"
                >
                  Join Community
                </Link>
                <button className="flex items-center justify-center w-12 h-10 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-8 bg-gradient-to-r from-green-100 to-emerald-50 rounded-xl">
        <h3 className="text-2xl font-bold text-green-800 mb-4">Start Your Own Initiative</h3>
        <p className="text-green-700 mb-6">
          Have an idea for improving waste management in your community? Start your
          own initiative and connect with like-minded individuals!
        </p>
        <button 
          onClick={handleCreateCommunity}
          className="bg-white text-green-600 px-6 py-3 rounded-lg border-2 border-green-600 hover:bg-green-50 hover:border-green-700 hover:text-green-700 transition-all duration-300 font-semibold"
        >
          Create Community
        </button>
      </div>
    </div>
  );
};

export default CommunitySection;