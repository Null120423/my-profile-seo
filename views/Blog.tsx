import { blogData } from "../data/blogData";

import TransitionLink from "@/components/ui/TransitionLink";

export const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4">
      <div className="max-w-3xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          My Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center">
          Thoughts on web development, programming best practices, and the
          latest technologies I'm exploring.
        </p>
        <div className="space-y-8">
          {blogData.map((post) => (
            <TransitionLink
              key={post.id}
              className="block bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all"
              href={`/blog/${post.slug}`}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-1">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>• {post.readTime} min read</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base mb-2">
                  {post.excerpt}
                </p>
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
              </div>
            </TransitionLink>
          ))}
        </div>
      </div>
    </div>
  );
};
