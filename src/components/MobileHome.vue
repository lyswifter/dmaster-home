<template>
  <div class="mobileApp">
    <div class="mobile_mune">
      <div class="mobile_mune_menulog"></div>
      <img src="../assets/mobleImg/logo_Dmaster@2x.png" alt="" @click="toTopFun" class="mobile_mune_log">
      <img src="../assets/mobleImg/icon_menu@2x.png" alt="" @click="openFun" class="mobile_mune_menulog" v-if="!isShowMask" />
      <img src="../assets/mobleImg/icon_menuclose@2x.png" alt="" @click="closeFun" class="mobile_mune_menulog" v-else />
    </div>
    <div class="mobile_head">
      <div class="mobile_main_img">
        <img src="../assets/mobleImg/bannerMain.png" alt="">
      </div>
      <div class="mobile_main_title">THE ULTIMATE ALL-IN-ONE DATA SOLUTION</div>
      <div class="mobile_people_img"></div>
      <div class="mobile_intruduce">Dmaster Network is a Decentralized Personal Profile Data Solution powered by W3C DID
        standard and Blockchain.</div>
      <div class="mobile_start_button" @click="openNoticeFun">Get Start</div>
      <div class="mobile_map_button" @click="toFun(4)">See the Roadmap</div>
    </div>
    <div class="mobile_data">
      <div class="mobile_data_head">
        <img src="../assets/mobleImg/littleqube@2x.png" alt="">
      </div>
      <div class="mobile_data_title" ref="mobile_data_title">
        Master Your Own Data!
      </div>
      <div class="mobile_data_title_intruduce">
        <span>The ultimate all-in-one data sovereignty</span>
        <span>solution across Web2 and Web3 in all time and</span>
        <span>in all scenarios.</span>
      </div>
      <div class="mobile_data_web">
        <div class="mobile_data_web_title">Web2</div>
        <span class="mobile_data_web_intruduce">Nowadays, your data is in cloud service of Web2 giants and you never own.</span>
      </div>
      <img src="../assets/mobleImg/web2@2x.png" alt="" class="mobile_data_medio">
      <div class="mobile_data_vs">VS</div>
      <div class="mobile_data_web">
        <div class="mobile_data_web_title mobile_data_web_title1">Web3</div>
        <span class="mobile_data_web_intruduce">With Dmaster, your data is in your local device or being encryped on-chain without third-party unauthentic
          access.</span>
      </div>
      <img src="../assets/mobleImg/web3@2x.png" alt="" class="mobile_data_web3">
      <div class="mobile_data_features" ref="mobile_data_features">
        <img src="../assets/mobleImg/littleqube@2x.png" alt="" class="littleqube">
        <span class="mobile_data_features_title">Features</span>
        <div class="mobile_data_features_item">
          <img src="../assets/mobleImg/icon_user_owned.png" alt="" class="mobile_data_features_item_img">
          <span class="mobile_data_features_item_title">User-owned</span>
          <span class="mobile_data_features_item_intruduce">All personal data is stored in user's device local storage
            or encrypedly on Dmaster blockchain.</span>
        </div>
        <div class="mobile_data_features_item">
          <img src="../assets/mobleImg/icon_privacy@2x.png" alt="" class="mobile_data_features_item_img">
          <span class="mobile_data_features_item_title">Privacy-secured</span>
          <span class="mobile_data_features_item_intruduce">Prove your access rights without revealing your private
            information built-in via zk-VM.</span>
        </div>
        <div class="mobile_data_features_item">
          <img src="../assets/mobleImg/icon_scenarios@2x.png" alt="" class="mobile_data_features_item_img">
          <span class="mobile_data_features_item_title">All scenarios</span>
          <span class="mobile_data_features_item_intruduce">Offer simplest user experience and earning opportunity in
            all online and offline scenarios.</span>
        </div>
        <div class="mobile_data_features_item">
          <img src="../assets/mobleImg/icon_data_isolation@2x.png" alt="" class="mobile_data_features_item_img">
          <span class="mobile_data_features_item_title">No data-isolation</span>
          <span class="mobile_data_features_item_intruduce">Safari all web2 and web3 apps and collect personal tags and
            preference in just one ID.</span>
        </div>
        <div class="mobile_data_bottom">
          <div class="mobile_data_bottom_item"></div>
          <div class="mobile_data_bottom_item mobile_data_bottom_item_right"></div>
        </div>
      </div>
    </div>
    <div class="mobile_architecture" ref="mobile_architecture">
      <img src="../assets/mobleImg/littleqube@2x.png" alt="" class="littleqube">
      <span class="mobile_architecture_title">Dmaster Architecture</span>
      <img src="../assets/mobleImg/dmasterimg.png" alt="" class="dmasterimg">
    </div>
    <div class="mobile_roadmap" ref="mobile_roadmap">
      <div class="mobile_roadmap_position"></div>
      <div class="mobile_roadmap_title">Roadmap</div>
      <div class="mobile_roadmap_box">
        <div class="mobile_roadmap_Item_right">
          <div class="mobile_roadmap_Item_Title">H1 2023</div>
          <div class="mobile_roadmap_Item_second">Seed Fundraising</div>
          <div>POC Release</div>
        </div>
        <div class="mobile_roadmap_Item_left">
          <div class="mobile_roadmap_Item_Title">H2 2023</div>
          <div class="mobile_roadmap_Item_second">SDK & API Release</div>
          <div>zkVM Integration</div>
        </div>
        <div class="mobile_roadmap_Item_right">
          <div class="mobile_roadmap_Item_Title">H1 2024</div>
          <div class="mobile_roadmap_Item_second">Dmaster Blockchain</div>
          <div>Testnet Release</div>
        </div>
        <div class="mobile_roadmap_Item_left">
          <div class="mobile_roadmap_Item_Title">H2 2024</div>
          <div class="mobile_roadmap_Item_second">Dmaster Blockchain</div>
          <div>Mainnet Release</div>
        </div>
      </div>
    </div>
    <div class="mobile_kongbai"></div>
    <div class="mobile_bottom">
      <div class="mobile_bottom_title">Get Updates to Your Lubox</div>
      <input class="mobile_bottom_input" placeholder="e.g.hello@dmaster.com" />
      <div class="mobile_bottom_submit">Subscribe</div>
      <div class="mobile_bottom_us">
        <span>Follow us</span>
        <div class="mobile_bottom_us_box">
          <div @click="toTiwter">
            <img src="../assets/mobleImg/tuiter.png" alt="" class="mobile_bottom_us_box_img">
          </div>
          <img src="../assets/mobleImg/github@2x.png" alt="" class="mobile_bottom_us_box_img">
          <img src="../assets/mobleImg/telegram@2x.png" alt="" class="mobile_bottom_us_box_img">
          <img src="../assets/mobleImg/discord@2x.png" alt="" class="mobile_bottom_us_box_img">
          <img src="../assets/mobleImg/youtube@2x.png" alt="" class="mobile_bottom_us_box_img">
        </div>
      </div>
      <div class="mobile_bottom_us">
        <span>Contact us</span>
        <div class="mobile_bottom_us_box">
          <img src="../assets/mobleImg/emile.png" alt="" class="mobile_bottom_us_box_img" style="margin-right: 0.2rem;">
          <span class="mobile_bottom_us_box_contact">contact@dmaster.com</span>
        </div>
      </div>
      <div class="mobile_bottom_feiji">
        <img class="mobile_bottom_feiji_world" src="../assets/mobleImg/dmaster.png" />
        <div class="backtop" @click="toTopFun">
          <img src="../assets/mobleImg/backtop.png" alt="">
        </div>
      </div>
      <div class="mobile_bottom_line"></div>
      <div class="mobile_bottom_author">
        <span>Copyright © 2022 Dmaster All rights reserved.</span>
        <div class="mobile_bottom_author_div">
          <span style="margin-right: 0.2rem;">Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
    <div class="mobile_mask" v-if="isShowMask">
      <div class="mobile_mask_body">
        <span class="mobile_mask_body_item" @click="toFun(1)">Highlight</span>
        <span class="mobile_mask_body_item" @click="toFun(2)">Features</span>
        <span class="mobile_mask_body_item" @click="toFun(3)">Architecture</span>
        <span class="mobile_mask_body_item" @click="toFun(4)">Roadmap</span>
        <span class="mobile_mask_body_button" @click="toAppFun">Dmaster APP</span>
      </div>
    </div>
    <div class="mobile_notice_mask" v-if="isShowNotice">
      <div class="mobile_notice_mask_body">
        <div class="mobile_notice_mask_img">
          <div class="mobile_notice_mask_img_title">
            <span>Please open the page on the computer.</span>
            <div class="mobile_notice_mask_img_intruduce">It may not be convenient to use on the mobile phone.</div>
          </div>
          <img src="../assets/mobleImg/pic_openoncomputer@2x.png" alt="">
        </div>
        <div class="mobile_notice_mask_url">https://dmaster.com/issue</div>
        <div :id="id" @click="copy" class="mobile_notice_mask_copy">
          Copy URL
          <slot />
        </div>
      </div>
      <div class="mobile_notice_mask_close" @click="closeNoticeFun">
        <img src="../assets/mobleImg/icon_close_white@2x.png" alt="">
      </div>
    </div>
  </div>
