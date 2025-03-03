'use client'

import * as motion from "motion/react-client";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

async function run({ input, router }) {
    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const responseText = data.response;

        const path = `/result?response=${encodeURIComponent(responseText)}`; // Pass responseText as a query parameter
        console.log('Navigating to path:', path);
        console.log('Router: ' + router);
        router.push(path);
    } catch (error) {
        console.error('Error during chat session:', error);
    }
}

export default function Home() {
  const router = useRouter();
  const [blocks, setBlocks] = useState([]);
  const [input, setInput] = useState("");
  const gridSize = 32; // Grid dimensions (odd number for symmetry)
  const center = Math.floor(gridSize / 2); // Center index of the grid
  const scales = Array.from({ length: gridSize * gridSize }, (_, i) => i); // Total blocks
  const numberOfBlocks = 20;

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Define two color gradients
    const gradients = [
      "bg-gradient-to-br from-purple-400 to-purple-600", // Purple gradient
      "bg-gradient-to-br from-yellow-500 to-yellow-600", // Yellow gradient
    ];

    const initialBlocks = Array.from({ length: numberOfBlocks }).map(() => {
      // Randomly choose a gradient
      const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

      return {
        top: Math.random() * windowHeight - 75,
        left: Math.random() * windowWidth - 75,
        size: Math.random() * 50 + 20, // Random size between 20px and 70px
        delay: Math.random() * 3, // Random animation delay (0-3 seconds)
        gradient: randomGradient, // Assigned random gradient
      };
    });

    setBlocks(initialBlocks);
  }, []); // Empty dependency array ensures this runs only once

  const handleSubmit = async (event) => {
    event.preventDefault();
    await run({ input, router });
  };

  const handleTOS = () => {
    router.push('/tos'); // Navigate to the home page
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-white to-purple-100 min-h-screen">
      {/* Hero Section */}
      <motion.main
        className="flex flex-col items-center text-center pt-4 px-8 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2}}
      >
        {/* Random blocks */}
          <div className="z=10">
            {blocks.map((block, index) => (
              <motion.div
                key={index}
                className={`absolute ${block.gradient} rounded-lg shadow-lg`}
                style={{
                  top: `${block.top}px`,
                  left: `${block.left}px`,
                  width: `${block.size}px`,
                  height: `${block.size}px`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1, 1.2, 1], opacity: [0, 0.25, 0.25, 0.05] }}
                transition={{
                  duration: 15, // Duration of the animation
                  delay: block.delay, // Unique delay for each block
                  repeat: Infinity, // Infinite looping
                  repeatType: "reverse", // Reverse the animation on loop
                }}
              ></motion.div>
            ))}
          </div>
          {/* Title with Gradient */}
          <h1 className="text-9xl font-serif font-bold pb-6 bg-gradient-to-r from-yellow-600 to-purple-600 text-transparent bg-clip-text drop-shadow-lg transition transform hover:scale-105">
              Intelligrader
          </h1>
          {/* Subtitle */}
          <h2 className="text-3xl font-serif font-semibold text-black mb-12 transition transform hover:scale-105">
              The APUSH DBQ Grader
          </h2>

          {/* Input Fields */}
          <div className="grid grid-cols-1 gap-10 w-full max-w-2xl">
            {/* Text Box */}
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="DBQ Response"
                  className="w-full p-4 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={(e) => setInput(e.target.value)}
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-700 to-purple-600 rounded-lg shadow-lg transition transform hover:scale-110"
                >
                  Grade Now
                </button>
              </form>
            </div>
          </div>
        <br></br>
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
                className="absolute h-16 w-16 bg-gradient-to-br from-yellow-400 to-yellow-600" // Increased block size
                style={{
                  top: `${row * 60 - center * 60}px`, // Increased spacing
                  left: `${col * 60 - center * 60}px`, // Increased spacing
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 1.1, 0],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: distance * 0.05, // Delay based on distance
                }}
              ></motion.div>
            );
          })}
        </div>
      </div>

      <div className="w-full bg-purple-700 text-white py-6 mt-auto z-20">
          <footer className="text-center text-sm font-bold">
              © 2025 Intelligrader. All rights reserved. | <a href="https://policies.google.com/privacy" className="text-blue-400 hover:underline">Privacy Policy</a> | <form action={handleTOS} className="text-blue-400 hover:underline"><input value={"Terms of Service"} type="submit"></input></form>
          </footer>
      </div>
    </div>
  );
}