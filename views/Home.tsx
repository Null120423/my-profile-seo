"use client";
import TransitionLink from "@/components/ui/TransitionLink";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import { AnimatedSection } from "../components/AnimatedSection";

export const HomeView: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <AnimatedSection>
        <section className="text-center space-y-6">
          <div className="relative">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              src="https://pub-b8d0ec48dd23462d9cbddc79e9306cbe.r2.dev/f7a863a66553d30d8a42.jpg"
              alt="Trần Hữu Tài  (Dev On Wheels)"
              className="w-64 h-64 rounded-full mx-auto object-cover border-4 border-white dark:border-gray-700 shadow-lg"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-900"></div>
            </motion.div>
          </div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
            >
              Trần Hữu Tài (Dev On Wheels)
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
            >
              Full-Stack Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400"
            >
              Passionate about building scalable web applications and mentoring
              developers. 6+ years of experience with React, Node.js, and cloud
              technologies.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center space-x-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:codeonw@gmail.com"
              className="inline-flex items-center space-x-2 btn-primary"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <TransitionLink
                href="/resume"
                className="inline-flex items-center space-x-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <Download size={20} />
                <span>Resume</span>
              </TransitionLink>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center space-x-4 pt-4"
          >
            <a
              href="https://github.com/Null120423"
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/huu-tai-fullstack-developer-3b1b90252/"
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>
        </section>
      </AnimatedSection>

      {/* Quick Stats */}
      <AnimatedSection delay={0.2}>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              50+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Projects Completed
            </div>
          </div>
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              6+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Years Experience
            </div>
          </div>
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              15+
            </div>
            <div className="text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
        </section>
      </AnimatedSection>

      {/* Featured Sections */}
      <AnimatedSection delay={0.3}>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-8 bg-gradient-to-br from-primary-50 to-indigo-100 dark:from-primary-900/20 dark:to-indigo-900/20 rounded-xl hover:from-primary-100 hover:to-indigo-200 dark:hover:from-primary-900/30 dark:hover:to-indigo-900/30 transition-all"
          >
            <TransitionLink href="/portfolio" className="group ">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Portfolio
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Explore my latest projects including e-commerce platforms, task
                management apps, and more.
              </p>
              <div className="flex items-center text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform">
                <span>View Projects</span>
                <ArrowRight size={20} className="ml-2" />
              </div>
            </TransitionLink>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br p-8 from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl hover:from-emerald-100 hover:to-teal-200 dark:hover:from-emerald-900/30 dark:hover:to-teal-900/30 transition-all"
          >
            <TransitionLink href="/blog" className="w-full  group p-8 ">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Latest Blog
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Read about React best practices, TypeScript tips, and modern web
                development techniques.
              </p>
              <div className="flex items-center text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
                <span>Read Articles</span>
                <ArrowRight size={20} className="ml-2" />
              </div>
            </TransitionLink>
          </motion.div>
        </section>
      </AnimatedSection>
    </div>
  );
};
