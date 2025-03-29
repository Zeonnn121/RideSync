import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Car, Clock } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import TimePicker from 'react-time-picker';

const Schedule = () => {
  const [selectedOption, setSelectedOption] = useState<'Ride' | 'Courier'>('Ride');
  const [selectedTime, setSelectedTime] = useState('Now'); // Default time
  const [showTimePicker, setShowTimePicker] = useState(false); // Toggle for time picker

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    setShowTimePicker(false); // Close the time picker after selection
  };

  const getMinTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getMaxTime = () => {
    const now = new Date();
    const maxTime = new Date(now.getTime() + 3 * 60 * 60 * 1000); // Add 3 hours
    return maxTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex h-screen">
      {/* Left Panel */}
      <div className="w-[400px] p-6 bg-white shadow-lg z-10">
        <h1 className="text-4xl font-bold mb-8">Schedule up to 3 Hours Prior</h1>

        {/* Ride Options */}
        <div className="flex gap-4 mb-6">
          <button
            className={`flex items-center gap-2 p-4 rounded-lg transition-all ${
              selectedOption === 'Ride'
                ? 'bg-gray-100 border-2 border-black'
                : 'bg-gray-50 hover:bg-gray-100'
            }`}
            onClick={() => setSelectedOption('Ride')}
          >
            <Car className="w-6 h-6" />
            <span className="font-medium">Ride</span>
          </button>
        </div>

        {/* Location Inputs */}
        <div className="space-y-2 mb-6">
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full" />
            <input
              type="text"
              placeholder="Bandra Railway Station (West)"
              className="w-full p-4 pl-10 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-sm" />
            <input
              type="text"
              placeholder="FR Conceicao College of Engineering"
              className="w-full p-4 pl-10 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        {/* Time Selection */}
        <div className="flex gap-2 mb-6">
          <button
            className="flex items-center gap-2 p-4 bg-gray-100 rounded-lg flex-1"
            onClick={() => setShowTimePicker(!showTimePicker)} // Toggle time picker
          >
            <Clock className="w-5 h-5" />
            <span>{selectedTime === 'Now' ? 'Now' : selectedTime}</span>
          </button>
        </div>

        {/* Time Picker */}
        {showTimePicker && (
  <div className="mb-6">
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <TimePicker
        onChange={handleTimeChange}
        value={selectedTime === 'Now' ? getMinTime() : selectedTime}
        disableClock={true}
        minTime={getMinTime()} // Minimum time is the current time
        maxTime={getMaxTime()} // Maximum time is 3 hours from now
        className="w-full p-6 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-black text-2xl"
      />
    </div>
  </div>
)}
        {/* Action Buttons */}
        <button className="w-full bg-blue-700  text-white py-3 rounded-lg font-medium mb-3">
          See prices
        </button>
        <button className="w-full text-center text-blue-600 font-medium">
          Log in to see your recent activity
        </button>
      </div>

      {/* Map */}
      <div className="flex-1 relative">
        <MapContainer
          center={[19.0760, 72.8777]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>

        {/* Zoom Controls */}
        <div className="absolute bottom-8 right-8 flex flex-col gap-2">
          <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-xl font-bold">
            +
          </button>
          <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-xl font-bold">
            −
          </button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;