import React from 'react';
import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Find Skilled Professionals<br />
            <span className="text-blue-200">In Your Area</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Connect with verified professionals for all your home service needs.
            Get instant quotes and book appointments with just a few clicks.
          </p>
          <SearchBar />
        </div>
        
        <div className="flex justify-center gap-8 mt-12">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">1,000+</p>
            <p className="text-blue-100">Verified Professionals</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">5,000+</p>
            <p className="text-blue-100">Completed Jobs</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">4.8/5</p>
            <p className="text-blue-100">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}