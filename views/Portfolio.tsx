"use client";
import TransitionLink from "@/components/ui/TransitionLink";
import { motion } from "framer-motion";
import { ExternalLink, Eye, Filter, Github } from "lucide-react";
import React, { useState } from "react";
import { AnimatedSection } from "../components/AnimatedSection";
import { PageTransition } from "../components/PageTransition";
import { portfolioData, Project } from "../data/portfolioData";

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filteredProjects =
    filter === "featured"
      ? portfolioData.filter((project) => project.featured)
      : portfolioData;

  const allTechnologies = Array.from(
    new Set(portfolioData.flatMap((project) => project.technologies))
  );

  return (
    <PageTransition>
      <div className="space-y-8">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Portfolio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A collection of projects I've built using modern web technologies.
              Each project showcases different aspects of full-stack
              development.
            </p>
          </div>
        </AnimatedSection>

        {/* Filter */}
        <AnimatedSection delay={0.1}>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setFilter("all")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                filter === "all"
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              <Filter size={16} />
              <span>All Projects</span>
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                filter === "featured"
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              <Filter size={16} />
              <span>Featured</span>
            </button>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </AnimatedSection>

        {/* Technologies Section */}
        <AnimatedSection delay={0.3}>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Technologies I Work With
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {allTechnologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </PageTransition>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all"
    >
      <TransitionLink
        href={`/portfolio/${project.id}`}
        className="relative overflow-hidden cursor-pointer"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {project.featured && (
          <div className="absolute top-4 left-4 bg-primary-600 text-white px-2 py-1 rounded text-sm font-medium">
            Featured
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
          <Eye
            className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
            size={32}
          />
        </div>
      </TransitionLink>

      <div className="p-6 space-y-4">
        <TransitionLink
          href={`/portfolio/${project.id}`}
          className="text-xl font-bold text-gray-900 dark:text-white cursor-pointer hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          {project.title}
        </TransitionLink>

        <p className="text-gray-600 dark:text-gray-300">{project.subTitle}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-sm">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2 pt-4">
          <TransitionLink
            href={`/portfolio/${project.id}`}
            className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm"
          >
            <Eye size={16} />
            <span>View Details</span>
          </TransitionLink>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors text-sm px-4 py-2 border border-primary-600 dark:border-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
          {project.githubUrl && !project.isPrivate && (
            <a
              href={project.githubUrl}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors text-sm px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
              <span>Source</span>
            </a>
          )}
          {project.isPrivate && (
            <span className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full text-sm italic border border-gray-200 dark:border-gray-600">
              Private Project
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
