/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    testing: true,
    mobileWidth: "1000px",
    bigWidth: "2000px",
    registrationClosed: false,
  },
  async redirects() {
    return [
      {
        source: "/%C2%A0",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
