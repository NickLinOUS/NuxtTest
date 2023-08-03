<template>
  <div style="width: 100%; height: 100%">
    <h1>Paper Form</h1>
    <div data-paperform-id="h80shffp"></div>
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
      script.src = "https://paperform.co/__embed.min.js";
      document.body.appendChild(script);
    });
    // 在setup函數中返回數據，方法等
    return {};
  },
};
</script>

