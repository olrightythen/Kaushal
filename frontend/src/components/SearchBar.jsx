import React from 'react';
import {Link} from "react-router-dom";

export default function SearchBar() {
    const isLoggedIn = localStorage.getItem("token") ? true : false;

  return (
    <div className="mx-auto">
      {isLoggedIn ? (
      <Link to="/booking">
        <button className="bg-blue-600 border-white border text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
          Book Now
        </button>
      </Link>) : (
      <Link to="/login">
        <button className="bg-blue-600 border-white border text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
          Get Started
        </button>
      </Link>)
        }
    </div>
  );
}