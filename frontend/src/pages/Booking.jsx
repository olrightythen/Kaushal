import React from 'react'
import BookingForm from '../components/BookingForm';

const Booking = () => {
  return (
    <div className="min-h-screen py-10 bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your Service
          </h1>
          <p className="text-lg text-gray-600">
            Select your preferred service and schedule your appointment
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}

export default Booking