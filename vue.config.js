module.exports = {
  publicPath:"./",
  assetsDir: "./",
  devServer: {
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