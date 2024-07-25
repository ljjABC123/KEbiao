## MY1
MY1是一个使用Vue 3框架开发的应用程序。它包含了一些常见的Vue应用组件，例如router、store以及src/assets中的静态资源。
技术栈
Vue 3
Vite
Vuex (通过store目录)
Vue Router (通过router目录)

## 请运行以下命令:


pnpm dev



## 目录结构概览
.vscode: VS Code编辑器的相关设置。
guib: 应用程序的源码目录。
node_modules: 项目依赖包。
src: 应用程序的源代码。
assets: 静态资源。
mock: 模拟数据。
router: 路由配置。
store: Vuex状态管理。
views: 页面视图组件。
App.vue: 应用程序入口组件。
main.js: 应用程序入口脚本。
.gitignore: Git忽略文件列表。
index.html: HTML入口文件。
jsconfig.json: JavaScript项目配置。
package.json: 项目元数据和依赖关系。
pnpm-lock.yaml: 使用pnpm进行包管理时的锁定文件。
vite.config.js: Vite构建工具的配置文件。





## 使用说明
打开页面后底部有导航栏，这个是我自己配置的三个路由，可以实现路由的切换
向上拖动导航栏上面的紫色框，就可以划出来课表
点击有课程的课表，从底部会弹出来具体的课程信息表，再一次点击具体的课程信息表，给页面从底部滑下去了
点击空课表，会从右边划出来添加页面，第一个页面可以自己输入也可以添加，点击下一步，第二个页面必须自己输入，点击下一步，第三个页面点击下一步完成添加。
左右拖动，可以实现周次的转换，本周无“返回本周”，其余周有“返回本周”，每一周的课程都不一样
下滑返回主页面











# my1

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```
