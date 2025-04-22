import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      rules: {
        // Disable the rule for css imports
        '*.css': [
          {
            loader: 'postcss',
            options: {
              postcssConfigPath: './postcss.config.js',
            },
          },
        ],
      },
    },
  },
};

export default nextConfig;
