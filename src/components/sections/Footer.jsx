// Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition duration-300"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition duration-300"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition duration-300"
        >
          <FaTwitter className="w-6 h-6" />
        </a>
        <a
          href="mailto:youremail@example.com"
          className="text-gray-400 hover:text-red-500 transition duration-300"
        >
          <FaEnvelope className="w-6 h-6" />
        </a>
      </div>
      <p className="text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;