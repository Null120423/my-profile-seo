"use client";
import {
  Building,
  Calendar,
  Download,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import React from "react";
import { resumeData } from "../data/resumeData";

export const Resume: React.FC = () => {
  const handleDownload = () => {
    alert("PDF download would be implemented here");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Resume
        </h1>
        <button
          onClick={handleDownload}
          className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Download size={20} />
          <span>Download PDF</span>
        </button>
      </div>

      {/* Resume Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Personal Info */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-200 text-white p-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">{resumeData.personal.name}</h2>
            <p className="text-xl opacity-90">{resumeData.personal.title}</p>

            <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
              <div className="flex items-center space-x-1">
                <Mail size={16} />
                <span>{resumeData.personal.email}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone size={16} />
                <span>{resumeData.personal.phone}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin size={16} />
                <span>{resumeData.personal.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Globe size={16} />
                <a
                  href={resumeData.personal.website}
                  className="hover:underline"
                >
                  Portfolio
                </a>
              </div>
              <div className="flex items-center space-x-1">
                <Github size={16} />
                <a
                  href={resumeData.personal.github}
                  className="hover:underline"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center space-x-1">
                <Linkedin size={16} />
                <a
                  href={resumeData.personal.linkedin}
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Summary */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Summary
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {resumeData.summary}
            </p>
          </section>

          {/* Experience */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Experience
            </h3>
            <div className="space-y-6">
              {resumeData.experience.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-2 border-primary-200 dark:border-primary-800 pl-6 relative"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.position}
                      </h4>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-primary-600 dark:text-primary-400">
                      <Building size={16} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.skills.map((skillGroup) => (
                <div key={skillGroup.category} className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Education
            </h3>
            <div className="space-y-4">
              {resumeData.education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-2 border-green-200 dark:border-green-800 pl-6 relative"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-600 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar size={14} />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
                      <Building size={16} />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    {edu.description && (
                      <p className="text-gray-700 dark:text-gray-300">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
