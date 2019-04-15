module.exports = {
  publicPath:"./",
  assetsDir: "./",
  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.liulongbin.top:3005/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      },
    }
  }
}