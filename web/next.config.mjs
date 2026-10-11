// Static export for GitHub Pages. BASE_PATH is set in CI to "/<repo-name>".
const basePath = process.env.BASE_PATH || '';

/** @type {import('next').NextConfig} */
export default {
  output: 'export',
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};
