<template>
  <div class="question-container">
    <div class="t-banner">
      <img src="/static/images/t-banner.jpg" alt="" class="t-img" />
    </div>
    <div class="first-question" v-show="first">
      <div class="content-bg">      
        <radio-group class="radio-group" @change="radioChange">
          <div class="radio label-comm" v-for="(item, index) in items" v-bind:key="index">
            <radio :value="item.name" :checked="item.checked" />{{item.value}}
          </div>      
        </radio-group>
      </div>
      <div class="bt-container">
        <i-button i-class="btn-cont" type="success" shape="square" size="large" @click="btnClick">下一题</i-button>
      </div>
    </div>
    <div class="first-question" v-show="!first">
      <div class="content-bg">      
        <radio-group class="radio-group" @change="radioChange">
          <div class="radio label-comm" v-for="(item, index) in items" v-bind:key="index">
            <radio :value="item.name" />{{item.value}}
          </div>      
        </radio-group>
      </div>
      <div class="bt-container next-container">
        <div class="up-question next-comm">
          <i-button class="btn-cont" type="success" shape="square" size="large" @click="upClick">上一题</i-button>
        </div>
        <div class="submit-question next-comm">
           <i-button class="btn-cont" type="success" shape="square" size="large" @click="submitClick">提交</i-button>
        </div>       
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {name: 'USA', value: '美国'},
        {name: 'CHN', value: '中国', checked: 'true'},
        {name: 'BRA', value: '巴西'},
        {name: 'JPN', value: '日本'},
        {name: 'ENG', value: '英国'},
        {name: 'TUR', value: '法国'}
      ],
      firstProblem: '',
      secondProblem: '',
      first: true
    }
  },
  methods: {
    radioChange (e) {
      console.log('radio发生change事件，携带value值为：', e.mp.detail.value)
      this.firstPeoblem = e.mp.detail.value
      console.log(this.items)
    },
    btnClick () {
      this.first = false
    },
    upClick () {
      this.first = true
    },
    submitClick () {
      this.jump('../babyInfo/main')
    },
    jump (url) {
      wx.navigateTo({ url })
    }
  }
}
</script>
<style lang="less" scoped>
.question-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #162a43;
  .t-img{
    width: 100%;
  }
  .content-bg {
    width: 90%;
    margin: 0px auto;
    background: white;
    border-radius: 5px;
    padding: .3rem 0px;
    padding: 5px;
    .radio-group {
      border-bottom: 0;
    }
    .radio {
      display: block;
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