</template>
  
  <script>
import { ElMessage } from "element-plus";
import Typed from "typed.js";
export default {
  name: '',
  data() {
    return {
      id: "",
      isShowMask: false,
      isShowNotice: false,
      url: "https://dmaster.com/issue",
    }
  },
  created() {
    this.id = 'text' + Math.random()
  },
  mounted() {
    var options = {
      strings: ["By the people", "Of the people", "For the people"],
      typeSpeed: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    };
    new Typed(".mobile_people_img", options);
  },
  methods: {
    toAppFun() {
      this.isShowNotice = true
    },
    closeNoticeFun() {
      this.isShowNotice = false
    },
    openNoticeFun() {
      this.isShowNotice = true
    },
    copy() {
      const input = document.createElement('input')
      document.body.appendChild(input)
      input.setAttribute('value', this.url)
      input.select()
      if (document.execCommand('copy')) {
        ElMessage({
          message: "已复制",
          type: "success",
        });
      }
      document.body.removeChild(input)
    },
    openFun() {
      this.isShowMask = true
    },
    closeFun() {
      this.isShowMask = false
    },
    toFun(n) {
      this.isShowMask = false
      if (n === 1) {
        this.$el.querySelector(".mobile_data_title")
          .scrollIntoView({ block: "start", behavior: "smooth" });
      } else if (n === 2) {
        this.$el.querySelector(".mobile_data_features")
          .scrollIntoView({ block: "start", behavior: "smooth" });
      } else if (n === 3) {
        this.$el.querySelector(".mobile_architecture")
          .scrollIntoView({ block: "start", behavior: "smooth" });
      } else if (n === 4) {
        this.$el.querySelector(".mobile_roadmap")
          .scrollIntoView({ block: "start", behavior: "smooth" });
      }
    },
    toTopFun() {
      document.documentElement.scrollTop = 0
    },
    toTiwter() {
      window.location.href = "https://twitter.com/DmasterDID"
    },
  },
}
  </script>
  
  <style scoped>
