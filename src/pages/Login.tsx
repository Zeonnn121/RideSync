import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    // For demo purposes, we'll accept any valid email/password
    // In a real app, this would validate against a backend
    try {
      const studentId = 'STU' + Math.random().toString(36).substr(2, 6).toUpperCase();
      
      // Store user data
      localStorage.setItem('studentId', studentId);
      localStorage.setItem('userEmail', email);
      
      // Clear form
      setEmail('');
      setPassword('');
      setError('');
      
      // Redirect to home
      navigate('/');
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  const handleSkip = () => {
    const tempStudentId = 'TEMP' + Math.random().toString(36).substr(2, 6).toUpperCase();
    localStorage.setItem('studentId', tempStudentId);
    localStorage.setItem('userEmail', 'guest@example.com');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="flex justify-center mb-6">
          <Car size={48} className="text-indigo-600" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Team cyphor</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              placeholder="••••••••"
              required
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