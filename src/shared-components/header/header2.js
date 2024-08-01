import React from "react";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src="/path/to/logo.png" alt="Logo" className="h-10" />
          <div>
            <h1 className="text-lg font-bold text-purple-700">
              Saraswati Coaching Classes
            </h1>
            <p className="text-sm text-gray-600">Since 1991</p>
          </div>
        </div>
        {/* Navigation Menu */}
        <nav className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-purple-700">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-700">
            About Us
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-700">
            Courses
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-700">
            Results
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-700">
            Gallery
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-700">
            Branches
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-700">
            Contact Us
          </a>
        </nav>
        {/* Action Buttons */}
        <div className="flex space-x-4">
          <span className="text-gray-600">Call Us: 022-28688288</span>
          <a
            href="#"
            className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Online Admission
          </a>
          <a
            href="#"
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
