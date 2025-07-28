import StructuredData from "@/components/seo/StructuredData";
import { KEYWORDS, LOGO, USER_DATA } from "@/lib/data";
import { Resume } from "@/views/Resume";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${USER_DATA.fullName} - Resume | Kinh nghiệm & Kỹ năng`,
    description: "Xem hồ sơ và kinh nghiệm làm việc của " + USER_DATA.fullName,
    keywords: [...KEYWORDS, "resume", "cv", "kinh nghiệm", "kỹ năng"],
    openGraph: {
      title: `${USER_DATA.fullName} - Resume`,
      description:
        "Xem hồ sơ và kinh nghiệm làm việc của " + USER_DATA.fullName,
      images: [USER_DATA.avatar, LOGO],
      url: "/resume",
      siteName: USER_DATA.fullName,
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${USER_DATA.fullName} - Resume`,
      description:
        "Xem hồ sơ và kinh nghiệm làm việc của " + USER_DATA.fullName,
      images: [USER_DATA.avatar],
    },
  };
}

export default async function ResumePage() {
  return (
    <>
      <StructuredData type="website" />
      <Resume />
    </>
  );
}
