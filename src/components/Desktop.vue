<template>
    <div class="main">
        <el-carousel trigger="click" :height="fullHeight - 50 + 'px'" :autoplay="false">
            <el-carousel-item v-for="item in 2" :key="item">
                <grid :center="false" :draggable="true" :sortable="true" :items="apps" :cellWidth="110" :cellHeight="110" @change="change" @remove="remove" @dragend="dragend" @dragstart="dragstart" @drag="drag" @click="click" @sort="sort">
                    <template slot="cell" slot-scope="props">
                        <icon :src="props.item.src" :text="props.item.text"></icon>
                    </template>
                </grid>
            </el-carousel-item>
        </el-carousel>
        <!-- 窗口 -->
        <!-- <hsc-window-style-metal> -->
        <windows v-for="(item, index) in windows" :key="index" :item="item" :index="index" @closeWin="closeWin" @move="move"></windows>
        <!-- <Computer /> -->
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
    </div>
</template>
<script>
import Icon from './Icon'
import Windows from './windows';
import Computer from "@/components/computer";
import { mapState, mapMutations } from 'vuex';
import { OPEN_WIN, CLOSE_WIN, MOVE_WIN, CLICK_TOOPENWIN } from "@/store/mutations-type.js"

export default {
    data() {
        return {
            fullHeight: document.documentElement.clientHeight - 22.78 * 2,
            msgIsOpen: false,
            windows: this.$store.state.windows,
            apps: this.$store.state.apps
        }
    },
    components: {
        Icon,
        Windows,
        Computer
    },
    created() {
        window.addEventListener('resize', this.handleResize)
    },
    computed: {
        rightMsgClass() {
            return this.msgIsOpen ? 'right_msg right_msg_open' : 'right_msg right_msg_close'
        },
    },
    methods: {
        ...mapMutations([OPEN_WIN, CLOSE_WIN, MOVE_WIN, CLICK_TOOPENWIN]),
        closeWin(obj) {
            this.windows.splice(this.windows.findIndex(item => item.id === obj.id), 1)
        },
        openWin(obj) {
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
        move(obj, index) {
            // 排序
            this.windows.filter(w => w.index <= obj.index).map(w => {
                if (w.id === obj.id) {
                    w.index = 0
                } else {
                    w.index = w.index + 1
                }
            })
        },
        toggleMenu() {
            this.msgIsOpen = !this.msgIsOpen
        },
        handleResize(event) {
            this.fullHeight = document.documentElement.clientHeight
        },
        click({ items, index }) {
          this[CLICK_TOOPENWIN]({ items, index })
            // let value = items.find(v => v.index === index)
            // // console.log(value)
            // let item = this.windows.find(f => f.id === value.item.id)
            // if (!item) {
            //     item = {
            //         id: value.item.id,
            //         title: value.item.text,
            //         index: 0,
            //         isOpen: false,
            //         full: false,
            //         type: value.item.type,
            //         resizable: value.item.resizable,
            //         width: value.item.width,
            //         height: value.item.height,
            //         src: value.item.src,
            //         theme: value.item.theme,
            //         url: value.item.url || ''
            //     }
            //     this.windows.push(item)
            // }
            // this.openWin(item)
        },
        change(event) {
            console.log('change', event)
        },
        remove(event) {
            console.log('remove', event)
        },
        dragstart(event) {
            console.log('dragstart', event)
        },
        dragend(event) {
            console.log('dragend', event)
        },
        drag(event) {
            console.log('drag', event)
        },
        sort(event) {
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
    background-color: rgba(252, 252, 252, .5);
    padding: 7px;
    /*margin: 0 10px;*/
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

.bottom .state_img_item {
    width: 30px;
    height: 30px;
    line-height: 50px;
    cursor: pointer;
}

.bottom .state_img_item:hover {
    background-color: rgba(0, 0, 0, 0.9);
}

.bottom .state_img_item img {
    vertical-align: middle;
    height: 20px;
    width: 20px;
}

.el-carousel__arrow--left,
.el-carousel__arrow--right {
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