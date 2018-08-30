<template>
  <div class="home-main">
    <header class="index-JMUSj_0">
      <div class="index-1DPx9_0">
        <i-icon type="coordinates" size="20" color="#fff" />
        <div class="local-text">上海市人民政府</div>
      </div>
    </header>
    <div class="search-main">
      <div class="search-main-module">
        <div class="search-icon">
          <i-icon class="search-img-icon" type="search" size="20" color="#999" />
        </div>
        <div class="txt">
          搜索点呀点商家、商品名称
        </div>
      </div>
    </div>
    <view class="swiper-container">
      <swiper class="swiper" current="0" @change="swiperChange">
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
    <div class="pingpai-contain">
      <div class="pingpai-tab">
        <img src="/static/images/ping1.jpg" alt="" srcset="">
      </div>
      <div class="pingpai-tab">
        <img src="/static/images/ping2.jpg" alt="" srcset="">
      </div>
    </div>
    <i-load-more tip="推荐商家" v-bind:loading="false" />
    <div class="tab-main">
      <div class="tab-comm tab-active">
        配送最快
      </div>
      <div class="tab-comm">
        距离最近
      </div>
      <div class="tab-comm">
        品质联盟
      </div>
      <div class="tab-comm">
        筛选        
      </div>
    </div>

    <div class="list-main">
      <div class="pic-contain">
        <img class="pic" src="http://fuss10.elemecdn.com/1/98/c12da153a993422c7e57c16668c0dpng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" alt="" srcset="">
      </div>
      <div class="pic-dest">
        <div class="pic-title">
          来伊份(浙江中路二店)
        </div>
        <div class="rate-md">
          <i-cell class="rate-main">
              <i-rate value="5" class="rate-fs" size='12'></i-rate>
          </i-cell>
          <div class="rate-desc">4.8 月售63单</div>
        </div>
        <div class="price-ml">
          <div class="price-ml-tb">￥20起送</div>
          <div class="price-ml-tb line">配送费￥5.3</div>
        </div>
        <div class="label-md">
          <div class="label-m">休闲食品</div>
          <div class="label-m">品质联盟</div>
          <div class="label-m-z">
            <img class="kb-pic" src="http://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/" alt="" srcset="">
            <span class="kb-text">口碑人气好店</span>
          </div>
        </div>
        <div class="mj-main">
          <span class="mj-bz">首</span>
          <span class="text">新用户下单立减15元</span>
        </div>
        <div class="mj-main">
          <span class="mj-bz red">减</span>
          <span class="text">满50减25，满119减30</span>
        </div>    
      </div>
      <div class="pic-right">
        <div class="kd-main">
           <div class="kd">蜂鸟专送</div>
        </div>
       
        <div class="lc">
           <div class="lc-tb">1.09km</div>
          <div class="lc-tb line">30分钟</div>
        </div>        
      </div>
    </div>
    <div class="list-main">
      <div class="pic-contain">
        <img class="pic" src="http://fuss10.elemecdn.com/b/91/6d54ce9b5a465d1093abdb8aca9d8jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" alt="" srcset="">
      </div>
      <div class="pic-dest">
        <div class="pic-title">
          老山东水饺
        </div>
        <div class="rate-md">
          <i-cell class="rate-main">
              <i-rate value="5" class="rate-fs" size='12'></i-rate>
          </i-cell>
          <div class="rate-desc">4.8 月售63单</div>
        </div>
        <div class="price-ml">
          <div class="price-ml-tb">￥20起送</div>
          <div class="price-ml-tb line">配送费￥5.3</div>
        </div>
        <div class="label-md">
          <div class="label-m">休闲食品</div>
          <div class="label-m">品质联盟</div>
          <div class="label-m-z">
            <img class="kb-pic" src="http://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/" alt="" srcset="">
            <span class="kb-text">口碑人气好店</span>
          </div>
        </div>
        <div class="mj-main">
          <span class="mj-bz">首</span>
          <span class="text">新用户下单立减15元</span>
        </div>
        <div class="mj-main">
          <span class="mj-bz red">减</span>
          <span class="text">满50减25，满119减30</span>
        </div>    
      </div>
      <div class="pic-right">
        <div class="kd-main">
           <div class="kd">蜂鸟专送</div>
        </div>
       
        <div class="lc">
           <div class="lc-tb">1.09km</div>
          <div class="lc-tb line">30分钟</div>
        </div>        
      </div>
    </div>
    <div class="list-main">
      <div class="pic-contain">
        <img class="pic" src="http://fuss10.elemecdn.com/e/da/c4e5abab06dea4b64d041495a9381png.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" alt="" srcset="">
      </div>
      <div class="pic-dest">
        <div class="pic-title">
          永和大王（南京西店SH027）
        </div>
        <div class="rate-md">
          <i-cell class="rate-main">
              <i-rate value="5" class="rate-fs" size='12'></i-rate>
          </i-cell>
          <div class="rate-desc">4.8 月售63单</div>
        </div>
        <div class="price-ml">
          <div class="price-ml-tb">￥20起送</div>
          <div class="price-ml-tb line">配送费￥5.3</div>
        </div>
        <div class="label-md">
          <div class="label-m">休闲食品</div>
          <div class="label-m">品质联盟</div>
          <div class="label-m-z">
            <img class="kb-pic" src="http://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/" alt="" srcset="">
            <span class="kb-text">口碑人气好店</span>
          </div>
        </div>
        <div class="mj-main">
          <span class="mj-bz">首</span>
          <span class="text">新用户下单立减15元</span>
        </div>
        <div class="mj-main">
          <span class="mj-bz red">减</span>
          <span class="text">满50减25，满119减30</span>
        </div>    
      </div>
      <div class="pic-right">
        <div class="kd-main">
           <div class="kd">蜂鸟专送</div>
        </div>
       
        <div class="lc">
           <div class="lc-tb">1.09km</div>
          <div class="lc-tb line">30分钟</div>
        </div>        
      </div>
    </div>
    <div class="list-main">
      <div class="pic-contain">
        <img class="pic" src="http://fuss10.elemecdn.com/9/c1/c7e7903b0c9b042ae8ff969d74394png.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" alt="" srcset="">
      </div>
      <div class="pic-dest">
        <div class="pic-title">
          Oh Shift·吸福(复兴中路店)
        </div>
        <div class="rate-md">
          <i-cell class="rate-main">
              <i-rate value="5" class="rate-fs" size='12'></i-rate>
          </i-cell>
          <div class="rate-desc">4.8 月售63单</div>
        </div>
        <div class="price-ml">
          <div class="price-ml-tb">￥20起送</div>
          <div class="price-ml-tb line">配送费￥5.3</div>
        </div>
        <div class="label-md">
          <div class="label-m">休闲食品</div>
          <div class="label-m">品质联盟</div>
          <div class="label-m-z">
            <img class="kb-pic" src="http://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/" alt="" srcset="">
            <span class="kb-text">口碑人气好店</span>
          </div>
        </div>
        <div class="mj-main">
          <span class="mj-bz">首</span>
          <span class="text">新用户下单立减15元</span>
        </div>
        <div class="mj-main">
          <span class="mj-bz red">减</span>
          <span class="text">满50减25，满119减30</span>
        </div>    
      </div>
      <div class="pic-right">
        <div class="kd-main">
           <div class="kd">蜂鸟专送</div>
        </div>
       
        <div class="lc">
           <div class="lc-tb">1.09km</div>
          <div class="lc-tb line">30分钟</div>
        </div>        
      </div>
    </div>
    <div class="list-main">
      <div class="pic-contain">
        <img class="pic" src="http://fuss10.elemecdn.com/b/12/1bbc471abc219c0da479035efd9b4png.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" alt="" srcset="">
      </div>
      <div class="pic-dest">
        <div class="pic-title">
         耳光馄饨(黄家阙路店)
        </div>
        <div class="rate-md">
          <i-cell class="rate-main">
              <i-rate value="5" class="rate-fs" size='12'></i-rate>
          </i-cell>
          <div class="rate-desc">4.8 月售63单</div>
        </div>
        <div class="price-ml">
          <div class="price-ml-tb">￥20起送</div>
          <div class="price-ml-tb line">配送费￥5.3</div>
        </div>
        <div class="label-md">
          <div class="label-m">休闲食品</div>
          <div class="label-m">品质联盟</div>
          <div class="label-m-z">
            <img class="kb-pic" src="http://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/" alt="" srcset="">
            <span class="kb-text">口碑人气好店</span>
          </div>
        </div>
        <div class="mj-main">
          <span class="mj-bz">首</span>
          <span class="text">新用户下单立减15元</span>
        </div>
        <div class="mj-main">
          <span class="mj-bz red">减</span>
          <span class="text">满50减25，满119减30</span>
        </div>    
      </div>
      <div class="pic-right">
        <div class="kd-main">
           <div class="kd">蜂鸟专送</div>
        </div>
       
        <div class="lc">
           <div class="lc-tb">1.09km</div>
          <div class="lc-tb line">30分钟</div>
        </div>        
      </div>
    </div>
    <div class="list-main">
      <div class="pic-contain">
        <img class="pic" src="http://fuss10.elemecdn.com/f/8d/f29dbf20be425fc12426c0b1f90b7jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" alt="" srcset="">
      </div>
      <div class="pic-dest">
        <div class="pic-title">
          CoCo都可（山东中路店）
        </div>
        <div class="rate-md">
          <i-cell class="rate-main">
              <i-rate value="5" class="rate-fs" size='12'></i-rate>
          </i-cell>
          <div class="rate-desc">4.8 月售63单</div>
        </div>
        <div class="price-ml">
          <div class="price-ml-tb">￥20起送</div>
          <div class="price-ml-tb line">配送费￥5.3</div>
        </div>
        <div class="label-md">
          <div class="label-m">休闲食品</div>
          <div class="label-m">品质联盟</div>
          <div class="label-m-z">
            <img class="kb-pic" src="http://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/" alt="" srcset="">
            <span class="kb-text">口碑人气好店</span>
          </div>
        </div>
        <div class="mj-main">
          <span class="mj-bz">首</span>
          <span class="text">新用户下单立减15元</span>
        </div>
        <div class="mj-main">
          <span class="mj-bz red">减</span>
          <span class="text">满50减25，满119减30</span>
        </div>    
      </div>
      <div class="pic-right">
        <div class="kd-main">
           <div class="kd">蜂鸟专送</div>
        </div>
       
        <div class="lc">
           <div class="lc-tb">1.09km</div>
          <div class="lc-tb line">30分钟</div>
        </div>        
      </div>
    </div>
    <div class="list-main">
      <div class="pic-contain">
        <img class="pic" src="http://fuss10.elemecdn.com/a/f4/1c98b36c6d10d29b8bc1144e66a4ejpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" alt="" srcset="">
      </div>
      <div class="pic-dest">
        <div class="pic-title">
          千里香馄饨王（黄河路店）
        </div>
        <div class="rate-md">
          <i-cell class="rate-main">
              <i-rate value="5" class="rate-fs" size='12'></i-rate>
          </i-cell>
          <div class="rate-desc">4.8 月售63单</div>
        </div>
        <div class="price-ml">
          <div class="price-ml-tb">￥20起送</div>
          <div class="price-ml-tb line">配送费￥5.3</div>
        </div>
        <div class="label-md">
          <div class="label-m">休闲食品</div>
          <div class="label-m">品质联盟</div>
          <div class="label-m-z">
            <img class="kb-pic" src="http://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/" alt="" srcset="">
            <span class="kb-text">口碑人气好店</span>
          </div>
        </div>
        <div class="mj-main">
          <span class="mj-bz">首</span>
          <span class="text">新用户下单立减15元</span>
        </div>
        <div class="mj-main">
          <span class="mj-bz red">减</span>
          <span class="text">满50减25，满119减30</span>
        </div>    
      </div>
      <div class="pic-right">
        <div class="kd-main">
           <div class="kd">蜂鸟专送</div>
        </div>
       
        <div class="lc">
           <div class="lc-tb">1.09km</div>
          <div class="lc-tb line">30分钟</div>
        </div>        
      </div>
    </div>
  </div>
