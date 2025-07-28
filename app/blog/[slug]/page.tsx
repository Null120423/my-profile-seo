import { KEYWORDS, LOGO, USER_DATA } from "@/lib/data";
import { BlogPostDetail } from "@/views/BlogPostDetail";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // You can fetch blog post data here to get actual title and description
  const title = `${USER_DATA.fullName} - Blog | ${slug.replace(/-/g, " ")}`;
  const description = `Đọc bài viết "${slug.replace(/-/g, " ")}" từ ${
    USER_DATA.fullName
  }`;

  return {
    title,
    description,
    keywords: [...KEYWORDS, "blog", "bài viết", slug],
    openGraph: {
      title,
      description,
      images: [USER_DATA.avatar, LOGO],
      url: `/blog/${slug}`,
      siteName: USER_DATA.fullName,
      locale: "vi_VN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [USER_DATA.avatar],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  // You can add validation here to check if the blog post exists
  // if (!blogPostExists(slug)) {
  //   notFound();
  // }

  return <BlogPostDetail />;
}

export async function generateStaticParams() {
  // You can generate static params for your blog posts here
  // const posts = await getBlogPosts();
  // return posts.map((post) => ({
  //   slug: post.slug,
  // }));

  return [
    { slug: "building-scalable-react-applications" },
    { slug: "modern-css-techniques-2024" },
    { slug: "understanding-typescript-generics" },
  ];
}
