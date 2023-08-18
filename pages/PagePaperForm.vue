<template>
  <div data-paperform-id="h80shffp"></div>
</template>

<script>
useHead({
    title: 'app'
})
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

