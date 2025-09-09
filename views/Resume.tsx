"use client";
import { Download } from "lucide-react";
import React from "react";

import { resumeData } from "../data/resumeData";

export const Resume: React.FC = () => {
  const handleDownload = () => {
    alert("PDF download would be implemented here");
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 p-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Resume
        </h1>
        <button
          className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          onClick={handleDownload}
        >
          <Download size={20} />
          <span>Download PDF</span>
        </button>
      </div>

      {/* Resume Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Personal Header */}
        <div className="bg-gray-100 dark:bg-gray-700 p-8">
          <div className="text-center space-y-3">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              {resumeData.personal.name}
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 font-medium">
              {resumeData.personal.title}
            </p>

            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p className="text-sm">{resumeData.personal.address}</p>
              <div className="flex justify-center space-x-6 text-sm">
                <span>{resumeData.personal.email}</span>
                <span>{resumeData.personal.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          {/* Left Column */}
          <div className="lg:col-span-2 bg-gray-50 dark:bg-gray-700 p-8 space-y-8">
            {/* Summary */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-gray-300 dark:border-gray-500 pb-2">
                SUMMARY
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {resumeData.summary}
              </p>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-gray-300 dark:border-gray-500 pb-2">
                SKILLS
              </h3>
              <div className="space-y-3">
                {resumeData.skills.map((skill, index) => (
                  <div key={index}>
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-gray-300 dark:border-gray-500 pb-2">
                LANGUAGES
              </h3>
              <div className="space-y-3">
                {resumeData.languages.map((language, index) => (
                  <div key={index}>
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                      {language}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 p-8 space-y-8">
            {/* Websites and Social Links */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-gray-300 dark:border-gray-500 pb-2">
                WEBSITES AND SOCIAL LINKS
              </h3>
              <div className="space-y-2">
                {resumeData.websites.map((site, index) => (
                  <div key={index} className="text-sm">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {site.label}
                    </span>
                    <span className="ml-2">
                      <a
                        className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                        href={site.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {site.url}
                      </a>
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-gray-300 dark:border-gray-500 pb-2">
                EXPERIENCE
              </h3>
              <div className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white italic">
                        {exp.position}
                      </h4>
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-gray-300 dark:border-gray-500 pb-2">
                EDUCATION
              </h3>
              <div className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white italic">
                        {edu.institution}
                      </h4>
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                      {edu.degree}
                    </p>
                    {edu.description && (
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Hobbies and Interest */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-gray-300 dark:border-gray-500 pb-2">
                HOBBIES AND INTEREST
              </h3>
              <ul className="space-y-2">
                {resumeData.hobbies.map((hobby, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-700 dark:text-gray-300 flex items-center"
                  >
                    <span className="mr-2">•</span>
                    {hobby}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
