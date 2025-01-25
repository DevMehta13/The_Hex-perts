// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Disaster Insights</h1>
        <nav className="flex gap-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/insights" className="hover:text-gray-300">Insights</Link>
          <Link to="/about-us" className="hover:text-gray-300">About Us</Link>
          <Link to="/contact-us" className="hover:text-gray-300">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;