<template>
  <div id="app" oncontextmenu="return false" onselectstart="return false" 
 ondragstart="return false" onbeforecopy="return false" oncopy=document.selection.empty() onselect=document.selection.empty()>
    <div id="nav">
        <img class="logo" src="../src/static/img/newlogo_5.png" alt="">
        <span
        class="title">像素小站</span>
      <!-- <div class="router">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div> -->
      <div class="info">
        <span><i class="icon iconfont icon-planefill"></i></span>
        <span><i class="icon iconfont icon-lock"></i></span>
        <span><i class="icon iconfont icon-computer"></i></span>
        <p class="time">
          <span>{{week}}</span>
          <span>{{time}}</span>
        </p>
        <span><i class="setting iconfont icon-adjust"></i></span>
      </div>
    </div>
    <Slider />
    <router-view/>
  </div>
</template>

<script>
import Slider from "./components/slider";

export default {
  name: "app",
  data() {
    return {
      week: "",
      time: ""
    };
  },
  components: {
    Slider
  },
  mounted() {
    let that = this;
    setInterval(function() {
      that.getWeek(new Date());
    }, 1000);
  },
  methods: {
    getWeek(date) {
      var a = ["日", "一", "二", "三", "四", "五", "六"];
      var W = "周" + a[date.getDay()];
      var H = new String(date.getHours());
      var M = new String(date.getMinutes());
      var S =
        date.getSeconds() + 1 <= 10
          ? "0" + date.getSeconds()
          : date.getSeconds();

      if (M.length <= 1) {
        M = "0" + M;
      }
      if (H.length < 1) {
        H = "0" + H;
      }

      //月
      var Mo = date.getMonth() + 1 + "月";
      //日
      var D = date.getDate() + "日 ";

      this.time = H + ":" + M + ":" + S;
      this.week = Mo + D + W;
    },
    getCurrentDate() {
      //获取当前时间戳
      let timestamp = Date.parse(new Date());
      timestamp = timestamp / 1000;
      //获取当前时间
      var n = timestamp * 1000;
      var date = new Date(n);

      //年
      var Y = date.getFullYear();
      //月
      var M =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      //日
      var D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      // 星期
      var W = this.getWeek(date);

      var date = M + "月" + D + "日 " + W;

      return date;
    }
  }
};
</script>


<style lang="scss">
$title-font-size: 11.5px;
$title-font-color: rgba(50, 50, 50, 0.9);
$title-height: 22px;
$nav-padding-left: 8px;
$nav-bg-color: rgba(251, 252, 251, 0.9);

$nav-bottom-border: rgba(76, 76, 76, 0.5);

$info-padding-right: 4px;

@font-face {
  font-family: "苹方";
  src: url("../src/static/fonts/pc.ttf");
}

$logo-width: 14px;
$font-1: "苹方";

* {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $title-font-color;
  font-family: $font-1;
}

#nav {
  // padding: 30px;
  position: relative;
  width: 100%;
  height: $title-height;
  background-color: $nav-bg-color;
  display: flex;
  align-items: center;
  border-bottom: 0.8px solid $nav-bottom-border;
  box-shadow: 0 3px 30px rgba(99, 99, 99, 0.7);
  z-index: 9999;

  .info {
    flex-grow: 1;
    font-size: $title-font-size;
    color: $title-font-color;
    text-align: right;
    padding-right: $nav-padding-left;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .icon {
      display: inline-block;
      margin-right: 1.5px;
    }

    .time {
      // baco
    }

    .setting {
      margin-left: 3px;
    }

    span {
      padding-right: $info-padding-right;
      // span{
      //   padding: 0 -4px;
      // }
    }
  }

  .logo {
    width: $logo-width;
    margin-left: $nav-padding-left;
    padding: 0 5px;
  }

  .title {
    font-size: $title-font-size;
    padding-left: $nav-padding-left;
    color: $title-font-color;
    // font-weight: bold;
  }

  .router {
    width: auto;
  }

  a {
    font-weight: bold;
    font-size: $title-font-size;
    color: $title-font-color;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
