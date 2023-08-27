// https://nuxt.com/docs/api/configuration/nuxt-config

require("dotenv").config();
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["assets/global.css"],
  runtimeConfig: {
    gmapsApiKey: process.env.NUXT_GMAPS_API_KEY,
  },
  app: {
    head: {
      script: [
        {
          src: "https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js",
          async: true,
          defer: true,
        },
      ],
    },
  },
});
