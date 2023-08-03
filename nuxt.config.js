// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 其他配置...
  app: {
    head: {
      script: [{ src: "//js.hsforms.net/forms/embed/v2.js" }],
    },
  },
});
