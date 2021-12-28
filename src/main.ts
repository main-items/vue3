import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { registerMicroApps, start } from 'qiankun'
import App from './App.vue'
import './registerServiceWorker'
import microApps from './micro-app'
import API from './api'
import route from './router'
import store from './store'

const { routes, beforeEach, afterEach } = route



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to: any, from: any, next: any) => {
  beforeEach(to, from, next)
})

router.afterEach(() => {
  afterEach()
})

createApp(App)
  .use(API)
  .use(router)
  .use(store)
  .mount('#app')

function loader (loading: any) {
  console.log(loading)
}
const apps = microApps.map((item: any) => {
  return {
    ...item,
    loader
  };
})
registerMicroApps(apps, {
  beforeLoad: (app: any): any => {
    console.log('before load app.name====>>>>>', app.name)
  },
  beforeMount: [
    (app: any): any => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    }
  ],
  afterMount: [
    (app: any): any => {
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
    }
  ],
  afterUnmount: [
    (app: any): any => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    }
  ]
})
start()
