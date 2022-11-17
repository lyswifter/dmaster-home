<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ElButton } from 'element-plus'

import Typed from 'typed.js';

export default defineComponent({
    name: "Home",
    components: {
        ElButton,
    },
    data() {
        return {
            count: ref(1),
            activeIndex: ref('1'),
            subscribeInput: "dmaster@gmail.com",
            issueUrl: "https://did.valuechain.group",
            isScroll: false,
        }
    },
    mounted() {
        var options = {
            strings: ['ecentralized', 'ata', 'master'],
            typeSpeed: 100,
            smartBackspace: true,
            loop: true,
            showCursor: false,
        };
        new Typed(".typing", options);

        let that = this
        window.addEventListener('scroll', function () {
            // var header = document.querySelector("#topAnchor");
            // header?.classList.toggle("headerscroll", window.scrollY > 0)

            if (window.scrollY > 0) {
                that.isScroll = true
            } else {
                that.isScroll = false
            }
        })
    },
    methods: {
        reloadPage() {
            location.reload()
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },
        handleSelect(key: string, keyPath: string[]) {
            console.log(key, keyPath)
        },
        scrollIntoView(aim: string) {
            document.querySelector(aim)?.scrollIntoView({
                behavior: "smooth"
            })
        },
        subcribeAction() {
            alert("subscribe")
        }
    }
})
</script>

