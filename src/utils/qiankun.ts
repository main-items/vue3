import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import { microApps } from '../config'



export const qiankunFn = (instance: any) => {
  function loader(loading: any) {
    if (instance.isLoading) {
      instance.isLoading = loading
    }
  }
  // 给子应用配置加上loader方法
  const apps = microApps.map((item: any) => {
    return {
      ...item,
      loader
    }
  })
  registerMicroApps(apps, {
    beforeLoad: (app: any): any => {
      console.log("before load app.name====>>>>>", app.name);
    },
    beforeMount: [
      (app: any): any => {
        console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
      }
    ],
    afterMount: [
      (app: any): any => {
        console.log("[LifeCycle] after mount %c%s", "color: green;", app.name);
      }
    ],
    afterUnmount: [
      (app: any): any => {
        console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name);
      }
    ]
  })
  // setDefaultMountApp("/bigdata-vite");
  start({ prefetch: false, singular: true })
}

export default qiankunFn
