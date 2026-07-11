import type { NextConfig } from 'next';

// На GitHub Pages сайт живёт под /vibecode_guide — workflow задаёт PAGES_BASE_PATH.
// Локальная разработка и кастомный домен работают без basePath.
const basePath = process.env.PAGES_BASE_PATH;

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
