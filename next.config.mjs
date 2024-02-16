/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: ['localhost', 'tests-production-0ce4.up.railway.app'],
        loader: 'imgix',
        path: './media',
    },
};

export default nextConfig;