import store from '../store'
const microApps: any = [
  {
    name: "vue3Vite",
    entry: "//localhost:9080/vue3Vite",
    activeRule: "/vue3Vite",
  }
];

const apps: any = microApps.map((item: any) => {
  return {
    ...item,
    container: "#cnbi-viewport", // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: store, // 下发GlobalState方法
    },
  };
});

export default apps;
