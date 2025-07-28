import React from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
  tags?: string[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Trần Hữu Tài  (Dev On Wheels) - Full-Stack Developer",
  description = "Full-Stack Developer specializing in React, Node.js, and modern web technologies. View my portfolio, blog, and resume.",
  image = "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1200",
  url = "https://alexjohnson.dev",
  type = "website",
  publishedTime,
  author = "Trần Hữu Tài  (Dev On Wheels)",
  tags = [],
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Trần Hữu Tài  (Dev On Wheels)" />

      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}

      {author && type === "article" && (
        <meta property="article:author" content={author} />
      )}

      {tags.length > 0 && (
        <>
          {tags.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === "article" ? "BlogPosting" : "WebSite",
          headline: title,
          description: description,
          image: image,
          url: url,
          author: {
            "@type": "Person",
            name: author,
          },
          ...(publishedTime && { datePublished: publishedTime }),
          ...(type === "article" && {
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": url,
            },
          }),
        })}
      </script>
    </>
  );
};
