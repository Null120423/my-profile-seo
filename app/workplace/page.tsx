import StructuredData from "@/components/seo/StructuredData";
import { KEYWORDS, LOGO, USER_DATA } from "@/lib/data";
import { Workplace } from "@/views/Workplace";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${USER_DATA.fullName} - Workplace | Nơi làm việc`,
    description:
      "Tìm hiểu về nơi làm việc và môi trường của " + USER_DATA.fullName,
    keywords: [...KEYWORDS, "workplace", "nơi làm việc", "công ty"],
    openGraph: {
      title: `${USER_DATA.fullName} - Workplace`,
      description:
        "Tìm hiểu về nơi làm việc và môi trường của " + USER_DATA.fullName,
      images: [USER_DATA.avatar, LOGO],
      url: "/workplace",
      siteName: USER_DATA.fullName,
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${USER_DATA.fullName} - Workplace`,
      description:
        "Tìm hiểu về nơi làm việc và môi trường của " + USER_DATA.fullName,
      images: [USER_DATA.avatar],
    },
  };
}

export default async function WorkplacePage() {
  return (
    <>
      <StructuredData type="website" />
      <Workplace />
    </>
  );
}
