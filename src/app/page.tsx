'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);
  const [selectedTeacher, setSelectedTeacher] = useState<string | null>(null);

  const handleDurationSelect = (duration: string) => {
    setSelectedDuration(duration);
  };

  const handleTeacherSelect = (teacher: string) => {
    setSelectedTeacher(teacher);
  };

  const handleBooking = () => {
    if (selectedDuration && selectedTeacher) {
      // TODO: Open Cal.com calendar modal
      console.log(`Booking ${selectedDuration} minute lesson with ${selectedTeacher}`);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Book Your Guitar Lesson
        </h1>

        {/* Lesson Duration Selection */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Lesson Duration</h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleDurationSelect('30')}
              className={`p-4 rounded-lg border-2 text-center transition-colors ${
                selectedDuration === '30'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="font-semibold">30 Minutes</div>
              <div className="text-sm text-gray-600">$45</div>
            </button>
            <button
              onClick={() => handleDurationSelect('45')}
              className={`p-4 rounded-lg border-2 text-center transition-colors ${
                selectedDuration === '45'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="font-semibold">45 Minutes</div>
              <div className="text-sm text-gray-600">$65</div>
            </button>
          </div>
        </div>

        {/* Teacher Selection */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Your Teacher</h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleTeacherSelect('Mason Fischer')}
              className={`p-4 rounded-lg border-2 text-center transition-colors ${
                selectedTeacher === 'Mason Fischer'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              Mason Fischer
            </button>
            <button
              onClick={() => handleTeacherSelect('Matteo Coffman')}
              className={`p-4 rounded-lg border-2 text-center transition-colors ${
                selectedTeacher === 'Matteo Coffman'
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              Matteo Coffman
            </button>
          </div>
        </div>

        {/* Book Button */}
        <button
          onClick={handleBooking}
          disabled={!selectedDuration || !selectedTeacher}
          className={`w-full py-3 px-4 rounded-lg text-white font-semibold transition-colors ${
            selectedDuration && selectedTeacher
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          Book Now
        </button>
      </div>
    </main>
  );
}
