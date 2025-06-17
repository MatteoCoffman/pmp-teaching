'use client';

import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back to Home Link */}
        <Link 
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Booking
        </Link>

        {/* About Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">About Us</h1>
          
          {/* Matteo's Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Matteo Coffman</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                [Your bio here - Include your teaching experience, musical background, 
                teaching philosophy, and what students can expect from lessons]
              </p>
              {/* Add more paragraphs as needed */}
            </div>
          </div>

          {/* Mason's Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mason Fisher</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                [Mason's bio here - Include his teaching experience, musical background, 
                teaching philosophy, and what students can expect from lessons]
              </p>
              {/* Add more paragraphs as needed */}
            </div>
          </div>

          {/* Teaching Philosophy Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Teaching Philosophy</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                [Add your teaching philosophy, approach to lessons, and what makes your 
                teaching style unique]
              </p>
              {/* Add more paragraphs as needed */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 