// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     remotePatterns: [
//         {
//             protocol: 'https',
//             hostname: 'lh3.googleusercontent.com',
//         },
//     ],
// },

// };

// export default nextConfig;

// @ts-ignore
import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default withPWA({
  dest: "public", // destination directory for the PWA files
  disable: process.env.NODE_ENV === "development", // disable PWA in the development environment
  register: true, // register the PWA service worker
  skipWaiting: true, // skip waiting for service worker activation
  // swcMinify: true, // Enable SWC minification for improved performance
  // compiler: {
  //   removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  // },
})(nextConfig);
