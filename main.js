import App from './App'
// #ifndef VUE3
import Vue from 'vue'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})

// 如此配置即可

app.$mount()
// #endif

// #ifdef VUE3
import uviewPlus from '@/uni_modules/uview-plus'
import 'element-plus/dist/index.css'
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)
  return {
    app
  }
}

// #endif
