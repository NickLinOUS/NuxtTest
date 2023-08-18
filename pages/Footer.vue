<template>
  <!-- Footer -->
  <section id="footer">
    <div class="container-fluid">
      <div class="row" id="footer-div">
        {{ text }}
        <!-- column 1 -->
        <div id="left-col">
          <div id="left-col-div">
            <div class="row">
              <div class="col-6 text-start fw-bold">
                <p>About Us</p>
                <router-link to="/privacy-policy" class="nav-link"
                  >隱私權政策</router-link
                >
                <router-link to="/service-terms" class="nav-link"
                  >服務條款</router-link
                >
              </div>
              <div class="col-6 text-start fw-bold">
                <p>Help</p>
                <router-link to="/customer-service" class="nav-link"
                  >常見問題</router-link
                >
              </div>
            </div>
            <div class="row">
              <span class="text-start mt-2">
                © 2022 OurScool All Rights Reserved
              </span>
            </div>
          </div>
        </div>

        <!-- column 2 -->
        <div class="col-8" id="right-col">
          <div id="right-col-div">
            <div class="row right-col-row">
              <img
                id="footer-image-1"
                src="@/assets/logo/logo_new_ourscool.svg"
              />
              <img id="footer-image-2" src="@/assets/logo/logo_talC.svg" />
              <a
                style="width: fit-content"
                @click.prevent="openUrl('https://www.facebook.com/ourscool.tw')"
                href="https://www.facebook.com/ourscool.tw/"
                ><img id="footer-image-3" src="@/assets/icons/icon_fb.svg"
              /></a>
              <a
                href=""
                style="width: fit-content"
                data-bs-toggle="modal"
                data-bs-target="#footer-modal"
                ><img id="footer-image-4" src="@/assets/icons/icon_line.svg" />
              </a>
            </div>

            <div class="row right-col-row">
              <p class="mb-0">
                <span class="fw-bold" style="color: #23b6bc">
                  樂學舍數位教育有限公司
                </span>
                <span class="text-white"> 台中市南區忠明南路787號13樓 </span>
                <span class="text-white">04-2265-7611</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Line Modal -->
    <div
      class="modal fade"
      id="footer-modal"
      tabindex="-1"
      aria-labelledby="footer-modal-label"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal Body -->
          <div class="modal-body">
            <div class="d-flex flex-row justify-content-between">
              <div
                class="d-flex flex-column justify-content-start"
                style="width: fit-content"
              >
                <img
                  class="modal-logo-image"
                  src="@/assets/logo/white_logo.svg"
                  alt=""
                  style="width: fit-content"
                />
                <p class="mb-0 text-white modal-text-1">
                  加入Oursccool 語言中心官方Line粉絲團
                  重要通知、活動資訊、優惠好康、1對1線上客服等
                  掌握最新動態超方便！
                </p>

                <p class="mb-0 text-white modal-text-2">Line搜尋 @vdi2604j</p>
                <a
                  @click.prevent="
                    openUrl('https://page.line.me/?accountId=vdi2604j')
                  "
                  href="#"
                  class="mb-0 modal-text-3"
                  >https://page.line.me/?accountId=vdi2604j</a
                >
              </div>
              <div class="d-flex flex-column d-none d-lg-flex">
                <img
                  class="modal-qrcode-image"
                  src="@/assets/img/line_qrcode.jpg"
                />
              </div>
            </div>

            <!-- 關閉視窗 -->
            <img
              src="@/assets/icons/icon_close.svg"
              class="footer-close-btn"
              data-bs-dismiss="modal"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
useHead({
    title: 'app'
})
import { defineComponent } from "vue";
export default defineComponent({
  name: "Footer",
  data() {
    return {
      text:"aaaa"
    }
  },
  methods: {
    openUrl(link: string) {
      window.open(link);
    },
  },
  mounted(){
    setTimeout(() => {
      this.text = "123456"
    }, 5000);
  }
});
</script>

<style scoped lang="scss">
</style>