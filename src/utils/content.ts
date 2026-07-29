import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ContentItem {
  title: string;
  slug: string;
  description?: string;
  date?: string;
  category: string;
  url: string;
  excerpt?: string;
}

export function getContentFiles(
  directory: string,
  category: string
): ContentItem[] {
  const contentDir = path.join(__dirname, '..', '..', 'content', directory);

  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir).filter((file: string) => file.endsWith('.md'));

  return files
    .map((file: string) => {
      const filePath = path.join(contentDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);

      if (!frontmatterMatch) return null;

      const frontmatter = parseFrontmatter(frontmatterMatch[1]);
      const slug = file.replace('.md', '');

      return {
        title: frontmatter.title || slug,
        slug,
        description: frontmatter.description,
        date: frontmatter.date,
        category,
        url: `/${directory}/${slug}/`,
        excerpt: frontmatter.excerpt,
      };
    })
    .filter((item: ContentItem | null): item is ContentItem => item !== null)
    .sort((a: ContentItem, b: ContentItem) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });
}

export function getAllContent(): ContentItem[] {
  const categories = [
    { dir: 'blog', name: 'blog' },
    { dir: 'projects', name: 'projects' },
    { dir: 'publications', name: 'publications' },
    { dir: 'talks', name: 'talks' },
    { dir: 'leadership', name: 'leadership' },
    { dir: 'travel', name: 'travel' },
    { dir: 'experiments', name: 'experiments' },
  ];

  return categories.flatMap(({ dir, name }) => getContentFiles(dir, name));
}

export function generateSearchIndex(content: ContentItem[]): string {
  return JSON.stringify(content, null, 2);
}

function parseFrontmatter(yaml: string): Record<string, string> {
  const result: Record<string, string> = {};
  const lines = yaml.split('\n');

  for (const line of lines) {
    const match = line.match(/^([^:]+):\s*(.+)$/);
    if (match) {
      const key = match[1].trim();
      let value = match[2].trim();
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      result[key] = value;
    }
  }

  return result;
}
