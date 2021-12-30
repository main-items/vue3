
const serveFiles: any = require.context('./theme/', true, /\.theme.ts$/)
const Interface: any = {}
serveFiles.keys().forEach((key: string) => {
  const urlArr = key.split('/')
  const apiKey= `${urlArr[urlArr.length-1].split('.')[0]}Theme`
  Interface[apiKey] = serveFiles(key).default
})

export default Interface
