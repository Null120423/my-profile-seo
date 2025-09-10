"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { favouritesData } from "../data/favouritesData";

import TransitionLink from "@/components/ui/TransitionLink";

export const Favourites: React.FC = () => {
  return (
    <div className="min-h-screen justify-center flex bg-white dark:bg-gray-900 py-12 px-4">
      <div className="max-w-5xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          My Favourites
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center">
          A curated collection of books, movies, and tools that have inspired me
          and shaped my approach to development and life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {favouritesData.flatMap((category) =>
            category.items.map((item) => (
              <motion.div
                key={item.id}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <TransitionLink
                  className="block"
                  href={`/favourites/${item.id}`}
                >
                  <img
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                    src={item.image}
                  />
                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={
                            i < item.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }
                          size={14}
                        />
                      ))}
                      <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                        {item.rating}/5
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-2">
                      {item.description}
                    </p>
                  </div>
                </TransitionLink>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
