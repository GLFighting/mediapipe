const { defineConfig } = require('@vue/cli-service')
var path = require("path")
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  //vue-cli配置别名
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("./src")) //给src的绝对路径起一个别名叫@.set("api", resolve("./src/api")) //aip文件夹绝对路径地址起一个别名叫api
      // .set("components", resolve("./src/components"))
      // .set("style", resolve("./src/style"))
  }
})
