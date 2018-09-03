<template>
  <div class="upload-container">
    <div class="t-banner">
      <img src="/static/images/t-banner.jpg" alt="" class="t-img" />
    </div>
    <img v-bind:src="imgUrl" />
    <div class="bt-container">
      <i-button i-class="btn-cont" type="success" shape="square" size="large" @click="chooseImageFun">上传</i-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgUrl: ''
    }
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
          self.imgUrl = res.tempFilePaths[0]
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.upload-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #162a43;
  .t-img{
    width: 100%;
  }  
  .bt-container {
    width: 365px;
    margin: 0 auto;
    margin-top: 20px;
    &.next-container {
      display: flex;
      align-items: center;
      justify-content: center;
      .next-comm {
        flex: 1;
      }
      .btn-cont {        
      }
    }
  }
}
</style>