<template>
    <div id="container">
        <!-- <div class="common-layout"> -->
        <el-container>
            <div id="topRowAnchor"></div>

            <!-- el-header -->

            <el-header class="dm-header" :class="{ headerscroll: isScroll }" id="topAnchor">
                <el-row class="dm-row">
                    <el-col :span="3">
                        <a href="javascript:void(0)" @click="reloadPage">
                            <div class="logoview">
                            <img src="../assets/img/logo_Dmaster.svg" alt="">
                        </div>
                        </a>
                    </el-col>

                    <el-col :span="18">
                        <el-row :gutter="40" justify="center">
                            <el-col :span="2">
                                <a class="menu-title" href="javascript:void(0)"
                                    @click="scrollIntoView('#highlightAnchor')">Highlights</a>
                            </el-col>
                            <el-col :span="2">
                                <a class="menu-title" href="javascript:void(0)"
                                    @click="scrollIntoView('#featuresAnchor')">Features</a>
                            </el-col>
                            <el-col :span="2">
                                <a class="menu-title" href="javascript:void(0)"
                                    @click="scrollIntoView('#architectureAnchor')">Technology</a>
                            </el-col>
                            <el-col :span="2">
                                <a class="menu-title" href="javascript:void(0)"
                                    @click="scrollIntoView('#roadmapAnchor')">Roadmap</a>
                            </el-col>
                        </el-row>
                    </el-col>

                    <el-col :span="3">
                        <el-button class="menu-btn" type="primary" round><a :href="issueUrl">Dmaster APP</a></el-button>
                    </el-col>
                </el-row>
            </el-header>

            <!-- el-main -->

            <el-main class="dm-main">
                <!-- Top view -->
                <div class="main-content">
                    <div class="main-part-one">
                        <el-row :gutter="10">
                            <el-col :span="13">
                                <div class="first-line">MASTER</div>
                                <div class="second-line">YOUR OWN DATA</div>

                                <div class="typing"></div>

                                <h4 class="illustrate-line">Dmaster Network is a Decentralized Personal Profile Data Solution
                                    powered by
                                    W3C DID standard and
                                    Blockchain.</h4>

                                <el-row justify="start" style="margin-top: 50px;">
                                    <el-col :span="7" :offset="1">
                                        <el-button class="roadmap-btn" type="text"><a href="javascript:void(0)"
                                                @click="scrollIntoView('#roadmapAnchor')">See the Roadmap</a>
                                        </el-button>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-button class="start-btn" type="primary"><a :href="issueUrl">Get Start</a>
                                        </el-button>
                                    </el-col>
                                </el-row>
                            </el-col>

                            <el-col :span="11" style="text-align: right;">
                                <!-- <object class="svg-view" data="../assets/img/log-in-girl.svg" type="image/svg+xml" height="526px" width="592px"> -->
                                <img class="svg-view" style="width: 592px;height: 526px;"
                                    src="../assets/img/dynamic.svg" alt="">
                                <!-- </object> -->
                            </el-col>
                        </el-row>
                    </div>
                </div>

                <!-- Banner view -->
                <div class="botton-banner" id="highlightAnchor">
                    <img style="width: 38px;height: 32px;" src="../assets/img/littleqube.svg" alt="">
                </div>

                <!-- Revolution-view -->
                <div class="revolution-view">
                    <div class="revolution-content">
                        <div class="re-title">The real Web3 revolution!</div>
                        <div class="re-subtitle">The ultimate all-in-one data sovereignty solution across Web2 and
                            Web3 in all time and in all scenarios. </div>

                        <el-row justify="space-around">
                            <el-col :span="10">
                                <div class="web2-description">
                                    <div class="web2-title">Web2</div>
                                    <div class="web2-subtitle">Nowadays, your data is in cloud service of Web2
                                        giants and you never own.
                                    </div>
                                </div>
                            </el-col>

                            <div class="description-one"></div>

                            <el-col :span="10">
                                <div class="web3-description">
                                    <div class="web3-title">Web3</div>
                                    <div class="web3-subtitle">With Dmaster, your data is in your local device or
                                        being encryped on-chain
                                        without third-party unauthentic access.</div>
                                </div>
                            </el-col>
                        </el-row>

                        <h2>vs</h2>

                        <el-row justify="space-around">
                            <el-col :span="10">
                                <img style="width: 582px;height: 203px;border: 1px dashed lightgrey;"
                                    src="../assets/img/web2.svg" alt="">
                            </el-col>

                            <div class="description-two"></div>

                            <el-col :span="10">
                                <img style="width: 582px;height: 203px;border: 1px dashed lightgrey;"
                                    src="../assets/img/web3.svg" alt="">
                            </el-col>
                        </el-row>
                    </div>
                </div>

                <!-- Features view -->
                <div class="feature-view" id="featuresAnchor">
                    <div class="feature-content">
                        <img style="width: 38px;height: 32px;margin-top: 80px;" src="../assets/img/littleqube.svg"
                            alt="">
                        <div class="feature-title">Features</div>

                        <el-row :gutter="40" justify="space-around">
                            <el-col :span="10">
                                <div class="owned-view">
                                    <img style="width: 160px;height: 170px;float: left;border: 1px dashed lightgray;"
                                        src="../assets/img/icon_user_owned.svg" alt="">
                                    <div class="card-title">User-owned</div>
                                    <div class="card-subtitle">All personal data is stored in user’s device local
                                        storage or encrypedly on Dmaster blockchain.</div>
                                </div>
                            </el-col>
                            <el-col :span="10">
                                <div class="others-view">
                                    <img style="width: 160px;height: 170px;float: left;border: 1px dashed lightgray;"
                                        src="../assets/img/icon_privacy.svg" alt="">
                                    <div class="card-title">Privacy-secured</div>
                                    <div class="card-subtitle">Prove your access rights without revealing your
                                        private information built-in via zk-VM.</div>
                                </div>
                            </el-col>
                        </el-row>

                        <el-row :gutter="40" justify="space-around" style="margin-top: 40px;">
                            <el-col :span="10">
                                <div class="others-view">
                                    <img style="width: 160px;height: 170px;float: left;border: 1px dashed lightgray;"
                                        src="../assets/img/icon_scenarios.svg" alt="">
                                    <div class="card-title">All scenarios</div>
                                    <div class="card-subtitle">Offer simplest user experience and earning opportunity in all
                                        online and offline scenarios.</div>
                                </div>
                            </el-col>
                            <el-col :span="10">
                                <div class="others-view">
                                    <img style="width: 160px;height: 170px;float: left;border: 1px dashed lightgray;"
                                        src="../assets/img/icon_data_isolation.svg" alt="">
                                    <div class="card-title">No data-isolation</div>
                                    <div class="card-subtitle">Safari all web2 and web3 apps and collect personal
                                        tags and preference in just one ID.</div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>

                <!-- Dmaster Architecture view -->
                <div class="architecture-view" id="architectureAnchor">
                    <div class="architecture-content">
                        <!-- <div class="architecture-title">Dmaster Architecture</div> -->

                        <span class="architecture-title">Dmaster Architecture</span>
                        <img style="width: 38px;height: 32px;margin-left: 4px;" src="../assets/img/littleqube.svg" alt="">

                        <div class="architecture-img">
                            <img style="width: 1199px;height: 710px;" src="../assets/img/结构图2@2x.png" alt="">
                        </div>
                    </div>
                </div>

                <!-- Roadmap view -->
                <div class="roadmap-view" id="roadmapAnchor">
                    <div class="roadmap-content">
                        <img src="../assets/img/road_map.png" alt="">
                    </div>
                </div>

            </el-main>

            <!-- Footer -->

            <el-footer class="dm-footer">
                <div class="footer-container">
                    <el-row justify="space-between">
                        <el-col :span="10">
                            <div class="container-left">
                                <div class="footer-title">Get Updates to Your Inbox</div>

                                <el-row :gutter="1">
                                    <el-col :span="16">
                                        <el-input class="subscribe-input" v-model="subscribeInput"
                                            placeholder="Please input" />
                                    </el-col>
                                    <el-col :span="2">
                                        <el-button class="subscribe-btn" type="primary" @click="subcribeAction">
                                            Subscribe</el-button>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-col>

                        <el-col :span="8">
                            <div class="container-right">
                                <div>
                                    <div class="follow" style="margin-bottom: 10px;font-size: 24px;color: #222840;">Follow us</div>
                                    <el-row :gutter="2" justify="start">
                                        <el-col :span="3"><a href="https://twitter.com/DmasterDID"><img style="width: 40px;height: 40px;border-radius: 20px;"
                                                src="../assets/img/推特.svg" alt=""></a></el-col>
                                        <!-- <el-col :span="3"><img style="width: 40px;height: 40px;border-radius: 20px;"
                                                src="../assets/img/github.svg" alt=""></el-col>
                                        <el-col :span="3"><img style="width: 40px;height: 40px;border-radius: 20px;"
                                                src="../assets/img/telegram.svg" alt=""></el-col>
                                        <el-col :span="3"><img style="width: 40px;height: 40px;border-radius: 20px;"
                                                src="../assets/img/discord.svg" alt=""></el-col>
                                        <el-col :span="3"><img style="width: 40px;height: 40px;border-radius: 20px;"
                                                src="../assets/img/youtube.svg" alt=""></el-col> -->
                                    </el-row>

                                    <div class="follow" style="margin-top: 40px;margin-bottom: 10px;font-size: 24px;color: #222840;">Contact us</div>
                                    <el-row>
                                        <img style="width: 40px;height: 40px;border-radius: 20px;"
                                            src="../assets/img/邮箱.svg" alt="">
                                        <span style="line-height: 40px; margin-left: 5px;">contact@dmaster.com</span>
                                    </el-row>
                                </div>
                            </div>
                        </el-col>
                    </el-row>

                    <div class="footer-line"></div>

                    <el-row justify="space-between">
                        <el-col :span="2">
                            <div class="lineh-54 logo-dark">
                                <img src="../assets/img/logo_Dmaster_dark.svg" alt="">
                            </div>
                        </el-col>
                        <el-col :span="10">
                            <div class="lineh-54">
                                Copyright © 2022 Dmaster All rights reserved.
                            </div>
                        </el-col>
                        <el-col :span="2">
                            <div class="lineh-54">Privacy Policy</div>
                        </el-col>
                        <el-col :span="3">
                            <div class="lineh-54">Terms of Service</div>
                        </el-col>
                        <el-col :span="4">
                            <img class="backtotop-img" src="../assets/img/backtotop.svg" alt="">
                            <a class="backtotop-a" href="javascript:void(0)" @click="scrollIntoView('#topRowAnchor')">Back
                                to top</a>
                        </el-col>
                    </el-row>
                </div>
            </el-footer>
        </el-container>
        <!-- </div> -->
    </div>

