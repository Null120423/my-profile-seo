import { ArrowRight, Calendar, Eye } from "lucide-react";
import { BlogPost } from "./BlogItemCard";
import TransitionLink from "./TransitionLink";

interface BlogItemFeaturedCardProps {
  post: BlogPost;
  index?: number;
  variant?: "default" | "featured" | "compact";
  showActions?: boolean;
  className?: string;
}

export default function BlogItemFeaturedCard({
  post,
  index = 0,
  variant = "default",
  showActions = true,
  className = "",
}: BlogItemFeaturedCardProps) {
  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: `/blog/${post.slug}`,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(
        `${window.location.origin}/blog/${post.slug}`
      );
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Variant styles
  const getVariantStyles = () => {
    switch (variant) {
      case "featured":
        return {
          card: "md:flex md:flex-row bg-gradient-to-r from-secondary-50 to-primary-50 border border-secondary-200",
          image: "md:w-1/2 h-64 md:h-auto",
          content: "md:w-1/2 p-8",
          title: "text-2xl md:text-3xl",
        };
      case "compact":
        return {
          card: "flex flex-row",
          image: "w-32 h-24 flex-shrink-0",
          content: "flex-1 p-4",
          title: "text-lg",
        };
      default:
        return {
          card: "flex flex-col",
          image: "w-full h-48 sm:h-56",
          content: "p-6",
          title: "text-xl",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <TransitionLink
      href={`/blog/${post.slug}`}
      className={`animate-slide-up ${className}`}
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative">
            <img
              src={post.image}
              alt={post.title}
              className={`w-full h-[20rem] object-cover transition-all duration-300 `}
            />
            <div className="absolute top-4 left-4">
              <span className="bg-gradient-primary text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                Nổi bật
              </span>
            </div>
          </div>

          <div className="p-4 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              {post.views && (
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Eye className="w-4 h-4" />
                  <span>{post.views.toLocaleString()}</span>
                </div>
              )}
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 leading-tight hover:text-secondary-600 transition-colors duration-300">
              {post.title}
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.createdAt)}</span>
                </div>
              </div>

              <button className="flex items-center gap-2 text-secondary-600 hover:text-secondary-700 font-semibold transition-all duration-200 hover:gap-3 group">
                Đọc tiếp
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </TransitionLink>
  );
}
