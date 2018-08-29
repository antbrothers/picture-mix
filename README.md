# picture-mix

> 图片合成

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
#### 配置一个下拉刷新
```
# 在main.json 文件配置
 "enablePullDownRefresh": true,
 "backgroundTextStyle": "dark",
# 在index.vue 的 methods 同级添加异步 async onPullDownRefresh
async onPullDownRefresh () {
  Object.assign(this.$data, this.$options.data())
  wx.stopPullDownRefresh()
}
```
