# Portfolio

A personal portfolio website built with Astro and Markdown. Fast, accessible, and easy to maintain.

## Features

- ✅ **Markdown-first**: Write content in Markdown, deploy static HTML
- ✅ **Mobile-first**: Responsive design optimized for all devices
- ✅ **Fast**: Static site generation with zero unnecessary JavaScript
- ✅ **Accessible**: Semantic HTML and WCAG 2.1 compliance
- ✅ **Dark mode**: Built-in dark mode support with persistence
- ✅ **Easy to deploy**: GitHub Pages and Cloudflare Pages ready
- ✅ **Multiple sections**: Blog, projects, publications, talks, CV, leadership, travel, experiments

## Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

The static site will be generated in the `dist/` directory.

## Project Structure

```
portfolio/
├── content/                    # Markdown content files
│   ├── blog/                  # Blog posts
│   ├── projects/              # Project showcase
│   ├── publications/          # Academic papers
│   ├── talks/                 # Presentations
│   ├── cv/                    # Curriculum vitae
│   ├── leadership/            # Leadership content
│   ├── travel/                # Travel stories
│   └── experiments/           # Experimental projects
├── src/
│   ├── pages/                 # Page components
│   │   ├── index.astro       # Home page
│   │   ├── blog/
│   │   ├── projects/
│   │   └── ...               # Other section pages
│   ├── layouts/               # Reusable layouts
│   │   ├── BaseLayout.astro  # Main layout wrapper
│   │   └── ContentLayout.astro # Content page layout
│   ├── components/            # Reusable components
│   ├── styles/                # Global CSS
│   └── utils/                 # Helper functions
├── public/                    # Static assets
├── astro.config.mjs          # Astro configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## Writing Content

### Creating a Blog Post

1. Create a new file in `content/blog/` with a descriptive name, e.g., `my-first-post.md`
2. Add frontmatter with metadata:

```markdown
---
title: My First Post
description: A brief description of the post
date: 2026-07-28
author: Your Name
---

## Section One

Your content here...
```

3. The post will automatically appear on `/blog`

### Creating a Project

1. Create a file in `content/projects/my-project.md`
2. Use the same frontmatter format
3. It will appear on `/projects`

The same pattern applies to all sections: `publications/`, `talks/`, `cv/`, `leadership/`, `travel/`, and `experiments/`.

## Frontmatter Reference

```yaml
---
title: Page Title (required)
description: Short description for SEO and previews
date: 2026-07-28                          # ISO date format
author: Your Name
excerpt: Custom excerpt (optional)
tags: tag1, tag2, tag3
---
```

## Customization

### Update Site Metadata

Edit `astro.config.mjs` to change the site URL:

```javascript
export default defineConfig({
  site: 'https://yoursite.com',
});
```

### Customize Colors

Edit `src/styles/theme.css` to modify the color scheme:

```css
html[data-theme='light'] {
  --accent: #0066cc;
  --text-primary: #1a1a1a;
  /* ... */
}
```

### Navigation

Edit the navigation links in `src/layouts/BaseLayout.astro`:

```astro
<a href="/your-new-section">New Section</a>
```

## Deployment

### GitHub Pages

1. Set the repository to public
2. Go to Settings → Pages
3. Set source to "GitHub Actions"
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install && npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Cloudflare Pages

1. Connect your repository to Cloudflare Pages
2. Set build command to `npm run build`
3. Set publish directory to `dist`

### Vercel

1. Import project on Vercel
2. Framework: Astro
3. Build command: `npm run build`
4. Output directory: `dist`

## Performance Tips

- Keep blog posts focused and concise
- Optimize images before adding to `public/`
- Use descriptive filenames for content files
- Add relevant tags and descriptions to frontmatter

## Search Implementation

Search functionality is planned. A build-time index will be generated from all content. Check back for updates.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## License

MIT

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Markdown Guide](https://www.markdownguide.org)
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)