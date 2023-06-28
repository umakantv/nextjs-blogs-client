// if (!process.env.WORDPRESS_API_URL) {
//   throw new Error(`
//     Please provide a valid WordPress instance URL.
//     Add to your environment variables WORDPRESS_API_URL.
//   `)
// }

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      "0.gravatar.com",
      "1.gravatar.com",
      "2.gravatar.com",
      "vercel.com",
      "umakantv.com",
      "cloudflare-ipfs.com",
      "secure.gravatar.com",
      "loremflickr.com",
    ],
  },
};
