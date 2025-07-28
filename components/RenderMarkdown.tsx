import React from "react";
import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";

interface RenderMarkdownProps {
  content: string;
  className?: string;
}

const RenderMarkdown: React.FC<RenderMarkdownProps> = ({
  content,
  className = "",
}) => {
  const components: Components = {
    code({ children, className, ...props }) {
      return (
        <code
          className={`${className} bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono`}
          {...props}
        >
          {children}
        </code>
      );
    },
    pre({ children, ...props }) {
      return (
        <pre
          className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4 text-sm"
          {...props}
        >
          {children}
        </pre>
      );
    },
    h1: ({ children, ...props }) => (
      <h1
        className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
        {...props}
      >
        {children}
      </h3>
    ),
    h4: ({ children, ...props }) => (
      <h4
        className="text-lg font-semibold mb-2 text-gray-900 dark:text-white"
        {...props}
      >
        {children}
      </h4>
    ),
    p: ({ children, ...props }) => (
      <p
        className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"
        {...props}
      >
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul
        className="mb-4 pl-6 space-y-2 text-gray-700 dark:text-gray-300"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol
        className="mb-4 pl-6 space-y-2 text-gray-700 dark:text-gray-300 list-decimal"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="list-disc" {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-4 border-primary-500 pl-4 py-2 mb-4 italic text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800"
        {...props}
      >
        {children}
      </blockquote>
    ),
    a: ({ children, href, ...props }) => (
      <a
        href={href}
        className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 underline transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    ),
    img: ({ src, alt, ...props }) => (
      <img
        src={src}
        alt={alt}
        className="max-w-full h-auto rounded-lg shadow-md my-4"
        {...props}
      />
    ),
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto mb-4">
        <table
          className="min-w-full border-collapse border border-gray-300 dark:border-gray-600"
          {...props}
        >
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }) => (
      <th
        className="border border-gray-300 dark:border-gray-600 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-left font-semibold text-gray-900 dark:text-white"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td
        className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300"
        {...props}
      >
        {children}
      </td>
    ),
    hr: ({ ...props }) => (
      <hr className="my-6 border-gray-300 dark:border-gray-600" {...props} />
    ),
    strong: ({ children, ...props }) => (
      <strong
        className="font-semibold text-gray-900 dark:text-white"
        {...props}
      >
        {children}
      </strong>
    ),
    em: ({ children, ...props }) => (
      <em className="italic text-gray-700 dark:text-gray-300" {...props}>
        {children}
      </em>
    ),
  };

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
};

export default RenderMarkdown;
