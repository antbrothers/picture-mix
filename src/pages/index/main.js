import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    'usingComponents': {
      'vant-button': '../../../node_modules/vant-weapp/dist/button/index'
    }
  }
}
