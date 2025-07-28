import StructuredData from "@/components/seo/StructuredData";
import { KEYWORDS, LOGO, USER_DATA } from "@/lib/data";
import { Favourites } from "@/views/Favourites";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${USER_DATA.fullName} - Favourites | Những điều yêu thích`,
    description: "Khám phá những sở thích và đam mê của " + USER_DATA.fullName,
    keywords: [...KEYWORDS, "favourites", "sở thích", "đam mê"],
    openGraph: {
      title: `${USER_DATA.fullName} - Favourites`,
      description:
        "Khám phá những sở thích và đam mê của " + USER_DATA.fullName,
      images: [USER_DATA.avatar, LOGO],
      url: "/favourites",
      siteName: USER_DATA.fullName,
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${USER_DATA.fullName} - Favourites`,
      description:
        "Khám phá những sở thích và đam mê của " + USER_DATA.fullName,
      images: [USER_DATA.avatar],
    },
  };
}

export default async function FavouritesPage() {
  return (
    <>
      <StructuredData type="website" />
      <Favourites />
    </>
  );
}