</template>

<!-- Layout view -->

<style scoped>
.flex-grow {
    flex-grow: 1;
}

.dm-header {
    padding: 0;
}

.logo-dark img{
    width: 155px;
    height: 25px;
    vertical-align: middle;
}

#topAnchor {
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: rgb(32, 40, 66, 1);
}

.headerscroll {
    opacity: 0.8;
}

.dm-row {
    /* height: 80px; */
    line-height: 60px;
}

.dm-empty {
    border: 1px solid transparent;
}

.menu-title {
    font-size: 16px;
}

.logoview img {
    width: 155px;
    height: 24px;
    vertical-align: middle;
}

.menu-btn {
    width: 110px;
    height: 32px;
    background: #3670E8;
    border-radius: 20px;
}
</style>

<!-- Top -->

<style scoped>
.dm-main {
    padding: 0 !important;
}

.main-content {
    height: 785px;
    /* background: linear-gradient(180deg, #000000 0%, #202842 100%); */
    background: rgba(32, 40, 66, 1);
    backdrop-filter: blur(10px);
}

.main-part-one {
    width: 1440px;
    margin: 0 auto;
    text-align: start;
    color: white;
}

.typing {
    height: 142px;
    font-size: 48px;
    line-height: 134px;
    font-weight: 600;
    color: #FFFFFF;
    padding-left: 90px;
    background-image: url(../assets/img/打字机背景.svg);
    background-repeat: no-repeat;
}

