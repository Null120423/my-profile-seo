/**
 * Utility function to load markdown content from public/favourites directory
 */
export async function loadFavouriteMarkdown(slug: string): Promise<string> {
  try {
    const response = await fetch(`/favourites/${slug}.md`);
    if (!response.ok) {
      throw new Error(`Failed to load markdown: ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error loading markdown for slug ${slug}:`, error);
    return "";
  }
}

/**
 * Check if a markdown file exists for a given slug
 */
export async function hasMarkdownFile(slug: string): Promise<boolean> {
  try {
    const response = await fetch(`/favourites/${slug}.md`, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
}
