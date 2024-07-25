// mockData.js
import Mock from 'mockjs';
import {reactive} from 'vue'
const generateCourse = () => ({
  id: Mock.Random.increment(),
  name: Mock.Random.ctitle(2,5),
  tname: Mock.Random.cname(2, 4),
  address:Mock.Random.integer(2000, 4400)
})

let coursesum = reactive([]);
for (let i = 0; i < 15; i++) {
  const course1 = () => {
    const days = [1, 3, 5, 7, 9, 11];
    const temp = {};
    let specialid = 1900000; 
    days.forEach((day) => {
      let numberOfCourses = Math.floor(Math.random() * 5) + 1; 
      temp[day] = [];
      for (let i = 0; i < numberOfCourses; i++) {
        temp[day].push(generateCourse());
      }
      while (temp[day].length < 7) {
        temp[day].push({
          id: specialid++, 
          tname: "", 
          name: "", 
          address:null
        });
      }
    });

    return temp;
  };

  // 这里需要调用函数并将结果存储到数组中
  coursesum[i] = course1();
}
export {coursesum}