<template>
    <div class="window">
        <hsc-window-style-metal>
            <hsc-window :resizable="true" :key="index" :ref="'window_' + item.id" :class="{full: item.full}" :style="{'height': item.full ? (fullHeight + 'px') : '500px', 'width': item.full ? '100%' : '800px', 'z-index': item.full ? 9999 : 100 - item.index}" @mousedown.native="move(item, index)" :closeButton="false" :isOpen="item.isOpen">
                <div class="header" :style="{backgroundColor: item.theme === 'black' ? '#1E1E1E' : '#FBFCFB'}" slot="title">
                    <p class="f-button">
                        <span class="close"><i class="iconfont icon-cuowu" @click="closeWin(item)"></i></span>
                        <span class="min"><i class="iconfont icon-min" @click="item.isOpen = false"></i></span>
                        <span class="max"><i class="iconfont icon-xiangshang" @click="item.full = !item.full"></i></span>
                    </p>
                    <p class="title-text" :style="{color: item.theme === 'black' ? '#FBFCFB' : '#1E1E1E'}"><span>{{item.title}}</span></p>
                    <p></p>
                </div>
                <div style="width: 100%; height: 100%;" :style="{backgroundColor: item.theme === 'black' ? '#1E1E1E' : '#FBFCFB'}">
                    <iframe src="http://www.polaxiong.com/editor" style="width: 100%; height: 100%;"></iframe>
                </div>
            </hsc-window>
        </hsc-window-style-metal>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fullHeight: document.querySelectorAll('.desktop')[0].clientHeight,
        };
    },
    props: {
        item: {
            type: Object,
            default: {}
        },
        index: {
            type: Number,
            default: 0,
        }
    },
    methods: {
        closeWin(item) {
            this.$emit('closeWin', item)
        },
        move(item, index) {
            this.$emit('move', item, index)
        }
    }
};
</script>
<style lang="scss">
$window-bg-color: rgb(222, 225, 230);
$button-width: 12px;
$window-font-size: 12px;
$window-border-color: rgba(89, 94, 91, 1);

p {
    margin: 0;
}

iframe {
    border: none !important;
}

.titlebar {
    // background: rgb(222, 225, 230) !important;
    padding: 0 !important;
}

.window {
    border-radius: 6px !important;
    border-color: $window-border-color !important;
    box-shadow: 0px 3px 25px rgba(99, 99, 99, 0.6) !important;
    overflow: hidden !important;
    // position: absolute;
}

.header {
    display: flex;
    border-bottom: 0.8px solid rgba(139, 139, 139, 0.05);
    padding: 1px !important;

    p {
        width: 33.33%;
    }
}

.title-text {
    font-size: $window-font-size;
    display: flex;
    justify-content: space-around;
    align-items: center;
    letter-spacing: 1.5px;

    span {
        display: inline-block;
    }
}

.f-button {

    span {
        display: inline-block;
        width: $button-width;
        height: $button-width;
        border-radius: 50%;
        margin-left: 6px;
        transform: scale(0.8);
        position: relative;
        cursor: default !important;

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
}



.content {
    width: 100%;
    height: calc(100% - 23px);
    // position: relative;
    letter-spacing: 0.4px;
    padding: 0 !important;
}

.window {
    // background-color: $window-bg-color;
    border-radius: 6px;
    border-color: $window-border-color;
    box-shadow: 0px 3px 25px rgba(99, 99, 99, 0.6);
    overflow: hidden;
}

.full {
  top: 22.78px !important;
  left: 0px !important;
}
</style>