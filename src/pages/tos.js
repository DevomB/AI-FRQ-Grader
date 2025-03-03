import React from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

const TermsOfService = () => {
    const router = useRouter();
    const handleHomeButtonClick = () => {
        router.push('/'); // Navigate to the home page
    };

  return (
    <div className="relative flex justify-center items-center min-h-screen w-full overflow-hidden">
      {/* 🔥 Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 animate-gradient"></div>
        <a href className="home-button" onClick={handleHomeButtonClick}>← Go Back</a>
      {/* Glassmorphic Content Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 bg-white/10 backdrop-blur-lg max-w-4xl w-full p-10 rounded-3xl shadow-2xl border border-white/20 text-white text-center"
      >
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-purple-600 animate-gradient">
          Terms of Service
        </h1>
        <p className="text-lg mt-2 text-gray-200"><strong>Effective Date:</strong> February 22, 2025</p>

        {/* Scrollable Terms Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-96 overflow-y-auto border border-gray-500 p-6 rounded-xl bg-black/30 backdrop-blur-md shadow-inner mt-6 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
        >
          <h2 className="text-3xl font-semibold text-yellow-400 mt-4">1. Introduction</h2>
          <p className="text-gray-300">To use Gemini API and Google AI Studio, you must accept:</p>
          <ul className="list-disc list-inside pl-4 text-gray-300">
            <li>The Google APIs Terms of Service ("API Terms").</li>
            <li>The Gemini API Additional Terms of Service ("Additional Terms").</li>
          </ul>

          <h2 className="text-3xl font-semibold text-yellow-400 mt-6">2. Age Requirements</h2>
          <p className="text-gray-300">You must be <strong>18 years or older</strong> to use these APIs.</p>

          <h2 className="text-3xl font-semibold text-yellow-400 mt-6">3. Use Restrictions</h2>
          <ul className="list-disc list-inside pl-4 text-gray-300">
            <li>Production use is allowed, but Google may enforce rate limits.</li>
            <li>"Preview" or "Experimental" services may not be used for production.</li>
            <li>Developing competing models is prohibited.</li>
          </ul>

          <h2 className="text-3xl font-semibold text-yellow-400 mt-6">4. Use of Generated Content</h2>
          <p className="text-gray-300">Google does not claim ownership but reserves the right to generate similar content for others.</p>

          <h2 className="text-3xl font-semibold text-yellow-400 mt-6">5. Disclaimers</h2>
          <p className="text-gray-300">Services are experimental and may generate inaccurate content.</p>
          <p className="text-gray-300"><strong>Do not rely on these Services for medical, legal, or financial advice.</strong></p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TermsOfService;
