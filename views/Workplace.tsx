import {
  Building,
  Calendar,
  ExternalLink,
  MapPin,
  TrendingUp,
  Users,
} from "lucide-react";
import React from "react";
import { workplaceData } from "../data/workplaceData";

export const Workplace: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          My Workplace
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Where I work, who I work with, and the technologies that power our
          products.
        </p>
      </div>

      {/* Company Info */}
      <section className="bg-gradient-to-br from-primary-50 to-indigo-100 dark:from-primary-900/20 dark:to-indigo-900/20 rounded-xl p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Building
                className="text-primary-600 dark:text-primary-400"
                size={32}
              />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {workplaceData.company.name}
              </h2>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {workplaceData.company.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Industry
                </div>
                <div className="font-medium text-gray-900 dark:text-white">
                  {workplaceData.company.industry}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Company Size
                </div>
                <div className="font-medium text-gray-900 dark:text-white">
                  {workplaceData.company.size}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Founded
                </div>
                <div className="font-medium text-gray-900 dark:text-white">
                  {workplaceData.company.founded}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Website
                </div>
                <a
                  href={workplaceData.company.website}
                  className="flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-medium">Visit Website</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              My Role
            </h3>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {workplaceData.position.title}
              </h4>

              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <Building size={16} />
                  <span>{workplaceData.position.department}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <Calendar size={16} />
                  <span>
                    Since{" "}
                    {new Date(
                      workplaceData.position.startDate
                    ).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <MapPin size={16} />
                  <span>{workplaceData.position.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="space-y-6">
        <div className="flex items-center space-x-2">
          <Users className="text-primary-600 dark:text-primary-400" size={24} />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            My Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workplaceData.team.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="space-y-6">
        <div className="flex items-center space-x-2">
          <TrendingUp
            className="text-primary-600 dark:text-primary-400"
            size={24}
          />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Technologies We Use
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(
            workplaceData.technologies.reduce((acc, tech) => {
              if (!acc[tech.category]) acc[tech.category] = [];
              acc[tech.category].push(tech);
              return acc;
            }, {} as Record<string, typeof workplaceData.technologies>)
          ).map(([category, techs]) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {category}
              </h3>
              <div className="space-y-3">
                {techs.map((tech) => (
                  <div key={tech.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300">
                        {tech.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {tech.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${tech.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Current Projects */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Current Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {workplaceData.currentProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 space-y-4"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.name}
                </h3>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    project.status === "In Development"
                      ? "bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300"
                      : project.status === "In Progress"
                      ? "bg-secondary-100 dark:bg-secondary-900/20 text-secondary-800 dark:text-secondary-300"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {project.description}
              </p>

              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <Users size={14} />
                <span>{project.teamSize} team members</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
