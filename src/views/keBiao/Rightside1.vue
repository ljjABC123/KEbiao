<template>
  <div class="popright">
    
    <Transition name="top1">
      <div class="top11" v-if="showtop">
标题：{{option1  }}
      </div>
    </Transition>
    <div>为你的行程添加</div>
    <transition>
      <p v-if="!showtop">一个标题</p>
      </transition>
      <transition>
      <p v-if="showtop">具体内容</p>    
      </transition>
<input type="text" placeholder="请输入内容..." v-model="inputValue" />
  <transition>
    <div class="options" v-if="!showtop">
      <button 
      class="bbb"
        v-for="(option, index) in options" 
        :key="index" 
        @click="selectOption(option)"
        :class="{ active: selectedOption === option }"
      >
        {{ option }}
      </button>
    </div> 
</transition>



<Transition>
    <div v-if="timeshow">
      {{ option1  }}<br>
      <button @click="time2" class="benb">本周</button>
    </div>
  </Transition>



<button class="arrow1" @click="change1">
    <span class="arrow2">下一步</span>
  </button>
  </div> 
</template>

<script setup>
import { ref } from 'vue';
import{useSide}from '@/store/side'
const side=useSide()
let j=1
const inputValue = ref('');
let option1=ref('')
let timeshow=ref(false)
const options = ['自习', '值班', '考试', '英语', '开会', '作业','补课','实验'];
const selectedOption = ref(null);
const selectOption = (option) => {
  inputValue.value = option;
  side.formData.title=option;
  option1.value=option
   }
const showtop=ref(false)
function change1(){
  if(j===1)
 {showtop.value=true;
  inputValue.value=''
  j++
 
 }else if(j===2)
 { 
  side.formData.content=inputValue.value
  timeshow.value=true
j++
 }else if(j===3){
  j=1
   option1.value=''
   inputValue.value=''
   timeshow.value=false
   selectedOption.value=null
  side.isright=false
  
 }
}

function time2(){
  side.formData.time='本周'
}
</script>
<style lang="scss" scoped>

.popright {
  font-family: '华文中宋';
  font-size: 50px;
  font-weight: 700;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: skyblue;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

input {
  padding: 10px;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
}

.options {
  display: flex;
}

button {
  padding: 0.5rem 1rem;
  background-color: #eee;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
}
.benb{
  height:50px;
  width: 100%;
}
.active {
  background-color: #007bff;
  color: white;
}

.bbb{
  height:50px;
  margin-left: 5px;
}

.arrow1 {
  height:40px;
  width: 50px;
  background-color: #007bff; 
  color: white; 
  border: none; 
  cursor: pointer;
  border-radius: 4px; 
}


</style>