</template>
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
        'https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
      ]
    }
  },
  methods: {
    handleClick () {
      console.log(1)
    },
    swiperChange: function (e) {
      console.log(e)
      this.currentSwiper = e.mp.detail.current
    }
  },
  onShareAppMessage: function () {
    return {
      title: '点呀点',
      desc: '小程序，网站，h5',
      path: '/pages/home/main'
    }
  }
}
</script>
<style lang="less" scoped>
/* list begin  */
.list-main{
  display: flex;
  justify-content: center;
  // align-items: center;
  width: 365px;
  padding: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: .0533333vw solid #eee;
  .pic-contain {
    width: 64px;
    .pic {
      width: 64px;
      height: 64px;
    }
  }
  .pic-dest {
    flex: 1;
    padding-left: 10px;
    .pic-title {
      font-size: 14px;
      font-weight: bold;
      color: #333;
    }
    .rate-md {
      display: flex;
      align-items: center;
      .rate-main {
        display: flex;
        align-items: center;
        .rate-fs {
          margin-top: -5px;
        }
      }       
      .rate-desc {
        font-size: 11px;
        color: #666;
      }
    }
    .price-ml {
      display: flex;
      align-items: center;
      .price-ml-tb {
        font-size: 11px;
        color: #666;
        &.line:before {
          margin: 0 .8vw;
          color: #ddd;
          content: "|";
        }
      }
    }
    .mj-main {
      margin-bottom: -4px;
      .mj-bz{
        background-color: rgb(112, 188, 70);
        color: white;
        font-size: 11px;
        padding: 1px;
        border-radius: 2px;
        &.red {
          background-color: rgb(240, 115, 115);
        }
      }
      .text {
        color: #666;
        font-size: 12px;
        margin-left: 5px;
      }
    }
  }
  .label-md {
    display: flex;
    align-items: center;
    margin-top: 4px;
    .label-m {
      font-size: 10px;
      color: #666;
      border: 1rpx solid rgb(221, 221, 221);
      padding-left: 2px;
      padding-right: 2px;
      margin-right: 4px;     
      border-radius: 1px;
    }
    .label-m-z {
      margin-top: -5px;
      .kb-pic{
        width: 11px;
        height: 11px;
      }
      .kb-text {       
        margin-left: 3px;       
        font-size: 11px;
        color: #e8470b;
      }
    }
  }
  .pic-right {
    margin-top: 20px;
    .kd-main {
      display: flex;
      justify-content: flex-end;
      .kd {
        width: 45px;
        text-align: center;
        background: #0387FE;
        font-size: 11px;
        color: white;
        border-radius: 1px;
        padding-left: 1px;
        padding-right: 1px;
      }
    }
    
    .lc {
      display: flex;
      align-items: center;
      margin-top: 5px;
      .lc-tb {
        font-size: 11px;
        color: #999;
        &.line::before{
           margin: 0 .8vw;
            color: #ddd;
            content: "|";
        }
      }
    }
  }
}
/* list end    */


