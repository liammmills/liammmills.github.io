module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/assets/scss/abstracts/_vars.scss";
          @import "~ecce-lima/assets/scss/abstracts/_functions.scss";
          @import "~@/assets/scss/abstracts/_placeholders.scss";
          @import "~sass-mediaqueries/media-queries.scss";
        `, // add scss to all vue files
      },
    },
  },
  assetsDir: "assets", // put assets into assets folder in dist
  pwa: {
    name: "Liam Mills - Frontend Developer",
    themeColor: "#ffffff",
    msTileColor: "#101010",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    assetsVersion: "5",
    manifestOptions: {
      icons: [
        {
          src: "/assets/favicon/android-chrome-36x36.png",
          sizes: "36x36",
          type: "image/png",
          density: 0.75,
        },
        {
          src: "/assets/favicon/android-chrome-48x48.png",
          sizes: "48x48",
          type: "image/png",
          density: 1,
        },
        {
          src: "/assets/favicon/android-chrome-72x72.png",
          sizes: "72x72",
          type: "image/png",
          density: 1.5,
        },
        {
          src: "/assets/favicon/android-chrome-96x96.png",
          sizes: "96x96",
          type: "image/png",
          density: 2,
        },
        {
          src: "/assets/favicon/android-chrome-144x144.png",
          sizes: "144x144",
          type: "image/png",
          density: 3,
        },
        {
          src: "/assets/favicon/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
          density: 4,
        },
      ],
    },
    iconPaths: {
      favicon32: "assets/favicon/favicon-32x32.png",
      favicon16: "assets/favicon/favicon-16x16.png",
      appleTouchIcon: "assets/favicon/apple-touch-icon-180x180.png",
      maskIcon: "assets/favicon/safari-pinned-tab.svg",
      msTileImage: "assets/favicon/msapplication-icon-144x144.png",
    },
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      skipWaiting: true,
    },
    lang: "en-GB",
  },
};
