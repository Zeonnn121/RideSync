import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Subscription from './pages/Subscription';
import Profile from './pages/Profile';
import Final from './pages/Final';
import Schedule from './pages/Schedule';
function App() {
  // Check if the user is authenticated by checking for 'studentId' in localStorage
  const isAuthenticated = !!localStorage.getItem('studentId') || !!localStorage.getItem('isGuest');
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Show the Navbar only if the user is authenticated */}
        {isAuthenticated && <Navbar />}
        <Routes>
          {/* Login route: Redirect to Home if authenticated, otherwise show Login */}
          <Route 
            path="/login" 
            element={isAuthenticated ? <Navigate to="/" /> : <Login />} 
          />

          {/* Home route: Redirect to Login if not authenticated */}
          <Route 
            path="/" 
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />} 
          />

          {/* Subscription route: Redirect to Login if not authenticated */}
          <Route 
            path="/subscription" 
            element={isAuthenticated ? <Subscription /> : <Navigate to="/login" />} 
          />

          {/* Profile route: Redirect to Login if not authenticated */}
          <Route 
            path="/profile" 
            element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} 
          />

          {/* Final route: Redirect to Login if not authenticated */}
          <Route 
            path="/final" 
            element={isAuthenticated ? <Final /> : <Navigate to="/login" />} 
          />

          {/* Catch-all route: Redirect to Login if no matching route is found */}
          <Route 
            path="*" 
            element={<Navigate to={isAuthenticated ? "/" : "/login"} />} 
          />
          <Route path='/schedule' element={<Schedule />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;