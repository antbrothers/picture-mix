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
``` javascript
# 在main.json 文件配置
 "enablePullDownRefresh": true,
 "backgroundTextStyle": "dark",
# 在index.vue 的 methods 同级添加异步 async onPullDownRefresh
async onPullDownRefresh () {
  Object.assign(this.$data, this.$options.data())
  wx.stopPullDownRefresh()
}
```
### 使用swiper 组件， 自定义指示点
``` java
————————————————————————————————————————————————————
|  @change      |   current 改变时会触发 change 事件 |
|———————————————|———————————————————————————————————|
|               |                                   |
|———————————————————————————————————————————————————|
# 使用swiper 组件，只能修改指示点的颜色,和选中的指示点的颜色,无法修改大小形状和位置，所以要自定义 ui
<view class="dots">  
  <block v-for="(itme, index) in imgUrls" v-bind:key="index">  
    <view :class="['dot', index == currentSwiper ? ' active' : '']"></view>  
  </block>  
</view>

swiperChange: function (e) {
  console.log(e)
    this.currentSwiper = e.mp.detail.current
}
```