.first-line {
    margin-left: 30px;
    margin-top: 80px;
    font-size: 80px;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 120px;
    height: 112px;
}

.second-line {
    margin-left: 30px;
    font-size: 80px;
    font-weight: bold;
    color: #FFFFFF;
    height: 123px;
    line-height: 132px;
}

.illustrate-line {
    height: 56px;
    margin-left: 30px;
    font-size: 20px;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 30px;
}

.svg-view {
    margin-top: 100px;
    /* border: 1px dashed lightgray; */
}

.roadmap-btn {
    width: 185px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #3087FF;
}

.start-btn {
    width: 185px;
    height: 50px;
    background: #1672F0;
    border-radius: 10px;
}

.botton-banner {
    width: 100%;
    height: 81px;
    background-image: url(../assets/img/banner_bottom.svg);
    background-repeat: no-repeat;
    background-size: contain;
    text-align: center;
    background-color: rgba(22, 114, 240, 0.2);
}

.botton-banner img {
    margin-top: 35px;
}
</style>

<!-- Revolution -->

<style scoped>
.revolution-view {
    /* height: 785px; */
    padding-bottom: 80px;
    padding-top: 80px;
    background: linear-gradient(180deg, rgba(22, 114, 240, 0.2) 0%, rgba(22, 114, 240, 0.07) 100%);
}

.revolution-content {
    width: 1440px;
    margin: 0 auto;
}

.re-title {
    height: 101px;
    font-size: 72px;
    font-weight: bold;
    color: #202842;
    line-height: 108px;
}

.re-subtitle {
    margin: 20px auto;
    width: 825px;
    height: 66px;
    margin-bottom: 80px;
    font-size: 24px;
    font-weight: 500;
    color: #202842;
    line-height: 35px;
}

.web2-description {
    width: 560px;
    height: 128px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    text-align: start;
    padding: 20px;
}

.web2-title {
    width: 59px;
    height: 28px;
    font-size: 20px;
    font-weight: 800;
    color: #202842;
    line-height: 30px;
}

.web2-subtitle {
    margin-top: 10px;
    width: 540px;
    height: 50px;
    font-size: 18px;
    font-weight: 300;
    color: rgba(32, 40, 66, 0.8);
    line-height: 27px;
}

