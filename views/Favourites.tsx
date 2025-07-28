"use client";
import TransitionLink from "@/components/ui/TransitionLink";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import React from "react";
import { AnimatedSection } from "../components/AnimatedSection";
import { FavouriteItem, favouritesData } from "../data/favouritesData";

export const Favourites: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <AnimatedSection>
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            My Favourites
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A curated collection of books, movies, and tools that have inspired
            me and shaped my approach to development and life.
          </p>
        </div>
      </AnimatedSection>

      {/* Categories */}
      <div className="space-y-12">
        {favouritesData.map((category) => (
          <AnimatedSection key={category.category} delay={0.1}>
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {category.category}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <FavouriteCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

const FavouriteCard: React.FC<{ item: FavouriteItem }> = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all"
    >
      <TransitionLink href={`/favourites/${item.id}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-lg p-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${
                    i < item.rating
                      ? "text-secondary-400 fill-current"
                      : "text-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {item.title}
            </h3>
            {item.link && (
              <a
                href={item.link}
                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {item.description}
          </p>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
              <Star size={14} className="text-secondary-400 fill-current" />
              <span>{item.rating}/5</span>
            </div>

            {item.link && (
              <a
                href={item.link}
                className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            )}
          </div>
        </div>
      </TransitionLink>
    </motion.div>
  );
};
