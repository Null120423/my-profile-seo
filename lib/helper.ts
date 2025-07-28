export const get = async (route: string, params?: {}) => {
  const queryString = new URLSearchParams(params).toString();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${route}?${queryString}`,
    {
      next: { revalidate: 60 },
    }
  );
  return res;
};
export const post = async (route: string, body: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${route}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res;
};

export function splitToArr(description?: string): string[] {
  return (
    description
      ?.split(/\n\n|\n|,|-/)
      .map((chunk) => chunk.trim())
      .filter((chunk) => chunk.length > 0) || []
  );
}
export const blogFormatData = (data: any) => {
  return {
    ...data,
    tags: splitToArr(data?.tags),
  };
};

export const formatDataProperty = (property: any) => {
  return {
    ...property,
  };
};
