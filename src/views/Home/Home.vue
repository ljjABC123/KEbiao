<template>
  <div class="q" 
    @touchstart="startD" @touchmove="Move" @touchend="stopD"
    :style="{ position: 'absolute', left: imagePosition.x/100+ 'px', top: imagePosition.y /100+ 'px' }">
    主页面<br>
    主页面<br>
    主页面<br>
    主页面<br>
  </div>
</template>
<script setup>
import {reactive} from 'vue'
const imagePosition = reactive({ x: 0, y: 0 })
let touchStart = null
const startD = (e) => {
  touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
};
const Move = (e) => {
  const dx = e.touches[0].clientX - touchStart.x;
  const dy = e.touches[0].clientY - touchStart.y;
  imagePosition.x += dx;
  imagePosition.y += dy;
};
const stopD = () => {
  imagePosition.x=touchStart.x
  imagePosition.y=touchStart.y
  touchStart = null;
};
</script>
<style  scoped>
.q {
  width: 100px;
  height: 100px;
  background-color: beige;
}
</style>