<template>
  <div class="pic-main">
    <div class="canvasStyle">
      <canvas canvas-id="myCanvas" @touchstart="start" @touchmove="move" />
      <div class="Canvas_Text">
        <image v-bind:src="imageUrl"></image>
      </div>     
    </div>
    <div class="chooseImage">
      <div class="Btn BtnImg_select" @click="chooseImageFun">
       <i-button type="success" size="large">选择图片</i-button>
      </div>
      <div class="Input_text">
         <input class="inp-comm" v-model="sytext" placeholder="请输入装逼内容" @change="InputFuns" /> 
      </div>
      <div v-if="showst" class="Btn generateBtn" @click="Okgenerate">
        生成，并保存1
        <div>(当你点击生成的那一刻，恭喜你装逼生涯就此开始了)</div>
      </div>
      <div v-if="!showst" class="Btn generateBtn grayBtn">
        生成，并保存2
        <div>(当你点击生成的那一刻，恭喜你装逼生涯就此开始了)</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      text_x: 20, // x轴
      text_y: 20, // y轴
      imageUrl: '', // 生成的图片路径
      showst: false, // 是否完成图片和文字的填入
      sytext: '', // 文本
      app: {},
      ctx: {}

    }
  },
  mounted () {
    // this.app = this.getApp()
    console.log(this)
    this.ctx = wx.createCanvasContext('myCanvas')
  },
  methods: {
    chooseImageFun () { // 选择图片
      var self = this
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          console.log(res)
          self.imageUrl = res.tempFilePaths[0]
          self.ctx.drawImage(res.tempFilePaths[0], 6, 0, 189, 310)
          self.ctx.draw()
        }
      })
    },
    InputFuns (e) { // 文字
      this.ctx.setFontSize(14)
      this.ctx.fillText(this.sytext, this.text_x, this.text_y)
      this.ctx.draw(true)
      this.showst = true
    },
    start (e) { // 手指开始接触移动
      console.log(e)
      this.text_x = e.touches[0].x
      this.text_y = e.touches[0].y
      this.ctx.clearRect(0, 0, 200, 310)
      this.ctx.draw()
      this.ctx.drawImage(this.imageUrl, 6, 0, 189, 310) // 重新画上
      this.ctx.setFontSize(14) // 重新画上字体大小
      this.ctx.fillText(this.sytext, this.text_x, this.text_y) // 重新画上
      this.ctx.draw(true) // 重新画上
    },
    move (e) { // 手指在移动
      console.log(e)
      this.text_x = e.touches[0].x
      this.text_y = e.touches[0].y
      this.ctx.clearRect(0, 0, 200, 310) // 清除画布上的内容
      this.ctx.draw()
      this.ctx.drawImage(this.imageUrl, 6, 0, 189, 310) // 重新画上
      this.ctx.setFontSize(14) // 重新画上字体大小
      this.ctx.fillText(this.sytext, this.text_x, this.text_y) // 重新画上
      this.ctx.draw(true)// 重新画上
    },
    Okgenerate () { // 生成图片方法
      var _this = this
      _this.showst = false
      wx.canvasToTempFilePath({ // 生成图片
        x: 0,
        y: 0,
        width: 200,
        height: 310,
        destWidth: 189,
        destHeight: 310,
        quality: 1,
        canvasId: 'myCanvas',
        success: function (res) {
          wx.saveImageToPhotosAlbum({ // 保存生成的图片到手机相册里
            filePath: res.tempFilePath,
            success (res) {
              wx.showToast({
                title: '已保存到相册'
              })
              _this.showst = true
            }
          })
        }
      })
    }
  }
}
</script>
<style scoped>
  .canvasStyle{width:202px;height:312px;border:1rpx solid #000;margin:20rpx auto;position:relative;}
  .Canvas_Text{width:200px;height:310px;position:absolute;top:1px;left:1px;z-index:1;}
  .Canvas_Text image{width:100%;height:100%;}
  .canvasStyle canvas{width:100%;height:100%;margin:1px 0 0 1px; background:none;position:relative;z-index:10;}
  .chooseImage{width:90%;padding:30rpx 5% 0 5%;}  
  .BtnImg_select:active{color:#f1f1f1;background-color:#d95649;}
  .Input_text{border:1rpx solid #e6e6e6;border-radius:6rpx;font-size:30rpx;height:80rpx;margin:0 0 20rpx 0;}
  .Input_text input{width:90%;height:100%;padding:0 5% 0 5%;}
  .generateBtn{padding:10rpx 0 10rpx 0;font-size:28rpx;}
  .panel-comm {
    width: 500px;
    height: 200px;
  }
  .inp-comm {
    width: 500px;
    height: 200px;
  }
  .grayBtn {
    width: 100%;
    height: 60px;
    background-color: grey;
    text-align: center;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
  }
</style>


