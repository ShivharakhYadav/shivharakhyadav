import type { MetadataRoute } from 'next';
import { siteUrl } from '@/configs/metaTags';
import { projects } from '@/data/projects';
import { getAllPosts } from '@/lib/blog';

// Google ignores priority/changefreq and only trusts accurate lastmod dates,
// so only posts (which have real dates) carry one.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/experience',
    '/projects',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
  }));

  const postRoutes = getAllPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.updated ?? (post.date || undefined),
  }));

  return [...staticRoutes, ...projectRoutes, ...postRoutes];
}
