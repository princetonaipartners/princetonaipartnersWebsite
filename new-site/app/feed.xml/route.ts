/**
 * RSS Feed Route Handler
 * Generates an RSS 2.0 feed for the blog
 */

import { getAllPosts } from '@/content/blog';

const SITE_URL = 'https://princeton-ai.com';
const SITE_NAME = 'Princeton AI Partners Blog';
const SITE_DESCRIPTION = 'Insights on AI development, automation, custom software, and digital transformation for businesses.';

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toUTCString();
}

export async function GET() {
  const posts = getAllPosts();

  const rssItems = posts
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${formatDate(post.publishedAt)}</pubDate>
      <author>support@princetonaipartners.com (${escapeXml(post.author.name)})</author>
      <category>${escapeXml(post.category.replace('-', ' '))}</category>
      ${post.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join('\n      ')}
    </item>`
    )
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${formatDate(new Date().toISOString())}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_URL}/logos/logo-full.png</url>
      <title>${escapeXml(SITE_NAME)}</title>
      <link>${SITE_URL}/blog</link>
    </image>
    <managingEditor>support@princetonaipartners.com (Princeton AI Partners)</managingEditor>
    <webMaster>support@princetonaipartners.com (Princeton AI Partners)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} Princeton AI Partners. All rights reserved.</copyright>
    <ttl>60</ttl>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
