<template>
  <VueDraggableResizable ref="win"
  v-bind:style="{width: getWidth+'px',height: getHeight+'px'}"
  :parent="true" 
  v-bind:z="zIndex" 
  :resizable="rz" 
  :drag-handle="'.header'"
  :x="ix"
  :y="iy"
  :w="getWidth"
  :h="getHeight"
  :minw="mw" 
  :minh="mh" 
  :maximize="ma" 
  @activated="onActivated"
  @resizing="onResizing"
  @resizestop="onResizstop"
  @dragging="onDragging">
    <div class="window drag" v-bind:style="{width: getWidth+'px',height: getHeight+'px', backgroundColor: nc}">
      <div class="header">
        <p class="button">
          <span class="close"><i class="iconfont icon-cuowu"></i></span>
          <span class="min"><i class="iconfont icon-min"></i></span>
          <span class="max"><i class="iconfont icon-xiangshang"></i></span>
        </p>
        <p class="title"><span v-bind:style="{color: tc}">{{title}}</span></p>
        <p></p>
      </div>
      <div class="other">
        <slot name="other"></slot>
      </div>
      <div class="content" v-if="tp === 'native'">
        <slot name="content"></slot>
      </div>
      <div class="content" v-else-if="tp === 'iframe'">
        <iframe name="iframe" style="width: 100%; height: 100%; font-family:'黑体'" :src="sr" frameborder="0" ></iframe>
      </div>
    </div>
  </VueDraggableResizable>
</template>

<script>
import VueDraggableResizable from "vue-draggable-resizable";

export default {
  name: "window",
  props: {
    title: String,
    type: String,
    navColor: String,
    titleColor: String,
    src: String,
    x: Number,
    y: Number,
    w: Number,
    h: Number,
    minw: Number,
    minh: Number,
    resizable: Boolean,
    maximize: Boolean
  },
  components: {
    VueDraggableResizable
  },
  data() {
    return {
      tp: this.type || "native",
      nc: this.navColor || "rgb(222, 225, 230)",
      tc: this.titleColor || "rgba(50, 50, 50, 0.9)",
      sr: this.src || null,
      ix: this.x || 100,
      iy: this.y || 100,
      mw: this.minw || 200,
      mh: this.minh + this.$store.state.windowHeight,
      zIndex: this.$store.state.windowsZIndex,
      rz: this.resizable || false,
      ma: this.maximize || false,
      width: this.w,
      height: this.h + this.$store.state.windowHeight,
      cw: null,
      ch: null,
      lock: false
    };
  },
  computed: {
    getWidth: function() {
      if (this.lock) {
        return this.cw;
      } else {
        return this.width;
      }
    },
    getHeight: function() {
      if (this.lock) {
        return this.ch;
      } else {
        return this.height;
      }
    }
  },
  watch: {},
  mounted() {
    // console.log("初始宽度" + this.width);
    let that = this;
    if (this.type === "iframe") {
      // let iframe = document.getElementsByTagName('iframe')[0]
      let iFrameHead = window.frames["iframe1"].document.getElementsByTagName(
        "head"
      )[0];
      // let myscript = document.createElement("link");
      // myscript.type = "text/javascript";
      // iFrameHead.appendChild(myscript);
      console.log(iFrameHead);
    }
  },
  methods: {
    onActivated() {
      // console.log("现在宽度" + this.width);
      this.$store.state.windowsZIndex = this.$store.state.windowsZIndex + 1;
      this.zIndex = this.$store.state.windowsZIndex;
    },
    onResizing(left, top, width, height) {
      // console.log("正在拉"+width);
      if (this.lock) {
        this.cw = width;
        this.ch = height;
      } else {
        this.width = width;
        this.height = height;
        this.lock = true;
      }
    },
    onResizstop(left, top, width, height) {
      let that = this;
      // console.log("拉完了" + width);
      this.cw = width;
      this.ch = height;
      this.width = width;
      this.height = height;
      // console.log("此时宽度" + this.width);
      // console.log(this.$refs.win)
    },
    onDragging() {
      this.cw = this.width;
      this.ch = this.height;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$window-bg-color: rgb(222, 225, 230);
$button-width: 12px;
$window-font-size: 12px;
$window-border-color: rgba(89, 94, 91, 1);
$header-height: auto;

iframe {
  * {
    font-family: "黑体";
  }
}

p {
  margin: 0;
}

.drag-window {
  // position: absolute;
  // top: 50px;
  // left: 100px;
}

.window {
  // background-color: $window-bg-color;
  border-radius: 6px;
  border-color: $window-border-color;
  box-shadow: 0px 3px 25px rgba(99, 99, 99, 0.6);
  overflow: hidden;
}

.header {
  display: flex;
  // height: $header-height;
  border-bottom: 0.8px solid rgba(139, 139, 139, 0.05);

  p {
    width: 33.33%;
  }
}

.title {
  font-size: $window-font-size;
  display: flex;
  justify-content: space-around;
  align-items: center;
  letter-spacing: 1.5px;

  span {
    display: inline-block;
  }
}

.button {
  span {
    display: inline-block;
    width: $button-width;
    height: $button-width;
    border-radius: 50%;
    margin-left: 6px;
    transform: scale(0.8);
    position: relative;

    i {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-52%, -50%) scale(0.8);
      font-size: 5px;
      font-weight: bold;
      transition: 0.2s;
    }

    &:hover {
      i {
        color: rgba(62, 62, 62, 0.9);
      }
    }
  }
}

.close {
  background-color: rgb(253, 90, 89);
  border-color: rgb(223, 59, 63);

  i {
    color: rgb(253, 90, 89);
  }
}

.min {
  background-color: rgb(254, 192, 49);
  border-color: rgb(223, 162, 28);

  i {
    color: rgb(254, 192, 49);
  }
}
.max {
  background-color: rgb(55, 207, 66);
  border-color: rgb(43, 176, 41);

  i {
    color: rgb(55, 207, 66);
  }
}

.content {
  width: 100%;
  height: calc(100% - 23px);
  // position: relative;
  letter-spacing: 0.4px;
}
</style>