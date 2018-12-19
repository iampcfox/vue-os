<template>
  <div class="home">
    <img class="pcbg" src="../static/img/bg6.jpg" alt="">
    <div class="desktop">
      <Desktop></Desktop>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Window from "@/components/window";
import Desktop from "@/components/Desktop";

export default {
  name: "home",
  components: {
    Window,
    Desktop
  },
  data() {
    return {
      windowItems: [
        {
          id: "1",
          type: 'native',
          name: "概览",
          resizable: false,
          width: 380,
          height: 210,
          minWidth: 380,
          minHeight: 210
        },
        {
          id: "2",
          type:'iframe',
          src:'http://www.polaxiong.com/editor',
          navColor: 'rgb(30,30,30)',
          titleColor: '#FFF',
          name: "泼辣修图",
          resizable: true,
          width: 800,
          height: 510,
          minWidth: 800,
          minHeight: 510,
          maximize: true
        }
      ]
    };
  },
  mounted() {
    let that = this;
  },
  methods: {}
};
</script>

<style lang="scss" scoped>

.home{
  overflow:hidden;
}

.pcbg {
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: fixed;
}

.desktop {
  // width: 100%;
  // height: calc(99vh - 22px);
  // position: relative;
}
</style>

