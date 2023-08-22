<template>
  <div>
    <div
      style="
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 16px;
      "
    >
      <div>
        <router-link to="pagegoogleform">Google</router-link>
      </div>
      <div>
        <router-link to="pagehubspot">Hub Spot</router-link>
      </div>
      <div>
        <router-link to="pagesurveycake">Survey Cake</router-link>
      </div>
      <div>
        <router-link to="pagetypeform">Typeform</router-link>
      </div>
      <div>
        <router-link to="pagepaperform">Paper Form</router-link>
      </div>
    </div>
    <NuxtPage />
    <!-- <NuxtWelcome /> -->
    <!-- <FileHtml /> -->
    <!-- <Form /> -->
    <!-- <Typeform /> -->
    <!-- <File />
    <Testdeep /> -->
    <!--Start of Tawk.to Script-->
    <!--End of Tawk.to Script-->
  </div>
</template>

<script>
useHead({
  title: "app",
});
import { onMounted } from "vue";
export default {
  name: "App",
  setup() {
    let text = "";

    onMounted(() => {
      text =
        '<blockquote><p>對文章有興趣來不及看？點選右上角「橘色小書籤」<code>收藏</code> 文章，再也不怕錯過就是一輩子！\n\n<em> 你也是正在經營 IG / Facebook 的美食部落客，卻怎麼拍都拍不出想像中的食物美照嗎？\n</em> 你也是工作上常需要自己拍商品的小編、行銷人，拍出的照片卻看起來好平凡，吸引不到顧客？\n<em> 你也是經營網拍、開甜點店、咖啡廳的自營業者，預算實在不夠找專業攝影師，只好自己來？ \n<br />\n要拍出好看的美食照、商品照，其實有三大重點：\n<br />\n<strong>1. 光線</strong>\n<strong>2. 構圖</strong>\n<strong>3. 顏色</strong>\n\n<br />\n有任何一個元素沒有搭配好，照片就很有可能會失去平衡。而當你學會運用這三個元素，就能夠根據你想營造出的任何情境，選擇最適合的組合搭配，拍出超有質感的美照！\n<br />\n&gt; 我也想學攝影！但… 課程這麼多，應該怎麼選擇呢？\n\n<br />\n光是在 Hahow 搜尋攝影課程，一次就出現十幾堂，想學拍攝商品照、美食照的你，是否也陷入了選擇困難？\n<br />\n我們精選了<strong>四堂專門給初學者的商業攝影課程，一次告訴你該怎麼選擇！</strong>\n<br />\n在開始之前，請先花 10 秒回答一個問題：<em>*你想拍什麼照片？</em></em>\n\n<br />\nA. 我就是想學如何拍出好看美食照\n▶︎ 請走 <code>🅰  拍出 IG 美食照：打光、道具、擺盤一次搜羅的美食攝影課</code>\n\nB. 除了美食照，我還想學拍其他商品照\n▶︎ 請走 <code>🅱 商品情境照不求人：手機也能拍的商品攝影課</code>\n<br />\n<br />\n# 🅰  拍出 IG 美食照：打光、道具、擺盤一次搜羅的美食攝影課\n<br />\n如果你想要：\n✓  拍出讚數破表的 IG 美食照\n✓  一堂課掌握燈光、配色、道具、構圖\n✓  活用拍攝技巧，拍出各式風格、感覺\n<br />\n這就是適合你的課程：\n### ▶ <a href="https://hahow.in/courses/602bb8742225045c9d1d514c">美食攝影逐光旅行，餐桌上的四季光影</a>\n<br />\n你也想拍出有四季氛圍的美食照嗎？這堂課將帶你打好光線、構圖、擺盤基本功，掌握硬光、柔光拍出不同風格，整合各式攝影技巧拍出四季變化。大量實作示範，帶你從零開始學食物攝影！\n<br />\n<code>特別適合：沒有預算買專業燈光器材，想要一切 DIY 也可以拍出美照的你</code>\n\n<img src="https://images.api.hahow.in/images/6062d2c8ac5e457e26c0cd98" alt="photo01">\n<br />\n<br />\n### ▶ <a href="https://hahow.in/courses/5a4258c55c4d70001e866274/main">美食攝影師：配色、擺盤、光影的視覺饗宴</a>\n<br />\n從生活中的美食攝影開始，教你用手機、簡單道具，就能在家裡、咖啡廳、火鍋店等不同地方拍出美照。一次涵蓋初學者要會的燈光、角度、構圖，打好基本功後再進階燈具使用，拍出專業甜點、食物照！\n<br />\n<code>特別適合：想一堂課從基礎到進階，除了手機拍攝還想進一步學專業食物攝影的你</code>\n<img src="https://images.api.hahow.in/images/6062d2dc64445aff42e5c3fa" alt="photo02">\n\n# 🅱  商品情境照不求人：用手機也能拍的商品攝影課\n<br />\n如果你想要：\n✓ 零基礎開始，一步步拍出質感商品照\n✓  沒預算買器材，一支手機就能打天下\n✓ 一堂課學會熱門攝影風格\n<br />\n這就是適合你的課程：\n### ▶ <a href="https://hahow.in/courses/5f7c209762ad22756c7a1c74/main">Today at Apple: 和攝影師 Ada Lin 用 iPhone 學習專業商品攝影</a> <code>免費課程</code>\n<br />\nToday at Apple 是由 Apple 精心設計的免費課程。簡短 20 分鐘課程，由專業攝影師 Ada，帶你拆解商品攝影案例，透過實作練習，讓你了解拍出質感商品照的關鍵要點！\n<br />\n<img src="https://images.api.hahow.in/images/6062d2f1ac5e451ac5c0cdbc" alt="photo03">\n<br />\n### ▶ <a href="https://hahow.in/courses/5e44ae585b02f600245a53cc/main">省錢攝影術：零基礎拍好美食 &amp; 商品</a>\n<br />\n這門省錢攝影術課程，超級適合需要拍攝商品照的行銷美編、社群小編、FB/IG 網紅，不花大錢也能拍出生活感、時尚風等各式商品情境照！從入門開始，4 小時快速上手，實戰技巧不藏私一次分享給你！ \n<img src="https://images.api.hahow.in/images/6062d31bc97e6b9cf3fe1fc0" alt="photo04"> \n\n\n<br />\n\n\n\n&gt;Hahow 十月專題：IG 經營秘訣！高效打造萬粉帳號的方法大公開 &gt;&gt; <a href="https://hahow.in/contents/articles/633514ac68f4320007727726?utm_source=website&amp;utm_medium=article&amp;utm_campaign=hh-article-igtopic&amp;mts_s=website&amp;mts_m=article&amp;mts_c=hh-article-igtopic&amp;mts_t=gad">看更多 IG 經營秘訣</a>\n&gt;     \n&gt; 現在透過<a href="https://hahow.in/ur/innovation1?utm_source=website&amp;utm_medium=article&amp;utm_campaign=hh-article-igtopic&amp;mts_s=website&amp;mts_m=article&amp;mts_c=hh-article-igtopic&amp;mts_t=gad">小蛙同學專屬連結</a>註冊，馬上領價值 <code>300 元購課金</code>！更可免費試看超過 <a href="https://hahow.in/courses?utm_source=website&amp;utm_medium=article&amp;utm_campaign=hh-article-igtopic&amp;mts_s=website&amp;mts_m=article&amp;mts_c=hh-article-igtopic&amp;mts_t=gad">700 堂課程</a> ✨\n\n<a href="https://hahow.in/contents/articles/633514ac68f4320007727726?utm_source=website&amp;utm_medium=article&amp;utm_campaign=hh-article-igtopic&amp;mts_s=website&amp;mts_m=article&amp;mts_c=hh-article-igtopic&amp;mts_t=gad"><img src="https://images.api.hahow.in/images/633bd59a8093c40006c1bf15" alt="IG 經營"></a></p></blockquote>';
      //     var Tawk_API = Tawk_API || {},
      //   Tawk_LoadStart = new Date();
      // (function () {
      //   var s1 = document.createElement("script"),
      //     s0 = document.getElementsByTagName("script")[0];
      //   s1.async = true;
      //   s1.src = "https://embed.tawk.to/64ddc734cc26a871b02fbd1d/1h8154a2e";
      //   s1.charset = "UTF-8";
      //   s1.setAttribute("crossorigin", "*");
      //   s0.parentNode.insertBefore(s1, s0);
      // })();
    });

    return {
      text,
    };
  },
};
</script>
