import { withNextVideo } from "next-video/process";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.asortie.com",
      },
    ],
  },
  swcMinify: true, // SWC minifikasyonunu etkinleştir
};

export default withNextVideo(withNextIntl(nextConfig));
