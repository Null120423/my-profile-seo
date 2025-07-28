import StructuredData from "@/components/seo/StructuredData";
import { KEYWORDS, LOGO, USER_DATA } from "@/lib/data";
import { Blog } from "@/views/Blog";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${USER_DATA.fullName} - Blog | Bài viết & Chia sẻ`,
    description: "Đọc các bài viết và chia sẻ từ " + USER_DATA.fullName,
    keywords: [...KEYWORDS, "blog", "bài viết", "chia sẻ"],
    openGraph: {
      title: `${USER_DATA.fullName} - Blog`,
      description: "Đọc các bài viết và chia sẻ từ " + USER_DATA.fullName,
      images: [USER_DATA.avatar, LOGO],
      url: "/blog",
      siteName: USER_DATA.fullName,
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${USER_DATA.fullName} - Blog`,
      description: "Đọc các bài viết và chia sẻ từ " + USER_DATA.fullName,
      images: [USER_DATA.avatar],
    },
  };
}

export default async function BlogPage() {
  return (
    <>
      <StructuredData type="website" />
      <Blog />
    </>
  );
}
