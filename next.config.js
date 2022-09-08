/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        emotion: true,
    },
    images: {
        loader: 'akamai',
        path: ['/'], // domain address
    },
};

module.exports = nextConfig;
