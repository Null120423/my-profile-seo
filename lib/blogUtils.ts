import { blogData } from "../data/blogData";

export interface BlogPostMeta {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  readTime: number;
  tags: string[];
  featured: boolean;
  image: string;
  slug: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const loadBlogPost = async (slug: string): Promise<BlogPost | null> => {
  try {
    const blog = blogData.find((post) => post.slug === slug);
    if (!blog) {
      return null;
    }

    // Convert blog data to BlogPost format with default fallbacks
    return {
      ...blog,
      author: blog.author || "Trần Hữu Tài  (Dev On Wheels)",
      image:
        blog.image ||
        `https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop`,
    } as BlogPost;
  } catch (error) {
    console.error("Error loading blog post:", error);
    return null;
  }
};

export const generateBlogPostMeta = (post: BlogPost) => {
  return {
    title: `${post.title} | Trần Hữu Tài  (Dev On Wheels)`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
};
