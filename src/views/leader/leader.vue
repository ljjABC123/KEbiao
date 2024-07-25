<template>
  <div class="main">
    <!-- 课表组件盒子 -->
    <div class="ke " :class="{ choice: side.isTrue1 }">
     
      <ClassSchedule class="class-schedule" ></ClassSchedule>
    
    </div>
    <!-- 导航栏盒子 -->
     <Transition name="fade1">
    <div class="nav" v-if="side.isTrue1">
      <router-link to="/home/home1" class="nav-link">发现</router-link>
      <router-link to="/play/play1" class="nav-link">邮乐园</router-link>
      <router-link to="/my/my1" class="nav-link">我的</router-link>
    </div>
    </Transition>
  </div>
</template>
<script setup>
import { RouterLink} from 'vue-router'
import ClassSchedule from '@/views/keBiao/KeBiao.vue'; 
import {useSide} from '@/store/side'
const side=useSide()
</script>
<style scoped>


.ke {
 width: 100%;
  position: fixed;
  background-color:rgba(240, 183, 221, 0.888);
  overflow-y: auto; /* 内容过多时可滚动 */
  display: flex;
  left: 0;
  right: 0;
  bottom: 0px;
   flex-direction: column;
   z-index: 100px;
   border-radius: 27px 27px 0 0;
}
.choice{
  height:140px
}
.class-schedule{
  text-align: center;
}

.nav {

  width: 100%;
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  background-color: pink;
  height: 50px; 
  align-items: center;
  line-height: 50px;
  z-index: 10;
  
}

.nav-link {
   /* 自动分配宽度，确保三等分 */
  text-align: center; /* 文本居中 */
  text-decoration: none;
  color: #333;
  font-size: 20px;
  padding: 0 45px; /* 可选，为链接添加内边距以增加点击区域 */
}

.nav-link.router-link-exact-active {
  color: orangered;
  
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 3s ease; /* 使用ease缓动函数 */
}



</style>