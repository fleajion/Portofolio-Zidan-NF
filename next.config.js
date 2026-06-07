/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/fleajion",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/zidan-naufal-firmansyah/",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://www.youtube.com/@mrjhons5512",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/zid4n_np",
        permanent: true
      },
      {
        source: "/medium",
        destination: "https://medium.com/@zidannfyourbae999",
        permanent: true
      }
    ];
  },
};

module.exports = nextConfig
