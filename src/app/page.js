import * as motion from "motion/react-client"
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-white to-purple-100 min-h-screen">

      {/* Hero Section */}
      <motion.main
        className="flex flex-col items-center text-center pt-4 px-8 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        {/* Title with Gradient */}
        <h1 className="text-9xl font-serif font-bold pb-6 bg-gradient-to-r from-yellow-600 to-purple-600 text-transparent bg-clip-text drop-shadow-lg">
          Intelligrader
        </h1>
        {/* Subtitle */}
        <h2 className="text-3xl font-serif font-semibold text-black mb-12">
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
            className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-700 to-purple-600 hover:from-blue-600 hover:to-yellow-600 rounded-lg shadow-lg transition transform hover:scale-110"
          >
            Grade Now
          </button>
        </div>
        <br></br>
      </motion.main>

      {/* Transparent Blocks */}
      <motion.div
        className="absolute top-40 left-40 h-48 w-48 bg-yellow-500 opacity-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{
            duration: 1, delay: 0.55,
            scale: { type: "spring", delay: 0.75, visualDuration: 0.4, bounce: 0.1}}}
      ></motion.div>
        <motion.div
        className="absolute top-40 right-40 h-48 w-48 bg-yellow-500 opacity-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{
            duration: 1, delay: 0.55,
            scale: { type: "spring", delay: 0.75, visualDuration: 0.4, bounce: 0.1}}}
      ></motion.div>
      <motion.div
        className="absolute bottom-80 left-80 h-48 w-48 bg-yellow-500 opacity-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{
            duration: 1, delay: 0.25,
            scale: { type: "spring", delay: 0.35, visualDuration: 0.4, bounce: 0.1}}}
      ></motion.div>
        <motion.div
        className="absolute bottom-80 right-80 h-48 w-48 bg-yellow-500 opacity-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{
            duration: 1, delay: 0.25,
            scale: { type: "spring", delay: 0.35, visualDuration: 0.4, bounce: 0.1}}}
      ></motion.div>
      <motion.div
        className="absolute bottom-40 left-40 h-48 w-48 bg-yellow-500 opacity-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{
            duration: 1, delay: 1,
            scale: { type: "spring", delay: 1.1, visualDuration: 0.4, bounce: 0.1}}}
      ></motion.div>
        <motion.div
        className="absolute bottom-40 right-40 h-48 w-48 bg-yellow-500 opacity-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{
            duration: 1,delay: 1,
            scale: { type: "spring", delay: 1.1, visualDuration: 0.4, bounce: 0.1}}}
      ></motion.div>

      <div className="w-full bg-purple-700 text-white py-6 mt-auto">
        <footer className="text-center text-sm font-bold">
          © 2025 Intelligrader. All rights reserved. | <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a> | <a href="#" className="text-blue-400 hover:underline">Terms of Service</a>
        </footer>
      </div>
    </div>
  );
}
