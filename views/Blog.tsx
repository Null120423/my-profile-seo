import TransitionLink from "@/components/ui/TransitionLink";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import React from "react";
import { blogData } from "../data/blogData";

export const Blog: React.FC = () => {
  const featuredPosts = blogData.filter((post) => post.featured);
  const recentPosts = blogData.filter((post) => !post.featured);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          My Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Thoughts on web development, programming best practices, and the
          latest technologies I'm exploring.
        </p>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Featured Posts
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <FeaturedPostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Recent Posts
        </h2>
        <div className="space-y-6">
          {recentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
};

const FeaturedPostCard: React.FC<{ post: any }> = ({ post }) => {
  return (
    <TransitionLink
      href={`/blog/${post.slug}`}
      className="group block bg-gradient-to-br from-primary-50 to-indigo-100 dark:from-primary-900/20 dark:to-indigo-900/20 rounded-xl p-6 hover:from-primary-100 hover:to-indigo-200 dark:hover:from-primary-900/30 dark:hover:to-indigo-900/30 transition-all"
    >
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-sm text-primary-600 dark:text-primary-400">
          <span className="bg-primary-600 text-white px-2 py-1 rounded text-xs font-medium">
            FEATURED
          </span>
          <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <Calendar size={14} />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock size={14} />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag: string) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform">
            <span className="text-sm font-medium">Read More</span>
            <ArrowRight size={16} className="ml-1" />
          </div>
        </div>
      </div>
    </TransitionLink>
  );
};

const PostCard: React.FC<{ post: any }> = ({ post }) => {
  return (
    <TransitionLink
      href={`/blog/${post.slug}`}
      className="group block bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all"
    >
      <div className="space-y-4">
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <Calendar size={14} />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag: string) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform">
            <span className="text-sm font-medium">Read More</span>
            <ArrowRight size={16} className="ml-1" />
          </div>
        </div>
      </div>
    </TransitionLink>
  );
};
