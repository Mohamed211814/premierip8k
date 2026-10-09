import { NextResponse } from 'next/server';
import { siteConfig } from '@/lib/config/site';
import { getAllPosts } from '@/lib/content/blog-helpers';

export async function GET() {
  const posts = getAllPosts();
  const baseUrl = siteConfig.url;

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${siteConfig.name} : Flux RSS Actualités & Guides IPTV</title>
  <link>${baseUrl}</link>
  <description>${siteConfig.description}</description>
  <language>fr-fr</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
  ${posts
    .map(
      (post) => `
  <item>
    <title><![CDATA[${post.title}]]></title>
    <link>${baseUrl}/blog/${post.slug}</link>
    <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
    <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
    <description><![CDATA[${post.excerpt}]]></description>
    <category>${post.category}</category>
    <author>${siteConfig.contact.email} (${post.author.name})</author>
  </item>`
    )
    .join('')}
</channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
