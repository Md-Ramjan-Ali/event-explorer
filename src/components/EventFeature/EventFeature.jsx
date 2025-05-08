import { CalendarDays, MapPin, Music, Users } from 'lucide-react';
import React from 'react';

const EventFeature = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center my-40">
      {/* Feature 1 */}
      <div className="flex flex-col items-center" data-aos="zoom-in-right">
        <div className="w-24 h-24 rounded-xl flex items-center justify-center bg-gray-400 hover:bg-red-500">
          <CalendarDays className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-lg font-bold mt-6 text-gray-900">
          7/24 EVENT AVAILABLE
        </h3>
        <div className="w-12 h-0.5 bg-red-500 mt-2 mb-4"></div>
        <p className="text-sm text-gray-600 px-4">
          Discover and explore events around the clock—any time, any day.
        </p>
        <button className="btn btn-outline btn-sm mt-4 bg-primary text-white">
          DETAILS
        </button>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col items-center" data-aos="zoom-in">
        <div className="w-24 h-24 rounded-xl flex items-center justify-center bg-gray-400 hover:bg-red-500">
          <MapPin className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-lg font-bold mt-6 text-gray-900">
          GREAT LOCATIONS
        </h3>
        <div className="w-12 h-0.5 bg-red-500 mt-2 mb-4"></div>
        <p className="text-sm text-gray-600 px-4">
          Browse events hosted at top venues, from city arenas to art galleries.
        </p>
        <button className="btn btn-outline btn-sm mt-4 bg-primary text-white">
          DETAILS
        </button>
      </div>

      {/* Feature 3 */}
      <div className="flex flex-col items-center" data-aos="zoom-in">
        <div className="w-24 h-24 rounded-xl flex items-center justify-center bg-gray-400 hover:bg-red-500">
          <Users className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-lg font-bold mt-6 text-gray-900">
          MORE THAN 200 SPEAKERS
        </h3>
        <div className="w-12 h-0.5 bg-red-500 mt-2 mb-4"></div>
        <p className="text-sm text-gray-600 px-4">
          Learn from industry leaders  conferences and workshops.
        </p>
        <button className="btn btn-outline btn-sm mt-4 bg-primary text-white">
          DETAILS
        </button>
      </div>

      {/* Feature 4 */}
      <div className="flex flex-col items-center" data-aos="zoom-in-left">
        <div className="w-24 h-24 rounded-xl flex items-center justify-center bg-gray-400 hover:bg-red-500">
          <Music className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-lg font-bold mt-6 text-gray-900">
          LETS PARTY AFTER EVENT
        </h3>
        <div className="w-12 h-0.5 bg-red-500 mt-2 mb-4"></div>
        <p className="text-sm text-gray-600 px-4">
          Enjoy entertainment, networking, and after-parties to wrap up your
          day.
        </p>
        <button className="btn btn-outline btn-sm mt-4 bg-primary text-white">
          DETAILS
        </button>
      </div>
    </div>
  );
};

export default EventFeature;