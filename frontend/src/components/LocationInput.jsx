import React from 'react';
import { MapPin } from 'lucide-react';

export function LocationInput({ address, onAddressChange }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Location Details</h2>
      <div className="relative">
        <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={address}
          onChange={(e) => onAddressChange(e.target.value)}
          placeholder="Enter your address"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
}