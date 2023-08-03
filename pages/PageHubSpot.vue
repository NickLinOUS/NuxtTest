<template>
<h1>HubSpot</h1>
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
    });
    // 在setup函數中返回數據，方法等
    return {};
  },
};
</script>
