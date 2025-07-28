"use client";
import TransitionLink from "@/components/ui/TransitionLink";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Heart, Star } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AnimatedSection } from "../components/AnimatedSection";
import RenderMarkdown from "../components/RenderMarkdown";
import { SEOHead } from "../components/SEOHead";
import { favouritesData, type FavouriteItem } from "../data/favouritesData";
import { hasMarkdownFile, loadFavouriteMarkdown } from "../lib/markdownLoader";

export const FavouriteDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<FavouriteItem | null>(null);
  const [category, setCategory] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [hasMarkdown, setHasMarkdown] = useState<boolean>(false);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    // Find the item across all categories
    let foundItem: FavouriteItem | null = null;
    let foundCategory = "";

    for (const cat of favouritesData) {
      const found = cat.items.find((item) => item.id === id);
      if (found) {
        foundItem = found;
        foundCategory = cat.category;
        break;
      }
    }

    setItem(foundItem);
    setCategory(foundCategory);

    // Load markdown content if item has slug
    if (foundItem?.slug) {
      loadMarkdownContent(foundItem.slug);
    } else {
      setLoading(false);
    }
  }, [id]);

  const loadMarkdownContent = async (slug: string) => {
    try {
      // Check if markdown file exists
      const exists = await hasMarkdownFile(slug);
      if (exists) {
        const content = await loadFavouriteMarkdown(slug);
        setMarkdownContent(content);
        setHasMarkdown(true);
      }
    } catch (error) {
      console.error("Error loading markdown:", error);
      setHasMarkdown(false);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="animate-pulse space-y-8">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
          <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Favourite Not Found
        </h1>
        <TransitionLink
          href="/favourites"
          className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
        >
          <ArrowLeft size={16} />
          <span>Back to Favourites</span>
        </TransitionLink>
      </div>
    );
  }

  const getDetailedDescription = (item: FavouriteItem, category: string) => {
    const baseDescriptions: Record<string, Record<string, string>> = {
      Books: {
        "Clean Code": `This book fundamentally changed how I approach software development. Robert Martin's principles of writing clean, maintainable code have become second nature in my daily work. The book covers everything from meaningful naming conventions to proper function design, and I find myself referencing its concepts regularly when mentoring junior developers.

What makes this book special is its practical approach - it's not just theory, but real-world examples that you can immediately apply. The transformation from writing code that "just works" to code that communicates its intent clearly is invaluable for any serious developer.`,

        "The Pragmatic Programmer": `A timeless classic that goes beyond just coding techniques. This book shaped my philosophy as a developer, teaching me to think critically about problems and approach solutions systematically. The DRY principle, the importance of automation, and the concept of being a pragmatic programmer have all become core parts of my development methodology.

Every chapter offers actionable advice that has saved me countless hours and helped me build more robust, maintainable systems. It's a book I revisit regularly and always discover something new.`,

        "System Design Interview": `As someone who's been through multiple system design interviews and now conducts them, this book is an excellent resource for understanding large-scale system architecture. It breaks down complex concepts into digestible pieces and provides practical frameworks for approaching system design problems.

The real-world examples and case studies make abstract concepts concrete, and the step-by-step approach to designing systems like chat applications, URL shorteners, and notification systems is incredibly valuable for both interviews and actual system design work.`,
      },

      Movies: {
        "The Matrix": `Beyond its groundbreaking visual effects, The Matrix perfectly captures the essence of what it means to question reality - something every developer can relate to when debugging complex systems. The film's exploration of simulated realities and the choice between comfortable illusion and difficult truth resonates deeply with the tech community.

The movie's influence on programming culture is undeniable, from "red pill/blue pill" metaphors to the iconic green text aesthetic that many developers still love. It's a film that makes you think about the nature of reality and our relationship with technology.`,

        Inception: `Christopher Nolan's masterpiece is like the perfect metaphor for nested function calls and recursive programming. The multiple layers of dreams within dreams mirror the complexity of modern software architecture, where you often need to dive deep through multiple abstraction layers to understand what's really happening.

The film's attention to detail and logical consistency, even within its fantastical premise, reflects the kind of systematic thinking that makes great software. Plus, the concept of "inception" - planting an idea that grows organically - is exactly what good documentation and mentoring should achieve.`,

        "Ex Machina": `This film brilliantly explores the ethical implications of artificial intelligence and consciousness - topics that are increasingly relevant as AI becomes more prevalent in our daily work. The Turing test scenarios and the questions about what makes intelligence "real" are fascinating from both a philosophical and technical perspective.

As someone working in tech, the film's portrayal of the relationship between creator and creation, and the responsibilities that come with building intelligent systems, feels particularly relevant. It's a thought-provoking exploration of where our field might be heading.`,
      },

      Tools: {
        "VS Code": `VS Code has completely transformed my development workflow. The extensibility, integrated terminal, and excellent TypeScript support make it the perfect editor for modern web development. The IntelliSense is incredibly accurate, and the debugging capabilities are top-notch.

What I love most is how it strikes the perfect balance between being lightweight and feature-rich. The extension ecosystem is phenomenal - from GitLens for enhanced Git integration to Prettier for code formatting, there's an extension for everything. The regular updates and active community support make it feel like it's constantly evolving with the needs of developers.`,

        Figma: `Figma has revolutionized how I collaborate with designers. The real-time collaboration features mean we can work together seamlessly, and the developer handoff tools make implementing designs much more accurate and efficient. Being able to inspect elements, copy CSS properties, and export assets directly from the design file saves enormous amounts of time.

The component system in Figma also helps me understand design systems better, which translates to better component architecture in my code. It's bridged the gap between design and development in ways I never thought possible.`,

        Notion: `Notion has become my second brain for organizing everything from project documentation to personal learning notes. The flexibility to create custom databases, link related content, and build complex workflows makes it incredibly powerful for managing both technical and personal projects.

I use it for everything: tracking learning goals, documenting architecture decisions, maintaining team runbooks, and even planning personal projects. The ability to embed code snippets, create templates, and collaborate with team members makes it an indispensable tool in my productivity stack.`,
      },
    };

    return baseDescriptions[category]?.[item.title] || item.description;
  };

  return (
    <>
      <SEOHead
        title={`${item.title} - My Favourites | Trần Hữu Tài  (Dev On Wheels)`}
        description={`Why ${
          item.title
        } is one of my favorite ${category.toLowerCase()}. ${item.description}`}
        image={item.image}
        url={`https://codeonwheels.comfavourites/${item.id}`}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Breadcrumb */}
        <AnimatedSection>
          <nav className="flex items-center space-x-2 text-sm">
            <TransitionLink
              href="/favourites"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              Favourites
            </TransitionLink>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 dark:text-gray-400">{category}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 dark:text-white font-medium">
              {item.title}
            </span>
          </nav>
        </AnimatedSection>

        {/* Back Button */}
        <AnimatedSection delay={0.1}>
          <TransitionLink
            href="/favourites"
            className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to Favourites</span>
          </TransitionLink>
        </AnimatedSection>

        {/* Hero Section */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rating Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <Star
                          size={16}
                          className={`${
                            i < item.rating
                              ? "text-secondary-400 fill-current"
                              : "text-gray-300 dark:text-gray-600"
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.rating}/5
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                    {category}
                  </span>
                  <Heart size={16} className="text-red-500" />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                {item.description}
              </motion.p>

              {item.link && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors group"
                  >
                    <span>Learn More</span>
                    <ExternalLink
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Detailed Review */}
        <AnimatedSection delay={0.3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {hasMarkdown ? "Detailed Review" : "Why I Love This"}
            </h2>

            {hasMarkdown && markdownContent ? (
              <RenderMarkdown content={markdownContent} />
            ) : (
              <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
                {getDetailedDescription(item, category)
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
              </div>
            )}
          </motion.div>
        </AnimatedSection>

        {/* Related Items */}
        <AnimatedSection delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              More {category}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {favouritesData
                .find((cat) => cat.category === category)
                ?.items.filter((relatedItem) => relatedItem.id !== item.id)
                .slice(0, 2)
                .map((relatedItem, index) => (
                  <motion.div
                    key={relatedItem.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    <TransitionLink
                      href={`/favourites/${relatedItem.id}`}
                      className="group block bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src={relatedItem.image}
                          alt={relatedItem.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {relatedItem.title}
                          </h3>
                          <div className="flex items-center space-x-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={12}
                                className={`${
                                  i < relatedItem.rating
                                    ? "text-secondary-400 fill-current"
                                    : "text-gray-300 dark:text-gray-600"
                                }`}
                              />
                            ))}
                            <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                              {relatedItem.rating}/5
                            </span>
                          </div>
                        </div>
                      </div>
                    </TransitionLink>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </>
  );
};
