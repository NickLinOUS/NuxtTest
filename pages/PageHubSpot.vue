<template>

</template>

<script>
useHead({
    title: 'app'
})
import { onMounted } from "vue";
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

    onBeforeUnmount(() => {
      // 在组件销毁前移除生成的 DOM
      const target = document.querySelector(".hbspt-form");
      if (target && target.parentNode) {
        target.parentNode.removeChild(target);
      }
    });
    // 在setup函數中返回數據，方法等
    return {};
  },
};
</script>
