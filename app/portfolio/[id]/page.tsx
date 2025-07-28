import { KEYWORDS, LOGO, USER_DATA } from "@/lib/data";
import { ProjectDetail } from "@/views/ProjectDetail";
import { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const title = `${USER_DATA.fullName} - Project | ${id}`;
  const description = `Xem chi tiết dự án "${id}" của ${USER_DATA.fullName}`;

  return {
    title,
    description,
    keywords: [...KEYWORDS, "project", "dự án", id],
    openGraph: {
      title,
      description,
      images: [USER_DATA.avatar, LOGO],
      url: `/portfolio/${id}`,
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

export default async function ProjectDetailPage({ params }: Props) {
  const inputParams = await params;
  return <ProjectDetail params={inputParams} />;
}
