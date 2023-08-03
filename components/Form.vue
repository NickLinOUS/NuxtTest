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
  <div style="width: 100%; height: 100%">
    <h1>Google Form</h1>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSei71YN9T8uguvueXc48afvPQcb30v6FatYJWDZQTksZva9OA/viewform?embedded=true"
      width="100%"
      height="500"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      >載入中…</iframe
    >
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  name: "Form",
  setup() {
    // 使用onMounted函數
    onMounted(() => {
      hbspt.forms.create({
        region: "na1",
        portalId: "42188143",
        formId: "bf1322a2-1951-41e0-8a94-6faf483eacd1",
      });

      const script = document.createElement("script");
      script.src = "//embed.typeform.com/next/embed.js";
      document.body.appendChild(script);
    });
    // 在setup函數中返回數據，方法等
    return {};
  },
};
</script>
