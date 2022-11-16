<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ElButton, ElMenu } from 'element-plus'

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
        }
    },
    mounted() {
        var options = {
            strings: ['ecentralized', 'ecentralized'],
            typeSpeed: 100,
            smartBackspace: true,
            loop: true,
            showCursor: false,
        };

        new Typed(".typing", options);
    },
    methods: {
        handleSelect(key: string, keyPath: string[]) {
            console.log(key, keyPath)
        }
    }
})
</script>

<template>
    <div id="container">
        <div class="common-layout">
            <el-container>
                <!-- el-header -->

                <el-header class="dm-header">
                    <el-row class="dm-row">
                        <el-col :span="3">
                            <div class="logoview">
                                <img src="../assets/img/logo_Dmaster.svg" alt="">
                            </div>
                        </el-col>

                        <el-col :span="18">
                            <el-row :gutter="40" justify="center">
                                <el-col :span="2">
                                    <a class="menu-title" href="">Highlight</a>
                                </el-col>

                                <el-col :span="2">
                                    <a class="menu-title" href="">Features</a>
                                </el-col>

                                <el-col :span="2">
                                    <a class="menu-title" href="">Architecture</a>
                                </el-col>

                                <el-col :span="2">
                                    <a class="menu-title" href="">Road map</a>
                                </el-col>
                            </el-row>
                        </el-col>


                        <el-col :span="3">
                            <el-button class="menu-btn" type="primary" round>Dmaster</el-button>
                        </el-col>
                    </el-row>
                </el-header>

                <!-- el-main -->

                <el-main class="dm-main">
                    <!-- Top face -->
                    <div class="main-content">
                        <div class="main-part-one">
                            <el-row :gutter="10">
                                <el-col :span="12">
                                    <div class="first-line">MASTER</div>
                                    <div class="second-line">Your own DATA</div>

                                    <div class="typing"></div>

                                    <h4 class="illustrate-line">Dmaster is a Decentralized Personal Data Solution
                                        proceed by
                                        W3C DID standard and
                                        Blockchain.</h4>

                                    <el-row justify="center" :gutter="10">
                                        <el-col :span="10">
                                            <el-button class="roadmap-btn" type="text">See the Roadmap</el-button>
                                        </el-col>
                                        <el-col :span="14">
                                            <el-button class="start-btn" type="primary">Get Start</el-button>
                                        </el-col>
                                    </el-row>
                                </el-col>

                                <el-col :span="12" style="text-align: right;">
                                    <img class="svg-view" style="width: 592px;height: 526px;"
                                        src="../assets/img/log-in-girl.svg" alt="">
                                </el-col>
                            </el-row>
                        </div>
                    </div>

                    <!-- Banner view -->
                    <div class="botton-banner">
                        <img style="width: 38px;height: 32px;" src="../assets/img/littleqube.svg" alt="">
                    </div>

                    <!-- Revolution-view -->
                    <div class="revolution-view">
                        <div class="revolution-content">
                            <div class="re-title">The real Web3 revolution!</div>
                            <div class="re-subtitle">The ultimate all-in-one data sovereignty solution across Web2 and
                                Web3 in all time and in allscenarios. </div>

                            <el-row justify="space-around">
                                <el-col :span="10">
                                    <div class="web2-description">
                                        <div class="web2-title">Web2</div>
                                        <div class="web2-subtitle">Nowadays, your data is in cluod service of Web2
                                            giants and you never own.
                                        </div>
                                    </div>
                                </el-col>

                                <!-- <el-col :span="2">
                                    <div class="description-mid">

                                    </div>
                                </el-col> -->

                                <el-col :span="10">
                                    <div class="web3-description">
                                        <div class="web3-title">Web3</div>
                                        <div class="web3-subtitle">With Dmaster, your data is in your local device or
                                            being everyped on-chain
                                            without third-party unauthentic access.</div>
                                    </div>
                                </el-col>
                            </el-row>

                            <h5>vs</h5>

                            <el-row justify="space-around">
                                <el-col :span="10">
                                    <img style="width: 582px;height: 203px;border: 1px dashed lightgrey;"
                                        src="../assets/img/web2.svg" alt="">
                                </el-col>

                                <!-- <el-col :span="2">
                                    <div>
                                    </div>
                                </el-col> -->

                                <el-col :span="10">
                                    <img style="width: 582px;height: 203px;border: 1px dashed lightgrey;"
                                        src="../assets/img/web3.svg" alt="">
                                </el-col>
                            </el-row>
                        </div>
                    </div>

                    <!-- Features view -->
                    <div class="feature-view">
                        <div class="feature-content">
                            <img style="width: 38px;height: 32px;margin-top: 80px;" src="../assets/img/littleqube.svg"
                                alt="">
                            <div class="feature-title">Features</div>

                            <el-row :gutter="40" justify="space-around">
                                <el-col :span="10">
                                    <div class="owned-view">
                                        <img style="width: 160px;height: 170px;float: left;"
                                            src="../assets/img/icon_user owned.svg" alt="">
                                        <div class="card-title">User-owned</div>
                                        <div class="card-subtitle">All personal data is stored in user’s device local
                                            storage or Dmaster blockchain.</div>
                                    </div>
                                </el-col>
                                <el-col :span="10">
                                    <div class="others-view">
                                        <img style="width: 160px;height: 170px;float: left;"
                                            src="../assets/img/icon_user owned.svg" alt="">
                                        <div class="card-title">Privacy-secured</div>
                                        <div class="card-subtitle">Prove your access rights without revealing your
                                            private information via zk-VM.</div>
                                    </div>
                                </el-col>
                            </el-row>

                            <el-row :gutter="40" justify="space-around" style="margin-top: 40px;">
                                <el-col :span="10">
                                    <div class="others-view">
                                        <img style="width: 160px;height: 170px;float: left;"
                                            src="../assets/img/icon_user owned.svg" alt="">
                                        <div class="card-title">All scenarios</div>
                                        <div class="card-subtitle">Offer convenience and earning opportunity in all
                                            online and offline scenarios.</div>
                                    </div>
                                </el-col>
                                <el-col :span="10">
                                    <div class="others-view">
                                        <img style="width: 160px;height: 170px;float: left;"
                                            src="../assets/img/icon_user owned.svg" alt="">
                                        <div class="card-title">No data-isolation</div>
                                        <div class="card-subtitle">Safari all web2 and web3 apps and collect personal
                                            tags and preference in just one ID.</div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>

                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </div>
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

