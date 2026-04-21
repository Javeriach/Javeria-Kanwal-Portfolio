import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <div className="w-full px-8 md:px-20 lg:px-40 py-16 bg-gray-50/50">
      <h1 className="text-center text-3xl lg:text-5xl font-semibold font-tektur mb-16" data-aos="zoom-in">
        Academic{" "}
        <span className="bg-gradient-to-b from-black via-gray-700 to-gray-400 bg-clip-text text-transparent">
          Background
        </span>
      </h1>
      <div className="max-w-3xl mx-auto" data-aos="fade-up">
        <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center gap-8 hover:shadow-md transition-shadow">
          <div className="p-6 bg-gray-50 rounded-3xl">
            <FaGraduationCap className="text-5xl text-gray-800" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-tektur font-bold text-gray-900 mb-2">
              Bachelor of Science in IT
            </h3>
            <p className="text-lg font-semibold text-gray-600 mb-3">
              PUCIT (Punjab University College of Information Technology)
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              <span className="px-4 py-1.5 bg-black text-white text-sm font-bold rounded-full">
                CGPA: 3.4
              </span>
              <span className="px-4 py-1.5 bg-gray-100 text-gray-700 text-sm font-bold rounded-full border border-gray-200">
                Class of 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
