const config = {
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  HOME_PAGE: process.env.NEXT_PUBLIC_HOME_PAGE || "https://blogs.umakantv.com",
  HOME_OG_IMAGE_URL:
    process.env.NEXT_PUBLIC_HOME_OG_IMAGE_URL ||
    "http://localhost:3000/assets/images/og-image.png",
  GITHUB_OAUTH_CLIENT_ID: process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID,
};

export const constants = {
  appLogo: "/logo.png",
  themeColor: "#18e9b4",
};

export default config;
