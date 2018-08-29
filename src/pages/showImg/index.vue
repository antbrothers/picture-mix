<template>
  <div>   
    <!-- 画布大小按需定制 这里我按照背景图的尺寸定的  -->
    <canvas canvas-id="shareImg" style="width:545px;height:771px"></canvas>    
    <!-- 预览区域  -->
    <view v-show='hidden' class='preview'>
      <image v-bind:src='prurl' mode='widthFix'></image>
      <button type='primary' size='mini' @click='saveImage'>保存分享图</button>
    </view>
    <button class='share' type='primary' @click='doneImg'>生成分享图</button>
  </div>
</template>
<style scoped>
canvas{
  position: fixed;
  top: 0;
  left: 400px;
}
.share{
  position: absolute;
  bottom: 100rpx;
  width: 70%;
  left: 15%;
  height: 100rpx;
  line-height: 100rpx;
}
.preview {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.9);
  position: absolute;
  z-index: 2;
}
.preview image{
  width: 70%;
  position: absolute;
  top: 10%;
  left: 15%;
  z-index: 3;
  border: 1px dashed #fff;
}
.preview button{
  width: 40%;
  position: absolute;
  bottom: 150rpx;
  left: 30%;
  
}
</style>
<script>
export default {
  data () {
    return {
      hidden: false,
      prurl: ''
    }
  },
  mounted () {
    this.getImgs()
  },
  methods: {
    getImgs () {
      /* promise可以忽略 是用来改善异步回调执行顺序 与本功能没有大的关系 */
      let promise1 = new Promise(function (resolve, reject) {
        /* 获得要在画布上绘制的图片 */
        wx.getImageInfo({
          src: '/static/images/qrcode.jpg',
          success: function (res) {
            resolve(res)
          },
          fail: function (err) {
            console.log('错误')
            console.log(err)
          }
        })
      })
      let promise2 = new Promise(function (resolve, reject) {
        wx.getImageInfo({
          src: '/static/images/qrbg.png',
          success: function (res) {
            resolve(res)
          },
          fail: function (err) {
            console.log('错误')
            console.log(err)
          }
        })
      })
      /* 图片获取成功才执行后续代码 */
      Promise.all(
        [promise1, promise2]
      ).then(res => {
        console.log(5)
        console.log(res)
        const ctx = wx.createCanvasContext('shareImg')
        /* 绘制图像到画布  图片的位置你自己计算好就行 参数的含义看文档 */
        /* ps: 网络图片的话 就不用加/路径了 反正我这里路径得加 */
        ctx.drawImage('/' + res[0].path, 158, 190, 210, 210)
        ctx.drawImage('/' + res[1].path, 0, 0, 545, 771)

        /* 绘制文字 位置自己计算 参数自己看文档 */
        ctx.setTextAlign('center') //  位置
        ctx.setFillStyle('#ffffff') //  颜色
        ctx.setFontSize(22) //  字号
        ctx.fillText('分享文字描分享文字描述述', 545 / 2, 130) //  内容  不会自己换行 需手动换行
        ctx.fillText('分享文字描述', 545 / 2, 160) //  内容

        /* 绘制 */
        ctx.stroke()
        ctx.draw()
        console.log(6)
      })
    },
    // 画布生成图片
    doneImg () {
      var that = this
      wx.showLoading({
        title: '努力生成中...'
      })
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: 545,
        height: 771,
        destWidth: 545,
        destHeight: 771,
        canvasId: 'shareImg',
        success: function (res) {
          console.log(res.tempFilePath)
          /* 这里 就可以显示之前写的 预览区域了 把生成的图片url给image的src */
          that.prurl = res.tempFilePath
          wx.hideLoading()
          that.hidden = true
        },
        fail: function (res) {
          console.log(8)
          wx.hideLoading()
          console.log(res)
        }
      }, that)
    },
    // 保存图片
    saveImage () {
      var that = this
      wx.saveImageToPhotosAlbum({
        filePath: that.prurl,
        success (res) {
          wx.showModal({
            content: '图片已保存到相册，赶紧晒一下吧~',
            showCancel: false,
            confirmText: '好的',
            confirmColor: '#333',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
                that.hidden = true
              }
            }
          })
        }
      })
    }
  },
  async onPullDownRefresh () {
    Object.assign(this.$data, this.$options.data())
    wx.stopPullDownRefresh()
  }
}
</script>


