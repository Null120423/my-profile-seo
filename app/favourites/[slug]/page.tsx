import { KEYWORDS, LOGO, USER_DATA } from "@/lib/data";
import { FavouriteDetail } from "@/views/FavouriteDetail";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const title = `${USER_DATA.fullName} - Favourites | ${slug.replace(
    /-/g,
    " "
  )}`;
  const description = `Khám phá "${slug.replace(
    /-/g,
    " "
  )}" - một trong những sở thích của ${USER_DATA.fullName}`;

  return {
    title,
    description,
    keywords: [...KEYWORDS, "favourites", "sở thích", slug],
    openGraph: {
      title,
      description,
      images: [USER_DATA.avatar, LOGO],
      url: `/favourites/${slug}`,
      siteName: USER_DATA.fullName,
      locale: "vi_VN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [USER_DATA.avatar],
    },
  };
}

export default async function FavouriteDetailPage({ params }: Props) {
  return <FavouriteDetail />;
}

export async function generateStaticParams() {
  return [{ slug: "clean-code" }, { slug: "da-lat-2607" }, { slug: "vs-code" }];
}
