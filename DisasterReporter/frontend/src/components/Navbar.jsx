import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Disaster Insights</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/insights" className="hover:text-gray-400">Insights</Link>
          <Link to="/about" className="hover:text-gray-400">About Us</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact Us</Link>
          <Link to="/login" className="hover:text-gray-400">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