.dm-row {
    height: 80px;
    background: rgba(32, 40, 66, 1);
    backdrop-filter: blur(10px);
    line-height: 80px;
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
    /* width: 676px; */
    height: 142px;
    font-size: 48px;
    line-height: 134px;
    font-weight: 600;
    color: #FFFFFF;
    padding-left: 90px;
    background-image: url(../assets/img/打字机背景.svg);
    background-repeat: no-repeat;
    border: 1px dashed lightgray;
}

.first-line {
    /* width: 325px; */
    margin-left: 30px;
    margin-top: 80px;
    font-size: 80px;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 120px;
    height: 112px;
}

.second-line {
    /* width: 687px; */
    margin-left: 30px;
    font-size: 88px;
    font-weight: bold;
    color: #FFFFFF;
    height: 123px;
    line-height: 132px;
}

.illustrate-line {
    /* width: 625px; */
    height: 56px;
    margin-left: 30px;
    font-size: 20px;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 30px;
}

.svg-view {
    margin-top: 100px;
    border: 1px dashed lightgray;
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
    background-size: cover;
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
    width: 1120px;
    height: 66px;
    margin-bottom: 80px;
    font-size: 24px;
    font-weight: 500;
    color: #202842;
    line-height: 35px;
}

.web2-description {
    width: 580px;
    height: 148px;
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

.description-mid {
    width: 1px;
    margin-top: 30px;
    height: 128px;
    opacity: 0.4;
    border-left: 1px dashed #202842;
}

.web3-description {
    width: 580px;
    height: 148px;
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
    width: 600px;
    padding: 15px;
    height: 230px;
    background: #FFFFFF;
    border-radius: 20px;
    border: 1px solid #FFFFFF;
    text-align: start;
}

.others-view {
    width: 600px;
    padding: 15px;
    height: 230px;
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
