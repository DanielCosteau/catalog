import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  // required for deploying to Cloudflare Pages via @cloudflare/next-on-pages
  output: "standalone",
};

export default withMDX(nextConfig);
