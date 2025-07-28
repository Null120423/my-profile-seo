export interface FavouriteItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  rating: number;
  slug?: string;
}

export interface FavouritesCategory {
  category: string;
  items: FavouriteItem[];
}

export const favouritesData: FavouritesCategory[] = [
  {
    category: "Touring Destinations, Explorers, and Travel",
    items: [
      {
        id: "1",
        title: "Tour in da lat 26-07",
        description: `Xuất phát: 2:00 sáng từ Sài Gòn (Hữu Tài chuẩn bị đồ)

6:00 sáng: Ăn sáng, uống cà phê tại Rừng Thông - Bảo Lộc

8:00 sáng: Tắm thác tại Thác Triệu Hải - Đạ Tẻh

9:00 sáng: Lên Đà Lạt theo Quốc lộ 20

12:00 trưa: Ăn trưa tại Bon LangBiang Village – Cơm lam gà nướng

14:00 chiều: Nghỉ ngơi tại quán CF võng (mang bàn ghế, võng)

Chiều/tối: Camping ở Ba Cây Thông (chuẩn bị trà, CF, đồ nướng, lẩu)

27/07:

9:00 sáng: Dạo chơi, cà phê

12:00 trưa: Ăn trưa và quay về Sài Gòn`,
        image:
          "https://pub-b8d0ec48dd23462d9cbddc79e9306cbe.r2.dev/f7a863a66553d30d8a42.jpg",
        link: "",
        rating: 1000,
        slug: "da-lat-2607",
      },
    ],
  },
  {
    category: "Books",
    items: [
      {
        id: "1",
        title: "Clean Code",
        description:
          "A must-read for every developer. Robert Martin teaches the principles of writing maintainable and readable code.",
        image:
          "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400",
        link: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350884",
        rating: 5,
        slug: "clean-code",
      },
      {
        id: "2",
        title: "The Pragmatic Programmer",
        description:
          "Timeless advice for software developers on improving their craft and thinking about problems differently.",
        image:
          "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400",
        link: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/",
        rating: 5,
        slug: "pragmatic-programmer",
      },
      {
        id: "3",
        title: "System Design Interview",
        description:
          "Essential reading for understanding large-scale system architecture and design patterns.",
        image:
          "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4,
        slug: "system-design-interview",
      },
    ],
  },
  {
    category: "Movies",
    items: [
      {
        id: "4",
        title: "The Matrix",
        description:
          "A groundbreaking sci-fi film that questions reality and inspired a generation of developers.",
        image:
          "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 5,
        slug: "the-matrix",
      },
      {
        id: "5",
        title: "Inception",
        description:
          "Mind-bending thriller about dreams within dreams. The perfect metaphor for nested functions!",
        image:
          "https://images.pexels.com/photos/7991471/pexels-photo-7991471.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 5,
        slug: "inception",
      },
      {
        id: "6",
        title: "Ex Machina",
        description:
          "Thought-provoking AI thriller that explores consciousness and the future of artificial intelligence.",
        image:
          "https://images.pexels.com/photos/8349825/pexels-photo-8349825.jpeg?auto=compress&cs=tinysrgb&w=400",
        rating: 4,
        slug: "ex-machina",
      },
    ],
  },
  {
    category: "Tools",
    items: [
      {
        id: "7",
        title: "VS Code",
        description:
          "My go-to code editor with incredible extensions and great TypeScript support.",
        image:
          "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400",
        link: "https://code.visualstudio.com/",
        rating: 5,
        slug: "vs-code",
      },
      {
        id: "8",
        title: "Figma",
        description:
          "Revolutionary design tool that bridges the gap between designers and developers.",
        image:
          "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
        link: "https://figma.com",
        rating: 5,
        slug: "figma",
      },
      {
        id: "9",
        title: "Notion",
        description:
          "All-in-one workspace for notes, tasks, and project management. Perfect for organizing everything.",
        image:
          "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400",
        link: "https://notion.so",
        rating: 4,
        slug: "notion",
      },
    ],
  },
];