.mobileApp {
  width: 100%;
}

.mobile_mune {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.6rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(0.1rem);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.2rem;
}

.mobile_mune_log {
  width: 2.38rem;
  height: 0.36rem;
}

.mobile_mune_menulog {
  width: 0.88rem;
  height: 0.88rem;
}

.mobile_head {
  width: 100%;
  background: linear-gradient(180deg, #000000 0%, #202842 100%);
  position: relative;
  padding-top: 1.8rem;
  padding-bottom: 0.92rem;
}

.mobile_main_img {
  width: 100%;
  height: 4.38rem;
  display: flex;
  justify-content: center;
}

.mobile_main_img img {
  width: 4.95rem;
  height: 100%;
}

.mobile_main_title {
  margin-top: 0.38rem;
  font-size: 0.55rem;
  font-weight: bold;
  color: #ffffff;
  word-break: break-all;
  width: 100%;
  padding: 0 0.4rem;
  line-height: 0.92rem;
}

.mobile_people_img {
  width: 100%;
  height: 2.08rem;
  background-image: url("../assets/mobleImg/wordbackgroud.png");
  background-repeat: no-repeat;
  background-size: contain;
  padding-left: 0.7rem;
  font-size: 0.4rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 2.08rem;
}

.mobile_intruduce {
  font-size: 0.24rem;
  font-weight: 400;
  color: #ffffff;
  padding: 0 0.4rem;
  line-height: 0.4rem;
}

.mobile_start_button {
  width: 3.7rem;
  height: 1rem;
  background: #1672f0;
  border-radius: 0.12rem;
  text-align: center;
  line-height: 1rem;
  font-size: 0.32rem;
  font-weight: 500;
  color: #ffffff;
  margin: 0 auto;
  margin-top: 0.3rem;
}

.mobile_map_button {
  width: 3.7rem;
  height: 1rem;
  border-radius: 0.12rem;
  border: 0.02rem solid #3087ff;
  font-size: 0.32rem;
  font-weight: 500;
  color: #3087ff;
  margin: 0 auto;
  margin-top: 0.2rem;
  text-align: center;
  line-height: 1rem;
}

.mobile_data {
  padding: 0 0.4rem;
  width: 100%;
  padding-bottom: 1.6rem;
  background: linear-gradient(180deg, #d1e3fc 0%, #eef5fe 100%);
  position: relative;
  padding-top: 3.1rem;
}

.mobile_data_head {
  position: absolute;
  top: 0;
  left: 0;
  height: 1.32rem;
  width: 100%;
  background-image: url("../assets/mobleImg/dataHeadImg.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile_data_head img {
  width: 0.76rem;
  height: 0.64rem;
}

.mobile_data_title {
  width: 6.3rem;
  margin: 0 auto;
  text-align: center;
  font-size: 0.68rem;
  font-weight: bold;
  color: #202842;
  line-height: 1rem;
}

.mobile_data_title_intruduce {
  margin-top: 0.2rem;
  font-size: 0.28rem;
  font-weight: 500;
  color: #202842;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.42rem;
}

/* .mobile_data_title_intruduce span {
  line-height: 0.42rem;
} */

.mobile_data_web {
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 0.4rem;
  padding: 0.4rem;
  font-size: 0.24rem;
  font-weight: 300;
  color: rgba(32, 40, 66, 0.8);
  margin-top: 0.4rem;
}

.mobile_data_web_title {
  font-size: 0.36rem;
  font-weight: 800;
  color: #202842;
  margin-bottom: 0.2rem;
}
.mobile_data_web_intruduce {
  font-weight: 400;
  color: rgba(32, 40, 66, 0.8);
  line-height: 0.36rem;
}
.mobile_data_medio {
  width: 100%;
  height: 2.34rem;
  margin-top: 0.2rem;
}

.mobile_data_vs {
  font-size: 0.32rem;
  font-weight: 500;
  color: #202842;
  margin: 0.2rem;
  text-align: center;
}

.mobile_data_web_title1 {
  color: #1672f0;
}

.mobile_data_web3 {
  width: 100%;
  height: 2.32rem;
  margin-top: 0.2rem;
}

.mobile_data_features {
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.littleqube {
  width: 0.76rem;
  height: 0.64rem;
  margin-bottom: 0.2rem;
}

.mobile_data_features_title {
  font-size: 0.68rem;
  font-weight: 600;
  color: #202842;
  margin-bottom: 0.4rem;
  line-height: 1.02rem;
}

.mobile_data_features_item {
  width: 100%;
  padding: 0.2rem 0.2rem 0.4rem 0.2rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.4rem;
  border: 0.02rem solid #ffffff;
  margin-bottom: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mobile_data_features_item_img {
  width: 2.42rem;
  height: 2.56rem;
}

.mobile_data_features_item_title {
  font-size: 0.4rem;
  font-weight: bold;
  color: #202842;
  line-height: 0.6rem;
}

.mobile_data_features_item_intruduce {
  font-size: 0.26rem;
  font-weight: 300;
  color: rgba(32, 40, 66, 0.8);
  text-align: center;
  line-height: 0.4rem;
}

.mobile_data_bottom {
  width: 100%;
  height: 4.31rem;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  z-index: -1;
}

.mobile_data_bottom_item {
  width: 50%;
  height: 100%;
  background: #1672f0;
  filter: blur(0.3rem);
}

.mobile_data_bottom_item_right {
  background: #73eaeb;
  filter: blur(0.3rem);
}

.mobile_architecture {
  width: 100%;
  background: #ffffff;
  padding-top: 2.4rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mobile_architecture_title {
  width: 4rem;
  text-align: center;
  font-size: 0.68rem;
  font-weight: bold;
  color: #202842;
  line-height: 1.02rem;
}

.dmasterimg {
  width: 100%;
  height: 4.42rem;
  margin-top: 0.82rem;
}

.mobile_roadmap {
  width: 100%;
  height: 1200px;
  background-image: url("../assets/mobleImg/roadmap_bg@2x.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 80px;
  position: relative;
}
.mobile_roadmap_position {
  position: absolute;
  background: #ffffff;
  height: 100%;
  width: 100%;
  z-index: -1;
  left: 0;
  top: 0;
}
.mobile_roadmap_title {
  font-size: 0.68rem;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
}

.mobile_roadmap_box {
  margin-top: 150px;
  padding: 0 0.6rem;
}

.mobile_roadmap_Item_right {
  width: 4.9rem;
  height: 2.44rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0.4rem;
  padding: 0.4rem;
  color: #ffffff;
  font-size: 0.26rem;
  font-weight: 400;
  margin-bottom: 100px;
  float: right;
}

.mobile_roadmap_Item_left {
  width: 4.9rem;
  height: 2.44rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0.4rem;
  padding: 0.4rem;
  color: #ffffff;
  font-size: 0.26rem;
  font-weight: 400;
  margin-bottom: 100px;
  float: left;
}

.mobile_roadmap_Item_Title {
  font-size: 0.4rem;
}

.mobile_roadmap_Item_second {
  margin-top: 0.2rem;
  margin-bottom: 0.12rem;
}

.mobile_kongbai {
  width: 100%;
  height: 1.2rem;
  background: #ffffff;
}

.mobile_bottom {
  width: 100%;
  height: 14.48rem;
  background: #ffffff;
  padding: 0 0.4rem;
  padding-top: 0.8rem;
}

.mobile_bottom_title {
  font-size: 0.6rem;
  font-weight: bold;
  color: #202842;
  line-height: 0.92rem;
}

.mobile_bottom_input {
  margin-top: 0.2rem;
  width: 100%;
  height: 0.96rem;
  box-sizing: border-box;
  border: 0.01rem solid #f2f3f5;
  background: rgba(32, 40, 66, 0.1);
  border-radius: 0.08rem;
  outline: none;
  padding: 0 0.15rem;
  color: #1d2129;
}

.mobile_bottom_input:focus {
  border-color: #1672f0;
  background: #ffffff;
}

::-webkit-input-placeholder {
  color: #202842;
}

.mobile_bottom_submit {
  width: 2.42rem;
  height: 0.96rem;
  background: #1672f0;
  border-radius: 0.16rem;
  font-size: 0.32rem;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  line-height: 0.96rem;
  margin-top: 0.2rem;
}

.mobile_bottom_us {
  margin-top: 0.8rem;
  font-size: 0.4rem;
  font-weight: 500;
  color: #222840;
}

.mobile_bottom_us_box {
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
}

.mobile_bottom_us_box_img {
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.4rem;
}

.mobile_bottom_us_box_contact {
  font-size: 0.28rem;
  font-weight: 400;
  color: #222840;
}

.mobile_bottom_feiji {
  margin-top: 1.92rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mobile_bottom_feiji_world {
  width: 2.4rem;
  height: 0.34rem;
}

.backtop {
  width: 0.88rem;
  height: 0.88rem;
  background: rgba(34, 40, 64, 0.05);
  border-radius: 0.08rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.backtop img {
  width: 0.48rem;
  height: 0.48rem;
}

.mobile_bottom_line {
  width: 100%;
  height: 0.01rem;
  background: rgba(34, 40, 64, 0.1);
  margin-top: 0.4rem;
  margin-bottom: 0.5rem;
}

.mobile_bottom_author {
  font-size: 0.24rem;
  font-weight: 400;
  color: rgba(34, 40, 64, 0.5);
  text-align: center;
}

.mobile_bottom_author_div {
  margin-top: 0.12rem;
  font-size: 0.24rem;
  font-weight: 500;
  color: #222840;
  display: flex;
  justify-content: center;
}

.mobile_mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(32, 40, 66, 0.8);
  -webkit-backdrop-filter: blur(0.1rem);
  backdrop-filter: blur(0.1rem);
}

.mobile_mask_body {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.32rem;
  font-weight: 400;
  color: #ffffff;
  margin-top: 2.8rem;
}

.mobile_mask_body_item {
  margin-bottom: 1.2rem;
}

.mobile_mask_body_button {
  margin-top: 1.6rem;
  width: 3.7rem;
  height: 1rem;
  background: #1672f0;
  border-radius: 0.5rem;
  font-size: 0.32rem;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  line-height: 1rem;
}

.mobile_notice_mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
}

.mobile_notice_mask_body {
  width: 6.7rem;
  height: 8.28rem;
  background: #ffffff;
  box-shadow: 0px -0.1rem 0.4rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.6rem;
  margin: 0 auto;
  margin-top: 2.2rem;
  padding: 0.4rem;
}

.mobile_notice_mask_img {
  width: 100%;
  height: 5.18rem;
  background: #1e2844;
  border-radius: 0.4rem;
  font-size: 0.4rem;
  font-weight: bold;
  color: #ffffff;
  padding-top: 0.4rem;
}

.mobile_notice_mask_img_title {
  padding: 0 0.4rem;
}

.mobile_notice_mask_img_intruduce {
  font-size: 0.28rem;
  font-weight: 500;
  color: #ffffff;
  margin-top: 0.2rem;
}

.mobile_notice_mask_img img {
  width: 100%;
  height: 2.66rem;
}

.mobile_notice_mask_url {
  font-size: 0.28rem;
  font-weight: 500;
  color: #202842;
  margin-top: 0.8rem;
  text-align: center;
}

.mobile_notice_mask_copy {
  font-size: 0.28rem;
  font-weight: 500;
  color: #1672f0;
  margin-top: 0.4rem;
  text-align: center;
}

.mobile_notice_mask_close {
  margin: 0 auto;
  margin-top: 0.6rem;
  width: 0.8rem;
  height: 0.8rem;
}

.mobile_notice_mask_close img {
  width: 100%;
  height: 100%;
}
</style>
  