"use client";

import { splitToArr } from "@/lib/helper";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Eye,
  MessageCircle,
  Share2,
  Tag,
  User,
} from "lucide-react";
import TransitionLink from "../ui/TransitionLink";

interface RelatedPost {
  id: number;
  title: string;
  image: string;
  date: string;
  readTime: string;
  slug: string;
}

interface BlogData {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image?: string;
  category?: string;
  author?: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  views?: number;
  likes?: number;
  readTime?: string;
  tags?: string;
  tableContent?: { id: string; title: string }[];
  relatedPosts?: RelatedPost[];
  comments?:
    | {
        name: string;
        comment: string;
        time: string;
      }[]
    | undefined;
}

interface Props {
  data: BlogData;
}

export default function BlogDetailPage({ data }: Props) {
  const tableOfContents = data?.tableContent || [];

  const content = data?.content || "<p>Nội dung đang được cập nhật...</p>";

  // Format date
  const formatDate = (dateString: string) => {
    if (!dateString) return "15/12/2024";
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN");
  };

  // Calculate read time if not provided
  const calculateReadTime = (content: string, readTime?: string) => {
    if (readTime) return readTime;
    const wordsPerMinute = 200;
    const wordCount = content.replace(/<[^>]*>/g, "").split(" ").length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} phút đọc`;
  };

  // Don't render if no data
  if (!data) {
    return (
      <div className="py-20 pt-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-600 mb-4">
            Không tìm thấy bài viết
          </h1>
          <TransitionLink
            href="/blog/all"
            className="text-secondary-600 hover:text-secondary-700 font-medium"
          >
            ← Quay lại danh sách blog
          </TransitionLink>
        </div>
      </div>
    );
  }

  return (
    <article className="py-10 pt-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <TransitionLink
          href="/blog/all"
          className="flex items-center gap-2 text-gray-600 hover:text-secondary-600 mb-8 transition-colors animate-fade-in"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Quay lại blog</span>
        </TransitionLink>

        {/* Article Header */}
        <header className="mb-12 animate-slide-up">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm font-medium">
              {data?.category || "SEO Tips"}
            </span>
            <div className="flex items-center gap-4 text-gray-500 text-sm">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{data?.views || "2.5k"} lượt xem</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {data?.title || "Tiêu đề bài viết"}
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {data?.excerpt || "Mô tả ngắn về bài viết..."}
          </p>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{"Nguyet Heli"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(data?.createdAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{calculateReadTime(content, data?.readTime)}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                  isLiked
                    ? "bg-primary-50 border-primary-200 text-primary-600"
                    : "bg-white border-gray-200 text-gray-600 hover:"
                }`}
              >
                <ThumbsUp
                  className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`}
                />
                <span>{likes}</span>
              </button> */}

              <button className="p-2 rounded-lg border border-gray-200 text-gray-600 hover: transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <img
            src={data?.image}
            alt={data?.title}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Table of Contents */}
          <aside className="lg:col-span-1 ">
            <div className="sticky top-32 shadow-md  border-black/10 border-solid border-[1px] rounded-2xl p-6 animate-slide-in-right">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Nội dung bài viết
              </h3>
              <nav className="space-y-2 overflow-y-scroll max-h-[calc(100vh-200px)] pb-20">
                {tableOfContents.map((item) => (
                  <TransitionLink
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-sm text-gray-600 hover:text-secondary-600 py-1 transition-colors"
                  >
                    {item.title}
                  </TransitionLink>
                ))}
              </nav>
            </div>
          </aside>

          {/* Article Content */}
          <main className="lg:col-span-3 animate-fade-in-delay">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* Tags */}
            <div className="flex items-center gap-2 mt-12 mb-8">
              <Tag className="w-5 h-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {splitToArr(data?.tags).map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-secondary-100 hover:text-secondary-700 cursor-pointer transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Comments Section */}
            <div className="border-t hidden border-gray-200 pt-12">
              <div className="flex items-center gap-4 mb-8">
                <MessageCircle className="w-6 h-6 text-gray-500" />
                <h3 className="text-2xl font-bold text-slate-900">
                  Bình luận ({data?.comments?.length || 0})
                </h3>
              </div>

              <div className="space-y-6">
                {data?.comments?.map((comment, index) => (
                  <div key={index} className=" rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {comment?.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">
                          {comment?.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {comment?.time}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{comment?.comment}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-4">
                  Để lại bình luận
                </h4>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent resize-none"
                  placeholder="Chia sẻ ý kiến của bạn..."
                />
                <div className="flex justify-end mt-4">
                  <button className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors">
                    Gửi bình luận
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Related Posts */}
        <section className="mt-20 animate-slide-up">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Bài viết liên quan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(data?.relatedPosts || []).map((post) => (
              <TransitionLink
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block"
              >
                <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2 hover:text-secondary-600 transition-colors">
                      {post.title}
                    </h4>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </TransitionLink>
            ))}
            {(data?.relatedPosts || []).length === 0 && (
              <div className="col-span-3 text-center text-gray-500">
                Không có bài viết liên quan nào.
              </div>
            )}
          </div>
        </section>
      </div>
    </article>
  );
}
