import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">My App</div>
        <div className="space-x-4">
        <a href="/" className="text-white hover:text-blue-300">Home</a>
          <a href="/login" className="text-white hover:text-blue-300">Login</a>
          <a href="/register" className="text-white hover:text-blue-300">Register</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;