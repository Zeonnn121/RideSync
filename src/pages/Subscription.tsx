import React from 'react';
import { CheckCircle, CreditCard } from 'lucide-react';

const Subscription = () => {
  const features = [
    'Dedicated driver for pickup and drop',
    'Flexible timing slots',
    'Priority booking',
    'Monthly pass for Bandra to FR CRCE',
    '24/7 customer support',
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Monthly Subscription</h2>
            <p className="mt-4 text-xl text-gray-600">Get guaranteed pickup and drop starting at just ₹549/month</p>
          </div>

          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <button
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition duration-200 flex items-center justify-center"
            onClick={() => alert('Subscription functionality to be implemented')}
          >
            <CreditCard className="w-5 h-5 mr-2" />
            Subscribe Now
          </button>

          <p className="mt-4 text-sm text-gray-500 text-center">
            Cancel anytime. No hidden charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscription;