import React from 'react';
import { MessageSquare } from 'lucide-react';

export function NotesInput({ notes, onNotesChange }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Additional Notes</h2>
      <div className="relative">
        <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <textarea
          value={notes}
          onChange={(e) => onNotesChange(e.target.value)}
          placeholder="Any specific requirements or instructions?"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
        />
      </div>
    </div>
  );
}