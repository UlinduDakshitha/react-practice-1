import React from 'react'
import './card.css'

export default function card() {
  return (
      <div className="w-96 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-teal-600 h-4"></div>
      <div className="bg-teal-400 h-3"></div>

      {/* Content */}
      <div className="p-5 flex flex-col items-center">
        {/* Profile image placeholder */}
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-3xl">
          👤
        </div>

        {/* Details */}
        <div className="mt-4 text-left w-full">
          <h2 className="text-lg font-bold text-gray-800 text-center mb-2">
            ID CARD
          </h2>

          <p className="text-sm text-gray-700">
            <strong>ID:</strong> 12345678912345678
          </p>
          <p className="text-sm text-gray-700">
            <strong>Name:</strong> NAME SURNAME
          </p>
          <p className="text-sm text-gray-700">
            <strong>Address:</strong>
            <br />
            123 ANYWHERE STREET
            <br />
            CITY, 12345-875.
          </p>
          <p className="text-sm text-gray-700">
            <strong>Phone:</strong> +5581487898
          </p>

          {/* Footer */}
          <div className="flex justify-between items-center mt-4">
            <div className="w-24 h-8 bg-gray-300 rounded-sm"></div>
            <div className="text-sm text-gray-700">
              <strong>Expedition Date:</strong>
              <br />
              00/00/00
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

