<template lang="html">
  <div class="icon">
    <div class="black"></div>
    <img :src="src" >
    <span>{{text}}</span>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    text: String
  }
}
</script>

<style lang="scss" scoped>
.icon {
  width: 90%;
  height: 90%;
  position: relative;
  margin: 14px;
  color: #777;
  /*font-weight: 900;*/
  font-size: 12px;
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;
  padding: 8px;
}
.icon:hover {
    background-color:rgba(0,0,0,0.1);
    border-radius: 20px;
}
.icon img {
  z-index:0;
  margin-top: 2px;
  width: 56px;
  height: 56px;
}
.icon .black {
  position:absolute;
  width:100%;
  height:100%;
  z-index:2;
  background-color:#000;
  opacity:0;
}
.icon span {
  display: block;
  font-size: 12px;
  border-radius: 20px;
  line-height: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 8px;
  /* background-color: #333; */
  background-color:rgba(0,0,0,0.1);
  color: #fff;
}
</style>
