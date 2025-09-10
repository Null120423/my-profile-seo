"use client";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

import { portfolioData } from "../data/portfolioData";

import TransitionLink from "@/components/ui/TransitionLink";

export const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light mb-12">
            A collection of projects I've built using modern web technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.map((project) => (
              <motion.div
                key={project.id}
                animate={{ opacity: 1, y: 0 }}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300 }}
                whileHover={{ y: -5 }}
              >
                <TransitionLink
                  className="relative overflow-hidden cursor-pointer block"
                  href={`/portfolio/${project.id}`}
                >
                  <img
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-black/10 bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                    <Eye
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      size={32}
                    />
                  </div>
                </TransitionLink>
                <div className="p-6 space-y-2">
                  <TransitionLink
                    className="text-xl font-bold text-gray-900 dark:text-white cursor-pointer hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    href={`/portfolio/${project.id}`}
                  >
                    {project.title}
                  </TransitionLink>
                  <p className="text-gray-600 dark:text-gray-300 text-base font-light">
                    {project.subTitle}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
