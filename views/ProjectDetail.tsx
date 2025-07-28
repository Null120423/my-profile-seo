"use client";
import TransitionLink from "@/components/ui/TransitionLink";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Eye, Github, X } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "../components/AnimatedSection";
import { PageTransition } from "../components/PageTransition";
import RenderMarkdown from "../components/RenderMarkdown";
import { portfolioData } from "../data/portfolioData";
import { NotFound } from "./NotFound";

type ProjectDetailProps = {
  params: { id: string };
};

export const ProjectDetail = ({ params }: ProjectDetailProps) => {
  const { id } = params;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const project = portfolioData.find((p) => p.id === id);

  if (!project) {
    return <NotFound />;
  }

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <PageTransition>
      <div className="space-y-8">
        {/* Back Button */}
        <AnimatedSection>
          <TransitionLink
            href="/portfolio"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </TransitionLink>
        </AnimatedSection>

        {/* Project Header */}
        <AnimatedSection delay={0.1}>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h1>
              {project.featured && (
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              )}
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {project.subTitle}
            </p>
          </div>
        </AnimatedSection>

        {/* Project Actions */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            )}
            {project.githubUrl && !project.isPrivate && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
              >
                <Github size={20} />
                <span>View Source</span>
              </a>
            )}
            {project.isPrivate && (
              <span className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-600">
                <span>Private Repository</span>
              </span>
            )}
          </div>
        </AnimatedSection>

        {/* Main Image */}
        <AnimatedSection delay={0.3}>
          <div className="relative group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => handleImageClick(project.image)}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all rounded-xl flex items-center justify-center">
              <Eye
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                size={32}
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Technologies */}
        <AnimatedSection delay={0.4}>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Project Description */}
        <AnimatedSection delay={0.5}>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Project Description
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <RenderMarkdown content={project.description} />
            </div>
          </div>
        </AnimatedSection>

        {/* Project Gallery */}
        {project.imgs && project.imgs.length > 0 && (
          <AnimatedSection delay={0.6}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Project Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.imgs.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group cursor-pointer"
                    onClick={() => handleImageClick(img)}
                  >
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center">
                      <Eye
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        size={24}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-7xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Project preview"
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={closeModal}
              />
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
};
