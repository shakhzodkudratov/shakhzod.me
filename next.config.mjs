import nextra from "nextra";

const withNextra = nextra({
  theme: "./src/theme.tsx",
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextra(nextConfig);
