<template>
  <div
    style="
    margin-top: 50px;
      position: relative;
      padding-top: max(60%, 324px);
      width: 100%;
      height: 100%
    "
  >
    <iframe
      style="
        position: absolute;
        border: none;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
      "
      src="https://online.fliphtml5.com/igxbs/jatu/"
      seamless="seamless"
      scrolling="no"
      frameborder="0"
      allowtransparency="true"
      allowfullscreen="true"
    ></iframe>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
useHead({
  title: "FileHtml5",
});
export default {
  name: "FileHtml5",
};
</script>
