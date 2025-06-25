/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {protocol: 'https', hostname: 'targetafpi.s3-accelerate.amazonaws.com',},
        ],
    },
};

export default nextConfig;
