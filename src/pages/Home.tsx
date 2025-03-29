import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Star, Users } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';

// Fix for default marker icons in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom cab icon
const cabIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/744/744465.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

// Custom red destination icon
const destinationIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const initialDrivers = [
  {
    id: '1',
    name: 'Zeon Dsouza',
    phone: '+91 9876543210',
    rating: 4.8,
    carModel: 'Suzuki Wagonr',
    licensePlate: 'MH 02 AB 1234',
    availableSeats: 4,
    location: { lat: 19.0544, lng: 72.8402 },
    price: '₹33 pp',
  },
  {
    id: '2',
    name: 'Dhruv Dsouza',
    phone: '+91 9876543211',
    rating: 3.2,
    carModel: 'Maruti Ertiga',
    licensePlate: 'MH 02 CD 5678',
    availableSeats: 3,
    location: { lat: 19.0554, lng: 72.8412 },
    price: '₹42 pp',
  },
  {
    id: '3',
    name: 'Aman Dsouza',
    phone: '+91 9876543212',
    rating: 4.5,
    carModel: 'Toyota Innova',
    licensePlate: 'MH 02 EF 9012',
    availableSeats: 4,
    location: { lat: 19.0534, lng: 72.8392 },
    price: '₹28 pp',
  },
  {
    id: '4',
    name: 'Ziel Cabral',
    phone: '+91 9876543213',
    rating: 4.2,
    carModel: 'Swift Dzire',
    licensePlate: 'MH 02 GH 3456',
    availableSeats: 2,
    location: { lat: 19.0564, lng: 72.8422 },
    price: '₹31 pp',
  },
];

const Home = () => {
  const [drivers, setDrivers] = useState(initialDrivers);
  const [showInstantBooking, setShowInstantBooking] = useState(false);
  const navigate = useNavigate();
  const [selectedDestination, setSelectedDestination] = useState("FR Agnel College");
  const [customDestination, setCustomDestination] = useState("");
  
  const mapCenter = {
    lat: 19.0544,
    lng: 72.8402,
  };

  const agnelCollegeLocation = {
    lat: 19.044,
    lng: 72.820467,
  };

  const handleDestinationChange = (event) => {
    const value = event.target.value;
    setSelectedDestination(value);
  
    if (value === "Other") {
      setCustomDestination("");
    }
  };

  const handleBookRide = (driverId) => {
    const selectedDriver = drivers.find(driver => driver.id === driverId);
    if (selectedDriver && selectedDriver.availableSeats > 0) {
      navigate('/final', { state: { driver: selectedDriver } });
    }
  };

  const handleInstantBookClick = () => {
    setShowInstantBooking(true);
  };

  const handleScheduleBookClick = () => {
    navigate('/schedule'); // Now properly navigates to schedule page
  };

  return (
    <div className="container mx-auto p-4">
      {/* Map Section */}
      <div className="mb-8 h-[400px] rounded-lg overflow-hidden shadow-md">
        <MapContainer 
          center={[mapCenter.lat, mapCenter.lng]} 
          zoom={15} 
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {drivers.map((driver) => (
            <Marker 
              key={driver.id} 
              position={[driver.location.lat, driver.location.lng]}
              icon={cabIcon}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="font-semibold">{driver.name}</h3>
                  <p className="text-sm">{driver.carModel}</p>
                  <p className="text-sm">{driver.availableSeats} seats available</p>
                  <p className="text-sm">Price: {driver.price}</p>
                </div>
              </Popup>
            </Marker>
          ))}
          <Marker 
            position={[agnelCollegeLocation.lat, agnelCollegeLocation.lng]} 
            icon={destinationIcon}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold">Agnel College</h3>
                <p className="text-sm">Destination</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Booking Options */}
      {!showInstantBooking ? (
        <>
          <div className="flex gap-4 mb-8">
            <button
              className="flex-1 bg-blue-500 text-white py-3 px-4 rounded-md font-bold text-lg hover:bg-blue-600 transition duration-200"
              onClick={handleInstantBookClick}
            >
              INSTANT BOOK
            </button>
            <button
              className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-md font-bold text-lg hover:bg-gray-300 transition duration-200"
              onClick={handleScheduleBookClick}
            >
              SCHEDULE BOOK
            </button>
          </div>

          <div className="location-input bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              {/* Fixed Source Location */}
              <div className="flex items-center flex-1">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                <input
                  type="text"
                  value="Bandra Railway Station (West)"
                  className="flex-1 border-b border-gray-300 text-gray-700 bg-gray-100 cursor-not-allowed"
                  readOnly
                />
              </div>
              <div className="mx-4 text-gray-400">⟶</div>
              {/* Destination Location */}
              <div className="flex items-center flex-1">
                <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                <div className="flex-1">
                  <select
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 text-gray-700 bg-white"
                    value={selectedDestination}
                    onChange={handleDestinationChange}
                  >
                    <option value="FR Agnel College">FR Conceicao College of engineering</option>
                    <option value="Other">Other</option>
                  </select>
                  {selectedDestination === "Other" && (
                    <input
                      type="text"
                      placeholder="Enter custom destination"
                      value={customDestination}
                      onChange={(e) => setCustomDestination(e.target.value)}
                      className="mt-2 w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 text-gray-700 bg-white"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-4">Available Rides</h2>
          {/* Ride Booking Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {drivers.map((driver) => (
              <div key={driver.id} className="bg-white rounded-lg shadow-md p-4 border">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-lg">{driver.name}</h3>
                    <p className="text-gray-600">{driver.carModel}</p>
                    <p className="text-gray-600">{driver.licensePlate}</p>
                    <p className="text-gray-600 flex items-center">
                      <span className="mr-1">🚗</span> {driver.availableSeats} seats available
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end">
                      <Star className="text-yellow-400 w-4 h-4 fill-current" />
                      <span className="ml-1">{driver.rating}</span>
                    </div>
                    <p className="font-semibold">{driver.price}</p>
                  </div>
                </div>
                
                <button
                  className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600 transition duration-200"
                  onClick={() => handleBookRide(driver.id)}
                  disabled={driver.availableSeats === 0}
                >
                  {driver.availableSeats === 0 ? 'No Seats' : 'Book Ride'}
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;