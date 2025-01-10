import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-white to-gray-100 min-h-screen">

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center py-20 px-8">
        {/* Title with Gradient */}
        <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-orange-700 text-transparent bg-clip-text drop-shadow-lg">
          Intelligrader
        </h1>
        {/* Subtitle */}
        <h2 className="text-3xl font-semibold text-gray-700 mb-12">
          The APUSH DBQ Grader
        </h2>

        {/* Input Fields */}
        <div className="grid grid-cols-1 gap-10 w-full max-w-2xl">
          {/* Text Box */}
          <div>
            <input
              type="text"
              placeholder="Enter the DBQ Prompt"
              className="w-full p-4 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* File Upload 1 */}
          <div>
            <div
              className="flex flex-col justify-center items-center border-2 border-dashed border-blue-400 rounded-lg p-6 bg-gray-50 hover:bg-blue-50 transition shadow-sm relative"
            >
              <input
                type="file"
                id="fileUpload1"
                className="absolute opacity-0 w-full h-full cursor-pointer"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600 hover:scale-110 transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10l9-9m0 0l9 9m-9-9v16"
                />
              </svg>
              <p className="mt-2 text-blue-600 font-bold text-lg">Upload DBQ Documents</p>
              <p className="mt-1 text-gray-500 text-sm">Supports PDF, DOCX, TXT</p>
            </div>
          </div>

          {/* File Upload 2 */}
          <div>
            <div
              className="flex flex-col justify-center items-center border-2 border-dashed border-green-400 rounded-lg p-6 bg-gray-50 hover:bg-green-50 transition shadow-sm relative"
            >
              <input
                type="file"
                id="fileUpload2"
                className="absolute opacity-0 w-full h-full cursor-pointer"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-600 hover:scale-110 transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10l9-9m0 0l9 9m-9-9v16"
                />
              </svg>
              <p className="mt-2 text-green-600 font-bold text-lg">Upload Your Response</p>
              <p className="mt-1 text-gray-500 text-sm">Supports PDF, DOCX, TXT</p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-10">
          <button
            className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Grade Now
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-600 text-sm mt-auto">
        © 2025 Intelligrader. All rights reserved. | <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a> | <a href="#" className="text-blue-500 hover:underline">Terms of Service</a>
      </footer>
    </div>
  );
}
