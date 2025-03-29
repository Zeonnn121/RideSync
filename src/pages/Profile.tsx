import React from 'react';
import { User, MapPin, Calendar, CreditCard } from 'lucide-react';

const Profile = () => {
  const studentId = localStorage.getItem('studentId') || 'Not Available';
  const userEmail = localStorage.getItem('userEmail') || 'Not Available';

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-indigo-100 p-4 rounded-full">
              <User size={48} className="text-indigo-600" />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-center mb-2">Student Profile</h2>
              <p className="text-center text-gray-600">Student ID: {studentId}</p>
              <p className="text-center text-gray-600">Email: {userEmail}</p>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Travel Details</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-gray-500 mr-3" />
                  <div>
                    <p className="font-medium">Regular Route</p>
                    <p className="text-gray-600">Bandra Station to FR CRCE</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gray-500 mr-3" />
                  <div>
                    <p className="font-medium">Preferred Time Slots</p>
                    <p className="text-gray-600">Morning: 8:00 AM - 9:00 AM</p>
                    <p className="text-gray-600">Evening: 3:00 PM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Subscription Status</h3>
              <div className="flex items-center">
                <CreditCard className="w-5 h-5 text-gray-500 mr-3" />
                <div>
                  <p className="font-medium">Active Plan</p>
                  <p className="text-gray-600">Monthly Subscription</p>
                  <p className="text-sm text-green-600">Valid till: March 31, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;