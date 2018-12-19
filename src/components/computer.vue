<template>
    <windows :item="item" :index="10">
        <div class="computer">
            <div class="info">
                <div class="avatar"><img src="../static/img/avatar.jpg" alt=""></div>
                    <div class="com-info">
                        <p><strong>像素小站</strong></p>
                        <p>版本 18.9.15</p>
                        <div class="detail">
                            <p>Pixels Online</p>
                            <p><strong>处理器</strong>&nbsp;&nbsp;1 x 1.5 GHz</p>
                            <p><strong>内存</strong>&nbsp;&nbsp;512 MB</p>
                            <p><strong>硬盘</strong>&nbsp;&nbsp;20 GB SSD</p>
                            <p><strong>图形显卡</strong>&nbsp;&nbsp;显示器 128 MB</p>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    © 2016-2018 「像素工作室」保留一切权利.
                </div>
            </div>
    </windows>
</template>
<script>
import Windows from "./windows.vue";

export default {
    name: "computer",
    props: {
        width: Number,
        height: Number
    },
    components: {
        Windows
    },
    data() {
        return {
            item: {
                id: 10,
                src: require('@/assets/polar.png'),
                text: '系统',
                title: '系统',
                type: 'native',
                resizable: false,
                isOpen: true, 
                width: 400,
                height: 210,
                url: 'http://www.polaxiong.com/editor',
            }
        };
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
$top: 16%;
$height: 210px;
$width: 400px;

p {
    margin: 0;
}

.computer {
    position: relative;
    height: $height;
    width: $width;
    background-color: rgb(247, 247, 247);
}

.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    top: calc(#{$top} + 10px);
    left: 55px;
    border: 1px solid rgb(233, 233, 233);
    box-shadow: 0px 2px 8px 0.5px rgba(121, 121, 121, 0.2);

    img {
        width: 100px;
        height: 100px;
    }
}

// .info{
//   display: flex;
// }

.com-info {
    position: absolute;
    top: $top;
    right: 75px;
    // text-align: center;

    p:nth-child(2) {
        font-size: 7px;
    }
}

.detail {
    margin-top: 14px;

    p {
        font-size: 9px;
    }
}

.copyright {
    width: 100%;
    font-size: 9px;
    color: rgb(165, 165, 165);
    position: absolute;
    bottom: 10px;
    text-align: center;
    transform: scale(0.9);
}
</style>