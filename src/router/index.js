import { createRouter, createWebHistory } from 'vue-router'
const routes = [
 {path:'/',
  component:()=>import('@/views/Layout/Layout.vue'),
  redirect:'/home/home1',
  children:[
{
  path:'/home/home1',
  component:()=>import('@/views/Home/Home.vue'),
},
{
  path:'/play/play1',
  component:()=>import('@/views/Play/Play.vue'),
},
{
  path:'/my/my1',
  component:()=>import('@/views/My/My.vue'),
}
  ]
}
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;