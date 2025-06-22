/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  // experimental: {
  //   appDir: true,
  // },
  images: {
    //This will let nextJs to trust and use external images in the project
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  // experimental: {
  //   ppr: "incremental",
  // },
  devIndicators: {
    // appIsrStatus: true,
    // buildActivity: true,
    // buildActivityType: "bottom-right",
  },
};

export default nextConfig;
