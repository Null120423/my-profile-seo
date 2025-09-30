/* eslint-disable jsx-a11y/click-events-have-key-events */
"use client";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Link as LinkIcon,
  Target,
  TrendingUp,
  User,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

import RenderMarkdown from "../components/RenderMarkdown";

import { NotFound } from "./NotFound";

import ImgWithPreview from "@/components/ui/ImgWithPreview";
import TransitionLink from "@/components/ui/TransitionLink";
import { portfolioData } from "@/data/portfolioData";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        {/* Back Button */}
        <div className="mb-4">
          <TransitionLink
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            href="/portfolio"
          >
            <ArrowLeft
              className="group-hover:-translate-x-1 transition-transform"
              size={20}
            />
            <span>Back to Portfolio</span>
          </TransitionLink>
        </div>

        {/* Project Hero Section */}
        <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <div className="flex items-start justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <h1 className="text-4xl font-bold">{project.title}</h1>
                  {project.featured && (
                    <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-xl opacity-90 max-w-3xl">
                  {project.subTitle}
                </p>
              </div>
            </div>

            {/* Project Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {project.role && (
                <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-md rounded-lg">
                  <User className="text-white" size={20} />
                  <div>
                    <p className="text-white/80 text-sm">Role</p>
                    <p className="text-white font-medium">{project.role}</p>
                  </div>
                </div>
              )}
              {project.teamSize && (
                <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-md rounded-lg">
                  <Users className="text-white" size={20} />
                  <div>
                    <p className="text-white/80 text-sm">Team Size</p>
                    <p className="text-white font-medium">
                      {project.teamSize} members
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Project Actions */}
          <div className="p-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
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
                  className="flex items-center space-x-2 bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors shadow-lg hover:shadow-xl"
                  href={project.githubUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Github size={20} />
                  <span>View Source</span>
                </a>
              )}
              {project.additionalLinks &&
                project.additionalLinks.map((link, index) => (
                  <a
                    key={index}
                    className="flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
                    href={link.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <LinkIcon size={20} />
                    <span>{link.label}</span>
                  </a>
                ))}
              {project.isPrivate && (
                <span className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-600">
                  <span>Private Repository</span>
                </span>
              )}
            </div>
          </div>

          {/* Main Image */}
          <div className="p-8">
            <div className="relative group">
              <ImgWithPreview
                alt={project.title}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
                src={project.image}
              />
            </div>
          </div>
        </div>

        {/* Project Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Technologies */}
            <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <div className="w-2 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-200 dark:border-blue-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Summary */}
            {project.summary && (
              <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Target className="text-green-600" size={20} />
                  Project Summary
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.summary}
                </p>
              </div>
            )}

            {/* Impact */}
            {project.impact && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl shadow-lg border border-green-200 dark:border-green-800 p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4 flex items-center gap-2">
                  <TrendingUp className="text-green-600" size={20} />
                  Impact & Results
                </h3>
                <p className="text-green-800 dark:text-green-200 leading-relaxed">
                  {project.impact}
                </p>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Key Responsibilities */}
            {project.responsibilities &&
              project.responsibilities.length > 0 && (
                <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <User className="text-purple-600" size={20} />
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-3">
                    {project.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Key Features */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Zap className="text-orange-600" size={20} />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-orange-800 dark:text-orange-200 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Project Description */}
            <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Detailed Description
              </h3>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <RenderMarkdown content={project.description} />
              </div>
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        {project.imgs && project.imgs.length > 0 && (
          <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.imgs.map((img, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => handleImageClick(img)}
                >
                  <ImgWithPreview
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    src={img}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                    <ExternalLink
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      size={24}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Background Decorations */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
};
