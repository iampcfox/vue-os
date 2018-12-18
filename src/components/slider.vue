<template>
  <div class="slider" :style="{right: isShowSlider ? 0+'px' : -260+'px'}">
    <div class="slider-header">
      <p class="selected">今天</p>
      <p>其他</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "slider",
  props: {
    isShowSlider: {
      type:Boolean,
      default: false
    }
  },
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$slider-bg-color: rgba(226, 226, 226, 1);
$slider-width: 260px;
$nav-height: 22px;
$slider-font-size: 10.8px;
$slider-border-color: rgba(215, 215, 215, 1);

$slider-selected-color: rgba(249, 249, 249, 1);
$slider-header-color: rgba(194, 194, 194, 1);
$slider-header-radius: 3px;

$slider-left-border: rgba(173, 175, 178, 1);

.slider {
  position: fixed;
  z-index: 10000;
  height: 100%;
  width: $slider-width;
  background-color: $slider-bg-color;
  top: 22px;
  // right: -260px;
  border-left: 0.7px solid $slider-left-border;
  box-shadow: -5px 0px 10px -5px rgba(99, 99, 99, 0.6);
  transition: .3s;
}

.slider-header {
  display: flex;
  padding: 10px 20px;
  border-bottom: 1px solid rgba(191, 191, 191, 1);

  p {
    flex-grow: 1;
    padding: 0.5px 0;
    text-align: center;
    font-size: $slider-font-size;
    background-color: $slider-header-color;
    border-color: $slider-border-color;

    color: #fff;
  }

  p:first-child {
    border-top-left-radius: $slider-header-radius;
    border-bottom-left-radius: $slider-header-radius;
  }

  p:last-child {
    border-top-right-radius: $slider-header-radius;
    border-bottom-right-radius: $slider-header-radius;
  }

  p.selected {
    background-color: $slider-selected-color;
    color: rgba(50, 50, 50, 1);
  }
}
</style>