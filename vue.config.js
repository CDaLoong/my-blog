'use strict'
const port = 9527 // dev port
module.exports = {
  devServer: {
    port: port,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://localhost:9527',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    overlay: {
      warnings: false,
      errors: true
    }
  }
}
