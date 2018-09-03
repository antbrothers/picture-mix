<template>
  <div class="baby-container">
    <div class="t-banner">
      <img src="/static/images/t-banner.jpg" alt="" class="t-img" />
    </div>
    <div class="info-main">
      <div>
        <div class="info-title">
        1.宝宝年龄段
        </div>
        <div class="select-main">
          <radio-group class="radio-group">
            <div class="radio label-comm">
              <radio /> 0-1岁
            </div>
            <div class="radio label-comm">
              <radio /> 1-2岁
            </div>
            <div class="radio label-comm">
              <radio /> 2-3岁
            </div> 
          </radio-group>
        </div>
      </div>
      <div>
        <div class="info-title">
        2.宝宝年龄段
        </div>
        <div class="select-main">
          <radio-group class="radio-group">
            <div class="radio label-comm">
              <radio /> 0-1岁
            </div>
            <div class="radio label-comm">
              <radio /> 1-2岁
            </div>
            <div class="radio label-comm">
              <radio /> 2-3岁
            </div> 
          </radio-group>
        </div>
      </div>
      <div>
        <div class="info-title">
        3.宝宝年龄段
        </div>
        <div class="select-main">
          <radio-group class="radio-group">
            <div class="radio label-comm">
              <radio /> 0-1岁
            </div>
            <div class="radio label-comm">
              <radio /> 1-2岁
            </div>
            <div class="radio label-comm">
              <radio /> 2-3岁
            </div> 
          </radio-group>
        </div>
      </div>
    </div>
    <div class="bt-container">
      <i-button i-class="btn-cont" type="success" shape="square" size="large" @click="btnClick">提交</i-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    jump (url) {
      wx.navigateTo({ url })
    },
    btnClick () {
      this.jump('../upload/main')
      console.log('提交')
    }
  }
}
</script>

<style lang="less" scoped>
.baby-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #162a43;
  .t-img{
    width: 100%;
  }
  .info-main {
    width: 90%;
    margin: 0px auto;
    background: white;
    border-radius: 5px;
    padding: .3rem 0px;
    padding: 5px;
    .radio-group {
      border-bottom: 0;
      display: flex;
    }
    .radio {     
      flex: 1;
      border-bottom: 1px solid #ddd;
      padding: 5px;
      &.label-comm {
        height: 40px;
        display: flex;
        align-items: center;
      }
    }
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

