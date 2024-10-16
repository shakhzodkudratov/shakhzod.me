import nextra from "nextra";

const withNextra = nextra({
  theme: "./src/theme.tsx",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default withNextra(nextConfig);
