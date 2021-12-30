import store from './store'
const microApps: any = [
  {
    name: "vue3",
    entry: "//localhost:7301/vue3",
    activeRule: "/vue3",
  }
]

const apps = microApps.map((item: any) => {
  return {
    ...item,
    container: "#cnbi-viewport", // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalStore: store, // 下发getGlobalState方法
    },
  }
})

export default apps
