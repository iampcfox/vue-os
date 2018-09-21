<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <img class="pcbg" src="../static/img/bg6.jpg" alt="">
    <div class="desktop">
      <Window 
      v-for="item in windowItems" 
      :keys="item.id"
      :title="item.name"
      :navColor="item.navColor"
      :titleColor="item.titleColor"
      :type="item.type"
      :w="item.width"
      :h="item.height"
      :src="item.src"
      :minw="item.minWidth"
      :minh="item.minHeight"
      :resizable="item.resizable"
      >
        <div slot="content">
          <Computer
          :width="item.width"
          :height="item.height"
          ></Computer>
          
        </div>
      </Window>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Window from "@/components/window";
import Computer from "@/components/computer";

export default {
  name: "home",
  components: {
    Window,
    Computer
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
.pcbg {
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: fixed;
}

.desktop {
  width: 100%;
  height: calc(99vh - 22px);
  position: relative;
}
</style>