.description-one {
    width: 1px;
    margin-top: 30px;
    height: 128px;
    opacity: 0.4;
    border-left: 1px dashed #202842;
}

.description-two {
    width: 1px;
    margin-top: 10px;
    height: 182px;
    opacity: 0.4;
    border-left: 1px dashed #202842;
}

.web3-description {
    width: 560px;
    height: 128px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    text-align: start;
    padding: 20px;
}

.web3-title {
    width: 60px;
    height: 28px;
    font-size: 20px;
    font-weight: 800;
    color: #1672F0;
    line-height: 30px;
}

.web3-subtitle {
    margin-top: 10px;
    width: 540px;
    height: 50px;
    font-size: 18px;
    font-weight: 300;
    color: rgba(32, 40, 66, 0.8);
    line-height: 27px;
}
</style>

<!-- Features -->

<style scoped>
.feature-view {
    height: 820px;
    background: linear-gradient(180deg, rgba(22, 114, 240, 0.07) 0%, rgba(22, 114, 240, 0) 100%);
    background-image: url(../assets/img/featuresbg.png);
    background-repeat: no-repeat;
    background-size: contain;
}

.feature-content {
    width: 1440px;
    margin: 0 auto;
}

.feature-title {
    height: 101px;
    font-size: 72px;
    font-weight: bold;
    color: #202842;
    line-height: 108px;
    margin-bottom: 40px;
}

.owned-view {
    width: 570px;
    padding: 30px 15px;
    height: 170px;
    background: #FFFFFF;
    border-radius: 20px;
    border: 1px solid #FFFFFF;
    text-align: start;
}

.others-view {
    width: 570px;
    padding: 30px 15px;
    height: 170px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    border: 1px solid #FFFFFF;
    text-align: start;
}

.card-title {
    margin-left: 185px;
    height: 51px;
    font-size: 36px;
    font-weight: bold;
    color: #202842;
    line-height: 55px;
}

.card-subtitle {
    width: 380px;
    margin-left: 185px;
    margin-top: 16px;
    height: 50px;
    font-size: 18px;
    font-weight: 300;
    color: rgba(32, 40, 66, 0.8);
    line-height: 27px;
}
</style>

<!-- Dmaster Architecture -->

<style scoped>
.architecture-view {
    height: 1000px;
    background: #FFFFFF;
}

.architecture-content {
    width: 1440px;
    margin: 0 auto;
    text-align: start;
}

.architecture-title {
    height: 101px;
    font-size: 72px;
    font-weight: bold;
    color: #202842;
    line-height: 108px;
}

.architecture-img {
    margin: 50px auto;
    text-align: center;
}
</style>

<!-- Roadmap -->

<style scoped>
.roadmap-content {
    margin: 0 auto;
    width: 1440px;
}

.roadmap-content img {
    width: 100%;
}
</style>

<!-- Footer  -->

<style scoped>
.dm-footer {
    height: auto;
}

.footer-container {
    width: 1440px;
    margin: 0 auto;
    margin-top: 40px;
}

.container-left {
    text-align: start;
}

.footer-title {
    margin-bottom: 5px;
    height: 51px;
    font-size: 36px;
    font-weight: bold;
    color: #222840;
    line-height: 55px;
}

.subscribe-input {
    width: 385px;
    height: 48px;
    background: rgba(32, 40, 66, 0.1);
    border-radius: 4px;
}

.subscribe-btn {
    width: 121px;
    height: 48px;
    background: #1672F0;
    border-radius: 8px;
}

.container-right {
    text-align: left;
}

.footer-line {
    margin-top: 42px;
    width: 1440px;
    height: 1px;
    opacity: 0.2;
    border-top: 1px solid #222840;
}

.lineh-54 {
    line-height: 54px;
}

.backtotop-img {
    width: 24px;
    height: 25px;
    border-radius: 4px;
    vertical-align: middle;
}

.backtotop-a {
    color: #222840;
    line-height: 54px;
}
</style>
