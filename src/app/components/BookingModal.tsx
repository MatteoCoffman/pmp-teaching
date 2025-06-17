'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  teacher: string;
  duration: string;
}

export default function BookingModal({ isOpen, onClose, teacher, duration }: BookingModalProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  // Map duration to Cal.com namespace and link
  const getCalConfig = (duration: string) => {
    switch (duration) {
      case '30':
        return {
          namespace: "30min",
          calLink: "mcoffman/30min"
        };
      case '45':
        return {
          namespace: "45min",
          calLink: "mcoffman/45min"
        };
      default:
        return {
          namespace: "30min",
          calLink: "mcoffman/30min"
        };
    }
  };

  const calConfig = getCalConfig(duration);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl h-[80vh] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        
        <div className="h-full">
          <Cal
            namespace={calConfig.namespace}
            calLink={calConfig.calLink}
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </div>
      </div>
    </div>
  );
} 