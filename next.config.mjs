/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
            },
            {
                protocol: "https",
                hostname: "tests-production-0ce4.up.railway.app/",
            }
        ],
    },
};

export default nextConfig;
