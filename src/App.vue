
<template>
  <router-view></router-view>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  created() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile |BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile |BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        // localStorage.setItem("showTypeDeviec", "mobile");
        (function () {
          var whdef = 100 / 750; // 表示750的设计图,使用100PX的默认值,使用100px只是为了方便计算 其他值都可以
          var wW = window.innerWidth; // 当前窗口的宽度
          var rem = wW * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
          document.getElementsByTagName("html")[0].style.fontSize = rem + 'px'
        })()
        window.onresize = function () {
          (function () {
            var whdef = 100 / 750; // 表示750的设计图,使用100PX的默认值,使用100px只是为了方便计算 其他值都可以
            var wW = window.innerWidth; // 当前窗口的宽度
            var rem = wW * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
            document.getElementsByTagName("html")[0].style.fontSize = rem + 'px'
          })()
        }
      }
      this.$router.push({
        name: "mobileHome"
      })
    } else {
      this.$router.push({
        name: "home"
      })
    }
  }
}

</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  width: 100%;
}
</style>
