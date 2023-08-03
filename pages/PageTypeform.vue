<template>
  <div style="width: 100%; height: 100%">
    <div
      ref="typeformContainer"
      data-tf-widget="aEacQEF6"
      data-tf-opacity="100"
      data-tf-iframe-props="title=回饋表單"
      data-tf-transitive-search-params
      data-tf-medium="snippet"
      style="width: 100%; height: 500px"
    ></div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  name: "Form",
  setup() {
    // 使用onMounted函數
    onMounted(() => {
      const script = document.createElement("script");
      script.src = "//embed.typeform.com/next/embed.js";
      document.body.appendChild(script);
    });
    // 在setup函數中返回數據，方法等
    return {};
  },
};
</script>
