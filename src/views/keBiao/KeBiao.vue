x<template>
  <div class="d"
  @touchstart="handle1"
   @touchend="handle2" >
    <div class="touch1"  >
   <button @click="show1" ></button><br>
<transition name="fade">
        <p v-show="!isTrue2" class="column" style="text-align: center">享受假期吧</p>         
      </transition>
      <transition name="fade">
        <div v-show="isTrue2" style="position: relative; height:50px">
<button class="showweek1" >第{{n+1}}周</button>  
        <button class="showweek2" @click="FanHui" v-if="benzhou">回到本周</button>  
        </div>             
      </transition>
      </div>
     <Transition name="fade2">
<div v-if="isTrue2" class="d3"
@touchstart="handle3"
   @touchend="handle4" >
  <table >
<tr>
  <th></th>
  <th v-for="day in days" :key="day">{{ day }}</th>
</tr>
<tr v-for="(courses, day) in weeklyCourses[n]" :key="day">
          <td >{{ day }}<br><br>{{ Number(day)+1 }}</td>
          <td v-for="course in courses" 

          :key="course.id"
           @click="fnsum(course,day)"          
            >
           <div
            :class="{ 'has-content': course.name !== '' && course.name !== null && course.name !== undefined}"            
           ref="element"
    @touchstart="startDragging" @touchmove="handleTouchMove" @touchend="stopDragging"
    :style="{ position: 'relative', left: imagePosition.x/100+ 'px', top: imagePosition.y /100+ 'px',zIndex: high}"
            >              
            <span v-text=" course.name"
              class="span1"
              ></span><br>
             <span v-text="course.address"
             class="span2"
             >

             </span>
          </div>   
          </td>
        </tr>
  </table>
</div>
 </transition>
 <transition name="slide">
      <div 
        v-if="showPopup" 
        class="info-popup" 
        @click="hideInfo"
      >
        <h3>详情页:</h3><br>
       <h4>名称： {{ currentCourse.name }}</h4>
       <h4>时间：{{ arr[dayD] }}</h4>
       <h4>课程教师： {{ currentCourse.tname }}</h4>
      </div>
    </transition >
    <!-- 左侧弹出层 -->
<transition name="slide-right">
         <Rightside1 v-if="side.isright" ></Rightside1>
 </transition>
</div>
</template>
<script setup>
import{useSide}from '@/store/side'
import { ref ,reactive} from 'vue';
import {  onMounted ,watch} from 'vue';
import Rightside1 from './Rightside1.vue'
import '@/assets/kebiao.css'
const isTrue2 = ref(false);
const side=useSide()
let benzhou=ref(false)
function show1(){
  isTrue2.value=!isTrue2.value
side.isTrue1=!side.isTrue1
}
const startY=ref(0);
const startX=ref(0)
const endX=ref(0)
const endY=ref(0);
function handle1(e){
  hideInfo()
startY.value = e.touches[0].clientY;
}
function handle2(e){
  hideInfo()
endY.value = e.changedTouches[0].clientY;
stopTracking1()
}
function handle3(e){
  hideInfo()
  startX.value = e.touches[0].clientX;
}
function handle4(e){
  hideInfo()
  endX.value = e.changedTouches[0].clientX;
stopTracking2 ()
}
function stopTracking1 () {
  
    const distance1 =  parseInt(endY.value - startY.value);
    if (distance1  <-30) 
      show1()
      else if(distance1>30)
    show1()
    
   
};
function stopTracking2 () {
  
    const distance2 =  parseInt(endX.value - startX.value);
    if (distance2  <-30) 
     fnleft()
      else if(distance2>30)
    fnright()  
};

const days = ref(['周一', '周二', '周三', '周四', '周五','周六','周天']);

let arr=[]
arr[1]='8:00-9:40'
arr[3]='10:15-11:55'
arr[5]='14:00-15:40'
arr[7]='16:15-17:55'
arr[9]='19:00-20:40'
arr[11]='20:50-22:30'
import {  coursesum} from '@/mock/index';
 let weeklyCourses =reactive([])
// 请求数据
onMounted(() => {
  weeklyCourses = coursesum;
});
let n=ref(5);
let dayD=ref()
let showPopup = ref(false); // 控制弹出层的显示/隐藏
let currentCourse = ref([]); // 当前显示的课程信息
function fnsum(course,day2) {
  dayD.value=day2
  hideInfo(); 
  setTimeout(() => {
    if (course.name !== '') {
      currentCourse.value = course; 
      showPopup.value = true; 
    } else {
      side.course1=course
      side.isright=!side.isright
setTimeout(()=>{
course.name=side.formData.title
course.id=side.formData.id
course.tname=side.formData.tname
console.log(side.formData,'...>>>>>')
alert('添加成功~')
},10000)
    }
  }, 0); 
}
const hideInfo = () => {
  showPopup.value = false;
};
function fnleft(){
 n.value++
if(n.value===14)
n.value=0
}
function fnright(){
 n.value--
if(n.value===-1)
n.value=13 
}
function FanHui(){
  n.value=5;
}



const element = ref(null)
const imagePosition = reactive({ x: 0, y: 0 })
let touchStart = null

onMounted(() => {
  console.log( element.value);
});
let high=ref(0)
const startDragging = (e) => {
  console.log(high.value)
  high.value=100
  touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
};

const handleTouchMove = (e) => {
  const dx = e.touches[0].clientX - touchStart.x;
  const dy = e.touches[0].clientY - touchStart.y;
  imagePosition.x += dx;
  imagePosition.y += dy;

};
const stopDragging = () => {
  imagePosition.x=touchStart.x
  imagePosition.y=touchStart.y
   high.value=0
  touchStart = null;
};
watch(n, () => {
      if(n.value===5)
      benzhou.value=false;
    else
benzhou.value=true;
    });


</script>

<style  scoped >



</style>

