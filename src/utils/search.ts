export interface SearchResult {
  title: string;
  url: string;
  excerpt: string;
  category: string;
  date?: string;
}

export function searchContent(
  index: Array<{
    title: string;
    slug: string;
    description?: string;
    date?: string;
    category: string;
    url: string;
    excerpt?: string;
  }>,
  query: string
): SearchResult[] {
  const lowerQuery = query.toLowerCase();

  return index
    .filter(
      (item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description?.toLowerCase().includes(lowerQuery) ||
        item.excerpt?.toLowerCase().includes(lowerQuery)
    )
    .map((item) => ({
      title: item.title,
      url: item.url,
      excerpt: item.description || item.excerpt || '',
      category: item.category,
      date: item.date,
    }));
}
