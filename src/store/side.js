
import { defineStore } from 'pinia';
import {ref,reactive }from 'vue'
export const useSide=defineStore('side',()=>{
  let isTrue1=ref(true)
  let isright = ref(false)
  let id1=1298
  let formData = reactive({
  title: '',        
  content: '',      
  tname:'无教师指导',
  id: id1++,    
  address:'',     
  time: ''         
});

  return{
    isright,
    isTrue1,
    formData,
  }
})
