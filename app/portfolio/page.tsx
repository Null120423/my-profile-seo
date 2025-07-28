import StructuredData from "@/components/seo/StructuredData";
import { KEYWORDS, LOGO, USER_DATA } from "@/lib/data";
import { Portfolio } from "@/views/Portfolio";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${USER_DATA.fullName} - Portfolio | Dự án & Công việc`,
    description: "Khám phá các dự án và công việc của " + USER_DATA.fullName,
    keywords: [...KEYWORDS, "portfolio", "dự án", "công việc"],
    openGraph: {
      title: `${USER_DATA.fullName} - Portfolio`,
      description: "Khám phá các dự án và công việc của " + USER_DATA.fullName,
      images: [USER_DATA.avatar, LOGO],
      url: "/portfolio",
      siteName: USER_DATA.fullName,
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${USER_DATA.fullName} - Portfolio`,
      description: "Khám phá các dự án và công việc của " + USER_DATA.fullName,
      images: [USER_DATA.avatar],
    },
  };
}

export default async function PortfolioPage() {
  return (
    <>
      <StructuredData type="website" />
      <Portfolio />
    </>
  );
}
