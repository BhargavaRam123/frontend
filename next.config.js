// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

const path = require("path");

module.exports = {
  webpack: (config, { isServer }) => {
    // Add a rule for handling video files
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/videos/",
          outputPath: "static/videos/",
          name: "[name].[ext]",
          esModule: false,
        },
      },
    });

    // Return the updated config
    return config;
  },
  images: {
    domains: ["api.dicebear.com"],
    dangerouslyAllowSVG: true,
  },
};
