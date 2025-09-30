"use client";
import { motion } from "framer-motion";
import { ExternalLink, Eye, User, Users } from "lucide-react";

import TransitionLink from "@/components/ui/TransitionLink";
import { Project } from "@/data/portfolioData";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index = 0,
}) => {
  return (
    <motion.div
      key={project.id}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-white/90 backdrop-blur-sm dark:bg-gray-900/90 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-500 my-8"
      initial={{ opacity: 0, y: 30 }}
      transition={{
        type: "spring",
        stiffness: 200,
        delay: index * 0.15,
      }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Image Section with Overlay */}
      <div className="relative h-48 overflow-hidden">
        <TransitionLink href={`/portfolio/${project.id}`}>
          <img
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            src={project.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-md rounded-full mx-auto">
                <Eye className="text-white" size={20} />
              </div>
            </div>
          </div>
        </TransitionLink>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-5">
        {/* Header */}
        <div className="space-y-3">
          <TransitionLink
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 block"
            href={`/portfolio/${project.id}`}
          >
            {project.title}
          </TransitionLink>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {project.subTitle}
          </p>
        </div>

        {/* Project Info Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <User className="text-blue-600 dark:text-blue-400" size={16} />
            <div>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                Role
              </p>
              <p className="text-xs text-blue-800 dark:text-blue-200 truncate">
                {project.role}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-900/30 rounded-lg">
            <Users className="text-green-600 dark:text-green-400" size={16} />
            <div>
              <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                Team Size
              </p>
              <p className="text-xs text-green-800 dark:text-green-200">
                {project.teamSize} members
              </p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <div className="w-1 h-4 bg-blue-500 rounded-full" />
            Project Summary
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3">
            {project.summary}
          </p>
        </div>

        {/* Key Responsibilities */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <div className="w-1 h-4 bg-purple-500 rounded-full" />
            Key Responsibilities
          </h4>
          <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
            {project.responsibilities.slice(0, 3).map((responsibility, i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="w-1 h-1 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                <span className="line-clamp-2">{responsibility}</span>
              </li>
            ))}
            {project.responsibilities.length > 3 && (
              <li className="text-purple-600 dark:text-purple-400 text-xs font-medium">
                +{project.responsibilities.length - 3} more responsibilities
              </li>
            )}
          </ul>
        </div>

        {/* Key Features */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <div className="w-1 h-4 bg-orange-500 rounded-full" />
            Key Features
          </h4>
          <div className="flex flex-wrap gap-1">
            {project.keyFeatures.slice(0, 4).map((feature, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-xs border border-orange-200 dark:border-orange-800"
              >
                {feature.length > 25
                  ? `${feature.substring(0, 25)}...`
                  : feature}
              </span>
            ))}
            {project.keyFeatures.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs">
                +{project.keyFeatures.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Impact */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <div className="w-1 h-4 bg-green-500 rounded-full" />
            Impact & Results
          </h4>
          <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <p className="text-xs text-green-800 dark:text-green-200 leading-relaxed line-clamp-3">
              {project.impact}
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <div className="w-1 h-4 bg-indigo-500 rounded-full" />
            Technologies
          </h4>
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 5).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded text-xs font-medium border border-indigo-200 dark:border-indigo-800"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <TransitionLink
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg text-sm"
            href={`/portfolio/${project.id}`}
          >
            <Eye size={16} />
            View Details
          </TransitionLink>

          {project.additionalLinks && project.additionalLinks.length > 0 && (
            <div className="flex gap-2">
              {project.additionalLinks.slice(0, 2).map((link, i) => (
                <a
                  key={i}
                  className="inline-flex items-center gap-1 px-3 py-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-xs border border-gray-300 dark:border-gray-600 rounded-md hover:border-blue-400"
                  href={link.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ExternalLink size={12} />
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
