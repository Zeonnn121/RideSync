import React from 'react';
import { Car, MapPin, Star } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

function Final() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { driver } = state || {};

  // Default data if no driver is passed
  const defaultDriver = {
    name: 'Rajesh Kumar',
    carModel: 'Toyota Innova',
    licensePlate: '9975',
    availableSeats: 4,
    price: 'Rs.45',
    rating: 4.6
  };

  const currentDriver = driver || defaultDriver;

  const handleCancelBooking = () => {
    // Navigate back to the home screen
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Car Details Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex justify-between items-start mb-8">
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-bold">MODEL: {currentDriver.carModel}</h2>
                <p className="text-gray-600">DRIVER: {currentDriver.name}</p>
                <p className="text-gray-600">NUMBER PLATE: {currentDriver.licensePlate}</p>
              </div>
              <p className="text-gray-700">{currentDriver.availableSeats} available seats</p>
              <p className="text-xl font-bold">PRICE: {currentDriver.price}</p>
            </div>
            <div className="rounded-full border-2 border-black p-4">
              <Car size={32} />
            </div>
          </div>

          <div className="flex items-center justify-end mb-6">
            <span className="text-2xl font-bold">{currentDriver.rating}</span>
            <Star className="ml-1 text-yellow-400 fill-yellow-400" size={24} />
          </div>

          <button className="w-full bg-[#2940c3] text-white py-4 rounded-lg mb-3 font-semibold hover:bg-[#1f32a8] transition-colors">
            PAY AMOUNT
          </button>
          
          <button 
            className="w-full bg-red-600 text-white py-4 rounded-lg mb-4 font-semibold hover:bg-red-700 transition-colors"
            onClick={handleCancelBooking}
          >
            CANCEL BOOKING
          </button>

          <p className="text-red-500 text-sm">* Note that cancelled bookings are non-refundable</p>
        </div>

        {/* Location Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <button className="w-full bg-[#2940c3] text-white p-4 flex items-center justify-center gap-2 font-semibold hover:bg-[#1f32a8] transition-colors">
            <MapPin />
            CHANGE PICK-UP LOCATION
          </button>
          
          <div className="h-[500px] relative">
            <img 
              src="/location.png"
              alt="Map Location"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <div className="bg-red-500 rounded-full p-2">
                <MapPin className="text-white" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Final;