import { createApp } from 'vue'
import './registerServiceWorker'

import { qiankunFn, naiveUi } from './utils'
import Api from './api'
<%_ if (isVuex) { _%>
  import store from './store'
<%_ } _%>
import router from './router'
import App from './App.vue'

import './assets/stylus/Init.styl'

const instance: any = createApp(App)
instance.use(Api)
instance.use(naiveUi)
instance.use(router)
<%_ if (isVuex) { _%>
  instance.use(store)
<%_ } _%>
instance.mount('#<%= packageName %>')


qiankunFn(instance)
