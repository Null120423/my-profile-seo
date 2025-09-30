"use client";
import { motion } from "framer-motion";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

import { resumeData } from "../data/resumeData";

export const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Resume
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        {/* Resume Content */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
        >
          {/* Personal Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-2">
                {resumeData.personal.name}
              </h2>
              <p className="text-xl opacity-90 mb-6">
                {resumeData.personal.title}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span className="opacity-90">Ho Chi Minh City, Vietnam</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span className="opacity-90">
                    {resumeData.personal.email}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span className="opacity-90">
                    {resumeData.personal.phone}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} />
                  <a
                    className="opacity-90 hover:opacity-100 transition-opacity underline"
                    href={resumeData.personal.website}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[600px]">
            {/* Left Column - Sidebar */}
            <div className="lg:col-span-1 bg-gray-50/50 dark:bg-gray-800/50 p-8 space-y-8">
              {/* Summary */}
              <section>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
                  SUMMARY
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {resumeData.summary}
                </p>
              </section>

              {/* Skills */}
              <section>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
                  SKILLS
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* Languages */}
              <section>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
                  LANGUAGES
                </h3>
                <div className="space-y-2">
                  {resumeData.languages.map((language, index) => (
                    <div
                      key={index}
                      className="text-sm text-gray-700 dark:text-gray-300"
                    >
                      {language}
                    </div>
                  ))}
                </div>
              </section>

              {/* Links */}
              <section>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
                  LINKS
                </h3>
                <div className="space-y-3">
                  {resumeData.websites.map((site, index) => (
                    <div key={index}>
                      <div className="font-medium text-sm text-gray-900 dark:text-white mb-1">
                        {site.label}
                      </div>
                      <a
                        className="text-blue-600 dark:text-blue-400 hover:underline text-xs break-all"
                        href={site.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {site.url.replace("https://", "")}
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column - Main Content */}
            <div className="lg:col-span-2 p-8 space-y-8">
              {/* Experience */}
              <section>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
                  EXPERIENCE
                </h3>
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="relative pl-6 pb-8">
                    <div className="absolute left-0 top-2 w-3 h-3 bg-blue-600 rounded-full" />
                    <div className="absolute left-1.5 top-5 w-0.5 h-full bg-gradient-to-b from-blue-600 to-transparent" />

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {exp.position}
                        </h4>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="text-base font-medium text-purple-600 dark:text-purple-400 mb-3">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </section>

              {/* Education */}
              <section>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
                  EDUCATION
                </h3>
                {resumeData.education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {edu.institution}
                        </h4>
                        <p className="text-base text-purple-600 dark:text-purple-400">
                          {edu.degree}
                        </p>
                      </div>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                        {edu.duration}
                      </span>
                    </div>
                    <div className="text-sm text-green-600 dark:text-green-400 font-medium mb-2">
                      GPA: 8.25/10 (≈3.28/4)
                    </div>
                    {edu.description && (
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </section>

              {/* Projects */}
              <section>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
                  KEY PROJECTS
                </h3>
                <div className="space-y-6">
                  {resumeData.projects.map((project, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        {project.title}
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {project.technologies && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {project.impact && (
                        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800">
                          <p className="text-sm text-green-800 dark:text-green-200">
                            <span className="font-medium">Impact:</span>{" "}
                            {project.impact}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
