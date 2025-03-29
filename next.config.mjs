/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["m.media-amazon.com"], // ✅ Allow images from Amazon CDN
    },
};

export default nextConfig;
