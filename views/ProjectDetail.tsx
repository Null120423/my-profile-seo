/* eslint-disable jsx-a11y/click-events-have-key-events */
"use client";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

import RenderMarkdown from "../components/RenderMarkdown";
import { portfolioData } from "../data/portfolioData";

import { NotFound } from "./NotFound";

import ImgWithPreview from "@/components/ui/ImgWithPreview";
import TransitionLink from "@/components/ui/TransitionLink";

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
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4">
      <div className="max-w-3xl mx-auto w-full space-y-8">
        {/* Back Button */}
        <div className="mb-4">
          <TransitionLink
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            href="/portfolio"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </TransitionLink>
        </div>

        {/* Project Header */}
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

        {/* Project Actions */}
        <div className="flex flex-wrap gap-4">
          {project.liveUrl && (
            <a
              className="flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              href={project.liveUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a>
          )}
          {project.githubUrl && !project.isPrivate && (
            <a
              className="flex items-center space-x-2 bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
              href={project.githubUrl}
              rel="noopener noreferrer"
              target="_blank"
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

        {/* Main Image */}
        <div className="relative group">
          <ImgWithPreview
            alt={project.title}
            className="absolute inset-0"
            src={project.image}
          />
        </div>

        {/* Technologies */}
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

        {/* Project Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Project Description
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <RenderMarkdown content={project.description} />
          </div>
        </div>

        {/* Project Gallery */}
        {project.imgs && project.imgs.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.imgs.map((img, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => handleImageClick(img)}
                >
                  <ImgWithPreview
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                    src={img}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
