<template>
  <div class="main">
        <el-carousel trigger="click" :height="fullHeight - 50 + 'px'" :autoplay="false">
         <el-carousel-item v-for="item in 2" :key="item">
           <grid
                :center="false"
                :draggable="true"
                :sortable="true"
                :items="colors"
                :cellWidth="110"
                :cellHeight="110"
                @change="change"
                @remove="remove"
                @dragend="dragend"
                @dragstart="dragstart"
                @drag="drag"
                @click="click"
                @sort="sort">
                <template slot="cell" slot-scope="props">
                  <icon :src="props.item.src" :text="props.item.text"></icon>
                </template>
              </grid>
         </el-carousel-item>
       </el-carousel>

       <!-- 窗口 -->
       <!-- <hsc-window-style-metal> -->
         <windows v-for="(item, index) in windows" :key="index" :item="item" :index="index" @closeWin="closeWin" @move="move"></windows>
       <!-- </hsc-window-style-metal> -->

       <!-- 底部 -->
       <div class="bottom">
         <div class="img">
           <el-tooltip content="Bottom center" placement="bottom" effect="light">
             <img src="../assets/u194.png">
           </el-tooltip>
           <el-tooltip content="Bottom center" placement="bottom" effect="light">
             <img src="../assets/u191.png">
           </el-tooltip>
           <el-tooltip v-for="(item, i) in windows" :key="i" :content="item.title" placement="bottom" effect="light">
             <img :src="item.src" @click="openWin(item)">
           </el-tooltip>
         </div>
       </div>

      <!--  <div :class="rightMsgClass" :style="{'height': fullHeight - 50 + 'px'}">
         <div class="right-msg-tool">
           <div>刷新</div>
           <div></div>
           <div  @click="toggleMenu">关闭</div>
         </div>
         <div class="right-msg-body">
           当前没有消息或通知
         </div>
       </div> -->
  </div>
</template>

<script>
import Icon from './Icon'
import Windows from './windows';
export default {
  data () {
    return {
      fullHeight: document.documentElement.clientHeight - 22.78 * 2,
      msgIsOpen: false,
      windows: [],
      colors: [{
        id: 1,
        src: require('@/assets/u169.png'),
        text: '美图拍拍'
      }, {
        id: 2,
        src: require('@/assets/u173.png'),
        text: '应用中心'
      }, {
        id: 3,
        src: require('@/assets/u174.png'),
        text: '服务中心',
        headerColor: '#1E1E1E'
      }]
    }
  },
  components: {
    Icon,Windows
  },
  created () {
    window.addEventListener('resize', this.handleResize)
  },
  computed: {
    rightMsgClass () {
      return this.msgIsOpen ? 'right_msg right_msg_open' : 'right_msg right_msg_close'
    }
  },
  methods: {
    closeWin (obj) {
      this.windows.splice(this.windows.findIndex(item => item.id === obj.id), 1)
    },
    openWin (obj) {
      if (obj.isOpen) {
        obj.isOpen = false
        return
      }
      this.windows.filter(w => w.index <= obj.index).map(w => {
        if (w.id === obj.id) {
          w.index = 0
          w.isOpen = true
        } else {
          w.index = w.index + 1
        }
      })
    },
    move (obj, index) {
      // 排序
      this.windows.filter(w => w.index <= obj.index).map(w => {
        if (w.id === obj.id) {
          w.index = 0
        } else {
          w.index = w.index + 1
        }
      })
    },
    toggleMenu () {
      this.msgIsOpen = !this.msgIsOpen
    },
    handleResize (event) {
      this.fullHeight = document.documentElement.clientHeight
    },
    click ({ items, index }) {
      let value = items.find(v => v.index === index)
      let item = this.windows.find(f => f.id === value.item.id)
      if (!item) {
        item = {
          id: value.item.id, 
          title: value.item.text, 
          index: 0, 
          isOpen: false, 
          full: false, 
          src: value.item.src,
          theme: 'black'
        }
        this.windows.push(item)
      }
      this.openWin(item)
    },
    change (event) {
      console.log('change', event)
    },
    remove (event) {
      console.log('remove', event)
    },
    dragstart (event) {
      console.log('dragstart', event)
    },
    dragend (event) {
      console.log('dragend', event)
    },
    drag (event) {
      console.log('drag', event)
    },
    sort (event) {
      console.log('sort', event)
    }
  }
}
</script>

<style scoped lang="scss">

.bottom {
  z-index: 999;
  height: auto;
  width: auto;
  position: fixed;
  bottom: 6px;
  background-color: rgba(252,252,252, .5);
  padding: 7px;
  margin: 0 10px;
  border-radius: 8px;
  left: 50%;
  transform: translateX(-50%);
  transition: width .5s;
}

.bottom .img img {
  padding-left: 15px;
  padding-right: 15px;
  height: 40px;
  width: 40px;
  cursor: pointer;
}
.bottom .state_img {
  right: 10px;
  position: fixed;
  display: flex;
  bottom: 0px;
  flex-direction: row;
}
.bottom .state_img_item{
  width: 30px;
  height: 30px;
  line-height: 50px;
  cursor: pointer;
}
.bottom .state_img_item:hover{
 background-color:rgba(0,0,0,0.9);
}
.bottom .state_img_item img{
  vertical-align: middle;
  height: 20px;
  width: 20px;
}
.el-carousel__arrow--left, .el-carousel__arrow--right {
  display: none;
}
.el-carousel__indicators {
  bottom: 50px;
}

.full {
  top: 0px !important;
  left: 0px !important;
}

</style>
