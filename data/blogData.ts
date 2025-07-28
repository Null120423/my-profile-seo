export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: number;
  tags: string[];
  featured: boolean;
  slug: string;
  author?: string;
  image?: string;
}

export const blogData: BlogPost[] = [
  {
    id: "1",
    slug: "building-scalable-react-applications",
    title: "Building Scalable React Applications",
    excerpt:
      "Learn the best practices for creating maintainable and scalable React applications that can grow with your team and requirements.",
    content: `# Building Scalable React Applications

Creating scalable React applications is crucial for long-term success. Here are the key principles I follow:

## Component Architecture

### 1. Single Responsibility Principle
Each component should have one reason to change. Keep components focused on a single piece of functionality.

### 2. Composition over Inheritance
React favors composition. Build complex UIs by combining simpler components rather than creating deep inheritance hierarchies.

## State Management

When your application grows, proper state management becomes critical:

- **Local State**: Use useState for component-specific state
- **Shared State**: Consider Context API for mid-sized apps
- **Complex State**: Implement Redux or Zustand for large applications

## Code Organization

\`\`\`
src/
  components/
    common/
    forms/
    layout/
  pages/
  hooks/
  utils/
  services/
\`\`\`

## Performance Optimization

- Use React.memo for expensive components
- Implement proper key props in lists
- Lazy load components with React.lazy()
- Optimize bundle size with code splitting

## Testing Strategy

A good testing pyramid includes:
- Unit tests for utilities and hooks
- Integration tests for component interactions
- E2E tests for critical user flows

Remember: scalability isn't just about handling more users—it's about maintaining code quality as your team and codebase grow.`,
    date: "2024-01-15",
    readTime: 8,
    tags: ["React", "Architecture", "Best Practices"],
    featured: true,
    author: "Trần Hữu Tài  (Dev On Wheels)",
    image:
      "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    id: "2",
    slug: "modern-css-techniques-2024",
    title: "Modern CSS Techniques for 2024",
    excerpt:
      "Explore the latest CSS features and techniques that are revolutionizing how we style modern web applications.",
    content: `# Modern CSS Techniques for 2024

CSS has evolved tremendously. Here are the modern techniques every developer should know:

## Container Queries

Finally, we can style elements based on their container size, not just the viewport:

\`\`\`css
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
\`\`\`

## CSS Grid Subgrid

Subgrid allows nested grids to align with their parent grid:

\`\`\`css
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.child {
  display: grid;
  grid-template-columns: subgrid;
}
\`\`\`

## Custom Properties (CSS Variables)

Dynamic theming made easy:

\`\`\`css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #10b981;
}

[data-theme="dark"] {
  --primary-color: #60a5fa;
  --secondary-color: #34d399;
}
\`\`\`

## Logical Properties

Write CSS that works for all writing modes:

\`\`\`css
.element {
  margin-inline-start: 1rem; /* Instead of margin-left */
  border-block-end: 1px solid; /* Instead of border-bottom */
}
\`\`\`

These techniques make our CSS more maintainable and future-proof.`,
    date: "2024-01-08",
    readTime: 6,
    tags: ["CSS", "Web Development", "Frontend"],
    featured: true,
    author: "Trần Hữu Tài  (Dev On Wheels)",
    image:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    id: "3",
    slug: "understanding-typescript-generics",
    title: "Understanding TypeScript Generics",
    excerpt:
      "Master TypeScript generics to write more flexible and reusable code that maintains type safety across your applications.",
    content: `# Understanding TypeScript Generics

Generics are one of TypeScript's most powerful features for writing reusable, type-safe code.

## Basic Generic Functions

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

const stringResult = identity<string>("hello");
const numberResult = identity<number>(42);
\`\`\`

## Generic Interfaces

\`\`\`typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface User {
  id: number;
  name: string;
}

const userResponse: ApiResponse<User> = {
  data: { id: 1, name: "John" },
  status: 200,
  message: "Success"
};
\`\`\`

## Constrained Generics

\`\`\`typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
\`\`\`

## Advanced Patterns

### Mapped Types
\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
}
\`\`\`

### Conditional Types
\`\`\`typescript
type ApiResponse<T> = T extends string 
  ? { message: T } 
  : { data: T };
\`\`\`

Generics enable us to write code that's both flexible and type-safe!`,
    date: "2024-01-01",
    readTime: 10,
    tags: ["TypeScript", "Programming", "Type Safety"],
    featured: false,
    author: "Trần Hữu Tài  (Dev On Wheels)",
    image:
      "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
];
