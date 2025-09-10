"use client";
import React from "react";

import { resumeData } from "../data/resumeData";

import ResumePDFScreen from "./ResumePDFScreen";

export const Resume: React.FC = () => {
  const [isPdf, setIsPdf] = React.useState(true);

  if (isPdf) {
    return <ResumePDFScreen />;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Resume
        </h1>
      </div>

      {/* Resume Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Personal Header */}
        <div className="p-8" style={{ backgroundColor: "#EBE0D9" }}>
          <div className="text-left">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {resumeData.personal.name}
            </h2>
            <p className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
              {resumeData.personal.title}
            </p>
            <div className="text-sm text-gray-600 dark:text-gray-400 leading-6">
              <div className="mb-1">{resumeData.personal.address}</div>
              <div className="mb-1">{resumeData.personal.email}</div>
              <div>{resumeData.personal.phone}</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[600px]">
          {/* Left Column */}
          <div className="lg:col-span-2 bg-gray-50 dark:bg-gray-700 p-8">
            {/* Summary */}
            <section className="mb-8">
              <h3 className="font-bold text-lg border-b-2 border-gray-300 dark:border-gray-500 pb-2 mb-4 text-gray-900 dark:text-white">
                SUMMARY
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                {resumeData.summary}
              </p>
            </section>
            {/* Skills */}
            <section className="mb-8">
              <h3 className="font-bold text-lg border-b-2 border-gray-300 dark:border-gray-500 pb-2 mb-4 text-gray-900 dark:text-white">
                SKILLS
              </h3>
              <div className="flex flex-col gap-2">
                {resumeData.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="text-sm text-gray-700 dark:text-gray-300 font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </section>
            {/* Languages */}
            <section className="mb-8">
              <h3 className="font-bold text-lg border-b-2 border-gray-300 dark:border-gray-500 pb-2 mb-4 text-gray-900 dark:text-white">
                LANGUAGES
              </h3>
              <div className="flex flex-col gap-2">
                {resumeData.languages.map((language, index) => (
                  <div
                    key={index}
                    className="text-sm text-gray-700 dark:text-gray-300 font-medium"
                  >
                    {language}
                  </div>
                ))}
              </div>
            </section>
            {/* Websites */}
            <section>
              <h3 className="font-bold text-lg border-b-2 border-gray-300 dark:border-gray-500 pb-2 mb-4 text-gray-900 dark:text-white">
                WEBSITES AND SOCIAL LINKS
              </h3>
              <div>
                {resumeData.websites.map((site, index) => (
                  <div key={index} className="text-sm mb-3">
                    <div className="font-semibold mb-1">{site.label}:</div>
                    <a
                      className="text-blue-600 dark:text-blue-400 underline break-all text-xs"
                      href={site.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {site.url}
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 p-8">
            {/* Experience */}
            <section className="mb-8">
              <h3 className="font-bold text-lg border-b-2 border-gray-300 dark:border-gray-500 pb-2 mb-4 text-gray-900 dark:text-white">
                EXPERIENCE
              </h3>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold italic text-gray-900 dark:text-white m-0">
                      {exp.position}
                    </h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-semibold whitespace-nowrap ml-4">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    {exp.description}
                  </p>
                </div>
              ))}
            </section>
            {/* Education */}
            <section className="mb-8">
              <h3 className="font-bold text-lg border-b-2 border-gray-300 dark:border-gray-500 pb-2 mb-4 text-gray-900 dark:text-white">
                EDUCATION
              </h3>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-semibold italic text-gray-900 dark:text-white m-0">
                      {edu.institution}
                    </h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-semibold whitespace-nowrap ml-4">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                    GPA: 8.25/10 (≈3.28/4)
                  </p>
                  {edu.description && (
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </section>
            {/* Projects */}
            <section className="mb-8">
              <h3 className="font-bold text-lg border-b-2 border-gray-300 dark:border-gray-500 pb-2 mb-4 text-gray-900 dark:text-white">
                PROJECTS
              </h3>
              {resumeData.projects.map((project, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed text-justify">
                    {project.description}
                  </p>
                  {project.role && (
                    <ul className="ml-5 text-sm text-gray-700 dark:text-gray-300 mb-3 list-disc">
                      {project.role.map((role, i) => (
                        <li key={i} className="mb-1 text-justify">
                          {role}
                        </li>
                      ))}
                    </ul>
                  )}
                  {project.technologies && (
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                      <span className="font-semibold">Technologies:</span>{" "}
                      {project.technologies.join(", ")}
                    </div>
                  )}
                  {project.impact && (
                    <div className="text-xs text-gray-500 dark:text-gray-400 leading-snug text-justify">
                      <span className="font-semibold">Impact:</span>{" "}
                      {project.impact}
                    </div>
                  )}
                </div>
              ))}
            </section>
            {/* Hobbies */}
            <section>
              <h3 className="font-bold text-lg border-b-2 border-gray-300 dark:border-gray-500 pb-2 mb-4 text-gray-900 dark:text-white">
                HOBBIES AND INTEREST
              </h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 list-none m-0 p-0">
                {resumeData.hobbies.map((hobby, index) => (
                  <li key={index} className="flex items-center mb-1">
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
