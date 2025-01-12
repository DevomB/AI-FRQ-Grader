import * as motion from "motion/react-client";
import React from "react";

export default function Home() {
  const gridSize = 32; // Grid dimensions (odd number for symmetry)
  const center = Math.floor(gridSize / 2); // Center index of the grid
  const scales = Array.from({ length: gridSize * gridSize }, (_, i) => i); // Total blocks
  const blockCount = 25;

  const generateRandomStyles = () => {
    const randomX = Math.random() * 90; // Random percentage for horizontal position
    const randomY = Math.random() * 80; // Random percentage for vertical position
    const randomSize = Math.random() * 40 + 20; // Random size between 20px and 60px
    return {
      top: `${randomY}%`,
      left: `${randomX}%`,
      width: `${randomSize}px`,
      height: `${randomSize}px`,
    };
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-white to-purple-100 min-h-screen relative"> {/* Add relative positioning to the parent container */}
      {/* Hero Section */}
      <motion.main
        className="flex flex-col items-center text-center pt-4 px-8 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2}} 
      >
      <h1 className="text-9xl font-serif font-bold pb-6 bg-gradient-to-r from-yellow-600 to-purple-600 text-transparent bg-clip-text drop-shadow-lg">
        Intelligrader
      </h1>
      <h2 className="text-3xl font-serif font-semibold text-black mb-12">
        The APUSH DBQ Grader
      </h2>

      {/* Main Content */}
        {/* Random blocks */}
        <div className="z=10">
          {Array.from({ length: blockCount }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg shadow-lg opacity-10"
              style={generateRandomStyles()} // Apply random styles
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 0.15,
                scale: 1.2,
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse", // Oscillating animation
                delay: Math.random() * 2, // Random delay for each block
              }}
            ></motion.div>
          ))}
        </div>
        <div className="z=10">
          {Array.from({ length: blockCount }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute bg-gradient-to-r from-yellow-400 to-yellow-700 rounded-lg shadow-lg opacity-10"
              style={generateRandomStyles()} // Apply random styles
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 0.15,
                scale: 1.2,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse", // Oscillating animation
                delay: Math.random() * 2, // Random delay for each block
              }}
            ></motion.div>
          ))}
        </div>
      <div className="flex flex-col items-center text-center pt-4 px-8 z-20 relative">
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
              className="flex flex-col justify-center items-center border-2 border-dashed border-blue-900 rounded-lg p-6 bg-blue-100 hover:bg-blue-50 transition shadow-sm relative"
            >
              <input
                type="file"
                id="fileUpload1"
                className="absolute opacity-0 w-full h-full cursor-pointer"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-700 hover:scale-110 transition"
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
              <p className="mt-2 text-blue-900 font-bold text-lg">Upload DBQ Documents</p>
              <p className="mt-1 text-gray-500 text-sm">Supports PDF, DOCX, TXT</p>
            </div>
          </div>

          {/* File Upload 2 */}
          <div>
            <div
              className="flex flex-col justify-center items-center border-2 border-dashed border-yellow-700 rounded-lg p-6 bg-yellow-50 hover:bg-white transition shadow-sm relative"
            >
              <input
                type="file"
                id="fileUpload2"
                className="absolute opacity-0 w-full h-full cursor-pointer"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-yellow-600 hover:scale-110 transition"
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
              <p className="mt-2 text-yellow-700 font-bold text-lg">Upload Your Response</p>
              <p className="mt-1 text-gray-500 text-sm">Supports PDF, DOCX, TXT</p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-10">
          <button
            className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-700 to-purple-600 hover:from-blue-600 hover:to-purple-600 rounded-lg shadow-lg transition transform hover:scale-110"
          >
            Grade Now
          </button>
        </div>
      </div>
      </motion.main>

      {/* Expanding Reptile Scale Design */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center"> {/* Absolute positioning and z-index */}
        <div className="relative grid grid-cols-11 gap-2">
          {scales.map((_, index) => {
            const row = Math.floor(index / gridSize); // Row index
            const col = index % gridSize; // Column index
            const distance = Math.sqrt(
              Math.pow(row - center, 2) + Math.pow(col - center, 2)
            ); // Distance from center

            return (
              <motion.div
                key={index}
                className="absolute h-16 w-16 bg-gradient-to-br from-yellow-400 to-purple-600" // Increased block size
                style={{
                  top: `${row * 60 - center * 60}px`, // Increased spacing
                  left: `${col * 60 - center * 60}px`, // Increased spacing
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 1.1, 0],
                  opacity: [0, 0.3, 0.6, 0],
                }}
                transition={{
                  duration: 2,
                  delay: distance * 0.1, // Delay based on distance
                }}
              ></motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-purple-700 text-white py-6 mt-auto z-10">
        <footer className="text-center text-sm font-bold">
          © 2025 Intelligrader. All rights reserved. |{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Terms of Service
          </a>
        </footer>
      </div>
    </div>
  );
}
