// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 其他配置...
  app: {
    head: {
      titleTemplate: "%pageTitle %siteName",
      script: [{ src: "//js.hsforms.net/forms/embed/v2.js" }],
    },
  },
  runtimeConfig: {
    public: {
      siteName: "Job Pair 人力銀行",
      siteDescription:
        "Job Pair 是專業的媒合平台，專注於助您找到與能力、價值觀相符的工作機會，實現長期價值發揮。透過我們高效的適配功能，輕鬆探索理想職位。立即加入 Job Pair，啟動您的職業生涯。",
      language: "zh-TW", // prefer more explicit language codes like `en-AU` over `en`
      LIFF_ID: "1660783051-vP4Ojz2r",
      axiosTimeout: 30000,
    },
  },
});
