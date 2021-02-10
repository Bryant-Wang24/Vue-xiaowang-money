const path = require('path')
module.exports = {
  lintOnSave: false,
  configureWebpack: {},
  devServer: { // 环境配置
    host: '0.0.0.0',
    public: '192.168.1.101:8081',
    port: '8081',
    https: false,
    disableHostCheck: true,
    open: false // 配置自动启动浏览器
  },
  chainWebpack: config => {
    const dir = path.resolve(__dirname, 'src/assets/icons')

    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end() // 包含 icons 目录
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end()
      .use('svgo-loader').loader('svgo-loader')
      .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]})).end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir) // 其他 svg loader 排除 icons 目录
  }
}
