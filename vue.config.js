module.exports = {
  publicPath:"./",
  assetsDir: "./",
  devServer: {
    port: 8081,
    proxyTable: {
      '/api': {
        target: 'http://www.liulongbin.top:3005',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      },
    }
  }
}