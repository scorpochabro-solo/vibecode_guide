import type { MetadataRoute } from 'next';
import { SITE_URL, VERIFIED_AT_ISO } from '@/content/meta';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: VERIFIED_AT_ISO,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
