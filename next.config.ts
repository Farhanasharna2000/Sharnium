const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "spaceship-cdn.com",
        pathname: "/spaceship-homepage-ui/assets/**",
      },
    ],
  },
};

module.exports = nextConfig;

