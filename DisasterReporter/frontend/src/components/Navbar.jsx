import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useAuth(); // Removed logout from here

  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gray-800 hover:text-gray-600">
              Disaster Insights
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/insights" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Insights
            </Link>
            <Link to="/about-us" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              About Us
            </Link>
            <Link to="/contact-us" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Contact Us
            </Link>
            <Link to="/report" className="text-blue-600 hover:text-blue-700 px-3 py-2 text-sm font-medium">
              Report Disaster
            </Link>

            {/* Auth Links */}
            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link to="/admin/dashboard" className="text-blue-600 hover:text-blue-700 px-3 py-2 text-sm font-medium">
                    Admin Dashboard
                  </Link>
                )}
                {user.role === 'authority' && (
                  <Link to="/authority/dashboard" className="text-blue-600 hover:text-blue-700 px-3 py-2 text-sm font-medium">
                    Authority Dashboard
                  </Link>
                )}
                {user.role === 'user' && (
                  <Link to="/user/profile" className="text-blue-600 hover:text-blue-700 px-3 py-2 text-sm font-medium">
                    User Profile
                  </Link>
                )}
              </>
            ) : (
              <Link 
                to="/login" 
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium
                hover:bg-white hover:text-gray-600 hover:border-2 hover:border-black hover:scale-105 
                transition-all duration-200 ease-in-out"
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;