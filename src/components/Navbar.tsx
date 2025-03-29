import React from 'react';
import { Link } from 'react-router-dom';
import { Home, UserCircle, CreditCard } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">RideSync</Link>
        <div className="flex gap-6">
          <Link to="/" className="flex items-center gap-2 hover:text-indigo-200">
            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link to="/subscription" className="flex items-center gap-2 hover:text-indigo-200">
            <CreditCard size={20} />
            <span>Subscription</span>
          </Link>
          <Link to="/profile" className="flex items-center gap-2 hover:text-indigo-200">
            <UserCircle size={20} />
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;