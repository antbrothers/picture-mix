<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>    
     <i-button type="primary" size="large" @click="jump('../picture/main')">行内按钮</i-button>
     <i-button type="primary" size="large" @click="jump('../showImg/main')">生成分享图片</i-button>
     <i-button type="primary" size="large" @click="jump('../home/main')">主页</i-button>    
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
    <button open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="onGotUserInfo">获取用户信息</button>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    jump (url) {
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              console.log(res)
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    handleClick () {
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    onGotUserInfo (e) {
      this.getUserInfo()
    },
    anth () {
      this.getUserInfo()
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  },
  mounted () {
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
