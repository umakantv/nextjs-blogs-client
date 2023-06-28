const config = {
  APP_NAME: process.env.REACT_APP_APP_NAME,
  API_BASE_URL: process.env.API_BASE_URL, // http://localhost:3002/api
  GITHUB_OAUTH_CLIENT_ID: process.env.GITHUB_OAUTH_CLIENT_ID,
  HOME_PAGE: process.env.HOME_PAGE || "https://blogs.umakantv.com",
  HOME_OG_IMAGE_URL: process.env.HOME_OG_IMAGE_URL || "http://localhost:3000/assets/images/og-image.png",
};

export const constants = {
  appLogo: "/logo.png",
  themeColor: "#18e9b4",
};

export default config;
