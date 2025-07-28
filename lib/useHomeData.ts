import { get } from "./helper";

import { BlogPost } from "@/components/ui/BlogItemCard";
import { PropertyCard } from "@/components/ui/PropertyCard";

interface ContactMessage {
  id: number;
  name: string;
  phone: string;
  email?: string;
  message?: string;
  status: string;
  created_at: string;
}

interface HomeData {
  success: boolean;
  data: {
    blogPosts: BlogPost[];
    properties: PropertyCard[];
    featuredProperty: PropertyCard | null;
    recentMessages: ContactMessage[];
    stats: {
      totalBlogs: number;
      totalProperties: number;
      totalMessages: number;
      hasFeaturedProperty: boolean;
    };
  };
}

interface UseHomeDataReturn {
  data: HomeData | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

// Server-side data fetching for homepage
export const getHomeData = async (): Promise<HomeData | null> => {
  try {
    const response = await get(`/api/home`, {
      method: "GET",
      next: { revalidate: 300 },
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.error("Server-side home data fetch error:", error);

    return null;
  }
};

export type { ContactMessage, HomeData };
