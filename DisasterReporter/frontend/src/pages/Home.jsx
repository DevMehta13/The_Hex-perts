// Home.jsx
import React, { useState } from "react";
import { Card } from "../components/NewsCard";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";

const Home = () => {
  const [formPopup, setFormPopup] = useState(false);
  const toggleFormPopup = () => setFormPopup(!formPopup);

  return (
    <div className="container mx-auto">
      {/* Navbar Component */}
      <Navbar />

      {/* Website Info */}
      <section className="text-center my-10">
        <h2 className="text-xl font-semibold">Welcome to Disaster Insights</h2>
        <p className="text-gray-600 mt-4">
          A platform to share insights and challenges during disasters and request necessary resources.
        </p>
        <Button className="mt-6" onClick={toggleFormPopup}>
          Fill Form
        </Button>
      </section>

      {/* Form Popup */}
      {formPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md w-11/12 max-w-md">
            <h3 className="text-lg font-bold">Submit Your Details</h3>
            <form className="mt-4 space-y-4">
              <div>
                <label className="block font-medium">Name</label>
                <input type="text" className="w-full p-2 border rounded-md" required />
              </div>
              <div>
                <label className="block font-medium">Aadhar Card Number</label>
                <input type="text" className="w-full p-2 border rounded-md" required />
              </div>
              <div>
                <label className="block font-medium">Disaster Type</label>
                <select className="w-full p-2 border rounded-md">
                  <option value="">Select</option>
                  <option value="earthquake">Earthquake</option>
                  <option value="cyclone">Cyclone</option>
                  <option value="flood">Flood</option>
                  <option value="drought">Drought</option>
                </select>
              </div>
              <div>
                <label className="block font-medium">Severity</label>
                <input type="range" className="w-full" min="1" max="10" />
              </div>
              <div>
                <label className="block font-medium">Problems</label>
                <select className="w-full p-2 border rounded-md">
                  <option value="">Select</option>
                  <option value="road">Road Issues</option>
                  <option value="electricity">Electricity</option>
                  <option value="water">Water Shortage</option>
                  <option value="food">Food and Shelter</option>
                </select>
              </div>
              <div>
                <label className="block font-medium">Resources Needed</label>
                <input type="text" className="w-full p-2 border rounded-md" />
              </div>
              <div>
                <label className="block font-medium">Remarks</label>
                <textarea className="w-full p-2 border rounded-md" rows="3"></textarea>
              </div>
              <div className="flex justify-end gap-4">
                <Button onClick={toggleFormPopup} type="button" className="bg-red-500 text-white">
                  Cancel
                </Button>
                <Button type="submit" className="bg-green-500 text-white">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* News Cards Slider */}
      <section className="mt-12">
        <h2 className="text-center text-xl font-semibold">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <Card className="p-4 bg-gray-100">News Card 1</Card>
          <Card className="p-4 bg-gray-100">News Card 2</Card>
          <Card className="p-4 bg-gray-100">News Card 3</Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-10">
        <p>&copy; 2025 Disaster Insights. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;