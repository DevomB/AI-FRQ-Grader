"use client";

import React, { useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState({
    file1: null,
    file2: null,
  });

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    setUploadedFiles((prevFiles) => ({
      ...prevFiles,
      [type]: file,
    }));
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Text:', text);
    console.log('Uploaded Files:', uploadedFiles);
  };

  return (
    <div className="flex flex-col items-center bg-white min-h-screen">
      {/* Navbar */}
      <header className="flex justify-between items-center w-full px-8 py-4 border-b">
        <div className="text-2xl font-bold text-blue-600">Intelligrader</div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center py-20 px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Fast, Secure, Smart
        </h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Upload Files Free
        </h2>
        <p className="text-lg text-gray-600 mb-12 mx-48">
          Upload your responses and get that feedback you've always wanted (or just started needing because AP exams are coming up REALLY soon)
        </p>

        {/* Input Fields */}
        <div className="flex flex-row w-full max-w-xl gap-8">
          {/* Text Box */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Enter a description or title"
              className="w-full p-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={text}
              onChange={handleTextChange}
            />
          </div>

          {/* File Upload 1 */}
          <div className="flex flex-col items-center flex-1">
            <input
              type="file"
              id="fileUpload1"
              className="hidden"
              onChange={(e) => handleFileChange(e, 'file1')}
            />
            <label
              htmlFor="fileUpload1"
              className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700"
            >
              Upload File
            </label>
          </div>

          {/* File Upload 2 */}
          <div className="flex flex-col items-center flex-1">
            <input
              type="file"
              id="fileUpload2"
              className="hidden"
              onChange={(e) => handleFileChange(e, 'file2')}
            />
            <label
              htmlFor="fileUpload2"
              className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700"
            >
              Upload File
            </label>
          </div>
        </div>

        <button
          className="mt-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </main>
    </div>
  );
}