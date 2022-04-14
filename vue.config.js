'use strict'
const port = 9527 // dev port
module.exports = {
  devServer: {
    port: port,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://192.168.0.1:7001',
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    },
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configureWebpack: {
    externals: {
    }
  },
  chainWebpack: config => {
    // 设置全局样式变量
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          resources: ['./src/style/variables.scss', './src/style/mixin.scss'],
        })
        .end()
    })
  },
}
