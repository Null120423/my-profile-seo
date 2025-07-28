import TransitionLink from "@/components/ui/TransitionLink";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Search } from "lucide-react";
import React from "react";
import { SEOHead } from "../components/SEOHead";

export const NotFound: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found | Trần Hữu Tài  (Dev On Wheels)"
        description="The page you're looking for doesn't exist. Return to the homepage or explore other sections."
      />

      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8 max-w-md mx-auto"
        >
          {/* Animated 404 */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            className="relative"
          >
            <div className="text-8xl font-bold text-gray-200 dark:text-gray-700 select-none">
              404
            </div>
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <Search
                size={40}
                className="text-primary-600 dark:text-primary-400"
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-gray-900 dark:text-white"
            >
              Page Not Found
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Oops! The page you're looking for seems to have wandered off into
              the digital void. Don't worry, even the best developers encounter
              404s sometimes.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <TransitionLink
              href="/"
              className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors group"
            >
              <Home size={20} />
              <span>Go Home</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                →
              </motion.div>
            </TransitionLink>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Go Back</span>
            </button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-8 border-t border-gray-200 dark:border-gray-700"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Or explore these sections:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { to: "/portfolio", label: "Portfolio" },
                { to: "/blog", label: "Blog" },
                { to: "/resume", label: "Resume" },
                { to: "/favourites", label: "Favourites" },
              ].map((link) => (
                <TransitionLink
                  key={link.to}
                  href={link.to}
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm transition-colors"
                >
                  {link.label}
                </TransitionLink>
              ))}
            </div>
          </motion.div>

          {/* Fun Animation */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-6xl"
          >
            🚀
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