/* tab 控制 begin */
.tab-main{
  width: 365px;;
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  .tab-comm {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #666;
    &.tab-active {
      color: black;
      font-weight: bold;
    }
  }
}
/* tab 控制 end   */

 .index-JMUSj_0 {
   background-image: linear-gradient(90deg,#0387FE,#0387FE);  
   width: 365px;
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
   height: 44px;
   background-image: linear-gradient(90deg,#0387FE,#0387FE);
   display: flex;
   justify-content: center;
 }
 .search-main-module {
    width: 352px;
    height: 35px;
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
    height: 340rpx;
}
swiper-item image {
    width: 40px;
    height: 40px;
    margin-left: -5px;    
}
.swiper-container{
  position: relative;
}
.swiper-container .swiper{
  height: 340rpx;
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
  top: 155px;  
  display: flex;
  justify-content: center;
}  
/*未选中时的小圆点样式 */
.dot{  
  width: 12rpx;  
  height: 12rpx;   
  border-radius: 50%;
  margin-right: 26rpx;
  background-color: #ccc;
}  
/*选中以后的小圆点样式  */
.active{  
  width: 12rpx;   
  height: 12rpx;
  background-color: #666;
} 
.pingpai-contain {
  width: 365px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  .pingpai-tab {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;    
    image {
      width: 176px;
      height: 135px;
    }
  }
}
</style>
