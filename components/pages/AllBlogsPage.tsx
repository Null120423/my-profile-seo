"use client";
import { useState } from "react";
import BlogItemCard, { BlogPost } from "../ui/BlogItemCard";
import BlogItemFeaturedCard from "../ui/BlogItemFeaturedCard";
import TransitionLink from "../ui/TransitionLink";

const BLOGS_PER_PAGE = 9;

const AllBlogsPage = ({
  blogs,
  featured,
}: {
  blogs: BlogPost[];
  featured: BlogPost;
}) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);
  const paginatedBlogs = blogs.slice(
    (page - 1) * BLOGS_PER_PAGE,
    page * BLOGS_PER_PAGE
  );

  return (
    <div className="max-w-7xl pt-32 mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6" aria-label="Breadcrumb">
        <ol className="list-reset flex text-gray-500">
          <li>
            <TransitionLink href="/" className="hover:underline text-gray-600">
              Trang chủ
            </TransitionLink>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <span className="text-secondary-600 font-semibold">Bài viết</span>
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold text-center mb-10">
        Tất cả bài viết Bài viết
      </h1>

      {featured && (
        <div className="mb-8">
          <BlogItemFeaturedCard post={featured} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedBlogs.length === 0 ? (
          <p>Không có bài viết nào.</p>
        ) : (
          paginatedBlogs.map((post, index) => (
            <div key={post.id} className="animate-slide-up">
              <BlogItemCard post={post} className="mb-8" />
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10">
          <nav className="inline-flex space-x-1" aria-label="Pagination">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className={`px-3 py-1 rounded-l bg-gray-100 border border-gray-200 text-gray-600 hover:bg-gray-200 ${
                page === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Trước
            </button>
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx + 1}
                onClick={() => setPage(idx + 1)}
                className={`px-3 py-1 border border-gray-200 ${
                  page === idx + 1
                    ? "bg-secondary-500 text-white font-bold"
                    : "bg-gray-100 text-gray-700 hover:bg-secondary-100"
                }`}
              >
                {idx + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className={`px-3 py-1 rounded-r bg-gray-100 border border-gray-200 text-gray-600 hover:bg-gray-200 ${
                page === totalPages ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Sau
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default AllBlogsPage;
