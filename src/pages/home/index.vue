<template>
  <div class="home-main">
    <header class="index-JMUSj_0">
      <div class="index-1DPx9_0">
        <div class="local-text">上海市政府</div>
      </div>
    </header>
    <div class="search-main">
      <div class="search-main-module">
        <div class="search-icon">
          <i-icon class="search-img-icon" type="search" size="20" color="#999" />
        </div>
        <div class="txt">
          搜索饿了么商家、商品名称
        </div>
      </div>
    </div>
    <view class="swiper-container">
      <swiper class="swiper" autoplay="true" v-bind:current="currentSwiper" @change="swiperChange">
        <block v-for="(item, index) in imgUrls" v-bind:key="index">
          <swiper-item>
            <!-- <image :src="item" class="img" bindtap="swipclick" /> -->
            <div>
              <i-grid  class="no-border">
                <i-grid-item class="no-border">
                    <i-grid-icon>
                        <image src="https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                    </i-grid-icon>
                    <i-grid-label class="txt">美食</i-grid-label>
                </i-grid-item>
                <i-grid-item class="no-border">
                    <i-grid-icon>
                        <image src="https://fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                    </i-grid-icon>
                    <i-grid-label class="txt">晚餐</i-grid-label>
                </i-grid-item>
                <i-grid-item class="no-border">
                    <i-grid-icon>
                        <image src="https://fuss10.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                    </i-grid-icon>
                    <i-grid-label class="txt">商超便利</i-grid-label>
                </i-grid-item>
                <i-grid-item class="no-border">
                    <i-grid-icon>
                        <image src="https://fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                    </i-grid-icon>
                    <i-grid-label class="txt">水果</i-grid-label>
                </i-grid-item>
                <i-grid-item class="no-border">
                    <i-grid-icon>
                        <image src="https://fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                    </i-grid-icon>
                    <i-grid-label class="txt">医药健康</i-grid-label>
                </i-grid-item>
                
              </i-grid>
              <i-grid class="no-border">
                <i-grid-item class="no-border">
                    <i-grid-icon>
                        <image src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                    </i-grid-icon>
                    <i-grid-label class="txt">浪漫香花</i-grid-label>
                </i-grid-item>
                <i-grid-item class="no-border">
                    <i-grid-icon>
                        <image src="https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                    </i-grid-icon>
                    <i-grid-label class="txt">厨房生鲜</i-grid-label>
                </i-grid-item>
                <i-grid-item class="no-border">
                    <i-grid-icon>
                        <image src="https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                    </i-grid-icon>
                    <i-grid-label class="txt">跑腿代购</i-grid-label>
                </i-grid-item>
                <i-grid-item class="no-border">
                    <i-grid-icon>
                        <image src="https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                    </i-grid-icon>
                    <i-grid-label class="txt">地方小吃</i-grid-label>
                </i-grid-item>
                <i-grid-item>
                    <i-grid-icon>
                        <image src="https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" />
                    </i-grid-icon>
                    <i-grid-label class="txt">麻辣烫</i-grid-label>
                </i-grid-item>
                
              </i-grid>
            </div>           
          </swiper-item>
        </block>
      </swiper>
      <!--重置小圆点的样式  -->
      <view class="dots">  
          <block v-for="(itme, index) in imgUrls" v-bind:key="index">  
              <view :class="['dot', index == currentSwiper ? ' active' : '']"></view>  
          </block>  
      </view>  
    </view>
  </div>
</template>
<style lang="less" scoped>
 .index-JMUSj_0 {
   background-image: linear-gradient(90deg,#0387FE,#0387FE);  
   width: 375px;
   height: 34px;
   padding-left: 10px;
 }
 .index-1DPx9_0 {
   display: flex;
   align-items: center;
  height: 34px;
 }
 .local-text {
   flex: 1;
   display: flex;
   align-items: center;
   color: #fff;
   font-size: 16px;
   font-weight: bold;
 }
 .search-main {
   width: 375px;
   height: 38px;
   background-image: linear-gradient(90deg,#0387FE,#0387FE);
   display: flex;
   justify-content: center;
 }
 .search-main-module {
    width: 352px;
    height: 30px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
 }
 .search-icon {
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top:-4px;
 }
 .txt {
   color: #999;
    font-size: 14px;
 }
 
swiper {
    height: 320rpx;
}
swiper-item image {
    width: 100%;
    height: 100%;
}
.swiper-container{
  position: relative;
}
.swiper-container .swiper{
  height: 320rpx;
}
.swiper-container .swiper .img{
  width: 100%;
  height: 100%;
}
.wrap {
  display: flex;
  flex-wrap: wrap;
}
.no-border {
  border: none;  
  .i-grid-item {
    border: none;
  }
  .i-grid-item {
    border-right: none;
    border-bottom: none;
  }
}
.i-grid-label {
  font-size: 12px;
}
/*用来包裹所有的小圆点  */
.dots{  
  width: 156rpx;
  height: 36rpx; 
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 320rpx;
  bottom: 20rpx;
}  
/*未选中时的小圆点样式 */
.dot{  
  width: 26rpx;  
  height: 26rpx;   
  border-radius: 50%;
  margin-right: 26rpx;
  background-color: grey;
}  
/*选中以后的小圆点样式  */
.active{  
  width: 26rpx;   
  height: 26rpx;
  background-color: coral;
} 
</style>
<script>
export default {
  data () {
    return {
      swiperCurrent: 0,
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 800,
      circular: true,
      currentSwiper: 0,
      imgUrls: [
        'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
        'https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
        'https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
      ],
      links: [
        '../user/user',
        '../user/user',
        '../user/user'
      ]
    }
  },
  methods: {
    handleClick () {
      console.log(1)
    },
    swiperChange: function (e) {
      this.setData({
        currentSwiper: e.detail.current
      })
    }
  }
}
</script>

