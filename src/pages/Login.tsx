import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home'); // Redirect to the homepage
  };

  const handleSkip = () => {
    navigate('/home'); // Redirect to the homepage
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="flex justify-center mb-6">
          <Car size={48} className="text-indigo-600" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Team cyphor</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200 font-medium"
          >
            Login
          </button>
        </form>

        <div className="mt-4 flex flex-col items-center space-y-4">
          <div className="w-full flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <button
            onClick={handleSkip}
            className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition duration-200 font-medium border border-gray-300"
          >
            Continue as Guest
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-600 text-center">
          Demo
        </p>
      </div>
    </div>
  );
};

export default Login;